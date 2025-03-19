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
    if (props.pivot) return '#ff5722'; // Orange for pivot
    if (props.comparing) return 'var(--primary)';
    if (props.swapping) return '#9c27b0'; // Purple for swapping
    if (props.partitioning) return '#2196f3'; // Blue for partitioning
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

const PartitionIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

const PartitionMarker = styled.div`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: ${props => props.color || '#ddd'};
  color: white;
  border-radius: 4px;
  margin: 0 0.5rem;
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
public class QuickSort {
  
  // This function takes last element as pivot,
  // places the pivot element at its correct position in sorted array,
  // and places all smaller elements to left of pivot and
  // all greater elements to right of pivot
  int partition(int arr[], int low, int high) {
    int pivot = arr[high]; // pivot element
    int i = (low - 1); // index of smaller element
    
    for (int j = low; j < high; j++) {
      // If current element is smaller than the pivot
      if (arr[j] < pivot) {
        i++;
        
        // swap arr[i] and arr[j]
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    
    // swap arr[i+1] and arr[high] (or pivot)
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    
    return i + 1;
  }
  
  // The main function that implements QuickSort
  // arr[] --> Array to be sorted
  // low --> Starting index
  // high --> Ending index
  void sort(int arr[], int low, int high) {
    if (low < high) {
      // pi is partitioning index, arr[pi] is now at right place
      int pi = partition(arr, low, high);
      
      // Recursively sort elements before partition and after partition
      sort(arr, low, pi - 1);
      sort(arr, pi + 1, high);
    }
  }
  
  // Driver program
  public static void main(String args[]) {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = arr.length;
    
    System.out.println("Unsorted array:");
    printArray(arr);
    
    QuickSort ob = new QuickSort();
    ob.sort(arr, 0, n - 1);
    
    System.out.println("\\nSorted array:");
    printArray(arr);
  }
  
  // A utility function to print array of size n
  static void printArray(int arr[]) {
    int n = arr.length;
    for (int i = 0; i < n; ++i)
      System.out.print(arr[i] + " ");
    System.out.println();
  }
}
`;

const QuickSort = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [pivotIndex, setPivotIndex] = useState(-1);
  const [comparingIndices, setComparingIndices] = useState([]);
  const [swappingIndices, setSwappingIndices] = useState([]);
  const [partitioningIndices, setPartitioningIndices] = useState([]);
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
  
  const quickSort = async () => {
    if (sorting) return;
    
    setSorting(true);
    setSorted(false);
    setSortedIndices([]);
    
    setStepDescription("Starting Quick Sort algorithm...");
    await sleep(speed);
    
    const newArray = [...array];
    await quickSortRecursive(newArray, 0, newArray.length - 1);
    
    setStepDescription("Array sorted successfully!");
    setSorting(false);
    setSorted(true);
    setSortedIndices(Array.from(Array(array.length).keys()));
  };
  
  const quickSortRecursive = async (arr, low, high) => {
    if (low < high) {
      setStepDescription(`Partitioning array from index ${low} to ${high}`);
      // Set partitioning range
      setPartitioningIndices(Array.from({ length: high - low + 1 }, (_, i) => low + i));
      await sleep(speed);
      
      // Partition the array and get the pivot index
      const pivotIdx = await partition(arr, low, high);
      
      // Mark pivot as in correct position
      setSortedIndices(prev => [...prev, pivotIdx]);
      
      // Clear partitioning indicators
      setPartitioningIndices([]);
      
      // Recursively sort the sub-arrays
      setStepDescription(`Sorting left sub-array (indices ${low} to ${pivotIdx - 1})`);
      await sleep(speed);
      await quickSortRecursive(arr, low, pivotIdx - 1);
      
      setStepDescription(`Sorting right sub-array (indices ${pivotIdx + 1} to ${high})`);
      await sleep(speed);
      await quickSortRecursive(arr, pivotIdx + 1, high);
    } else if (low === high) {
      // Single element is already sorted
      setSortedIndices(prev => [...prev, low]);
    }
    
    return arr;
  };
  
  const partition = async (arr, low, high) => {
    // Choose the rightmost element as pivot
    const pivot = arr[high];
    setPivotIndex(high);
    setStepDescription(`Selected pivot: ${pivot} at index ${high}`);
    await sleep(speed);
    
    // Index of smaller element
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
      setComparingIndices([j, high]); // Compare current element with pivot
      setStepDescription(`Comparing ${arr[j]} with pivot ${pivot}`);
      await sleep(speed);
      
      // If current element is smaller than the pivot
      if (arr[j] < pivot) {
        i++;
        
        // Swap arr[i] and arr[j]
        if (i !== j) {
          setSwappingIndices([i, j]);
          setStepDescription(`Swapping ${arr[i]} and ${arr[j]}`);
          await sleep(speed);
          
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          
          // Update array state
          setArray([...arr]);
        }
      }
      
      // Clear comparison highlighting
      setComparingIndices([]);
      setSwappingIndices([]);
    }
    
    // Swap arr[i+1] and arr[high] (or pivot)
    const swapPos = i + 1;
    
    if (swapPos !== high) {
      setSwappingIndices([swapPos, high]);
      setStepDescription(`Placing pivot ${arr[high]} at its correct position (index ${swapPos})`);
      await sleep(speed);
      
      const temp = arr[swapPos];
      arr[swapPos] = arr[high];
      arr[high] = temp;
      
      // Update array state
      setArray([...arr]);
    }
    
    // Clear swap highlighting and update pivot position
    setSwappingIndices([]);
    setPivotIndex(swapPos);
    
    setStepDescription(`Pivot ${pivot} is now at its correct position (index ${swapPos})`);
    await sleep(speed);
    
    // Reset pivot index
    setPivotIndex(-1);
    
    return swapPos;
  };
  
  const resetSort = () => {
    setSorting(false);
    setSorted(false);
    setPivotIndex(-1);
    setComparingIndices([]);
    setSwappingIndices([]);
    setPartitioningIndices([]);
    setSortedIndices([]);
    setStepDescription('');
    generateRandomArray();
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Quick Sort</Title>
        <Description>
          Quick Sort is a highly efficient sorting algorithm that uses a divide-and-conquer strategy.
          It works by selecting a 'pivot' element and partitioning the array around the pivot,
          such that elements less than the pivot are on the left and elements greater than the pivot are on the right.
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
                  min="100" 
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
              
              <Button onClick={quickSort} disabled={sorting || sorted}>
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
                  pivot={index === pivotIndex}
                  comparing={comparingIndices.includes(index)}
                  swapping={swappingIndices.includes(index)}
                  partitioning={partitioningIndices.includes(index)}
                  sorted={sortedIndices.includes(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {value}
                </ArrayBar>
              ))}
            </ArrayContainer>
            
            <PartitionIndicator>
              <PartitionMarker color="#ff5722">Pivot</PartitionMarker>
              <PartitionMarker color="var(--primary)">Comparing</PartitionMarker>
              <PartitionMarker color="#9c27b0">Swapping</PartitionMarker>
              <PartitionMarker color="#2196f3">Partitioning</PartitionMarker>
              <PartitionMarker color="var(--secondary)">Sorted</PartitionMarker>
            </PartitionIndicator>
            
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
              <p>Quick Sort is one of the most efficient sorting algorithms and is widely used in practice.</p>
              
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
                      <div>Best Case: O(n log n)</div>
                      <div>Average Case: O(n log n)</div>
                      <div>Worst Case: O(n²)</div>
                    </Td>
                    <Td>O(log n)</Td>
                  </tr>
                </tbody>
              </ComplexityTable>
            </ComplexityContainer>
          </>
        ) : (
          <CodeViewer title="Quick Sort Implementation (Java)" code={javaCode} />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default QuickSort; 