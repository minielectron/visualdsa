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
    if (props.blockStart) return '#ff9800';
    if (props.visited) return '#e0e0e0';
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

const JumpMarker = styled(motion.div)`
  position: absolute;
  top: -35px;
  left: ${props => props.position}px;
  transform: translateX(-50%);
  background: #ff9800;
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
    border-color: #ff9800 transparent transparent transparent;
  }
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

const JumpLine = styled(motion.div)`
  position: absolute;
  height: 2px;
  background: #ff9800;
  top: 25px;
  z-index: 1;
`;

const javaCode = `
public class JumpSearch {
  public static int jumpSearch(int[] arr, int x) {
    int n = arr.length;
    
    // Finding block size to be jumped
    int step = (int) Math.floor(Math.sqrt(n));
    
    // Finding the block where element is present (if it is present)
    int prev = 0;
    while (arr[Math.min(step, n) - 1] < x) {
      prev = step;
      step += (int) Math.floor(Math.sqrt(n));
      if (prev >= n)
        return -1;
    }
    
    // Doing a linear search for x in the block beginning with prev
    while (arr[prev] < x) {
      prev++;
      
      // If we reached next block or end of array, element is not present
      if (prev == Math.min(step, n))
        return -1;
    }
    
    // If element is found
    if (arr[prev] == x)
      return prev;
    
    return -1;
  }
  
  public static void main(String[] args) {
    int arr[] = { 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 };
    int x = 55;
    
    // Find the index of 'x' using Jump Search
    int index = jumpSearch(arr, x);
    
    // Print the index where 'x' is located
    System.out.println("Number " + x + " is at index " + index);
  }
}
`;

const JumpSearch = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState('');
  const [searching, setSearching] = useState(false);
  const [searchComplete, setSearchComplete] = useState(false);
  const [found, setFound] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [blockStartIndex, setBlockStartIndex] = useState(-1);
  const [visitedIndices, setVisitedIndices] = useState([]);
  const [jumpSize, setJumpSize] = useState(0);
  const [jumpPositions, setJumpPositions] = useState([]);
  const [message, setMessage] = useState('');
  const [arraySize, setArraySize] = useState(16);
  const [speed, setSpeed] = useState(500); // milliseconds per step
  const [activeTab, setActiveTab] = useState('visualization');
  const [stepDescription, setStepDescription] = useState('');
  
  // Initialize array with sorted values
  useEffect(() => {
    generateSortedArray();
  }, [arraySize]);
  
  const generateSortedArray = () => {
    // Generate a sorted array (Jump Search requires a sorted array)
    const newArray = [];
    let currentValue = Math.floor(Math.random() * 5); // Start with a small random number
    
    for (let i = 0; i < arraySize; i++) {
      newArray.push(currentValue);
      // Add a random increment to ensure the array is sorted
      currentValue += Math.floor(Math.random() * 10) + 1;
    }
    
    setArray(newArray);
    setSearchComplete(false);
    setFound(false);
    setVisitedIndices([]);
    setCurrentIndex(-1);
    setBlockStartIndex(-1);
    setJumpPositions([]);
    setJumpSize(Math.floor(Math.sqrt(newArray.length)));
    setStepDescription('');
  };
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  const jumpSearch = async () => {
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
    setBlockStartIndex(-1);
    setJumpPositions([]);
    setMessage('');
    
    const step = Math.floor(Math.sqrt(array.length));
    setJumpSize(step);
    
    setStepDescription(`Starting Jump Search with block size ${step}`);
    await sleep(speed);
    
    // Step 1: Find the block where the element might be present
    let prev = 0;
    let current = Math.min(step, array.length) - 1;
    
    setCurrentIndex(current);
    setBlockStartIndex(prev);
    setJumpPositions([prev, current]);
    setStepDescription(`Jumping to index ${current} and comparing with target ${searchTarget}`);
    
    await sleep(speed);
    setVisitedIndices([...visitedIndices, current]);
    
    while (array[current] < searchTarget) {
      prev = current + 1;
      current = Math.min(prev + step - 1, array.length - 1);
      
      if (prev >= array.length) {
        setStepDescription(`Reached end of array, target ${searchTarget} not found`);
        setSearchComplete(true);
        setSearching(false);
        return;
      }
      
      setBlockStartIndex(prev);
      setCurrentIndex(current);
      setJumpPositions([prev, current]);
      setStepDescription(`Jumping to index ${current} and comparing with target ${searchTarget}`);
      await sleep(speed);
      
      setVisitedIndices([...visitedIndices, current]);
    }
    
    setStepDescription(`Found block that may contain target: indices ${prev} to ${current}`);
    await sleep(speed);
    
    // Step 2: Perform linear search within the identified block
    setCurrentIndex(prev);
    setStepDescription(`Starting linear search from index ${prev}`);
    await sleep(speed);
    
    while (prev <= current) {
      setCurrentIndex(prev);
      setVisitedIndices([...visitedIndices, prev]);
      setStepDescription(`Checking index ${prev}: ${array[prev]} vs target ${searchTarget}`);
      await sleep(speed);
      
      if (array[prev] === searchTarget) {
        setStepDescription(`Found target ${searchTarget} at index ${prev}!`);
        setFound(true);
        setSearchComplete(true);
        setSearching(false);
        return;
      }
      
      if (array[prev] > searchTarget) {
        setStepDescription(`Array[${prev}] = ${array[prev]} > ${searchTarget}, target not found`);
        setSearchComplete(true);
        setSearching(false);
        return;
      }
      
      prev++;
    }
    
    setStepDescription(`Target ${searchTarget} not found in the array`);
    setSearchComplete(true);
    setSearching(false);
  };
  
  const resetSearch = () => {
    setSearching(false);
    setSearchComplete(false);
    setFound(false);
    setVisitedIndices([]);
    setCurrentIndex(-1);
    setBlockStartIndex(-1);
    setJumpPositions([]);
    setTarget('');
    setStepDescription('');
  };
  
  // Calculate the position of jump markers for visualization
  const getMarkerPosition = (index) => {
    const itemWidth = 50;  // Width of ArrayItem
    const gap = 8;         // Gap between items
    return (itemWidth + gap) * index + itemWidth / 2;
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Jump Search</Title>
        <Description>
          Jump Search is a searching algorithm for sorted arrays that works by checking fewer elements than linear search
          by jumping ahead by fixed steps and then performing a linear search within a smaller range.
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
              
              <Button onClick={jumpSearch} disabled={searching || !target}>
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
                <span>Block Start</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#e0e0e0" />
                <span>Visited</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="var(--secondary)" />
                <span>Target Found</span>
              </LegendItem>
            </Legend>
            
            {stepDescription && (
              <StepDescription>
                {stepDescription}
              </StepDescription>
            )}
            
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <p>Jump Size: √n = √{array.length} ≈ {jumpSize}</p>
            </div>
            
            <ArrayContainer style={{ paddingTop: '40px', paddingBottom: '30px' }}>
              {jumpPositions.length === 2 && (
                <>
                  <JumpMarker 
                    position={getMarkerPosition(jumpPositions[0])}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Start Block
                  </JumpMarker>
                  <JumpLine 
                    style={{
                      left: getMarkerPosition(jumpPositions[0]),
                      width: getMarkerPosition(jumpPositions[1]) - getMarkerPosition(jumpPositions[0]),
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </>
              )}
              
              {array.map((value, index) => (
                <ArrayItem 
                  key={index}
                  index={index}
                  current={index === currentIndex}
                  blockStart={index === blockStartIndex}
                  visited={visitedIndices.includes(index)}
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
              <p>Jump Search is faster than Linear Search but slower than Binary Search.</p>
              
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
                      <div>Best Case: O(1) — if the first element checked is the target</div>
                      <div>Average and Worst Case: O(√n) — where n is the length of the array</div>
                    </Td>
                    <Td>O(1) — constant space requirement</Td>
                  </tr>
                </tbody>
              </ComplexityTable>
              
              <div style={{ marginTop: '1rem' }}>
                <p>The optimal jump step size is √n for a sorted array of size n.</p>
                <p>Jump Search is useful when:</p>
                <ul>
                  <li>Searching in sorted arrays</li>
                  <li>The array is large and the element being searched is somewhere near the beginning</li>
                  <li>Jumping back is costly compared to sequential access (e.g., on magnetic tapes)</li>
                </ul>
              </div>
            </ComplexityContainer>
          </>
        ) : (
          <CodeViewer title="Jump Search Implementation (Java)" code={javaCode} />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default JumpSearch; 