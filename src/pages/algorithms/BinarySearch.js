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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => {
    if (props.found) return 'var(--secondary)';
    if (props.current) return 'var(--primary)';
    if (props.range) return 'var(--primary-light)';
    return '#f0f0f0';
  }};
  color: ${props => {
    if (props.found || props.current || props.range) return 'white';
    return 'var(--text-primary)';
  }};
  font-weight: 600;
  position: relative;
`;

const IndexLabel = styled.span`
  position: absolute;
  top: -25px;
  font-size: 0.75rem;
  color: var(--text-secondary);
`;

const PointerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 0 1rem;
`;

const Pointer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  span {
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin-bottom: 0.25rem;
  }
  
  div {
    background: ${props => props.color || 'var(--primary)'};
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;

const SpeedControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Slider = styled.input`
  width: 100px;
`;

const MessageContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: ${props => props.error ? '#ffebee' : '#e8f5e9'};
  color: ${props => props.error ? '#d32f2f' : '#2e7d32'};
  border-radius: var(--border-radius);
  text-align: center;
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

const StepDescription = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`;

const ComplexityContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
`;

const ComplexityTitle = styled.h3`
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

const ComplexityTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const Th = styled.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const javaCode = `
public class BinarySearch {
  // Returns index of x if it is present in arr[],
  // else return -1
  public static int binarySearch(int[] arr, int x) {
    int left = 0, right = arr.length - 1;
    
    while (left <= right) {
      int mid = left + (right - left) / 2;
      
      // Check if x is present at mid
      if (arr[mid] == x)
        return mid;
      
      // If x greater, ignore left half
      if (arr[mid] < x)
        left = mid + 1;
      
      // If x is smaller, ignore right half
      else
        right = mid - 1;
    }
    
    // If we reach here, element was not present
    return -1;
  }
  
  // Driver method to test the algorithm
  public static void main(String[] args) {
    int[] arr = {2, 3, 4, 10, 40};
    int x = 10;
    
    int result = binarySearch(arr, x);
    
    if (result == -1)
      System.out.println("Element not present");
    else
      System.out.println("Element found at index " + result);
  }
}
`;

const BinarySearch = () => {
  const [array, setArray] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searching, setSearching] = useState(false);
  const [found, setFound] = useState(false);
  const [foundIndex, setFoundIndex] = useState(-1);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [rangeIndices, setRangeIndices] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [leftPointer, setLeftPointer] = useState(-1);
  const [rightPointer, setRightPointer] = useState(-1);
  const [midPointer, setMidPointer] = useState(-1);
  const [stepDescription, setStepDescription] = useState('');
  const [speed, setSpeed] = useState(1000); // milliseconds per step
  const [activeTab, setActiveTab] = useState('visualization');
  
  // Initialize sorted array with values
  useEffect(() => {
    generateSortedArray();
  }, []);
  
  const generateSortedArray = () => {
    const size = 15;
    const sortedArray = Array.from({ length: size }, (_, i) => i * 3 + Math.floor(Math.random() * 3));
    setArray(sortedArray);
    resetSearch();
  };
  
  const resetSearch = () => {
    setSearchValue('');
    setSearching(false);
    setFound(false);
    setFoundIndex(-1);
    setCurrentIndex(-1);
    setRangeIndices([]);
    setMessage('');
    setError(false);
    setLeftPointer(-1);
    setRightPointer(-1);
    setMidPointer(-1);
    setStepDescription('');
  };
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  const handleSearch = async () => {
    const value = parseInt(searchValue);
    
    if (isNaN(value)) {
      setError(true);
      setMessage('Please enter a valid number');
      return;
    }
    
    setError(false);
    setSearching(true);
    setFound(false);
    setFoundIndex(-1);
    setMessage('Searching...');
    
    let left = 0;
    let right = array.length - 1;
    
    // Update visual range and pointers
    setLeftPointer(left);
    setRightPointer(right);
    setRangeIndices([...Array(array.length).keys()]);
    setStepDescription(`Initializing search for ${value} in the array`);
    await sleep(speed);
    
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      setMidPointer(mid);
      setCurrentIndex(mid);
      
      // Update range indices
      const newRange = [];
      for (let i = left; i <= right; i++) {
        newRange.push(i);
      }
      setRangeIndices(newRange);
      
      setStepDescription(`Comparing ${value} with element at index ${mid} (value ${array[mid]})`);
      await sleep(speed);
      
      if (array[mid] === value) {
        setFoundIndex(mid);
        setFound(true);
        setMessage(`Found ${value} at index ${mid}`);
        setStepDescription(`Found ${value} at index ${mid}!`);
        break;
      } else if (array[mid] < value) {
        left = mid + 1;
        setLeftPointer(left);
        setStepDescription(`${array[mid]} < ${value}, so we move to the right half`);
      } else {
        right = mid - 1;
        setRightPointer(right);
        setStepDescription(`${array[mid]} > ${value}, so we move to the left half`);
      }
      
      await sleep(speed);
      
      if (left > right) {
        setMessage(`${value} not found in the array`);
        setError(true);
        setStepDescription(`${value} is not present in the array`);
      }
    }
    
    setSearching(false);
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Binary Search</Title>
        <Description>
          Binary Search is a searching algorithm for finding an element's position in a sorted array.
          It works by repeatedly dividing the search interval in half.
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
            Code
          </TabButton>
        </TabContainer>
        
        {activeTab === 'visualization' ? (
          <>
            <ControlsContainer>
              <SpeedControl>
                <span>Speed:</span>
                <Slider 
                  type="range" 
                  min="500" 
                  max="2000" 
                  step="100"
                  value={speed} 
                  onChange={(e) => setSpeed(parseInt(e.target.value))}
                  disabled={searching}
                />
                <span>{speed}ms</span>
              </SpeedControl>
              
              <div>
                <Input 
                  type="number" 
                  placeholder="Search value" 
                  value={searchValue} 
                  onChange={(e) => setSearchValue(e.target.value)} 
                  disabled={searching}
                />
              </div>
              
              <Button onClick={handleSearch} disabled={searching || searchValue === ''}>
                Search
              </Button>
              
              <Button onClick={generateSortedArray} disabled={searching}>
                Generate New Array
              </Button>
              
              <Button onClick={resetSearch} disabled={searching}>
                Reset
              </Button>
            </ControlsContainer>
            
            <PointerContainer>
              {leftPointer >= 0 && (
                <Pointer color="var(--primary-light)">
                  <span>Left</span>
                  <div>{leftPointer}</div>
                </Pointer>
              )}
              {midPointer >= 0 && (
                <Pointer color="var(--primary)">
                  <span>Mid</span>
                  <div>{midPointer}</div>
                </Pointer>
              )}
              {rightPointer >= 0 && (
                <Pointer color="var(--primary-light)">
                  <span>Right</span>
                  <div>{rightPointer}</div>
                </Pointer>
              )}
            </PointerContainer>
            
            <ArrayContainer>
              {array.map((value, index) => (
                <ArrayItem 
                  key={index}
                  current={index === currentIndex}
                  found={index === foundIndex && found}
                  range={rangeIndices.includes(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <IndexLabel>{index}</IndexLabel>
                  {value}
                </ArrayItem>
              ))}
            </ArrayContainer>
            
            {stepDescription && (
              <StepDescription>
                {stepDescription}
              </StepDescription>
            )}
            
            {message && (
              <MessageContainer error={error}>
                {message}
              </MessageContainer>
            )}
            
            <ComplexityContainer>
              <ComplexityTitle>Algorithm Complexity</ComplexityTitle>
              <p>Binary Search is much more efficient than linear search for large datasets.</p>
              
              <ComplexityTable>
                <thead>
                  <tr>
                    <Th>Time Complexity</Th>
                    <Th>Space Complexity</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Td>
                      <div>Best Case: O(1)</div>
                      <div>Average Case: O(log n)</div>
                      <div>Worst Case: O(log n)</div>
                    </Td>
                    <Td>O(1)</Td>
                  </tr>
                </tbody>
              </ComplexityTable>
            </ComplexityContainer>
          </>
        ) : (
          <CodeViewer title="Binary Search Implementation (Java)" code={javaCode} />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default BinarySearch; 