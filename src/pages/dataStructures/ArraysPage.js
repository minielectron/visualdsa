import React, { useState } from 'react';
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

const ArrayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
`;

const ArrayItem = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.highlight ? 'var(--primary)' : 'var(--primary-light)'};
  color: white;
  font-weight: 600;
  position: relative;
`;

const IndexLabel = styled.span`
  position: absolute;
  top: -25px;
  font-size: 0.75rem;
  color: var(--text-secondary);
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
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
`;

const OperationTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
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

const ArraysPage = () => {
  const [array, setArray] = useState([10, 20, 30, 40, 50]);
  const [value, setValue] = useState('');
  const [index, setIndex] = useState('');
  const [message, setMessage] = useState(null);
  const [operation, setOperation] = useState(null);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [activeTab, setActiveTab] = useState('visualization'); // 'visualization' or 'code'

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const handleInsert = () => {
    if (value === '') {
      showMessage('Please enter a value', 'error');
      return;
    }

    const numValue = parseInt(value);
    const numIndex = index === '' ? array.length : parseInt(index);

    if (isNaN(numValue)) {
      showMessage('Value must be a number', 'error');
      return;
    }

    if (numIndex < 0 || numIndex > array.length) {
      showMessage('Invalid index', 'error');
      return;
    }

    const newArray = [...array];
    newArray.splice(numIndex, 0, numValue);
    setHighlightIndex(numIndex);
    setArray(newArray);
    setOperation('insert');
    showMessage(`Inserted ${numValue} at index ${numIndex}`);
    
    setTimeout(() => {
      setHighlightIndex(-1);
    }, 1500);
  };

  const handleRemove = () => {
    if (index === '') {
      showMessage('Please enter an index', 'error');
      return;
    }

    const numIndex = parseInt(index);

    if (isNaN(numIndex) || numIndex < 0 || numIndex >= array.length) {
      showMessage('Invalid index', 'error');
      return;
    }

    setHighlightIndex(numIndex);
    
    setTimeout(() => {
      const newArray = [...array];
      const removedValue = newArray.splice(numIndex, 1)[0];
      setArray(newArray);
      setOperation('remove');
      showMessage(`Removed value ${removedValue} from index ${numIndex}`);
      setHighlightIndex(-1);
    }, 800);
  };

  const handleSearch = () => {
    if (value === '') {
      showMessage('Please enter a value to search', 'error');
      return;
    }

    const numValue = parseInt(value);

    if (isNaN(numValue)) {
      showMessage('Value must be a number', 'error');
      return;
    }

    setOperation('search');
    
    // Animated search
    const searchAnimation = async () => {
      for (let i = 0; i < array.length; i++) {
        setHighlightIndex(i);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (array[i] === numValue) {
          showMessage(`Found ${numValue} at index ${i}`);
          setTimeout(() => {
            setHighlightIndex(-1);
          }, 1500);
          return;
        }
      }
      
      setHighlightIndex(-1);
      showMessage(`Value ${numValue} not found in the array`, 'error');
    };
    
    searchAnimation();
  };

  const getOperationDescription = () => {
    switch (operation) {
      case 'insert':
        return {
          title: 'Insert Operation',
          description: 'Insertion into an array requires shifting all elements after the insertion point by one position to make room for the new element. This operation has a time complexity of O(n) in the worst case.',
        };
      case 'remove':
        return {
          title: 'Remove Operation',
          description: 'Removing an element from an array requires shifting all elements after the removed element to fill the gap. This operation has a time complexity of O(n) in the worst case.',
        };
      case 'search':
        return {
          title: 'Search Operation',
          description: 'Linear search in an unsorted array involves checking each element one by one until the target value is found or the end of the array is reached. This operation has a time complexity of O(n) in the worst case.',
        };
      default:
        return null;
    }
  };

  const operationInfo = getOperationDescription();

  const arrayCode = `public class DynamicArray {
    private int[] arr;
    private int size;
    private int capacity;
    
    public DynamicArray() {
        capacity = 10;
        arr = new int[capacity];
        size = 0;
    }
    
    public void insert(int value, int index) {
        if (index < 0 || index > size)
            throw new IndexOutOfBoundsException("Invalid index");
            
        if (size == capacity)
            resize();
            
        // Shift elements to the right
        for (int i = size; i > index; i--)
            arr[i] = arr[i-1];
            
        arr[index] = value;
        size++;
    }
    
    public void remove(int index) {
        if (index < 0 || index >= size)
            throw new IndexOutOfBoundsException("Invalid index");
            
        // Shift elements to the left
        for (int i = index; i < size - 1; i++)
            arr[i] = arr[i+1];
            
        size--;
    }
    
    public int search(int value) {
        for (int i = 0; i < size; i++)
            if (arr[i] == value)
                return i;
        return -1;
    }
    
    private void resize() {
        capacity *= 2;
        int[] newArr = new int[capacity];
        for (int i = 0; i < size; i++)
            newArr[i] = arr[i];
        arr = newArr;
    }
    
    public int get(int index) {
        if (index < 0 || index >= size)
            throw new IndexOutOfBoundsException("Invalid index");
        return arr[index];
    }
}`;

  return (
    <PageContainer>
      <Header>
        <Title>Arrays</Title>
        <Description>
          An array is a collection of elements stored at contiguous memory locations. It is the simplest data structure where each element can be accessed directly using its index.
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
            <ControlsContainer>
              <div>
                <label>Value: </label>
                <Input 
                  type="text" 
                  value={value} 
                  onChange={e => setValue(e.target.value)} 
                  placeholder="Value" 
                />
              </div>
              <div>
                <label>Index: </label>
                <Input 
                  type="text" 
                  value={index} 
                  onChange={e => setIndex(e.target.value)} 
                  placeholder="Index" 
                />
              </div>
              <OperationButton onClick={handleInsert}>Insert</OperationButton>
              <OperationButton onClick={handleRemove} variant="secondary">Remove</OperationButton>
              <OperationButton onClick={handleSearch}>Search</OperationButton>
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
            
            <ArrayContainer>
              {array.map((item, i) => (
                <ArrayItem 
                  key={`${i}-${item}`}
                  highlight={i === highlightIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <IndexLabel>{i}</IndexLabel>
                  {item}
                </ArrayItem>
              ))}
            </ArrayContainer>
            
            {operationInfo && (
              <OperationDescription>
                <OperationTitle>{operationInfo.title}</OperationTitle>
                <p>{operationInfo.description}</p>
              </OperationDescription>
            )}
          </>
        ) : (
          <CodeViewer 
            title="Dynamic Array Implementation" 
            code={arrayCode}
          />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default ArraysPage; 