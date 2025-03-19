import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HashTableContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TableRow = styled.div`
  display: flex;
  width: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const IndexCell = styled.div`
  width: 60px;
  height: 60px;
  background: #f0f0f0;
  color: var(--text-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border-right: 1px solid #e0e0e0;
`;

const BucketCell = styled.div`
  flex-grow: 1;
  min-height: 60px;
  background: ${props => props.highlight ? '#e8f5e9' : 'white'};
  border: 1px solid #e0e0e0;
  border-left: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  transition: background-color 0.3s ease;
`;

const KeyValueItem = styled(motion.div)`
  background: ${props => props.highlight ? 'var(--primary)' : 'var(--primary-light)'};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const KeyValuePair = styled.span`
  display: flex;
  align-items: center;
`;

const KeySpan = styled.span`
  margin-right: 0.5rem;
  font-weight: 600;
`;

const ValueSpan = styled.span`
  font-weight: 400;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const InputLabel = styled.label`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 120px;
`;

const OperationButton = styled.button`
  background: ${props => props.variant === 'secondary' ? 'var(--secondary)' : 'var(--primary)'};
  
  &:hover {
    background: ${props => props.variant === 'secondary' ? '#02c4b0' : 'var(--primary-light)'};
  }
`;

const MessageContainer = styled(motion.div)`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  background: ${props => props.type === 'error' ? '#ffebee' : '#e8f5e9'};
  color: ${props => props.type === 'error' ? 'var(--error)' : '#2e7d32'};
  border-radius: var(--border-radius);
  text-align: center;
`;

const OperationDescription = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
  width: 100%;
`;

const OperationTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`;

const HashSteps = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: var(--border-radius);
  width: 100%;
  text-align: center;
`;

const HashStepItem = styled.div`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`;

const OptionButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  background: ${props => props.active ? 'var(--primary)' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary)' : '#e0e0e0'};
  }
`;

const HashTablesPage = () => {
  const [hashTable, setHashTable] = useState(Array(10).fill(null).map(() => []));
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState(null);
  const [operation, setOperation] = useState(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [hashSteps, setHashSteps] = useState(null);
  const [collisionStrategy, setCollisionStrategy] = useState('chaining'); // chaining, linear, quadratic
  const tableSize = 10;

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const hashFunction = (key) => {
    if (typeof key === 'number') {
      return key % tableSize;
    }
    
    // Simple string hash function
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * (i + 1)) % tableSize;
    }
    return hash;
  };

  const resolveCollision = (index, iterations = 0) => {
    if (collisionStrategy === 'chaining') {
      // With chaining, we just return the original index
      return index;
    } else if (collisionStrategy === 'linear') {
      // Linear probing: try the next slot
      return (index + iterations) % tableSize;
    } else if (collisionStrategy === 'quadratic') {
      // Quadratic probing: try slots at quadratic distances
      return (index + iterations * iterations) % tableSize;
    }
    return index;
  };

  const findItemIndex = (bucketIndex, searchKey) => {
    if (collisionStrategy === 'chaining') {
      return hashTable[bucketIndex].findIndex(item => item.key === searchKey);
    } else {
      // For open addressing, we need to check if the key matches
      const bucket = hashTable[bucketIndex];
      return bucket.length > 0 && bucket[0].key === searchKey ? 0 : -1;
    }
  };

  const handleInsert = async () => {
    if (key === '' || value === '') {
      showMessage('Please enter both key and value', 'error');
      return;
    }
    
    setOperation('insert');
    
    const keyValue = isNaN(key) ? key : parseInt(key);
    const valueToStore = isNaN(value) ? value : parseInt(value);
    
    // Calculate the hash and show the steps
    const hash = hashFunction(keyValue);
    const steps = [
      `Hash Function: hash("${keyValue}") = ${hash}`,
    ];
    setHashSteps(steps);
    setHighlightedIndex(hash);
    
    // Wait a moment to show the hash
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if we have a collision and need to resolve it
    let finalIndex = hash;
    let iterations = 0;
    let collisionOccurred = false;
    
    if (collisionStrategy !== 'chaining') {
      // For open addressing, we need to find an empty slot or a slot with the same key
      while (iterations < tableSize) {
        finalIndex = resolveCollision(hash, iterations);
        const bucket = hashTable[finalIndex];
        
        // If bucket is empty or has the same key, we can use it
        if (bucket.length === 0 || (bucket.length === 1 && bucket[0].key === keyValue)) {
          break;
        }
        
        collisionOccurred = true;
        iterations++;
        
        // Update the steps
        steps.push(`Collision detected! Trying index ${finalIndex}`);
        setHashSteps([...steps]);
        setHighlightedIndex(finalIndex);
        
        // Wait a moment to show the collision resolution
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      if (iterations === tableSize) {
        showMessage('Hash table is full, cannot insert more items with this strategy.', 'error');
        setHighlightedIndex(-1);
        return;
      }
    }
    
    // Check if the key already exists
    const existingItemIndex = findItemIndex(finalIndex, keyValue);
    
    const newTable = [...hashTable];
    
    if (existingItemIndex !== -1) {
      // Key exists, update the value
      if (collisionStrategy === 'chaining') {
        newTable[finalIndex][existingItemIndex] = { key: keyValue, value: valueToStore };
      } else {
        newTable[finalIndex] = [{ key: keyValue, value: valueToStore }];
      }
      steps.push(`Updated value for key "${keyValue}" at index ${finalIndex}`);
    } else {
      // Key doesn't exist, insert new entry
      if (collisionStrategy === 'chaining') {
        newTable[finalIndex].push({ key: keyValue, value: valueToStore });
      } else {
        newTable[finalIndex] = [{ key: keyValue, value: valueToStore }];
      }
      
      if (collisionOccurred) {
        steps.push(`Inserted new entry with key "${keyValue}" at index ${finalIndex} after resolving collision`);
      } else {
        steps.push(`Inserted new entry with key "${keyValue}" at index ${finalIndex}`);
      }
    }
    
    setHashTable(newTable);
    setHashSteps([...steps]);
    
    // Highlight the inserted/updated item
    setHighlightedItem({ index: finalIndex, key: keyValue });
    
    // Show success message
    if (existingItemIndex !== -1) {
      showMessage(`Updated value for key "${keyValue}"`);
    } else {
      showMessage(`Inserted key "${keyValue}" with value "${valueToStore}"`);
    }
    
    // Clear highlights after a moment
    setTimeout(() => {
      setHighlightedIndex(-1);
      setHighlightedItem(null);
      setHashSteps(null);
    }, 2000);
  };

  const handleDelete = async () => {
    if (key === '') {
      showMessage('Please enter a key to delete', 'error');
      return;
    }
    
    setOperation('delete');
    
    const keyToDelete = isNaN(key) ? key : parseInt(key);
    
    // Calculate the hash and show the steps
    const hash = hashFunction(keyToDelete);
    const steps = [
      `Hash Function: hash("${keyToDelete}") = ${hash}`,
    ];
    setHashSteps(steps);
    setHighlightedIndex(hash);
    
    // Wait a moment to show the hash
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For open addressing, we need to search for the key
    let found = false;
    let finalIndex = hash;
    let itemIndex = -1;
    
    if (collisionStrategy === 'chaining') {
      // For chaining, just look in the bucket
      itemIndex = findItemIndex(hash, keyToDelete);
      found = itemIndex !== -1;
    } else {
      // For open addressing, we need to search through the table
      let iterations = 0;
      
      while (iterations < tableSize) {
        finalIndex = resolveCollision(hash, iterations);
        const bucket = hashTable[finalIndex];
        
        if (bucket.length > 0 && bucket[0].key === keyToDelete) {
          found = true;
          itemIndex = 0;
          break;
        }
        
        // If we hit an empty bucket, the key doesn't exist
        if (bucket.length === 0) {
          break;
        }
        
        iterations++;
        
        // Update the steps
        steps.push(`Key not found at index ${finalIndex}, continuing search...`);
        setHashSteps([...steps]);
        setHighlightedIndex(finalIndex);
        
        // Wait a moment to show the search
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
    
    if (!found) {
      steps.push(`Key "${keyToDelete}" not found in the hash table`);
      setHashSteps([...steps]);
      showMessage(`Key "${keyToDelete}" not found in the hash table`, 'error');
      
      setTimeout(() => {
        setHighlightedIndex(-1);
        setHashSteps(null);
      }, 2000);
      
      return;
    }
    
    // Highlight the item to be deleted
    setHighlightedItem({ index: finalIndex, key: keyToDelete });
    steps.push(`Found key "${keyToDelete}" at index ${finalIndex}`);
    setHashSteps([...steps]);
    
    // Wait a moment to show the found item
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Delete the item
    const newTable = [...hashTable];
    
    if (collisionStrategy === 'chaining') {
      newTable[finalIndex] = newTable[finalIndex].filter((_, i) => i !== itemIndex);
    } else {
      newTable[finalIndex] = [];
    }
    
    setHashTable(newTable);
    steps.push(`Deleted key "${keyToDelete}" from index ${finalIndex}`);
    setHashSteps([...steps]);
    
    // Show success message
    showMessage(`Deleted key "${keyToDelete}" from the hash table`);
    
    // Clear highlights after a moment
    setTimeout(() => {
      setHighlightedIndex(-1);
      setHighlightedItem(null);
      setHashSteps(null);
    }, 2000);
  };

  const handleSearch = async () => {
    if (key === '') {
      showMessage('Please enter a key to search', 'error');
      return;
    }
    
    setOperation('search');
    
    const keyToSearch = isNaN(key) ? key : parseInt(key);
    
    // Calculate the hash and show the steps
    const hash = hashFunction(keyToSearch);
    const steps = [
      `Hash Function: hash("${keyToSearch}") = ${hash}`,
    ];
    setHashSteps(steps);
    setHighlightedIndex(hash);
    
    // Wait a moment to show the hash
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For open addressing, we need to search for the key
    let found = false;
    let finalIndex = hash;
    let itemIndex = -1;
    let foundValue = null;
    
    if (collisionStrategy === 'chaining') {
      // For chaining, just look in the bucket
      itemIndex = findItemIndex(hash, keyToSearch);
      found = itemIndex !== -1;
      if (found) {
        foundValue = hashTable[hash][itemIndex].value;
      }
    } else {
      // For open addressing, we need to search through the table
      let iterations = 0;
      
      while (iterations < tableSize) {
        finalIndex = resolveCollision(hash, iterations);
        const bucket = hashTable[finalIndex];
        
        if (bucket.length > 0 && bucket[0].key === keyToSearch) {
          found = true;
          itemIndex = 0;
          foundValue = bucket[0].value;
          break;
        }
        
        // If we hit an empty bucket, the key doesn't exist
        if (bucket.length === 0) {
          break;
        }
        
        iterations++;
        
        // Update the steps
        steps.push(`Key not found at index ${finalIndex}, continuing search...`);
        setHashSteps([...steps]);
        setHighlightedIndex(finalIndex);
        
        // Wait a moment to show the search
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
    
    if (!found) {
      steps.push(`Key "${keyToSearch}" not found in the hash table`);
      setHashSteps([...steps]);
      showMessage(`Key "${keyToSearch}" not found in the hash table`, 'error');
    } else {
      // Highlight the found item
      setHighlightedItem({ index: finalIndex, key: keyToSearch });
      steps.push(`Found key "${keyToSearch}" with value "${foundValue}" at index ${finalIndex}`);
      setHashSteps([...steps]);
      showMessage(`Found key "${keyToSearch}" with value "${foundValue}"`);
    }
    
    // Clear highlights after a moment
    setTimeout(() => {
      setHighlightedIndex(-1);
      setHighlightedItem(null);
      setHashSteps(null);
    }, 3000);
  };

  const handleClear = () => {
    setHashTable(Array(tableSize).fill(null).map(() => []));
    showMessage('Hash table cleared');
  };

  const getOperationDescription = () => {
    switch (operation) {
      case 'insert':
        return {
          title: 'Insert Operation',
          description: `Time Complexity: ${
            collisionStrategy === 'chaining' 
              ? 'O(1) average case, O(n) worst case when all keys hash to the same bucket.' 
              : 'O(1) average case, O(n) worst case when many collisions occur.'
          } The insert operation adds a key-value pair to the hash table.`,
        };
      case 'delete':
        return {
          title: 'Delete Operation',
          description: `Time Complexity: ${
            collisionStrategy === 'chaining' 
              ? 'O(1) average case, O(n) worst case when all keys hash to the same bucket.' 
              : 'O(1) average case, O(n) worst case when many collisions occur.'
          } The delete operation removes a key-value pair from the hash table.`,
        };
      case 'search':
        return {
          title: 'Search Operation',
          description: `Time Complexity: ${
            collisionStrategy === 'chaining' 
              ? 'O(1) average case, O(n) worst case when all keys hash to the same bucket.' 
              : 'O(1) average case, O(n) worst case when many collisions occur.'
          } The search operation finds a value associated with a given key.`,
        };
      default:
        return null;
    }
  };

  const operationInfo = getOperationDescription();

  return (
    <PageContainer>
      <Header>
        <Title>Hash Tables</Title>
        <Description>
          A hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values. It uses a hash function to compute an index into an array of buckets or slots.
        </Description>
      </Header>
      
      <VisualizationContainer>
        <OptionsContainer>
          <OptionButton 
            active={collisionStrategy === 'chaining'} 
            onClick={() => setCollisionStrategy('chaining')}
          >
            Separate Chaining
          </OptionButton>
          <OptionButton 
            active={collisionStrategy === 'linear'} 
            onClick={() => setCollisionStrategy('linear')}
          >
            Linear Probing
          </OptionButton>
          <OptionButton 
            active={collisionStrategy === 'quadratic'} 
            onClick={() => setCollisionStrategy('quadratic')}
          >
            Quadratic Probing
          </OptionButton>
        </OptionsContainer>
        
        <ControlsContainer>
          <InputGroup>
            <InputLabel>Key:</InputLabel>
            <Input 
              type="text" 
              value={key} 
              onChange={e => setKey(e.target.value)} 
              placeholder="Key" 
            />
          </InputGroup>
          <InputGroup>
            <InputLabel>Value:</InputLabel>
            <Input 
              type="text" 
              value={value} 
              onChange={e => setValue(e.target.value)} 
              placeholder="Value" 
            />
          </InputGroup>
          <OperationButton onClick={handleInsert}>Insert</OperationButton>
          <OperationButton onClick={handleDelete} variant="secondary">Delete</OperationButton>
          <OperationButton onClick={handleSearch}>Search</OperationButton>
          <OperationButton onClick={handleClear} variant="secondary">Clear Table</OperationButton>
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
        
        {hashSteps && (
          <HashSteps>
            {hashSteps.map((step, index) => (
              <HashStepItem key={index}>
                <span>Step {index + 1}:</span> {step}
              </HashStepItem>
            ))}
          </HashSteps>
        )}
        
        <HashTableContainer>
          {hashTable.map((bucket, index) => (
            <TableRow key={index}>
              <IndexCell>{index}</IndexCell>
              <BucketCell highlight={index === highlightedIndex}>
                {bucket.length === 0 ? (
                  <span style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>Empty</span>
                ) : (
                  bucket.map((item, itemIndex) => (
                    <KeyValueItem 
                      key={itemIndex}
                      highlight={highlightedItem && highlightedItem.index === index && highlightedItem.key === item.key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <KeyValuePair>
                        <KeySpan>{item.key}:</KeySpan>
                        <ValueSpan>{item.value}</ValueSpan>
                      </KeyValuePair>
                    </KeyValueItem>
                  ))
                )}
              </BucketCell>
            </TableRow>
          ))}
        </HashTableContainer>
        
        {operationInfo && (
          <OperationDescription>
            <OperationTitle>{operationInfo.title}</OperationTitle>
            <p>{operationInfo.description}</p>
          </OperationDescription>
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default HashTablesPage; 