import React, { useState, useRef, useEffect } from 'react';
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

const FibonacciTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const FibonacciRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const FibonacciHeader = styled.div`
  font-weight: bold;
  width: 100px;
  text-align: center;
`;

const FibonacciCell = styled(motion.div)`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  background-color: ${props => 
    props.highlighted ? 'rgba(var(--primary-rgb), 0.2)' : 
    props.selected ? 'rgba(var(--success-rgb), 0.2)' : 
    'var(--surface-variant)'};
  transition: background-color 0.3s;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: ${props => props.selected ? '8px solid rgba(var(--success-rgb), 0.7)' : 'none'};
  }
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

const StepVisualization = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: var(--surface-variant);
  border-radius: var(--border-radius);
  min-height: 80px;
`;

const StepDescription = styled.div`
  color: var(--text-primary);
  margin-bottom: 1rem;
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

const ZeckendorfRepresentation = () => {
  const [number, setNumber] = useState(42);
  const [fibonacciNumbers, setFibonacciNumbers] = useState([]);
  const [zeckendorfRepresentation, setZeckendorfRepresentation] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [stepsLog, setStepsLog] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1000);
  
  const animationRef = useRef(null);
  
  // Generate Fibonacci numbers up to n
  const generateFibonacciNumbers = (n) => {
    const fibs = [1, 2];
    let next = fibs[0] + fibs[1];
    
    while (next <= n) {
      fibs.push(next);
      next = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    }
    
    return fibs;
  };
  
  // Calculate Zeckendorf's representation
  const calculateZeckendorf = (n) => {
    // Generate Fibonacci numbers up to n
    const fibs = generateFibonacciNumbers(n);
    setFibonacciNumbers(fibs);
    
    // Steps for visualization
    const steps = [];
    
    steps.push({
      type: 'init',
      message: `Generated Fibonacci numbers up to ${n}: ${fibs.join(', ')}`,
      remaining: n,
      highlighted: -1,
      selected: []
    });
    
    // Find Zeckendorf representation
    let remaining = n;
    const representation = [];
    
    for (let i = fibs.length - 1; i >= 0; i--) {
      steps.push({
        type: 'check',
        message: `Checking if Fibonacci number ${fibs[i]} can be included (remaining: ${remaining})`,
        remaining,
        highlighted: i,
        selected: [...representation]
      });
      
      if (fibs[i] <= remaining) {
        representation.push(fibs[i]);
        remaining -= fibs[i];
        
        steps.push({
          type: 'select',
          message: `Selected ${fibs[i]}, remaining: ${remaining}`,
          remaining,
          highlighted: i,
          selected: [...representation]
        });
      } else {
        steps.push({
          type: 'skip',
          message: `Skipped ${fibs[i]} (too large for remaining ${remaining})`,
          remaining,
          highlighted: i,
          selected: [...representation]
        });
      }
    }
    
    steps.push({
      type: 'complete',
      message: `Zeckendorf representation of ${n}: ${representation.join(' + ')}`,
      remaining: 0,
      highlighted: -1,
      selected: [...representation]
    });
    
    setZeckendorfRepresentation(representation);
    setStepsLog(steps);
    setTotalSteps(steps.length);
    
    return { representation, steps };
  };
  
  // Animation step handler
  const animateStep = (stepIndex) => {
    if (stepIndex >= stepsLog.length) {
      setIsAnimating(false);
      return;
    }
    
    const step = stepsLog[stepIndex];
    setCurrentStep(stepIndex + 1);
    
    setCurrentNumber(step.remaining);
    setHighlightedIndex(fibonacciNumbers.length - 1 - step.highlighted);
    setSelectedIndices(step.selected.map(num => fibonacciNumbers.indexOf(num)));
    
    // Schedule next step
    animationRef.current = setTimeout(() => {
      animateStep(stepIndex + 1);
    }, animationSpeed);
  };
  
  // Start visualization
  const startVisualization = () => {
    if (!number || isNaN(parseInt(number)) || parseInt(number) <= 0) return;
    
    // Reset state
    setIsAnimating(true);
    setCurrentStep(0);
    setHighlightedIndex(-1);
    setSelectedIndices([]);
    setZeckendorfRepresentation([]);
    
    // Calculate and prepare animation
    const n = parseInt(number);
    const { steps } = calculateZeckendorf(n);
    
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
    setHighlightedIndex(-1);
    setSelectedIndices([]);
    setZeckendorfRepresentation([]);
    setFibonacciNumbers([]);
    setCurrentNumber(0);
    setStepsLog([]);
  };
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);
  
  // Format Zeckendorf representation
  const formatZeckendorf = () => {
    if (zeckendorfRepresentation.length === 0) return '';
    return zeckendorfRepresentation.join(' + ') + ' = ' + number;
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Zeckendorf's Representation</Title>
        <Description>
          Every positive integer can be represented uniquely as a sum of non-consecutive Fibonacci numbers.
        </Description>
      </Header>
      
      <InputSection>
        <SectionTitle>Input</SectionTitle>
        <InputGroup>
          <Label htmlFor="number">Number to Represent:</Label>
          <Input 
            id="number"
            type="number"
            min="1"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            disabled={isAnimating}
          />
        </InputGroup>
        
        <VisualizationControls>
          <Button onClick={startVisualization} disabled={isAnimating || !number || isNaN(parseInt(number)) || parseInt(number) <= 0}>
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
      </InputSection>
      
      <VisualizationContainer>
        <SectionTitle>Visualization</SectionTitle>
        
        {fibonacciNumbers.length > 0 && (
          <>
            <StepVisualization>
              {currentStep > 0 && currentStep <= stepsLog.length && (
                <StepDescription>
                  {stepsLog[currentStep - 1].message}
                </StepDescription>
              )}
              
              {currentNumber > 0 && (
                <div>Remaining: {currentNumber}</div>
              )}
            </StepVisualization>
            
            <FibonacciTable>
              <FibonacciRow>
                <FibonacciHeader>Index</FibonacciHeader>
                {fibonacciNumbers.map((_, idx) => (
                  <FibonacciCell key={`idx-${idx}`}>
                    {idx + 1}
                  </FibonacciCell>
                ))}
              </FibonacciRow>
              
              <FibonacciRow>
                <FibonacciHeader>Fibonacci</FibonacciHeader>
                {fibonacciNumbers.map((fib, idx) => (
                  <FibonacciCell
                    key={`fib-${idx}`}
                    highlighted={idx === highlightedIndex}
                    selected={selectedIndices.includes(idx)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    {fib}
                  </FibonacciCell>
                ))}
              </FibonacciRow>
            </FibonacciTable>
            
            {zeckendorfRepresentation.length > 0 && (
              <Result>
                <span>Zeckendorf Representation:</span>
                <strong>{formatZeckendorf()}</strong>
              </Result>
            )}
          </>
        )}
      </VisualizationContainer>
      
      <SectionTitle>How It Works</SectionTitle>
      <ExplanationCard>
        <p>
          Zeckendorf's theorem states that every positive integer can be represented uniquely as the sum
          of one or more distinct Fibonacci numbers in such a way that the sum does not include any two
          consecutive Fibonacci numbers.
        </p>
        
        <h3>The Algorithm</h3>
        <p>
          The greedy algorithm to find Zeckendorf's representation works as follows:
        </p>
        <ol>
          <li>Generate Fibonacci numbers up to the input number.</li>
          <li>Starting from the largest Fibonacci number less than or equal to the input, include it in the representation.</li>
          <li>Subtract this Fibonacci number from the input, and repeat the process with the remainder.</li>
        </ol>
        
        <CodeBlock>
{`function zeckendorfRepresentation(n) {
  // Generate Fibonacci numbers up to n
  const fibonacciNumbers = [];
  let a = 1, b = 2;
  
  fibonacciNumbers.push(a);
  fibonacciNumbers.push(b);
  
  while (b + a <= n) {
    const next = a + b;
    fibonacciNumbers.push(next);
    a = b;
    b = next;
  }
  
  // Find representation using greedy approach
  const representation = [];
  let remaining = n;
  
  for (let i = fibonacciNumbers.length - 1; i >= 0; i--) {
    if (fibonacciNumbers[i] <= remaining) {
      representation.push(fibonacciNumbers[i]);
      remaining -= fibonacciNumbers[i];
    }
  }
  
  return representation;
}`}
        </CodeBlock>
        
        <h3>Properties</h3>
        <p>
          The Zeckendorf representation has some interesting properties:
        </p>
        <ul>
          <li>It is unique for each positive integer.</li>
          <li>It never includes consecutive Fibonacci numbers.</li>
          <li>It uses the minimal number of Fibonacci numbers needed to represent the given integer.</li>
        </ul>
        
        <h3>Time and Space Complexity</h3>
        <ul>
          <li><strong>Time Complexity:</strong> O(log n) since there are approximately log(n) Fibonacci numbers less than or equal to n.</li>
          <li><strong>Space Complexity:</strong> O(log n) to store the Fibonacci numbers and the representation.</li>
        </ul>
        
        <Note>
          <p>
            Zeckendorf's representation is named after Belgian mathematician Édouard Zeckendorf, who published this theorem in 1972.
            It has applications in various fields, including:
          </p>
          <ul>
            <li>Data compression algorithms</li>
            <li>Fibonacci coding in information theory</li>
            <li>Optimization problems and game theory</li>
            <li>Number system representations</li>
          </ul>
          <p>
            Interestingly, the Zeckendorf representation can be viewed as a non-standard positional number system with an irregular base.
          </p>
        </Note>
      </ExplanationCard>
    </PageContainer>
  );
};

export default ZeckendorfRepresentation; 