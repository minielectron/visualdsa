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

const SubArrayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
  width: 100%;
`;

const ArrayRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
  
  &:after {
    content: '${props => props.label || ""}';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.8rem;
    color: var(--text-secondary);
  }
`;

const ArrayBar = styled(motion.div)`
  width: 40px;
  height: ${props => props.height}px;
  background: ${props => {
    if (props.sorted) return 'var(--secondary)';
    if (props.merging) return '#ff5722';
    if (props.comparing) return 'var(--primary)';
    if (props.dividing) return '#9c27b0';
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
public class MergeSort {
  // Merges two subarrays of arr[]
  // First subarray is arr[l..m]
  // Second subarray is arr[m+1..r]
  void merge(int arr[], int l, int m, int r) {
    // Find sizes of two subarrays to be merged
    int n1 = m - l + 1;
    int n2 = r - m;

    // Create temp arrays
    int L[] = new int[n1];
    int R[] = new int[n2];

    // Copy data to temp arrays
    for (int i = 0; i < n1; ++i)
      L[i] = arr[l + i];
    for (int j = 0; j < n2; ++j)
      R[j] = arr[m + 1 + j];

    // Merge the temp arrays

    // Initial indices of first and second subarrays
    int i = 0, j = 0;

    // Initial index of merged subarray array
    int k = l;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }

    // Copy remaining elements of L[] if any
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }

    // Copy remaining elements of R[] if any
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }

  // Main function that sorts arr[l..r] using merge()
  void sort(int arr[], int l, int r) {
    if (l < r) {
      // Find the middle point
      int m = l + (r - l) / 2;

      // Sort first and second halves
      sort(arr, l, m);
      sort(arr, m + 1, r);

      // Merge the sorted halves
      merge(arr, l, m, r);
    }
  }

  // Driver code
  public static void main(String args[]) {
    int arr[] = { 12, 11, 13, 5, 6, 7 };

    System.out.println("Given array is:");
    printArray(arr);

    MergeSort ob = new MergeSort();
    ob.sort(arr, 0, arr.length - 1);

    System.out.println("\\nSorted array is:");
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

const MergeSort = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [comparingIndices, setComparingIndices] = useState([]);
  const [mergingIndices, setMergingIndices] = useState([]);
  const [subArrays, setSubArrays] = useState([]);
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
    setSubArrays([]);
  };
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const mergeSort = async () => {
    if (sorting) return;
    
    setSorting(true);
    setSorted(false);
    
    setStepDescription("Starting merge sort...");
    await sleep(speed);
    
    // Clone array for operations
    const arrCopy = [...array];
    
    // Start the recursive merge sort
    await mergeSortRecursive(arrCopy, 0, arrCopy.length - 1, 0);
    
    setStepDescription("Array sorted successfully!");
    setSorting(false);
    setSorted(true);
  };

  const mergeSortRecursive = async (arr, left, right, depth) => {
    if (left >= right) {
      return;
    }
    
    const mid = Math.floor(left + (right - left) / 2);
    
    // Show division step
    setStepDescription(`Dividing array from index ${left} to ${right} at midpoint ${mid}`);
    
    // Update subArrays for visualization
    const newSubArrays = [...subArrays];
    if (!newSubArrays[depth]) {
      newSubArrays[depth] = [];
    }
    
    // Add current array segment to visualization
    const segment = arr.slice(left, right + 1);
    newSubArrays[depth] = [...newSubArrays[depth], { 
      array: segment, 
      left, 
      right,
      label: `[${left}...${right}]`
    }];
    
    setSubArrays(newSubArrays);
    await sleep(speed);
    
    // Recursively sort left and right halves
    await mergeSortRecursive(arr, left, mid, depth + 1);
    await mergeSortRecursive(arr, mid + 1, right, depth + 1);
    
    // Merge the sorted halves
    await merge(arr, left, mid, right);
    
    // Update the main array
    setArray([...arr]);
    
    return arr;
  };

  const merge = async (arr, left, mid, right) => {
    const n1 = mid - left + 1;
    const n2 = right - mid;
    
    // Create temp arrays
    const L = new Array(n1);
    const R = new Array(n2);
    
    // Copy data to temp arrays
    for (let i = 0; i < n1; i++) {
      L[i] = arr[left + i];
    }
    
    for (let j = 0; j < n2; j++) {
      R[j] = arr[mid + 1 + j];
    }
    
    // Merge temp arrays back into arr[left..right]
    let i = 0; // Initial index of first subarray
    let j = 0; // Initial index of second subarray
    let k = left; // Initial index of merged subarray
    
    setStepDescription(`Merging subarrays: [${L.join(', ')}] and [${R.join(', ')}]`);
    await sleep(speed);
    
    while (i < n1 && j < n2) {
      // Highlight elements being compared
      setComparingIndices([left + i, mid + 1 + j]);
      setStepDescription(`Comparing ${L[i]} and ${R[j]}`);
      await sleep(speed);
      
      if (L[i] <= R[j]) {
        // Highlight the element being placed
        setMergingIndices([k]);
        setStepDescription(`Placing ${L[i]} at position ${k}`);
        arr[k] = L[i];
        i++;
      } else {
        // Highlight the element being placed
        setMergingIndices([k]);
        setStepDescription(`Placing ${R[j]} at position ${k}`);
        arr[k] = R[j];
        j++;
      }
      
      // Update array state
      setArray([...arr]);
      k++;
      await sleep(speed/2);
      
      // Clear highlights
      setComparingIndices([]);
      setMergingIndices([]);
    }
    
    // Copy remaining elements of L[]
    while (i < n1) {
      setMergingIndices([k]);
      setStepDescription(`Copying remaining element ${L[i]} to position ${k}`);
      arr[k] = L[i];
      i++;
      k++;
      
      // Update array state
      setArray([...arr]);
      await sleep(speed/2);
      
      // Clear highlights
      setMergingIndices([]);
    }
    
    // Copy remaining elements of R[]
    while (j < n2) {
      setMergingIndices([k]);
      setStepDescription(`Copying remaining element ${R[j]} to position ${k}`);
      arr[k] = R[j];
      j++;
      k++;
      
      // Update array state
      setArray([...arr]);
      await sleep(speed/2);
      
      // Clear highlights
      setMergingIndices([]);
    }
    
    setStepDescription(`Merged subarray from index ${left} to ${right}`);
    await sleep(speed);
  };
  
  const resetSort = () => {
    setSorting(false);
    setSorted(false);
    setComparingIndices([]);
    setMergingIndices([]);
    setSubArrays([]);
    setStepDescription('');
    generateRandomArray();
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Merge Sort</Title>
        <Description>
          Merge Sort is an efficient, stable, comparison-based, divide and conquer sorting algorithm.
          It divides the input array into two halves, recursively sorts them, and then merges the sorted halves.
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
                  min="4" 
                  max="16" 
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
              
              <Button onClick={mergeSort} disabled={sorting || sorted}>
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
                  merging={mergingIndices.includes(index)}
                  sorted={sorted}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {value}
                </ArrayBar>
              ))}
            </ArrayContainer>
            
            {subArrays.length > 0 && (
              <SubArrayContainer>
                {subArrays.map((level, levelIndex) => (
                  <div key={levelIndex}>
                    <h4>Level {levelIndex + 1}</h4>
                    {level.map((subArray, subArrayIndex) => (
                      <ArrayRow 
                        key={`${levelIndex}-${subArrayIndex}`}
                        label={subArray.label}
                      >
                        {subArray.array.map((value, index) => (
                          <ArrayBar 
                            key={`${levelIndex}-${subArrayIndex}-${index}`}
                            height={value * 1.5}
                            sorted={false}
                            dividing={true}
                          >
                            {value}
                          </ArrayBar>
                        ))}
                      </ArrayRow>
                    ))}
                  </div>
                ))}
              </SubArrayContainer>
            )}
            
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
              <p>Merge Sort is one of the most efficient sorting algorithms with a consistent time complexity in all cases.</p>
              
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
                    <Td>O(n)</Td>
                  </tr>
                </tbody>
              </ComplexityTable>
            </ComplexityContainer>
          </>
        ) : (
          <CodeViewer title="Merge Sort Implementation (Java)" code={javaCode} />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default MergeSort; 