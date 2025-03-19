import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import CodeViewer from '../../components/common/CodeViewer';

const PageContainer = styled.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
`;

const VisualizationContainer = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const HashTableContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const BucketRow = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

const IndexCell = styled.div`
  width: 80px;
  padding: 0.75rem;
  background: var(--primary-light);
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BucketCell = styled.div`
  flex: 1;
  padding: 0.75rem;
  background: ${props => props.highlight ? '#e6f7ff' : 'white'};
  transition: background-color 0.3s ease;
  overflow-x: auto;
`;

const KeyValuePair = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
  padding: 0.5rem;
  background: ${props => props.highlight ? 'var(--primary)' : '#f0f0f0'};
  color: ${props => props.highlight ? 'white' : 'var(--text-primary)'};
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const KeyText = styled.span`
  font-weight: 500;
  margin-right: 0.25rem;
`;

const ValueText = styled.span`
  font-weight: 400;
  color: ${props => props.highlight ? 'white' : 'var(--text-secondary)'};
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  align-items: center;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 150px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const MessageContainer = styled(motion.div)`
  margin: 1rem 0;
  padding: 1rem;
  background: ${props => props.type === 'error' ? '#ffebee' : '#e8f5e9'};
  color: ${props => props.type === 'error' ? 'var(--error)' : '#2e7d32'};
  border-radius: var(--border-radius);
`;

const Instructions = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

const TabButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${props => props.active ? 'var(--primary)' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary)' : '#e0e0e0'};
  }
`;

const HashTablesPage = () => {
  const [buckets, setBuckets] = useState(Array(10).fill().map(() => []));
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [message, setMessage] = useState(null);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [highlightPair, setHighlightPair] = useState(null);
  const [activeTab, setActiveTab] = useState('visualization');

  const hashFunction = (key) => {
    // Simple hash function for demo purposes
    if (typeof key === 'number') {
      return key % buckets.length;
    }
    
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * (i + 1)) % buckets.length;
    }
    return hash;
  };
  
  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };
  
  const handleInsert = async () => {
    if (!key) {
      showMessage('Please enter a key', 'error');
      return;
    }
    
    const index = hashFunction(key);
    
    // Highlight the bucket
    setHighlightIndex(index);
    
    // Check if the key already exists
    const existingPairIndex = buckets[index].findIndex(pair => pair.key === key);
    
    if (existingPairIndex !== -1) {
      // Update the value if the key exists
      const newBuckets = [...buckets];
      newBuckets[index] = [...newBuckets[index]];
      newBuckets[index][existingPairIndex] = { key, value };
      
      // Highlight the updated pair
      setHighlightPair({ index, key });
      
      setBuckets(newBuckets);
      showMessage(`Updated value for key '${key}'`);
    } else {
      // Insert new key-value pair
      const newBuckets = [...buckets];
      newBuckets[index] = [...newBuckets[index], { key, value }];
      
      // Highlight the new pair
      setHighlightPair({ index, key });
      
      setBuckets(newBuckets);
      showMessage(`Inserted key '${key}' with value '${value}'`);
    }
    
    // Clear the form
    setKey('');
    setValue('');
    
    // Clear highlights after delay
    setTimeout(() => {
      setHighlightIndex(-1);
      setHighlightPair(null);
    }, 2000);
  };
  
  const handleSearch = async () => {
    if (!searchKey) {
      showMessage('Please enter a key to search', 'error');
      return;
    }
    
    const index = hashFunction(searchKey);
    
    // Highlight the bucket
    setHighlightIndex(index);
    
    // Find the key
    const pair = buckets[index].find(pair => pair.key === searchKey);
    
    if (pair) {
      // Highlight the found pair
      setHighlightPair({ index, key: searchKey });
      showMessage(`Found key '${searchKey}' with value '${pair.value}'`);
    } else {
      showMessage(`Key '${searchKey}' not found`, 'error');
    }
    
    // Clear search input
    setSearchKey('');
    
    // Clear highlights after delay
    setTimeout(() => {
      setHighlightIndex(-1);
      setHighlightPair(null);
    }, 2000);
  };
  
  const handleDelete = async () => {
    if (!searchKey) {
      showMessage('Please enter a key to delete', 'error');
      return;
    }
    
    const index = hashFunction(searchKey);
    
    // Highlight the bucket
    setHighlightIndex(index);
    
    // Find the key
    const pairIndex = buckets[index].findIndex(pair => pair.key === searchKey);
    
    if (pairIndex !== -1) {
      // Delete the pair
      const newBuckets = [...buckets];
      newBuckets[index] = newBuckets[index].filter((_, i) => i !== pairIndex);
      setBuckets(newBuckets);
      
      showMessage(`Deleted key '${searchKey}'`);
    } else {
      showMessage(`Key '${searchKey}' not found`, 'error');
    }
    
    // Clear search input
    setSearchKey('');
    
    // Clear highlights after delay
    setTimeout(() => {
      setHighlightIndex(-1);
    }, 2000);
  };
  
  const handleClear = () => {
    setBuckets(Array(10).fill().map(() => []));
    setHighlightIndex(-1);
    setHighlightPair(null);
    showMessage('Hash table cleared');
  };
  
  // Initialize hash table with some examples
  useEffect(() => {
    const initialData = [
      { key: 'apple', value: 'red fruit' },
      { key: 'banana', value: 'yellow fruit' },
      { key: 'cat', value: 'small pet' },
      { key: 'dog', value: 'loyal pet' },
      { key: 'elephant', value: 'large animal' }
    ];
    
    const newBuckets = Array(10).fill().map(() => []);
    
    initialData.forEach(({ key, value }) => {
      const index = hashFunction(key);
      newBuckets[index].push({ key, value });
    });
    
    setBuckets(newBuckets);
  }, []);

  const hashTableCode = `public class HashTable<K, V> {
    private static class Entry<K, V> {
        final K key;
        V value;
        Entry<K, V> next;
        
        Entry(K key, V value) {
            this.key = key;
            this.value = value;
            this.next = null;
        }
    }
    
    private Entry<K, V>[] buckets;
    private int size;
    private static final int DEFAULT_CAPACITY = 16;
    private static final double LOAD_FACTOR = 0.75;
    
    @SuppressWarnings("unchecked")
    public HashTable() {
        this.buckets = (Entry<K, V>[]) new Entry[DEFAULT_CAPACITY];
        this.size = 0;
    }
    
    private int hash(K key) {
        return key == null ? 0 : Math.abs(key.hashCode()) % buckets.length;
    }
    
    public void put(K key, V value) {
        if (key == null) {
            throw new IllegalArgumentException("Key cannot be null");
        }
        
        // Check if we need to resize
        if ((double) size / buckets.length >= LOAD_FACTOR) {
            resize();
        }
        
        int index = hash(key);
        Entry<K, V> entry = buckets[index];
        
        // Check if key already exists
        while (entry != null) {
            if (entry.key.equals(key)) {
                entry.value = value; // Update existing value
                return;
            }
            entry = entry.next;
        }
        
        // Add new entry at the beginning of the linked list
        Entry<K, V> newEntry = new Entry<>(key, value);
        newEntry.next = buckets[index];
        buckets[index] = newEntry;
        size++;
    }
    
    public V get(K key) {
        if (key == null) {
            throw new IllegalArgumentException("Key cannot be null");
        }
        
        int index = hash(key);
        Entry<K, V> entry = buckets[index];
        
        while (entry != null) {
            if (entry.key.equals(key)) {
                return entry.value;
            }
            entry = entry.next;
        }
        
        return null; // Key not found
    }
    
    public boolean containsKey(K key) {
        if (key == null) {
            throw new IllegalArgumentException("Key cannot be null");
        }
        
        int index = hash(key);
        Entry<K, V> entry = buckets[index];
        
        while (entry != null) {
            if (entry.key.equals(key)) {
                return true;
            }
            entry = entry.next;
        }
        
        return false;
    }
    
    public V remove(K key) {
        if (key == null) {
            throw new IllegalArgumentException("Key cannot be null");
        }
        
        int index = hash(key);
        Entry<K, V> entry = buckets[index];
        Entry<K, V> prev = null;
        
        while (entry != null) {
            if (entry.key.equals(key)) {
                if (prev == null) {
                    buckets[index] = entry.next;
                } else {
                    prev.next = entry.next;
                }
                size--;
                return entry.value;
            }
            prev = entry;
            entry = entry.next;
        }
        
        return null; // Key not found
    }
    
    public int size() {
        return size;
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    @SuppressWarnings("unchecked")
    private void resize() {
        int newCapacity = buckets.length * 2;
        Entry<K, V>[] oldBuckets = buckets;
        buckets = (Entry<K, V>[]) new Entry[newCapacity];
        size = 0;
        
        // Rehash all entries
        for (Entry<K, V> entry : oldBuckets) {
            while (entry != null) {
                put(entry.key, entry.value);
                entry = entry.next;
            }
        }
    }
}`;

  return (
    <PageContainer>
      <Header>
        <Title>Hash Tables</Title>
        <Description>
          Hash tables are data structures that implement an associative array abstract data type, a structure that can map keys to values using a hash function to compute an index into an array of buckets or slots.
        </Description>
      </Header>
      
      <VisualizationContainer>
        <TabContainer>
          <TabButton 
            active={activeTab === 'visualization'} 
            onClick={() => setActiveTab('visualization')}
          >
            Visualization
          </TabButton>
          <TabButton 
            active={activeTab === 'code'} 
            onClick={() => setActiveTab('code')}
          >
            Implementation
          </TabButton>
        </TabContainer>

        {activeTab === 'visualization' ? (
          <>
            <Instructions>
              <strong>Hash Table Properties:</strong>
              <ul>
                <li>Hash tables provide average O(1) time complexity for search, insert, and delete operations</li>
                <li>Hash collisions are resolved using chaining (linked lists at each bucket)</li>
                <li>The hash function determines which bucket (index) a key is mapped to</li>
                <li>For this example, we're using a simple hash function: sum of character codes * position % table size</li>
              </ul>
            </Instructions>
            
            <ControlsContainer>
              <InputGroup>
                <Label>Key</Label>
                <Input 
                  type="text" 
                  value={key} 
                  onChange={e => setKey(e.target.value)} 
                  placeholder="Enter key" 
                />
              </InputGroup>
              
              <InputGroup>
                <Label>Value</Label>
                <Input 
                  type="text" 
                  value={value} 
                  onChange={e => setValue(e.target.value)} 
                  placeholder="Enter value" 
                />
              </InputGroup>
              
              <Button onClick={handleInsert}>Insert / Update</Button>
            </ControlsContainer>
            
            <ControlsContainer>
              <InputGroup>
                <Label>Key</Label>
                <Input 
                  type="text" 
                  value={searchKey} 
                  onChange={e => setSearchKey(e.target.value)} 
                  placeholder="Enter key" 
                />
              </InputGroup>
              
              <Button onClick={handleSearch}>Search</Button>
              <Button onClick={handleDelete}>Delete</Button>
              <Button onClick={handleClear}>Clear Table</Button>
            </ControlsContainer>
            
            <AnimatePresence>
              {message && (
                <MessageContainer 
                  type={message.type}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {message.text}
                </MessageContainer>
              )}
            </AnimatePresence>
            
            <HashTableContainer>
              {buckets.map((bucket, index) => (
                <BucketRow key={index}>
                  <IndexCell>{index}</IndexCell>
                  <BucketCell highlight={highlightIndex === index}>
                    {bucket.map(pair => (
                      <KeyValuePair 
                        key={pair.key}
                        highlight={highlightPair && highlightPair.index === index && highlightPair.key === pair.key}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        layout
                      >
                        <KeyText>{pair.key}:</KeyText>
                        <ValueText highlight={highlightPair && highlightPair.index === index && highlightPair.key === pair.key}>{pair.value}</ValueText>
                      </KeyValuePair>
                    ))}
                  </BucketCell>
                </BucketRow>
              ))}
            </HashTableContainer>
          </>
        ) : (
          <CodeViewer
            title="Hash Table Implementation"
            code={hashTableCode}
          />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default HashTablesPage; 