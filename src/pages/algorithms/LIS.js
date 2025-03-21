import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  color: var(--primary);
  margin: 2rem 0 1rem;
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 0.5rem;
`;

const InputSection = styled.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`;

const Button = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 1rem;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: var(--disabled);
    cursor: not-allowed;
  }
`;

const VisualizationContainer = styled.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  overflow-x: auto;
`;

const ArrayContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const ArrayElement = styled(motion.div)`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--border);
  border-radius: var(--border-radius);
  margin: 0 4px;
  font-weight: 500;
  background-color: ${props => props.active ? 'rgba(var(--primary-rgb), 0.2)' : 
                              props.included ? 'rgba(var(--success-rgb), 0.2)' : 
                              'var(--surface)'};
  position: relative;
`;

const DPContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const SequenceElement = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 4px;
`;

const DPValue = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--border);
  border-radius: var(--border-radius);
  margin-top: 8px;
  font-weight: 500;
  background-color: ${props => props.active ? 'rgba(var(--primary-rgb), 0.2)' : 
                             props.optimal ? 'rgba(var(--success-rgb), 0.2)' : 
                             'var(--surface)'};
`;

const Arrow = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid ${props => props.active ? 'var(--primary)' : 'transparent'};
`;

const InfoText = styled.div`
  margin: 1rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Result = styled.div`
  background: var(--surface-variant);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExplanationCard = styled.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 1rem;
`;

const CodeBlock = styled.pre`
  background: var(--code-bg);
  color: var(--code-text);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
`;

const Note = styled.div`
  background: rgba(var(--info-rgb), 0.1);
  border-left: 4px solid var(--info);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
`;

const VisualizationControls = styled.div`
  display: flex;
  margin: 1rem 0;
  gap: 1rem;
  flex-wrap: wrap;
`;

const AnimationSpeed = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
`;

const StepCounter = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const LIS = () => {
  const [array, setArray] = useState('10,22,9,33,21,50,41,60,80');
  const [parsedArray, setParsedArray] = useState([]);
  const [dp, setDp] = useState([]);
  const [prev, setPrev] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [comparedIndex, setComparedIndex] = useState(null);
  const [lisLength, setLisLength] = useState(0);
  const [lisSequence, setLisSequence] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(1000);
  const [stepsLog, setStepsLog] = useState([]);
  
  const animationRef = useRef(null);
  
  // Initialize arrays from input
  const initializeArrays = () => {
    const parsed = array.split(',').map(num => parseInt(num.trim()));
    setParsedArray(parsed);
    
    // Initialize dp array with all 1s
    const dpArray = Array(parsed.length).fill(1);
    setDp(dpArray);
    
    // Initialize prev array with -1s
    const prevArray = Array(parsed.length).fill(-1);
    setPrev(prevArray);
    
    return { parsed, dpArray, prevArray };
  };
  
  // Calculate LIS
  const calculateLIS = () => {
    const { parsed, dpArray, prevArray } = initializeArrays();
    const steps = [];
    
    // For each element in the array
    for (let i = 0; i < parsed.length; i++) {
      steps.push({
        type: 'consider',
        index: i,
        message: `Considering element at index ${i}: ${parsed[i]}`
      });
      
      // Compare with all previous elements
      for (let j = 0; j < i; j++) {
        steps.push({
          type: 'compare',
          index: i,
          comparedWith: j,
          message: `Comparing elements at index ${i} (${parsed[i]}) and index ${j} (${parsed[j]})`
        });
        
        // If current element is greater than the previous one
        if (parsed[i] > parsed[j]) {
          steps.push({
            type: 'check',
            index: i,
            comparedWith: j,
            message: `${parsed[i]} > ${parsed[j]}, checking if including ${parsed[j]} improves the LIS ending at ${parsed[i]}`
          });
          
          // If including previous element creates a longer increasing subsequence
          if (dpArray[j] + 1 > dpArray[i]) {
            dpArray[i] = dpArray[j] + 1;
            prevArray[i] = j;
            
            steps.push({
              type: 'update',
              index: i,
              comparedWith: j,
              newValue: dpArray[i],
              newPrev: j,
              message: `Improved! Setting dp[${i}] = dp[${j}] + 1 = ${dpArray[i]} and prev[${i}] = ${j}`
            });
          } else {
            steps.push({
              type: 'skip',
              index: i,
              comparedWith: j,
              message: `No improvement. dp[${j}] + 1 (${dpArray[j] + 1}) is not greater than current dp[${i}] (${dpArray[i]})`
            });
          }
        } else {
          steps.push({
            type: 'skip',
            index: i,
            comparedWith: j,
            message: `${parsed[i]} ≤ ${parsed[j]}, cannot extend subsequence`
          });
        }
      }
    }
    
    // Find the longest subsequence length and its ending index
    let maxLength = 0;
    let endIndex = 0;
    
    for (let i = 0; i < dpArray.length; i++) {
      if (dpArray[i] > maxLength) {
        maxLength = dpArray[i];
        endIndex = i;
        
        steps.push({
          type: 'max',
          index: i,
          maxLength,
          message: `Found a new maximum LIS length: ${maxLength} ending at index ${i} (${parsed[i]})`
        });
      }
    }
    
    // Reconstruct the subsequence
    const sequence = [];
    let currentIndex = endIndex;
    
    while (currentIndex !== -1) {
      sequence.unshift(parsed[currentIndex]);
      steps.push({
        type: 'backtrack',
        index: currentIndex,
        sequence: [...sequence],
        message: `Adding element at index ${currentIndex} (${parsed[currentIndex]}) to the LIS`
      });
      currentIndex = prevArray[currentIndex];
    }
    
    setDp(dpArray);
    setPrev(prevArray);
    setLisLength(maxLength);
    setLisSequence(sequence);
    setStepsLog(steps);
    setTotalSteps(steps.length);
    
    return { dpArray, prevArray, maxLength, sequence, steps };
  };
  
  // Animation step handler
  const animateStep = (stepIndex) => {
    if (stepIndex >= stepsLog.length) {
      setIsAnimating(false);
      setActiveIndex(null);
      setComparedIndex(null);
      return;
    }
    
    const step = stepsLog[stepIndex];
    setCurrentStep(stepIndex + 1);
    
    switch (step.type) {
      case 'consider':
        setActiveIndex(step.index);
        setComparedIndex(null);
        break;
      case 'compare':
      case 'check':
      case 'update':
      case 'skip':
        setActiveIndex(step.index);
        setComparedIndex(step.comparedWith);
        break;
      case 'max':
        setActiveIndex(step.index);
        setComparedIndex(null);
        break;
      case 'backtrack':
        setActiveIndex(step.index);
        setComparedIndex(null);
        break;
      default:
        break;
    }
    
    // Schedule next step
    animationRef.current = setTimeout(() => {
      animateStep(stepIndex + 1);
    }, animationSpeed);
  };
  
  // Start visualization
  const startVisualization = () => {
    // Reset state
    setIsAnimating(true);
    setCurrentStep(0);
    setActiveIndex(null);
    setComparedIndex(null);
    setLisLength(0);
    setLisSequence([]);
    
    // Calculate and prepare animation
    const { steps } = calculateLIS();
    
    // Start animation
    if (animationRef.current) clearTimeout(animationRef.current);
    animationRef.current = setTimeout(() => {
      animateStep(0);
    }, 500);
  };
  
  // Stop animation
  const stopVisualization = () => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }
    setIsAnimating(false);
  };
  
  // Reset visualization
  const resetVisualization = () => {
    stopVisualization();
    setCurrentStep(0);
    setActiveIndex(null);
    setComparedIndex(null);
    setParsedArray([]);
    setDp([]);
    setPrev([]);
    setLisLength(0);
    setLisSequence([]);
    setStepsLog([]);
  };
  
  // Handle array input change
  const handleArrayChange = (e) => {
    setArray(e.target.value);
  };
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);
  
  return (
    <PageContainer>
      <Header>
        <Title>Longest Increasing Subsequence</Title>
        <Description>
          A classic dynamic programming problem to find the longest subsequence in which the elements are in strictly increasing order.
        </Description>
      </Header>
      
      <InputSection>
        <SectionTitle>Input</SectionTitle>
        <InputGroup>
          <Label htmlFor="array">Array (comma-separated numbers):</Label>
          <Input 
            id="array"
            value={array}
            onChange={handleArrayChange}
            disabled={isAnimating}
          />
        </InputGroup>
        
        <VisualizationControls>
          <Button onClick={startVisualization} disabled={isAnimating || !array}>
            Start Visualization
          </Button>
          <Button onClick={stopVisualization} disabled={!isAnimating}>
            Stop
          </Button>
          <Button onClick={resetVisualization} disabled={isAnimating}>
            Reset
          </Button>
          
          <AnimationSpeed>
            <Label htmlFor="speed">Speed:</Label>
            <Input
              id="speed"
              type="range"
              min="100"
              max="2000"
              step="100"
              value={2100 - animationSpeed} // Invert for intuitive slider
              onChange={(e) => setAnimationSpeed(2100 - e.target.value)}
              disabled={isAnimating}
              style={{ width: '150px' }}
            />
          </AnimationSpeed>
        </VisualizationControls>
        
        {currentStep > 0 && (
          <StepCounter>
            Step {currentStep} of {totalSteps}
          </StepCounter>
        )}
        
        {currentStep > 0 && currentStep <= stepsLog.length && (
          <InfoText>
            {stepsLog[currentStep - 1].message}
          </InfoText>
        )}
      </InputSection>
      
      <VisualizationContainer>
        <SectionTitle>Array</SectionTitle>
        <ArrayContainer>
          {parsedArray.map((value, index) => (
            <ArrayElement 
              key={index}
              active={index === activeIndex}
              included={lisSequence.includes(value)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {value}
              {index === comparedIndex && <Arrow active />}
            </ArrayElement>
          ))}
        </ArrayContainer>
        
        <SectionTitle>DP Array</SectionTitle>
        <DPContainer>
          {parsedArray.map((value, index) => (
            <SequenceElement key={index}>
              <ArrayElement
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {value}
              </ArrayElement>
              <DPValue
                active={index === activeIndex}
                optimal={index === activeIndex && currentStep > 0 && lisSequence.includes(value)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {dp[index] || 1}
              </DPValue>
            </SequenceElement>
          ))}
        </DPContainer>
        
        {lisLength > 0 && (
          <Result>
            <span>Longest Increasing Subsequence: </span>
            <strong>{lisSequence.join(', ')} (Length: {lisLength})</strong>
          </Result>
        )}
      </VisualizationContainer>
      
      <SectionTitle>How It Works</SectionTitle>
      <ExplanationCard>
        <p>
          The Longest Increasing Subsequence (LIS) problem aims to find the length of the longest subsequence 
          in an array such that all elements of the subsequence are in strictly increasing order.
        </p>
        
        <h3>Dynamic Programming Approach</h3>
        <p>
          We can solve this problem using dynamic programming by defining:
        </p>
        <ul>
          <li>dp[i] = the length of the longest increasing subsequence ending at index i</li>
        </ul>
        
        <h3>The Algorithm</h3>
        <CodeBlock>
{`// Initialize dp array
for (let i = 0; i < array.length; i++) {
  dp[i] = 1;  // Every element is at least a subsequence of length 1
  prev[i] = -1;  // Initialize prev array for backtracking
}

// Fill dp array
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] > array[j] && dp[j] + 1 > dp[i]) {
      dp[i] = dp[j] + 1;  // Update LIS length
      prev[i] = j;  // Store previous element in the sequence
    }
  }
}

// Find the length of the LIS and its ending index
let maxLength = 0;
let endIndex = 0;

for (let i = 0; i < dp.length; i++) {
  if (dp[i] > maxLength) {
    maxLength = dp[i];
    endIndex = i;
  }
}

// Reconstruct the subsequence
const sequence = [];
let currentIndex = endIndex;

while (currentIndex !== -1) {
  sequence.unshift(array[currentIndex]);
  currentIndex = prev[currentIndex];
}

return { maxLength, sequence };`}
        </CodeBlock>
        
        <h3>Time and Space Complexity</h3>
        <ul>
          <li><strong>Time Complexity:</strong> O(n²) where n is the length of the array</li>
          <li><strong>Space Complexity:</strong> O(n) for the dp and prev arrays</li>
        </ul>
        
        <Note>
          <p>
            There exists a more efficient O(n log n) solution to the LIS problem using binary search,
            but the dynamic programming approach shown here is more intuitive and easier to visualize.
          </p>
          <p>
            Applications of LIS include:
          </p>
          <ul>
            <li>Box stacking problems</li>
            <li>Building bridges</li>
            <li>Sequence alignment in bioinformatics</li>
            <li>Finding the longest chain of pairs</li>
          </ul>
        </Note>
      </ExplanationCard>
    </PageContainer>
  );
};

export default LIS; 