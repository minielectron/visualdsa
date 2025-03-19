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

const HeapTreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  overflow-x: auto;
  min-height: 300px;
`;

const TreeRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`;

const ArrayBar = styled(motion.div)`
  width: 40px;
  height: ${props => props.height}px;
  background: ${props => {
    if (props.sorted) return 'var(--secondary)';
    if (props.heapified) return '#9c27b0'; // Purple for heapified
    if (props.root) return '#ff5722';      // Orange for root
    if (props.comparing) return 'var(--primary)';
    if (props.swapping) return '#2196f3';  // Blue for swapping
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

const TreeNode = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => {
    if (props.sorted) return 'var(--secondary)';
    if (props.heapified) return '#9c27b0'; // Purple for heapified
    if (props.root) return '#ff5722';      // Orange for root
    if (props.comparing) return 'var(--primary)';
    if (props.swapping) return '#2196f3';  // Blue for swapping
    return 'var(--primary-light)';
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  margin: 0 1rem;
  position: relative;
  
  // Draw lines to children
  &:before, &:after {
    content: '';
    position: absolute;
    top: 100%;
    width: 2px;
    height: ${props => props.hasChildren ? '2rem' : '0'};
    background-color: #aaa;
    z-index: -1;
  }
  
  &:before {
    transform: ${props => props.hasLeftChild ? 'rotate(-45deg)' : 'rotate(0)'};
    transform-origin: top left;
    left: 75%;
    display: ${props => props.hasLeftChild ? 'block' : 'none'};
  }
  
  &:after {
    transform: ${props => props.hasRightChild ? 'rotate(45deg)' : 'rotate(0)'};
    transform-origin: top right;
    right: 75%;
    display: ${props => props.hasRightChild ? 'block' : 'none'};
  }
`;

const LegendContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LegendColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: ${props => props.circle ? '50%' : '4px 4px 0 0'};
  background: ${props => props.color || '#ddd'};
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
public class HeapSort {
  public void sort(int arr[]) {
    int n = arr.length;

    // Build heap (rearrange array)
    for (int i = n / 2 - 1; i >= 0; i--)
      heapify(arr, n, i);

    // One by one extract an element from heap
    for (int i = n - 1; i > 0; i--) {
      // Move current root to end
      int temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      // call max heapify on the reduced heap
      heapify(arr, i, 0);
    }
  }

  // To heapify a subtree rooted with node i which is
  // an index in arr[]. n is size of heap
  void heapify(int arr[], int n, int i) {
    int largest = i; // Initialize largest as root
    int l = 2 * i + 1; // left = 2*i + 1
    int r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < n && arr[l] > arr[largest])
      largest = l;

    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest])
      largest = r;

    // If largest is not root
    if (largest != i) {
      int swap = arr[i];
      arr[i] = arr[largest];
      arr[largest] = swap;

      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
    }
  }

  // A utility function to print array of size n
  static void printArray(int arr[]) {
    int n = arr.length;
    for (int i = 0; i < n; ++i)
      System.out.print(arr[i] + " ");
    System.out.println();
  }

  // Driver program
  public static void main(String args[]) {
    int arr[] = { 12, 11, 13, 5, 6, 7 };
    
    HeapSort ob = new HeapSort();
    ob.sort(arr);

    System.out.println("Sorted array is");
    printArray(arr);
  }
}
`;

const HeapSort = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [comparingIndices, setComparingIndices] = useState([]);
  const [swappingIndices, setSwappingIndices] = useState([]);
  const [heapifiedIndices, setHeapifiedIndices] = useState([]);
  const [rootIndex, setRootIndex] = useState(-1);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [arraySize, setArraySize] = useState(10);
  const [speed, setSpeed] = useState(500); // milliseconds per step
  const [activeTab, setActiveTab] = useState('visualization');
  const [stepDescription, setStepDescription] = useState('');
  const [displayArray, setDisplayArray] = useState(true);
  
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
    setHeapifiedIndices([]);
  };
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  const heapSort = async () => {
    if (sorting) return;
    
    setSorting(true);
    setSorted(false);
    setSortedIndices([]);
    setHeapifiedIndices([]);
    
    setStepDescription("Starting Heap Sort algorithm...");
    await sleep(speed);
    
    const n = array.length;
    const arrCopy = [...array];
    
    // Step 1: Build heap (heapify all subtrees)
    setStepDescription("Phase 1: Building the heap (heapify from bottom up)");
    await sleep(speed);
    
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(arrCopy, n, i);
    }
    
    setHeapifiedIndices(Array.from(Array(n).keys()));
    setStepDescription("Max heap built successfully. Root contains the largest element.");
    await sleep(speed);
    
    // Step 2: Extract elements from heap one by one
    setStepDescription("Phase 2: Extracting elements from heap");
    await sleep(speed);
    
    for (let i = n - 1; i > 0; i--) {
      // Move current root (max element) to the end
      setRootIndex(0);
      setSwappingIndices([0, i]);
      setStepDescription(`Swapping root (${arrCopy[0]}) with last unsorted element (${arrCopy[i]})`);
      await sleep(speed);
      
      // Swap
      [arrCopy[0], arrCopy[i]] = [arrCopy[i], arrCopy[0]];
      setArray([...arrCopy]);
      
      // Mark the current position as sorted
      setSortedIndices(prev => [...prev, i]);
      
      setSwappingIndices([]);
      setRootIndex(-1);
      
      // Heapify the reduced heap
      await heapify(arrCopy, i, 0);
      
      setStepDescription(`Element ${arrCopy[i]} placed in its final sorted position`);
      await sleep(speed/2);
    }
    
    // Mark the first element as sorted too
    setSortedIndices(prev => [...prev, 0]);
    setHeapifiedIndices([]);
    
    setStepDescription("Array sorted successfully!");
    setSorting(false);
    setSorted(true);
  };
  
  const heapify = async (arr, heapSize, rootIndex) => {
    let largest = rootIndex;
    const left = 2 * rootIndex + 1;
    const right = 2 * rootIndex + 2;
    
    setRootIndex(rootIndex);
    await sleep(speed/2);
    
    // Check if left child exists and is greater than root
    if (left < heapSize) {
      setComparingIndices([largest, left]);
      setStepDescription(`Comparing ${arr[largest]} with its left child ${arr[left]}`);
      await sleep(speed/2);
      
      if (arr[left] > arr[largest]) {
        setStepDescription(`Left child ${arr[left]} is larger than root ${arr[largest]}`);
        largest = left;
      } else {
        setStepDescription(`Root ${arr[largest]} is larger than left child ${arr[left]}`);
      }
      setComparingIndices([]);
      await sleep(speed/2);
    }
    
    // Check if right child exists and is greater than largest so far
    if (right < heapSize) {
      setComparingIndices([largest, right]);
      setStepDescription(`Comparing ${arr[largest]} with its right child ${arr[right]}`);
      await sleep(speed/2);
      
      if (arr[right] > arr[largest]) {
        setStepDescription(`Right child ${arr[right]} is larger than current largest ${arr[largest]}`);
        largest = right;
      } else {
        setStepDescription(`Current largest ${arr[largest]} is larger than right child ${arr[right]}`);
      }
      setComparingIndices([]);
      await sleep(speed/2);
    }
    
    // If largest is not root, swap and continue heapifying
    if (largest !== rootIndex) {
      setSwappingIndices([rootIndex, largest]);
      setStepDescription(`${arr[largest]} is larger than ${arr[rootIndex]}. Swapping them.`);
      await sleep(speed);
      
      // Swap
      [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
      setArray([...arr]);
      
      setSwappingIndices([]);
      setRootIndex(-1);
      
      // Recursively heapify the affected sub-tree
      await heapify(arr, heapSize, largest);
    } else {
      // This subtree is already a heap
      if (!heapifiedIndices.includes(rootIndex)) {
        setHeapifiedIndices(prev => [...prev, rootIndex]);
      }
      setStepDescription(`Subtree at index ${rootIndex} is already a heap`);
      await sleep(speed/2);
    }
    
    setRootIndex(-1);
  };
  
  const resetSort = () => {
    setSorting(false);
    setSorted(false);
    setComparingIndices([]);
    setSwappingIndices([]);
    setHeapifiedIndices([]);
    setRootIndex(-1);
    setSortedIndices([]);
    setStepDescription('');
    generateRandomArray();
  };
  
  // Generate a tree visualization from the array
  const renderHeapTree = () => {
    if (array.length === 0) return null;
    
    // Calculate the maximum depth of the tree
    const maxDepth = Math.floor(Math.log2(array.length)) + 1;
    const rows = [];
    
    let nodeIndex = 0;
    
    for (let level = 0; level < maxDepth; level++) {
      const nodesInThisLevel = Math.min(Math.pow(2, level), array.length - Math.pow(2, level) + 1);
      const nodes = [];
      
      for (let i = 0; i < nodesInThisLevel && nodeIndex < array.length; i++) {
        const value = array[nodeIndex];
        const hasLeftChild = 2 * nodeIndex + 1 < array.length;
        const hasRightChild = 2 * nodeIndex + 2 < array.length;
        
        nodes.push(
          <TreeNode 
            key={nodeIndex}
            hasChildren={hasLeftChild || hasRightChild}
            hasLeftChild={hasLeftChild}
            hasRightChild={hasRightChild}
            root={nodeIndex === rootIndex}
            comparing={comparingIndices.includes(nodeIndex)}
            swapping={swappingIndices.includes(nodeIndex)}
            heapified={heapifiedIndices.includes(nodeIndex)}
            sorted={sortedIndices.includes(nodeIndex)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {value}
          </TreeNode>
        );
        
        nodeIndex++;
      }
      
      rows.push(
        <TreeRow key={level} style={{ justifyContent: 'center' }}>
          {nodes}
        </TreeRow>
      );
    }
    
    return rows;
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Heap Sort</Title>
        <Description>
          Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure.
          It divides the input into a sorted and an unsorted region, and iteratively shrinks the unsorted region
          by extracting the largest element and inserting it into the sorted region.
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
                  max="15" 
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
              
              <Button onClick={heapSort} disabled={sorting || sorted}>
                {sorting ? 'Sorting...' : 'Sort'}
              </Button>
              
              <Button onClick={resetSort} disabled={sorting}>
                Reset
              </Button>
              
              <Button 
                onClick={() => setDisplayArray(!displayArray)} 
                disabled={sorting}
              >
                {displayArray ? 'Show Heap Tree' : 'Show Array'}
              </Button>
            </ControlsContainer>
            
            <LegendContainer>
              <LegendItem>
                <LegendColor circle color="#ff5722" />
                <span>Current Root</span>
              </LegendItem>
              <LegendItem>
                <LegendColor circle color="var(--primary)" />
                <span>Comparing</span>
              </LegendItem>
              <LegendItem>
                <LegendColor circle color="#2196f3" />
                <span>Swapping</span>
              </LegendItem>
              <LegendItem>
                <LegendColor circle color="#9c27b0" />
                <span>Heapified</span>
              </LegendItem>
              <LegendItem>
                <LegendColor circle color="var(--secondary)" />
                <span>Sorted</span>
              </LegendItem>
            </LegendContainer>
            
            {stepDescription && (
              <StepDescription>
                {stepDescription}
              </StepDescription>
            )}
            
            {displayArray ? (
              <ArrayContainer>
                {array.map((value, index) => (
                  <ArrayBar 
                    key={index}
                    height={value * 2}
                    root={index === rootIndex}
                    comparing={comparingIndices.includes(index)}
                    swapping={swappingIndices.includes(index)}
                    heapified={heapifiedIndices.includes(index)}
                    sorted={sortedIndices.includes(index)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {value}
                  </ArrayBar>
                ))}
              </ArrayContainer>
            ) : (
              <HeapTreeContainer>
                {renderHeapTree()}
              </HeapTreeContainer>
            )}
            
            {sorted && !stepDescription && (
              <MessageContainer>
                Array sorted successfully!
              </MessageContainer>
            )}
            
            <ComplexityContainer>
              <ComplexityTitle>Algorithm Complexity</ComplexityTitle>
              <p>Heap Sort is one of the most efficient sorting algorithms with good average and worst-case complexity.</p>
              
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
                      <div>Worst Case: O(n log n)</div>
                    </Td>
                    <Td>O(1) - In-place sorting algorithm</Td>
                  </tr>
                </tbody>
              </ComplexityTable>
              
              <div style={{ marginTop: '1rem' }}>
                <p>Key characteristics of Heap Sort:</p>
                <ul>
                  <li>Not stable (relative order of equal elements may change)</li>
                  <li>In-place (requires constant extra space)</li>
                  <li>Based on the binary heap data structure</li>
                  <li>Consists of two phases: building the heap and extracting elements</li>
                  <li>Better than Selection Sort and comparable to Merge Sort and Quick Sort</li>
                </ul>
              </div>
            </ComplexityContainer>
          </>
        ) : (
          <CodeViewer title="Heap Sort Implementation (Java)" code={javaCode} />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default HeapSort; 