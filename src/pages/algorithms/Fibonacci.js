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

const SequenceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
`;

const SequenceItem = styled(motion.div)`
  width: 50px;
  height: 50px;
  background: ${props => props.active ? 'var(--primary)' : 'var(--primary-light)'};
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
`;

const SequenceIndex = styled.div`
  font-size: 0.7rem;
  opacity: 0.7;
`;

const SequenceValue = styled.div`
  font-size: 1rem;
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

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: var(--border-radius);
  border: 1px solid #ccc;
  width: 70px;
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

const AlgorithmSteps = styled.div`
  margin: 1rem 0;
  line-height: 1.6;
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

const RecursionTree = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: auto;
  max-width: 100%;
`;

const javaCode = `
public class Fibonacci {
  // Recursive approach (exponential time complexity)
  public static int fibonacciRecursive(int n) {
    if (n <= 1) {
      return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
  
  // Dynamic Programming approach - Bottom-Up (linear time complexity)
  public static int fibonacciDP(int n) {
    if (n <= 1) {
      return n;
    }
    
    int[] fib = new int[n + 1];
    fib[0] = 0;
    fib[1] = 1;
    
    for (int i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    return fib[n];
  }
  
  // Optimized solution with O(1) space complexity
  public static int fibonacciOptimized(int n) {
    if (n <= 1) {
      return n;
    }
    
    int a = 0, b = 1;
    int c;
    
    for (int i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    
    return b;
  }
  
  // Driver method to test the algorithm
  public static void main(String[] args) {
    int n = 10;
    
    System.out.println("Fibonacci number at position " + n + " is: " + fibonacciDP(n));
  }
}
`;

const Fibonacci = () => {
  const [sequence, setSequence] = useState([]);
  const [calculating, setCalculating] = useState(false);
  const [n, setN] = useState(10);
  const [speed, setSpeed] = useState(500); // milliseconds per step
  const [activeIndex, setActiveIndex] = useState(null);
  const [approach, setApproach] = useState('dp'); // 'recursive', 'dp', or 'optimized'
  const [activeTab, setActiveTab] = useState('visualization');
  const [message, setMessage] = useState('');

  // Initialize Fibonacci sequence based on n
  useEffect(() => {
    resetCalculation();
  }, [n, approach]);

  const resetCalculation = () => {
    setCalculating(false);
    setActiveIndex(null);
    setMessage('');
    
    // Initialize with appropriate length based on the value of n
    const newSequence = approach === 'dp' ? Array(n + 1).fill(null) : [];
    setSequence(newSequence);
  };

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const calculateFibonacciDP = async () => {
    if (calculating) return;
    
    setCalculating(true);
    setMessage('Starting Bottom-Up DP calculation...');
    
    const newSequence = [...sequence];
    newSequence[0] = 0;
    setSequence(newSequence);
    setActiveIndex(0);
    await sleep(speed);
    
    if (n >= 1) {
      newSequence[1] = 1;
      setSequence(newSequence);
      setActiveIndex(1);
      await sleep(speed);
    }
    
    for (let i = 2; i <= n; i++) {
      setMessage(`Computing F(${i}) = F(${i-1}) + F(${i-2}) = ${newSequence[i-1]} + ${newSequence[i-2]}`);
      setActiveIndex(i);
      await sleep(speed);
      
      newSequence[i] = newSequence[i-1] + newSequence[i-2];
      setSequence(newSequence);
      await sleep(speed);
    }
    
    setMessage(`Fibonacci number at position ${n} is ${newSequence[n]}`);
    setCalculating(false);
  };

  const calculateFibonacciOptimized = async () => {
    if (calculating) return;
    
    setCalculating(true);
    setMessage('Starting space-optimized calculation...');
    
    let a = 0, b = 1, c;
    const newSequence = [a];
    setSequence(newSequence);
    setActiveIndex(0);
    await sleep(speed);
    
    if (n >= 1) {
      newSequence.push(b);
      setSequence(newSequence);
      setActiveIndex(1);
      await sleep(speed);
    }
    
    for (let i = 2; i <= n; i++) {
      setMessage(`Computing F(${i}) = F(${i-1}) + F(${i-2}) = ${b} + ${a}`);
      
      c = a + b;
      a = b;
      b = c;
      
      newSequence.push(c);
      setSequence(newSequence);
      setActiveIndex(i);
      await sleep(speed);
    }
    
    setMessage(`Fibonacci number at position ${n} is ${newSequence[n]}`);
    setCalculating(false);
  };

  const handleCalculate = () => {
    if (approach === 'dp') {
      calculateFibonacciDP();
    } else if (approach === 'optimized') {
      calculateFibonacciOptimized();
    }
  };

  const handleNChange = (e) => {
    const value = parseInt(e.target.value);
    // Limit n to reasonable values to avoid performance issues
    if (!isNaN(value) && value >= 0 && value <= 30) {
      setN(value);
    }
  };

  return (
    <PageContainer>
      <Header>
        <Title>Fibonacci Sequence - Dynamic Programming</Title>
        <Description>
          The Fibonacci sequence is a classic example of dynamic programming where each number 
          is the sum of the two preceding ones, starting from 0 and 1.
        </Description>
      </Header>
      
      <TabContainer>
        <TabButton
          active={activeTab === 'visualization'}
          onClick={() => setActiveTab('visualization')}
        >
          Visualization
        </TabButton>
        <TabButton
          active={activeTab === 'explanation'}
          onClick={() => setActiveTab('explanation')}
        >
          Explanation
        </TabButton>
        <TabButton
          active={activeTab === 'code'}
          onClick={() => setActiveTab('code')}
        >
          Code
        </TabButton>
        <TabButton
          active={activeTab === 'complexity'}
          onClick={() => setActiveTab('complexity')}
        >
          Complexity
        </TabButton>
      </TabContainer>
      
      {activeTab === 'visualization' && (
        <VisualizationContainer>
          <ControlsContainer>
            <InputContainer>
              <label>N:</label>
              <Input
                type="number"
                min="0"
                max="30"
                value={n}
                onChange={handleNChange}
                disabled={calculating}
              />
            </InputContainer>
            
            <div>
              <TabButton
                active={approach === 'dp'}
                onClick={() => setApproach('dp')}
                disabled={calculating}
              >
                DP (Bottom-Up)
              </TabButton>
              <TabButton
                active={approach === 'optimized'}
                onClick={() => setApproach('optimized')}
                disabled={calculating}
              >
                Optimized
              </TabButton>
            </div>
            
            <SpeedControl>
              <span>Speed:</span>
              <SliderContainer>
                <span>Fast</span>
                <Slider
                  type="range"
                  min="100"
                  max="1000"
                  step="100"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  disabled={calculating}
                />
                <span>Slow</span>
              </SliderContainer>
            </SpeedControl>
            
            <Button onClick={handleCalculate} disabled={calculating}>
              {calculating ? 'Calculating...' : 'Calculate'}
            </Button>
            
            <Button onClick={resetCalculation} disabled={calculating}>
              Reset
            </Button>
          </ControlsContainer>
          
          {message && <MessageContainer>{message}</MessageContainer>}
          
          <SequenceContainer>
            {sequence.map((value, index) => (
              <SequenceItem
                key={index}
                active={index === activeIndex}
                animate={{
                  scale: index === activeIndex ? 1.1 : 1,
                  opacity: value !== null ? 1 : 0.3
                }}
              >
                <SequenceIndex>F({index})</SequenceIndex>
                <SequenceValue>{value !== null ? value : '?'}</SequenceValue>
              </SequenceItem>
            ))}
          </SequenceContainer>
        </VisualizationContainer>
      )}
      
      {activeTab === 'explanation' && (
        <VisualizationContainer>
          <AlgorithmSteps>
            <h3>What is the Fibonacci Sequence?</h3>
            <p>
              The Fibonacci sequence is a series of numbers where each number is the sum of the 
              two preceding ones, usually starting with 0 and 1. The sequence starts:
              0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
            </p>
            
            <h3>The Dynamic Programming Approach</h3>
            <p>
              The Fibonacci sequence serves as an excellent example of dynamic programming, a method 
              for solving complex problems by breaking them down into simpler subproblems.
            </p>
            
            <h4>Bottom-Up Approach (Tabulation):</h4>
            <ol>
              <li>Create an array to store Fibonacci numbers: F[0], F[1], ..., F[n]</li>
              <li>Initialize the base cases: F[0] = 0 and F[1] = 1</li>
              <li>Iterate from i=2 to n and compute F[i] = F[i-1] + F[i-2]</li>
              <li>Return F[n] as the result</li>
            </ol>
            
            <h4>Space-Optimized Approach:</h4>
            <p>
              Since we only need the last two Fibonacci numbers to calculate the next one, 
              we can optimize space usage by only storing the last two values:
            </p>
            <ol>
              <li>Initialize a = 0 and b = 1 (first two Fibonacci numbers)</li>
              <li>For i=2 to n, compute c = a + b, then update a = b and b = c</li>
              <li>Return b as the result</li>
            </ol>
            
            <h3>Why use Dynamic Programming for Fibonacci?</h3>
            <p>
              A recursive approach recalculates the same values multiple times, leading to exponential time complexity. 
              Dynamic programming stores previously calculated values, reducing time complexity to O(n).
            </p>
          </AlgorithmSteps>
        </VisualizationContainer>
      )}
      
      {activeTab === 'code' && (
        <VisualizationContainer>
          <CodeViewer code={javaCode} language="java" />
        </VisualizationContainer>
      )}
      
      {activeTab === 'complexity' && (
        <VisualizationContainer>
          <ComplexityContainer>
            <ComplexityTitle>Time Complexity</ComplexityTitle>
            <ComplexityTable>
              <thead>
                <tr>
                  <Th>Approach</Th>
                  <Th>Time Complexity</Th>
                  <Th>Explanation</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>Recursive</Td>
                  <Td>O(2<sup>n</sup>)</Td>
                  <Td>Each call branches into two recursive calls, creating an exponential number of function calls.</Td>
                </tr>
                <tr>
                  <Td>Dynamic Programming (Bottom-Up)</Td>
                  <Td>O(n)</Td>
                  <Td>A single loop that calculates each Fibonacci number exactly once.</Td>
                </tr>
                <tr>
                  <Td>Space-Optimized</Td>
                  <Td>O(n)</Td>
                  <Td>Still requires a loop from 2 to n, but with constant space requirements.</Td>
                </tr>
              </tbody>
            </ComplexityTable>
          </ComplexityContainer>
          
          <ComplexityContainer>
            <ComplexityTitle>Space Complexity</ComplexityTitle>
            <ComplexityTable>
              <thead>
                <tr>
                  <Th>Approach</Th>
                  <Th>Space Complexity</Th>
                  <Th>Explanation</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>Recursive</Td>
                  <Td>O(n)</Td>
                  <Td>Maximum depth of the recursion stack.</Td>
                </tr>
                <tr>
                  <Td>Dynamic Programming (Bottom-Up)</Td>
                  <Td>O(n)</Td>
                  <Td>Requires an array of size n+1 to store all Fibonacci numbers.</Td>
                </tr>
                <tr>
                  <Td>Space-Optimized</Td>
                  <Td>O(1)</Td>
                  <Td>Only requires three variables regardless of input size.</Td>
                </tr>
              </tbody>
            </ComplexityTable>
          </ComplexityContainer>
        </VisualizationContainer>
      )}
    </PageContainer>
  );
};

export default Fibonacci; 