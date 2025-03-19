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
    if (props.current) return 'var(--primary)';
    if (props.comparing) return '#ff5722';
    if (props.shifting) return '#9c27b0';
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
public class InsertionSort {
  public static void insertionSort(int[] arr) {
    int n = arr.length;
    
    for (int i = 1; i < n; i++) {
      int key = arr[i];
      int j = i - 1;
      
      // Move elements of arr[0..i-1] that are greater than key
      // to one position ahead of their current position
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }
  
  // Driver method to test the algorithm
  public static void main(String[] args) {
    int[] arr = {12, 11, 13, 5, 6};
    
    System.out.println("Unsorted array:");
    printArray(arr);
    
    insertionSort(arr);
    
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

const InsertionSort = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [comparingIndex, setComparingIndex] = useState(-1);
  const [shiftingIndices, setShiftingIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([0]); // First element is always sorted
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
    setSortedIndices([0]); // First element is considered sorted
  };
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  const insertionSort = async () => {
    if (sorting) return;
    
    setSorting(true);
    setSorted(false);
    setSortedIndices([0]); // First element is considered sorted
    
    const n = array.length;
    let newArray = [...array];
    
    for (let i = 1; i < n; i++) {
      setCurrentIndex(i);
      setStepDescription(`Inserting element ${newArray[i]} into the sorted part of the array`);
      await sleep(speed);
      
      let key = newArray[i];
      let j = i - 1;
      
      // Move elements of arr[0..i-1] that are greater than key
      // to one position ahead of their current position
      while (j >= 0) {
        setComparingIndex(j);
        setStepDescription(`Comparing ${key} with ${newArray[j]}`);
        await sleep(speed);
        
        if (newArray[j] > key) {
          setShiftingIndices([j, j + 1]);
          setStepDescription(`${newArray[j]} > ${key}, shifting ${newArray[j]} to the right`);
          await sleep(speed);
          
          newArray[j + 1] = newArray[j];
          setArray([...newArray]);
          
          j = j - 1;
          setShiftingIndices([]);
        } else {
          break;
        }
      }
      
      // Place key at the correct position
      newArray[j + 1] = key;
      setStepDescription(`Placing ${key} at position ${j + 1}`);
      setArray([...newArray]);
      await sleep(speed);
      
      // Reset current comparison indices
      setCurrentIndex(-1);
      setComparingIndex(-1);
      
      // Mark element as sorted
      setSortedIndices(prev => [...prev, i]);
    }
    
    setStepDescription('Array sorted successfully!');
    setSorting(false);
    setSorted(true);
  };
  
  const resetSort = () => {
    setSorting(false);
    setSorted(false);
    setCurrentIndex(-1);
    setComparingIndex(-1);
    setShiftingIndices([]);
    setSortedIndices([0]); // First element is considered sorted
    setStepDescription('');
    generateRandomArray();
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Insertion Sort</Title>
        <Description>
          Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time.
          It is efficient for small data sets and is often used as part of more sophisticated algorithms.
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
              
              <Button onClick={insertionSort} disabled={sorting || sorted}>
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
                  current={index === currentIndex}
                  comparing={index === comparingIndex}
                  shifting={shiftingIndices.includes(index)}
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
              <p>Insertion Sort performs well for small data sets and is adaptive, meaning it is efficient for data sets that are already substantially sorted.</p>
              
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
          <CodeViewer title="Insertion Sort Implementation (Java)" code={javaCode} />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default InsertionSort; 