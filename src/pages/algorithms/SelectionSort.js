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
  align-items: flex-end;
  min-height: 200px;
`;

const ArrayBar = styled(motion.div)`
  width: 40px;
  height: ${props => props.height}px;
  background: ${props => {
    if (props.sorted) return 'var(--secondary)';
    if (props.minIndex) return '#ff5722';
    if (props.comparing) return 'var(--primary)';
    if (props.swapping) return '#9c27b0';
    return 'var(--primary-light)';
  }};
  border-radius: 4px 4px 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5px;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
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

const SliderContainer = styled.div`
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
  background: #f5f9ff;
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
public class SelectionSort {
  public static void selectionSort(int[] arr) {
    int n = arr.length;
    
    // One by one move boundary of unsorted subarray
    for (int i = 0; i < n - 1; i++) {
      // Find the minimum element in unsorted array
      int min_idx = i;
      for (int j = i + 1; j < n; j++) {
        if (arr[j] < arr[min_idx]) {
          min_idx = j;
        }
      }
      
      // Swap the found minimum element with the first element
      int temp = arr[min_idx];
      arr[min_idx] = arr[i];
      arr[i] = temp;
    }
  }
  
  // Driver method to test above
  public static void main(String[] args) {
    int[] arr = {64, 25, 12, 22, 11};
    
    System.out.println("Unsorted array:");
    printArray(arr);
    
    selectionSort(arr);
    
    System.out.println("Sorted array:");
    printArray(arr);
  }
  
  // Utility method to print an array
  static void printArray(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
    System.out.println();
  }
}
`;

const SelectionSort = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [comparingIndices, setComparingIndices] = useState([]);
  const [minIndex, setMinIndex] = useState(-1);
  const [swappingIndices, setSwappingIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [arraySize, setArraySize] = useState(10);
  const [speed, setSpeed] = useState(500); // milliseconds per step
  const [activeTab, setActiveTab] = useState('visualization');
  const [stepDescription, setStepDescription] = useState('');
  
  // Initialize array with random values
  useEffect(() => {
    generateRandomArray();
  }, [arraySize]);
  
  const generateRandomArray = () => {
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(Math.floor(Math.random() * 100) + 5); // Random values between 5 and 104
    }
    setArray(newArray);
    setSorted(false);
    setSortedIndices([]);
  };
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  const selectionSort = async () => {
    if (sorting) return;
    
    setSorting(true);
    setSorted(false);
    setSortedIndices([]);
    
    const n = array.length;
    let newArray = [...array];
    
    // One by one move boundary of unsorted subarray
    for (let i = 0; i < n - 1; i++) {
      setStepDescription(`Finding the minimum element in the unsorted part of the array (starting from index ${i})`);
      
      // Find the minimum element in unsorted array
      let min_idx = i;
      setMinIndex(min_idx);
      await sleep(speed);
      
      for (let j = i + 1; j < n; j++) {
        // Highlight the elements being compared
        setComparingIndices([min_idx, j]);
        setStepDescription(`Comparing ${newArray[j]} with current minimum ${newArray[min_idx]}`);
        await sleep(speed);
        
        if (newArray[j] < newArray[min_idx]) {
          min_idx = j;
          setMinIndex(min_idx);
          setStepDescription(`New minimum found: ${newArray[min_idx]} at index ${min_idx}`);
          await sleep(speed);
        }
        
        // Clear comparison highlighting
        setComparingIndices([]);
      }
      
      // Swap the found minimum element with the first element
      if (min_idx !== i) {
        setSwappingIndices([i, min_idx]);
        setStepDescription(`Swapping ${newArray[i]} with ${newArray[min_idx]}`);
        await sleep(speed);
        
        let temp = newArray[min_idx];
        newArray[min_idx] = newArray[i];
        newArray[i] = temp;
        
        // Update the array state
        setArray([...newArray]);
      } else {
        setStepDescription(`${newArray[i]} is already at the correct position (index ${i})`);
      }
      
      // Clear swap highlighting and min index
      setSwappingIndices([]);
      setMinIndex(-1);
      await sleep(speed);
      
      // Mark the current index as sorted
      setSortedIndices(prev => [...prev, i]);
    }
    
    // Mark the last element as sorted
    setSortedIndices(prev => [...prev, n - 1]);
    setStepDescription('Array sorted successfully!');
    
    setSorting(false);
    setSorted(true);
  };
  
  const resetSort = () => {
    setSorting(false);
    setSorted(false);
    setComparingIndices([]);
    setMinIndex(-1);
    setSwappingIndices([]);
    setSortedIndices([]);
    setStepDescription('');
    generateRandomArray();
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Selection Sort</Title>
        <Description>
          Selection Sort is a simple sorting algorithm that repeatedly finds the minimum element 
          from the unsorted part of the array and puts it at the beginning.
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
              <SliderContainer>
                <span>Size:</span>
                <Slider 
                  type="range" 
                  min="5" 
                  max="20" 
                  value={arraySize} 
                  onChange={(e) => setArraySize(parseInt(e.target.value))}
                  disabled={sorting}
                />
                <span>{arraySize}</span>
              </SliderContainer>
              
              <SpeedControl>
                <span>Speed:</span>
                <Slider 
                  type="range" 
                  min="50" 
                  max="1000" 
                  step="50"
                  value={speed} 
                  onChange={(e) => setSpeed(parseInt(e.target.value))}
                  disabled={sorting}
                />
                <span>{speed}ms</span>
              </SpeedControl>
              
              <Button onClick={generateRandomArray} disabled={sorting}>
                Generate New Array
              </Button>
              
              <Button onClick={selectionSort} disabled={sorting || sorted}>
                {sorting ? 'Sorting...' : 'Sort'}
              </Button>
              
              <Button onClick={resetSort} disabled={sorting}>
                Reset
              </Button>
            </ControlsContainer>
            
            <ArrayContainer>
              {array.map((value, index) => (
                <ArrayBar 
                  key={index}
                  height={value * 2}
                  comparing={comparingIndices.includes(index)}
                  minIndex={index === minIndex}
                  swapping={swappingIndices.includes(index)}
                  sorted={sortedIndices.includes(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {value}
                </ArrayBar>
              ))}
            </ArrayContainer>
            
            {stepDescription && (
              <StepDescription>
                {stepDescription}
              </StepDescription>
            )}
            
            {sorted && !stepDescription && (
              <MessageContainer>
                Array sorted successfully!
              </MessageContainer>
            )}
            
            <ComplexityContainer>
              <ComplexityTitle>Algorithm Complexity</ComplexityTitle>
              <p>Selection Sort has a simple implementation but is generally less efficient than algorithms like Quick Sort or Merge Sort for large datasets.</p>
              
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
                      <div>Best Case: O(n²)</div>
                      <div>Average Case: O(n²)</div>
                      <div>Worst Case: O(n²)</div>
                    </Td>
                    <Td>O(1)</Td>
                  </tr>
                </tbody>
              </ComplexityTable>
            </ComplexityContainer>
          </>
        ) : (
          <CodeViewer title="Selection Sort Implementation (Java)" code={javaCode} />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default SelectionSort; 