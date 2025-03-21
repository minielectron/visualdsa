import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { withAlgorithmState, useAlgorithmState } from '../../components/AlgorithmStateProvider';

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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 10px;
  margin: 2rem 0;
`;

const Cell = styled(motion.div)`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  font-weight: bold;
  font-size: 1.1rem;
  background-color: ${props => {
    if (props.isPrime) return 'rgba(var(--success-rgb), 0.2)';
    if (props.isComposite) return 'rgba(var(--error-rgb), 0.2)';
    if (props.isCurrentMultiple) return 'rgba(var(--warning-rgb), 0.2)';
    if (props.isCurrent) return 'rgba(var(--primary-rgb), 0.2)';
    return 'var(--surface-variant)';
  }};
  border: 2px solid ${props => {
    if (props.isPrime) return 'var(--success)';
    if (props.isComposite) return 'var(--error)';
    if (props.isCurrentMultiple) return 'var(--warning)';
    if (props.isCurrent) return 'var(--primary)';
    return 'var(--border)';
  }};
  color: ${props => {
    if (props.isPrime) return 'var(--success)';
    if (props.isComposite) return 'var(--error)';
    if (props.isCurrentMultiple) return 'var(--warning)';
    if (props.isCurrent) return 'var(--primary)';
    return 'var(--text-primary)';
  }};
  position: relative;
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

const PrimeList = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: var(--surface-variant);
  border-radius: var(--border-radius);
  line-height: 1.8;
`;

const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LegendColor = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: ${props => props.color};
  border: 1px solid ${props => props.border};
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

const SieveOfEratosthenesComponent = () => {
  const { algorithmState, updateAlgorithmState } = useAlgorithmState();
  
  // Initialize state from local storage or defaults
  const [limit, setLimit] = useState(algorithmState.limit || 30);
  const [numbers, setNumbers] = useState(algorithmState.numbers || []);
  const [primes, setPrimes] = useState(algorithmState.primes || []);
  const [currentNumber, setCurrentNumber] = useState(algorithmState.currentNumber || null);
  const [currentMultiples, setCurrentMultiples] = useState(algorithmState.currentMultiples || []);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(1000);
  const [stepsLog, setStepsLog] = useState(algorithmState.stepsLog || []);
  
  const animationRef = useRef(null);
  
  // Save state to localStorage when it changes
  useEffect(() => {
    updateAlgorithmState({
      limit,
      numbers,
      primes,
      currentNumber,
      currentMultiples,
      stepsLog
    });
  }, [limit, numbers, primes, currentNumber, currentMultiples, stepsLog, updateAlgorithmState]);
  
  // Initialize numbers array
  const initializeNumbers = () => {
    const nums = [];
    for (let i = 2; i <= limit; i++) {
      nums.push({
        value: i,
        isPrime: false,
        isComposite: false
      });
    }
    setNumbers(nums);
    return nums;
  };
  
  // Run the Sieve algorithm
  const runSieve = () => {
    const nums = initializeNumbers();
    const steps = [];
    const primeNumbers = [];
    
    // Step 1: Start with all numbers unmarked
    steps.push({
      type: 'init',
      message: `Initialized array with numbers from 2 to ${limit}. No numbers are marked as prime or composite yet.`,
      currentNumber: null,
      multiples: []
    });
    
    for (let i = 0; i < nums.length; i++) {
      const current = nums[i].value;
      
      // Skip if already marked as composite
      if (nums[i].isComposite) {
        continue;
      }
      
      // Current number is prime
      nums[i].isPrime = true;
      primeNumbers.push(current);
      
      steps.push({
        type: 'prime',
        message: `${current} is a prime number (no smaller number divides it).`,
        currentNumber: current,
        multiples: []
      });
      
      // Mark all multiples as composite
      const multiples = [];
      for (let j = i + current; j < nums.length; j += current) {
        if (!nums[j].isComposite) {
          multiples.push(nums[j].value);
          nums[j].isComposite = true;
        }
      }
      
      if (multiples.length > 0) {
        steps.push({
          type: 'mark_multiples',
          message: `Marking all multiples of ${current} as composite: ${multiples.join(', ')}`,
          currentNumber: current,
          multiples: [...multiples]
        });
      }
    }
    
    steps.push({
      type: 'complete',
      message: `Sieve complete. Found ${primeNumbers.length} prime numbers up to ${limit}.`,
      currentNumber: null,
      multiples: []
    });
    
    setStepsLog(steps);
    setTotalSteps(steps.length);
    setPrimes(primeNumbers);
    
    return { steps, primeNumbers };
  };
  
  // Animation step handler
  const animateStep = (stepIndex) => {
    if (stepIndex >= stepsLog.length) {
      setIsAnimating(false);
      return;
    }
    
    const step = stepsLog[stepIndex];
    setCurrentStep(stepIndex + 1);
    
    switch (step.type) {
      case 'init':
        setCurrentNumber(null);
        setCurrentMultiples([]);
        break;
      case 'prime':
        setCurrentNumber(step.currentNumber);
        setCurrentMultiples([]);
        // Update the numbers array to mark this as prime
        setNumbers(prev => {
          const updated = [...prev];
          const index = updated.findIndex(num => num.value === step.currentNumber);
          if (index !== -1) {
            updated[index] = { ...updated[index], isPrime: true };
          }
          return updated;
        });
        break;
      case 'mark_multiples':
        setCurrentNumber(step.currentNumber);
        setCurrentMultiples(step.multiples);
        // Update the numbers array to mark multiples as composite
        setNumbers(prev => {
          const updated = [...prev];
          step.multiples.forEach(multiple => {
            const index = updated.findIndex(num => num.value === multiple);
            if (index !== -1) {
              updated[index] = { ...updated[index], isComposite: true };
            }
          });
          return updated;
        });
        break;
      case 'complete':
        setCurrentNumber(null);
        setCurrentMultiples([]);
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
    setCurrentNumber(null);
    setCurrentMultiples([]);
    setPrimes([]);
    
    // Run sieve and prepare animation
    const { steps } = runSieve();
    
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
    setCurrentNumber(null);
    setCurrentMultiples([]);
    initializeNumbers();
    setPrimes([]);
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
  
  const handleLimitChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 2 && value <= 1000) {
      setLimit(value);
    }
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Sieve of Eratosthenes</Title>
        <Description>
          An ancient algorithm for finding all prime numbers up to a specified integer limit.
        </Description>
      </Header>
      
      <InputSection>
        <SectionTitle>Input</SectionTitle>
        <InputGroup>
          <Label htmlFor="limit">Upper Limit (2-1000):</Label>
          <Input 
            id="limit"
            type="number"
            min="2"
            max="1000"
            value={limit}
            onChange={handleLimitChange}
            disabled={isAnimating}
          />
        </InputGroup>
        
        <VisualizationControls>
          <Button onClick={startVisualization} disabled={isAnimating || !limit || limit < 2}>
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
        <SectionTitle>Visualization</SectionTitle>
        
        <Legend>
          <LegendItem>
            <LegendColor color="rgba(var(--success-rgb), 0.2)" border="var(--success)" />
            <span>Prime Numbers</span>
          </LegendItem>
          <LegendItem>
            <LegendColor color="rgba(var(--error-rgb), 0.2)" border="var(--error)" />
            <span>Composite Numbers</span>
          </LegendItem>
          <LegendItem>
            <LegendColor color="rgba(var(--primary-rgb), 0.2)" border="var(--primary)" />
            <span>Current Number</span>
          </LegendItem>
          <LegendItem>
            <LegendColor color="rgba(var(--warning-rgb), 0.2)" border="var(--warning)" />
            <span>Current Multiples</span>
          </LegendItem>
        </Legend>
        
        <GridContainer>
          {numbers.map((num) => (
            <Cell
              key={num.value}
              isPrime={num.isPrime}
              isComposite={num.isComposite}
              isCurrent={num.value === currentNumber}
              isCurrentMultiple={currentMultiples.includes(num.value)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: (num.value - 2) * 0.001 }}
            >
              {num.value}
            </Cell>
          ))}
        </GridContainer>
        
        {primes.length > 0 && (
          <Result>
            <span>Total Prime Numbers Found:</span>
            <strong>{primes.length}</strong>
          </Result>
        )}
        
        {primes.length > 0 && (
          <PrimeList>
            <strong>Prime Numbers up to {limit}:</strong>
            <div style={{ marginTop: '0.5rem' }}>
              {primes.join(', ')}
            </div>
          </PrimeList>
        )}
      </VisualizationContainer>
      
      <SectionTitle>How It Works</SectionTitle>
      <ExplanationCard>
        <p>
          The Sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to a specified integer limit.
          It efficiently filters out composite numbers by iteratively marking multiples of each prime, starting from 2.
        </p>
        
        <h3>The Algorithm</h3>
        <ol>
          <li>Create a list of consecutive integers from 2 to the input limit, all initially unmarked.</li>
          <li>Start with the first unmarked number (initially 2), which is prime.</li>
          <li>Mark all multiples of this number in the list as composite (not prime).</li>
          <li>Find the next unmarked number and repeat steps 2-3 until you have processed up to the square root of the limit.</li>
          <li>All remaining unmarked numbers are prime.</li>
        </ol>
        
        <p>
          The algorithm gets its name from the ancient Greek mathematician Eratosthenes of Cyrene, who first described it.
          It is one of the most efficient ways to find all primes up to a given limit.
        </p>
        
        <CodeBlock>
{`function sieveOfEratosthenes(limit) {
  // Create array of size limit+1 and fill with true
  const isPrime = Array(limit + 1).fill(true);
  
  // 0 and 1 are not prime numbers
  isPrime[0] = isPrime[1] = false;
  
  // Loop through numbers from 2 to square root of limit
  for (let i = 2; i * i <= limit; i++) {
    // If the current number is prime
    if (isPrime[i]) {
      // Mark all multiples as non-prime
      for (let j = i * i; j <= limit; j += i) {
        isPrime[j] = false;
      }
    }
  }
  
  // Collect all primes into an array
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }
  
  return primes;
}`}
        </CodeBlock>
        
        <h3>Time and Space Complexity</h3>
        <ul>
          <li><strong>Time Complexity:</strong> O(n log log n) - Nearly linear time</li>
          <li><strong>Space Complexity:</strong> O(n) - We need an array of size n</li>
        </ul>
        
        <h3>Optimization</h3>
        <p>
          Common optimizations to the basic algorithm include:
        </p>
        <ul>
          <li>Only checking multiples starting from p² (since all smaller multiples would have already been marked by smaller primes).</li>
          <li>Only checking odd numbers after handling 2 (since all even numbers greater than 2 are composite).</li>
          <li>Only iterating up to the square root of the limit during sieving (since any composite number ≤ n has a prime factor ≤ √n).</li>
        </ul>
        
        <Note>
          <p>
            The Sieve of Eratosthenes has many applications:
          </p>
          <ul>
            <li>Finding prime numbers for cryptographic algorithms</li>
            <li>Number theory research</li>
            <li>As a building block for other algorithms, like prime factorization</li>
            <li>Generating large lists of primes for mathematical computations</li>
          </ul>
          <p>
            While efficient for moderate ranges, for very large ranges, more advanced algorithms like the 
            "Sieve of Atkin" or segmented sieves are often used.
          </p>
        </Note>
      </ExplanationCard>
    </PageContainer>
  );
};

// Create a new component that uses the HOC
const SieveOfEratosthenes = withAlgorithmState(SieveOfEratosthenesComponent, 'sieve');
export default SieveOfEratosthenes; 