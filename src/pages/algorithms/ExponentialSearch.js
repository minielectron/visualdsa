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
  position: relative;
  padding-top: 40px;
  padding-bottom: 30px;
`;

const ArrayItem = styled(motion.div)`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => {
    if (props.target) return 'var(--secondary)';
    if (props.current) return 'var(--primary)';
    if (props.bound) return '#ff9800';
    if (props.visited) return '#e0e0e0';
    if (props.range) return '#e3f2fd';
    return '#f5f5f5';
  }};
  border-radius: var(--border-radius);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-weight: ${props => props.target ? 'bold' : 'normal'};
  position: relative;
  
  &:after {
    content: '${props => props.index !== undefined ? props.index : ''}';
    position: absolute;
    bottom: -20px;
    font-size: 0.8rem;
    color: var(--text-secondary);
  }
`;

const PointerMarker = styled(motion.div)`
  position: absolute;
  top: -35px;
  left: ${props => props.position}px;
  transform: translateX(-50%);
  background: ${props => props.color || '#4caf50'};
  color: white;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 1;
  
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${props => props.color || '#4caf50'} transparent transparent transparent;
  }
`;

const SearchRangeLine = styled(motion.div)`
  position: absolute;
  height: 2px;
  background: #9c27b0;
  top: 25px;
  z-index: 1;
`;

const PhaseContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
  font-weight: bold;
  color: var(--primary);
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

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 60px;
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

const Legend = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LegendColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: var(--border-radius);
  background: ${props => props.color || '#ddd'};
`;

const javaCode = `
public class ExponentialSearch {
    /**
     * Performs binary search on a sorted array within given bounds
     * @param arr The sorted array
     * @param left The left bound
     * @param right The right bound
     * @param x The value to search for
     * @return Index of x if found, otherwise -1
     */
    public static int binarySearch(int[] arr, int left, int right, int x) {
        if (right >= left) {
            int mid = left + (right - left) / 2;
            
            // If the element is present at the middle
            if (arr[mid] == x)
                return mid;
                
            // If element is smaller than mid, search in left subarray
            if (arr[mid] > x)
                return binarySearch(arr, left, mid - 1, x);
                
            // Else search in right subarray
            return binarySearch(arr, mid + 1, right, x);
        }
        
        // Element not present in array
        return -1;
    }
    
    /**
     * Performs exponential search on a sorted array
     * @param arr The sorted array
     * @param n The size of the array
     * @param x The value to search for
     * @return Index of x if found, otherwise -1
     */
    public static int exponentialSearch(int[] arr, int n, int x) {
        // If x is present at the first position
        if (arr[0] == x)
            return 0;
            
        // Find range for binary search by repeated doubling
        int i = 1;
        while (i < n && arr[i] <= x)
            i = i * 2;
            
        // Call binary search for the found range
        return binarySearch(arr, i / 2, Math.min(i, n - 1), x);
    }
    
    // Driver code
    public static void main(String[] args) {
        int[] arr = {2, 3, 4, 10, 40, 60, 80, 100, 120, 140, 170};
        int x = 80;
        int result = exponentialSearch(arr, arr.length, x);
        
        if (result < 0)
            System.out.println("Element not found in the array");
        else
            System.out.println("Element found at index " + result);
    }
}
`;

const ExponentialSearch = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState('');
  const [searching, setSearching] = useState(false);
  const [searchComplete, setSearchComplete] = useState(false);
  const [found, setFound] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [boundIndex, setBoundIndex] = useState(-1);
  const [visitedIndices, setVisitedIndices] = useState([]);
  const [searchRange, setSearchRange] = useState([]);
  const [message, setMessage] = useState('');
  const [arraySize, setArraySize] = useState(16);
  const [speed, setSpeed] = useState(500); // milliseconds per step
  const [activeTab, setActiveTab] = useState('visualization');
  const [stepDescription, setStepDescription] = useState('');
  const [phase, setPhase] = useState(''); // 'exponential' or 'binary'
  const [binarySearchParams, setBinarySearchParams] = useState({ left: -1, right: -1 });
  
  // Initialize array with sorted values
  useEffect(() => {
    generateSortedArray();
  }, [arraySize]);
  
  const generateSortedArray = () => {
    // Generate a sorted array
    const newArray = [];
    let currentValue = Math.floor(Math.random() * 5); // Start with a small random number
    
    for (let i = 0; i < arraySize; i++) {
      newArray.push(currentValue);
      // Add a random increment to ensure the array is sorted
      currentValue += Math.floor(Math.random() * 10) + 1;
    }
    
    setArray(newArray);
    resetSearch();
  };
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  const resetSearch = () => {
    setSearching(false);
    setSearchComplete(false);
    setFound(false);
    setVisitedIndices([]);
    setCurrentIndex(-1);
    setBoundIndex(-1);
    setSearchRange([]);
    setTarget('');
    setStepDescription('');
    setPhase('');
    setBinarySearchParams({ left: -1, right: -1 });
    setMessage('');
  };
  
  const binarySearch = async (left, right, x) => {
    setBinarySearchParams({ left, right });
    setPhase('binary');
    setStepDescription(`Starting Binary Search between indices ${left} and ${right}`);
    await sleep(speed);
    
    while (left <= right) {
      setBinarySearchParams({ left, right });
      
      const mid = Math.floor(left + (right - left) / 2);
      setCurrentIndex(mid);
      setVisitedIndices([...visitedIndices, mid]);
      
      setStepDescription(`Checking mid element at index ${mid}: ${array[mid]} vs target ${x}`);
      await sleep(speed);
      
      if (array[mid] === x) {
        setStepDescription(`Found target ${x} at index ${mid}!`);
        setFound(true);
        setSearchComplete(true);
        setSearching(false);
        return mid;
      }
      
      if (array[mid] > x) {
        setStepDescription(`${array[mid]} > ${x}, searching in the left half`);
        right = mid - 1;
      } else {
        setStepDescription(`${array[mid]} < ${x}, searching in the right half`);
        left = mid + 1;
      }
      
      await sleep(speed);
    }
    
    setStepDescription(`Binary search complete. Target ${x} not found in the range.`);
    return -1;
  };
  
  const exponentialSearch = async () => {
    if (searching || !target) return;
    
    const searchTarget = parseInt(target);
    if (isNaN(searchTarget)) {
      setMessage("Please enter a valid number");
      return;
    }
    
    setSearching(true);
    setSearchComplete(false);
    setFound(false);
    setVisitedIndices([]);
    setCurrentIndex(-1);
    setBoundIndex(-1);
    setSearchRange([]);
    setMessage('');
    setPhase('exponential');
    
    // Start exponential search
    const n = array.length;
    
    // Check if the first element is the target
    setCurrentIndex(0);
    setVisitedIndices([0]);
    setStepDescription(`Checking if the first element (${array[0]}) is the target ${searchTarget}`);
    await sleep(speed);
    
    if (array[0] === searchTarget) {
      setStepDescription(`Found target ${searchTarget} at the first position (index 0)!`);
      setFound(true);
      setSearchComplete(true);
      setSearching(false);
      return;
    }
    
    // Find range for binary search by repeated doubling
    let i = 1;
    setStepDescription(`Starting exponential probing from index 1`);
    await sleep(speed);
    
    while (i < n && array[i] <= searchTarget) {
      setCurrentIndex(i);
      setBoundIndex(i);
      setVisitedIndices([...visitedIndices, i]);
      
      const nextBound = Math.min(i * 2, n - 1);
      setStepDescription(`Current bound: ${i}. Next bound will be: ${nextBound}`);
      await sleep(speed);
      
      i = i * 2;
    }
    
    // Ensure i is within array bounds
    i = Math.min(i, n);
    
    // Set the search range for binary search
    const left = i / 2;
    const right = Math.min(i, n - 1);
    setSearchRange([left, right]);
    
    setStepDescription(`Found range for binary search: [${left}, ${right}]`);
    await sleep(speed);
    
    // Call binary search for the found range
    const result = await binarySearch(Math.floor(left), right, searchTarget);
    
    if (result === -1) {
      setSearchComplete(true);
      setSearching(false);
    }
  };
  
  // Calculate the position of pointer markers for visualization
  const getMarkerPosition = (index) => {
    const itemWidth = 50;  // Width of ArrayItem
    const gap = 8;         // Gap between items
    return (itemWidth + gap) * index + itemWidth / 2;
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Exponential Search</Title>
        <Description>
          Exponential Search is an algorithm for searching sorted arrays that works by finding a range where the target might be and then 
          performing a binary search within that range. It's useful for unbounded or infinite arrays.
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
                  min="8" 
                  max="20" 
                  value={arraySize} 
                  onChange={(e) => setArraySize(parseInt(e.target.value))}
                  disabled={searching}
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
                  disabled={searching}
                />
                <span>{speed}ms</span>
              </SpeedControl>
              
              <InputContainer>
                <span>Target:</span>
                <Input 
                  type="number"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  disabled={searching}
                />
              </InputContainer>
              
              <Button onClick={generateSortedArray} disabled={searching}>
                Generate New Array
              </Button>
              
              <Button onClick={exponentialSearch} disabled={searching || !target}>
                {searching ? 'Searching...' : 'Search'}
              </Button>
              
              <Button onClick={resetSearch} disabled={searching}>
                Reset
              </Button>
            </ControlsContainer>
            
            <Legend>
              <LegendItem>
                <LegendColor color="var(--primary)" />
                <span>Current Element</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#ff9800" />
                <span>Bound / Binary Search Limits</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#e0e0e0" />
                <span>Visited</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#e3f2fd" />
                <span>Search Range</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="var(--secondary)" />
                <span>Target Found</span>
              </LegendItem>
            </Legend>
            
            {phase && (
              <PhaseContainer>
                {phase === 'exponential' ? 'Phase 1: Exponential Probing' : 'Phase 2: Binary Search'}
              </PhaseContainer>
            )}
            
            {stepDescription && (
              <StepDescription>
                {stepDescription}
              </StepDescription>
            )}
            
            <ArrayContainer>
              {/* Markers for binary search */}
              {phase === 'binary' && binarySearchParams.left !== -1 && binarySearchParams.right !== -1 && (
                <>
                  <PointerMarker 
                    position={getMarkerPosition(binarySearchParams.left)}
                    color="#ff9800"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    left={binarySearchParams.left}
                  </PointerMarker>
                  
                  <PointerMarker 
                    position={getMarkerPosition(binarySearchParams.right)}
                    color="#ff9800"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    right={binarySearchParams.right}
                  </PointerMarker>
                  
                  <SearchRangeLine 
                    style={{
                      left: getMarkerPosition(binarySearchParams.left),
                      width: getMarkerPosition(binarySearchParams.right) - getMarkerPosition(binarySearchParams.left),
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </>
              )}
              
              {/* Marker for exponential bound */}
              {phase === 'exponential' && boundIndex !== -1 && (
                <PointerMarker 
                  position={getMarkerPosition(boundIndex)}
                  color="#ff9800"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  bound={boundIndex}
                </PointerMarker>
              )}
              
              {/* Search range indicator */}
              {searchRange.length === 2 && (
                <SearchRangeLine 
                  style={{
                    left: getMarkerPosition(searchRange[0]),
                    width: getMarkerPosition(searchRange[1]) - getMarkerPosition(searchRange[0]),
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              )}
              
              {array.map((value, index) => (
                <ArrayItem 
                  key={index}
                  index={index}
                  current={index === currentIndex}
                  bound={phase === 'binary' ? (index === binarySearchParams.left || index === binarySearchParams.right) : index === boundIndex}
                  visited={visitedIndices.includes(index)}
                  range={searchRange.length === 2 && index >= searchRange[0] && index <= searchRange[1]}
                  target={found && index === currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  {value}
                </ArrayItem>
              ))}
            </ArrayContainer>
            
            {searchComplete && (
              <MessageContainer>
                {found ? (
                  <div>Target {target} found at index {currentIndex}!</div>
                ) : (
                  <div>Target {target} not found in the array.</div>
                )}
              </MessageContainer>
            )}
            
            <ComplexityContainer>
              <ComplexityTitle>Algorithm Complexity</ComplexityTitle>
              <p>Exponential Search combines the idea of exponential growth to find a range and binary search to find the target within that range.</p>
              
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
                      <div>Best Case: O(1) — if the target is in the first position</div>
                      <div>Average and Worst Case: O(log n) — where n is the length of the array</div>
                    </Td>
                    <Td>O(1) — constant space requirement (iterative implementation)</Td>
                  </tr>
                </tbody>
              </ComplexityTable>
              
              <div style={{ marginTop: '1rem' }}>
                <p>Exponential Search is particularly useful when:</p>
                <ul>
                  <li>The array is sorted but unbounded (potentially infinite)</li>
                  <li>The target element is likely to be near the beginning of the array</li>
                  <li>You want better performance than binary search for targets near the start</li>
                </ul>
                <p>The algorithm operates in two phases:</p>
                <ol>
                  <li><strong>Exponential Probing:</strong> Find a range where the target might be by repeatedly doubling an index i (1, 2, 4, 8, 16, ...) until arr[i] exceeds the target value.</li>
                  <li><strong>Binary Search:</strong> Perform a binary search between i/2 and min(i, n-1) to find the exact position of the target.</li>
                </ol>
              </div>
            </ComplexityContainer>
          </>
        ) : (
          <CodeViewer title="Exponential Search Implementation (Java)" code={javaCode} />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default ExponentialSearch; 