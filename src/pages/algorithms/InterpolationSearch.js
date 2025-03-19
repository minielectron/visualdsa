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
    if (props.left) return '#ff9800';
    if (props.right) return '#4caf50';
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

const FormulaContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: var(--border-radius);
  font-family: 'Courier New', monospace;
  text-align: center;
  font-size: 1.1rem;
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

const CalculationStep = styled.div`
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: ${props => props.highlight ? '#fffde7' : 'transparent'};
  border-radius: var(--border-radius);
  transition: background 0.3s;
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

const SearchRangeLine = styled(motion.div)`
  position: absolute;
  height: 2px;
  background: #9c27b0;
  top: 25px;
  z-index: 1;
`;

const javaCode = `
public class InterpolationSearch {
    /**
     * Interpolation Search algorithm implementation
     * @param arr Sorted array to search in
     * @param x Target value to search for
     * @return Index of the target if found, -1 otherwise
     */
    public static int interpolationSearch(int[] arr, int x) {
        // Find indexes of two corners
        int lo = 0, hi = arr.length - 1;
        
        // Since array is sorted, an element present
        // in array must be in range defined by corner
        while (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
            if (lo == hi) {
                if (arr[lo] == x) return lo;
                return -1;
            }
            
            // Probing the position with keeping
            // uniform distribution in mind.
            int pos = lo + ((x - arr[lo]) * (hi - lo)) / (arr[hi] - arr[lo]);
            
            // Condition of target found
            if (arr[pos] == x)
                return pos;
                
            // If x is larger, x is in right sub array
            if (arr[pos] < x)
                lo = pos + 1;
                
            // If x is smaller, x is in left sub array
            else
                hi = pos - 1;
        }
        return -1;
    }
    
    // Driver method
    public static void main(String[] args) {
        int[] arr = {10, 12, 13, 16, 18, 19, 20, 21, 22, 23,
                      24, 33, 35, 42, 47};
                      
        int x = 18; // Element to be searched
        int index = interpolationSearch(arr, x);
        
        // If element was found
        if (index != -1)
            System.out.println("Element found at index " + index);
        else
            System.out.println("Element not found.");
    }
}
`;

const InterpolationSearch = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState('');
  const [searching, setSearching] = useState(false);
  const [searchComplete, setSearchComplete] = useState(false);
  const [found, setFound] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [leftIndex, setLeftIndex] = useState(-1);
  const [rightIndex, setRightIndex] = useState(-1);
  const [visitedIndices, setVisitedIndices] = useState([]);
  const [message, setMessage] = useState('');
  const [arraySize, setArraySize] = useState(16);
  const [speed, setSpeed] = useState(500); // milliseconds per step
  const [activeTab, setActiveTab] = useState('visualization');
  const [stepDescription, setStepDescription] = useState('');
  const [calculationSteps, setCalculationSteps] = useState([]);
  const [currentCalculationStep, setCurrentCalculationStep] = useState(-1);
  
  // Initialize array with sorted values
  useEffect(() => {
    generateSortedArray();
  }, [arraySize]);
  
  const generateSortedArray = () => {
    // Generate a sorted array with increasing differences between elements
    // This is ideal for interpolation search to show its benefits
    const newArray = [];
    let currentValue = Math.floor(Math.random() * 5); // Start with a small random number
    
    for (let i = 0; i < arraySize; i++) {
      newArray.push(currentValue);
      // Add an increasing increment to ensure the array has non-uniform distribution
      // which better shows the advantages of interpolation search
      currentValue += Math.floor(Math.random() * (i + 5)) + 1;
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
    setLeftIndex(-1);
    setRightIndex(-1);
    setTarget('');
    setStepDescription('');
    setCalculationSteps([]);
    setCurrentCalculationStep(-1);
    setMessage('');
  };
  
  const interpolationSearch = async () => {
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
    setLeftIndex(-1);
    setRightIndex(-1);
    setCalculationSteps([]);
    setCurrentCalculationStep(-1);
    setMessage('');
    
    // Start interpolation search
    let lo = 0;
    let hi = array.length - 1;
    
    setLeftIndex(lo);
    setRightIndex(hi);
    
    // Initial step description
    setStepDescription(`Starting Interpolation Search for target ${searchTarget}`);
    await sleep(speed);
    
    while (lo <= hi && searchTarget >= array[lo] && searchTarget <= array[hi]) {
      // Set bounds
      setLeftIndex(lo);
      setRightIndex(hi);
      
      // If there's only one element left
      if (lo === hi) {
        setCurrentIndex(lo);
        setVisitedIndices([...visitedIndices, lo]);
        
        if (array[lo] === searchTarget) {
          setStepDescription(`Found target ${searchTarget} at index ${lo}!`);
          setFound(true);
          setSearchComplete(true);
          setSearching(false);
          return;
        } else {
          setStepDescription(`Element at index ${lo} is ${array[lo]}, not the target ${searchTarget}.`);
          setSearchComplete(true);
          setSearching(false);
          return;
        }
      }
      
      // Calculate the probe position
      let pos = Math.floor(lo + ((searchTarget - array[lo]) * (hi - lo)) / (array[hi] - array[lo]));
      
      // Safe bounds checking
      pos = Math.max(lo, Math.min(pos, hi));
      
      const calculationDetails = [
        `lo = ${lo}, hi = ${hi}`,
        `target = ${searchTarget}, arr[lo] = ${array[lo]}, arr[hi] = ${array[hi]}`,
        `pos = lo + ((target - arr[lo]) * (hi - lo)) / (arr[hi] - arr[lo])`,
        `pos = ${lo} + ((${searchTarget} - ${array[lo]}) * (${hi} - ${lo})) / (${array[hi]} - ${array[lo]})`,
        `pos = ${lo} + ((${searchTarget - array[lo]}) * ${hi - lo}) / ${array[hi] - array[lo]}`,
        `pos = ${lo} + (${(searchTarget - array[lo]) * (hi - lo)}) / ${array[hi] - array[lo]}`,
        `pos = ${lo} + ${((searchTarget - array[lo]) * (hi - lo)) / (array[hi] - array[lo])}`,
        `pos = ${pos} (rounded to integer)`
      ];
      
      setCalculationSteps(calculationDetails);
      
      // Show calculation steps one by one
      for (let i = 0; i < calculationDetails.length; i++) {
        setCurrentCalculationStep(i);
        await sleep(speed / 2);
      }
      
      setStepDescription(`Calculated position to check: index ${pos}`);
      await sleep(speed);
      
      setCurrentIndex(pos);
      setVisitedIndices([...visitedIndices, pos]);
      
      setStepDescription(`Comparing arr[${pos}] = ${array[pos]} with target ${searchTarget}`);
      await sleep(speed);
      
      // If element is found
      if (array[pos] === searchTarget) {
        setStepDescription(`Found target ${searchTarget} at index ${pos}!`);
        setFound(true);
        setSearchComplete(true);
        setSearching(false);
        return;
      }
      
      // If element is larger, search in left subarray
      if (array[pos] > searchTarget) {
        setStepDescription(`${array[pos]} > ${searchTarget}, searching in the left subarray`);
        hi = pos - 1;
      } 
      // If element is smaller, search in right subarray
      else {
        setStepDescription(`${array[pos]} < ${searchTarget}, searching in the right subarray`);
        lo = pos + 1;
      }
      
      await sleep(speed);
      setCalculationSteps([]);
      setCurrentCalculationStep(-1);
    }
    
    // Target not found
    setStepDescription(`Target ${searchTarget} is outside the range of values in the array or not present.`);
    setSearchComplete(true);
    setSearching(false);
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
        <Title>Interpolation Search</Title>
        <Description>
          Interpolation Search is an improved variant of Binary Search for uniformly distributed sorted arrays. 
          Instead of always checking the middle element, it uses a formula to estimate the most likely position of the target value.
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
              
              <Button onClick={interpolationSearch} disabled={searching || !target}>
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
                <span>Left Pointer</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#4caf50" />
                <span>Right Pointer</span>
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
            
            {calculationSteps.length > 0 && (
              <FormulaContainer>
                <h4>Position Calculation:</h4>
                {calculationSteps.map((step, index) => (
                  <CalculationStep 
                    key={index} 
                    highlight={index === currentCalculationStep}
                  >
                    {step}
                  </CalculationStep>
                ))}
              </FormulaContainer>
            )}
            
            <ArrayContainer>
              {leftIndex !== -1 && rightIndex !== -1 && (
                <>
                  <PointerMarker 
                    position={getMarkerPosition(leftIndex)}
                    color="#ff9800"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    lo={leftIndex}
                  </PointerMarker>
                  
                  <PointerMarker 
                    position={getMarkerPosition(rightIndex)}
                    color="#4caf50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    hi={rightIndex}
                  </PointerMarker>
                  
                  <SearchRangeLine 
                    style={{
                      left: getMarkerPosition(leftIndex),
                      width: getMarkerPosition(rightIndex) - getMarkerPosition(leftIndex),
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </>
              )}
              
              {currentIndex !== -1 && (
                <PointerMarker 
                  position={getMarkerPosition(currentIndex)}
                  color="var(--primary)"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  pos={currentIndex}
                </PointerMarker>
              )}
              
              {array.map((value, index) => (
                <ArrayItem 
                  key={index}
                  index={index}
                  current={index === currentIndex}
                  left={index === leftIndex}
                  right={index === rightIndex}
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
              <p>Interpolation Search provides improved performance over Binary Search, especially for uniformly distributed data.</p>
              
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
                      <div>Best Case: O(1) — if the first position checked has the target</div>
                      <div>Average Case: O(log(log n)) — for uniformly distributed data</div>
                      <div>Worst Case: O(n) — when elements are exponentially distributed</div>
                    </Td>
                    <Td>O(1) — constant space requirement</Td>
                  </tr>
                </tbody>
              </ComplexityTable>
              
              <div style={{ marginTop: '1rem' }}>
                <p>The formula for the probe position in Interpolation Search is:</p>
                <p><strong>pos = lo + ((x - arr[lo]) * (hi - lo)) / (arr[hi] - arr[lo])</strong></p>
                <p>Interpolation Search is particularly useful when:</p>
                <ul>
                  <li>The array is sorted</li>
                  <li>Elements are uniformly distributed</li>
                  <li>The array is large</li>
                </ul>
                <p>It can be significantly faster than Binary Search for large, uniformly distributed arrays, but can perform worse when the distribution is skewed.</p>
              </div>
            </ComplexityContainer>
          </>
        ) : (
          <CodeViewer title="Interpolation Search Implementation (Java)" code={javaCode} />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default InterpolationSearch; 