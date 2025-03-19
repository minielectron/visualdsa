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
    if (props.comparing) return 'var(--primary)';
    if (props.swapping) return '#ff5722';
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
public class BubbleSort {
  public static void bubbleSort(int[] arr) {
    int n = arr.length;
    boolean swapped;
    
    for (int i = 0; i < n - 1; i++) {
      swapped = false;
      
      for (int j = 0; j < n - i - 1; j++) {
        // Compare adjacent elements
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j+1]
          int temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
      
      // If no swapping occurred in this pass, array is sorted
      if (!swapped) {
        break;
      }
    }
  }
  
  // Driver method to test the algorithm
  public static void main(String[] args) {
    int[] arr = {64, 34, 25, 12, 22, 11, 90};
    
    System.out.println("Unsorted array:");
    printArray(arr);
    
    bubbleSort(arr);
    
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

const BubbleSort = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [comparingIndices, setComparingIndices] = useState([]);
  const [swappingIndices, setSwappingIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [arraySize, setArraySize] = useState(10);
  const [speed, setSpeed] = useState(500); // milliseconds per step
  const [activeTab, setActiveTab] = useState('visualization');
  
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
  
  const bubbleSort = async () => {
    if (sorting) return;
    
    setSorting(true);
    setSorted(false);
    setSortedIndices([]);
    
    const n = array.length;
    let newArray = [...array];
    let swapped;
    
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      
      for (let j = 0; j < n - i - 1; j++) {
        // Highlight the elements being compared
        setComparingIndices([j, j + 1]);
        await sleep(speed);
        
        // If the left element is greater than the right element, swap them
        if (newArray[j] > newArray[j + 1]) {
          // Highlight the elements being swapped
          setSwappingIndices([j, j + 1]);
          await sleep(speed);
          
          // Swap elements
          let temp = newArray[j];
          newArray[j] = newArray[j + 1];
          newArray[j + 1] = temp;
          
          // Update the array state
          setArray([...newArray]);
          swapped = true;
          
          // Clear swap highlighting
          setSwappingIndices([]);
          await sleep(speed / 2);
        }
        
        // Clear comparison highlighting
        setComparingIndices([]);
      }
      
      // Mark the last element in this pass as sorted
      setSortedIndices(prev => [...prev, n - 1 - i]);
      
      // If no swapping occurred in this pass, array is sorted
      if (!swapped) {
        // Mark all remaining elements as sorted
        const remaining = [];
        for (let k = 0; k <= n - i - 2; k++) {
          remaining.push(k);
        }
        setSortedIndices(prev => [...prev, ...remaining]);
        break;
      }
    }
    
    setSorting(false);
    setSorted(true);
  };
  
  const resetSort = () => {
    setSorting(false);
    setSorted(false);
    setComparingIndices([]);
    setSwappingIndices([]);
    setSortedIndices([]);
    generateRandomArray();
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Bubble Sort</Title>
        <Description>
          Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, 
          compares adjacent elements and swaps them if they are in wrong order.
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
              
              <Button onClick={bubbleSort} disabled={sorting || sorted}>
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
            
            {sorting && (
              <MessageContainer>
                Sorting in progress...
              </MessageContainer>
            )}
            
            {sorted && (
              <MessageContainer>
                Array sorted successfully!
              </MessageContainer>
            )}
            
            <ComplexityContainer>
              <ComplexityTitle>Algorithm Complexity</ComplexityTitle>
              <p>Bubble Sort is a simple algorithm but not very efficient for large datasets.</p>
              
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
                      <div>Best Case: O(n)</div>
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
          <CodeViewer title="Bubble Sort Implementation (Java)" code={javaCode} />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default BubbleSort; 