import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CodeViewer from '../../components/common/CodeViewer';
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

const MethodSelector = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const MethodButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.active ? 'var(--primary)' : 'var(--surface-variant)'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: 1px solid ${props => props.active ? 'var(--primary)' : 'var(--border)'};
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary)' : 'rgba(var(--primary-rgb), 0.1)'};
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
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
`;

const FibonacciCell = styled(motion.div)`
  width: 100px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  background-color: ${props => 
    props.active ? 'rgba(var(--primary-rgb), 0.2)' : 
    props.current ? 'rgba(var(--success-rgb), 0.2)' : 
    'var(--surface-variant)'};
  transition: background-color 0.3s;
  position: relative;
  box-shadow: var(--card-shadow);
`;

const FibonacciIndex = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
`;

const FibonacciValue = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text-primary);
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
`;

const Arrow = styled.div`
  width: 20px;
  height: 2px;
  background-color: var(--primary);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: -3px;
    border-left: 6px solid var(--primary);
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
`;

const PlusSign = styled.div`
  font-size: 1.5rem;
  margin: 0 1rem;
  color: var(--primary);
`;

const EqualsSign = styled.div`
  font-size: 1.5rem;
  margin: 0 1rem;
  color: var(--primary);
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

const RecursionTree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  overflow-x: auto;
  padding-bottom: 2rem;
`;

const TreeNode = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => 
    props.active ? 'rgba(var(--primary-rgb), 0.8)' : 
    props.calculated ? 'rgba(var(--success-rgb), 0.8)' : 
    'rgba(var(--primary-rgb), 0.3)'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0.5rem;
  position: relative;
  z-index: 2;
  transition: background-color 0.3s;
`;

const TreeLevel = styled.div`
  display: flex;
  justify-content: center;
`;

const TreeConnector = styled.div`
  width: 2px;
  height: 20px;
  background-color: var(--primary-light);
  margin: 0 auto;
`;

const TreeNodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.5rem;
`;

const InfoText = styled.div`
  margin: 1rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
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

const TimeComplexityTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
`;

const TableHeader = styled.th`
  background-color: var(--primary-light);
  color: white;
  padding: 0.75rem;
  text-align: left;
  border: 1px solid var(--border);
`;

const TableCell = styled.td`
  padding: 0.75rem;
  border: 1px solid var(--border);
`;

const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
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

const FibonacciComponent = () => {
  const { algorithmState, updateAlgorithmState } = useAlgorithmState();
  
  // Initialize state from local storage or defaults
  const [n, setN] = useState(algorithmState.n || 10);
  const [method, setMethod] = useState(algorithmState.method || 'iterative');
  const [fibonacciSequence, setFibonacciSequence] = useState([]);
  const [activeIndices, setActiveIndices] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [calculating, setCalculating] = useState(false);
  const [calculationComplete, setCalculationComplete] = useState(false);
  const [recursionTree, setRecursionTree] = useState([]);
  const [calculatedNodes, setCalculatedNodes] = useState(new Set());
  const [activeNodes, setActiveNodes] = useState(new Set());
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState(algorithmState.result || null);
  const [executionTime, setExecutionTime] = useState(algorithmState.executionTime || null);
  const [error, setError] = useState(null);
  
  // Save state to localStorage when it changes
  useEffect(() => {
    updateAlgorithmState({
      n,
      method,
      result,
      sequence: fibonacciSequence,
      executionTime
    });
  }, [n, method, result, fibonacciSequence, executionTime, updateAlgorithmState]);
  
  const resetCalculation = () => {
    setFibonacciSequence([]);
    setActiveIndices([]);
    setCurrentIndex(-1);
    setCalculating(false);
    setCalculationComplete(false);
    setRecursionTree([]);
    setCalculatedNodes(new Set());
    setActiveNodes(new Set());
    setSteps([]);
    setCurrentStep(0);
  };
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  const calculateFibonacciDP = async () => {
    const sequence = Array(parseInt(n) + 1).fill(0);
    sequence[0] = 0;
    if (n >= 1) sequence[1] = 1;
    
    setFibonacciSequence(sequence.slice(0, 2));
    
    for (let i = 2; i <= n; i++) {
      setCurrentIndex(i);
      setActiveIndices([i-1, i-2]);
      await sleep(500);
      
      sequence[i] = sequence[i-1] + sequence[i-2];
      setFibonacciSequence([...sequence.slice(0, i+1)]);
      
      await sleep(500);
      setActiveIndices([]);
    }
    
    setCurrentIndex(n);
    setCalculationComplete(true);
    setCalculating(false);
  };
  
  const calculateFibonacciOptimized = async () => {
    if (n <= 1) {
      setFibonacciSequence([0, 1].slice(0, parseInt(n) + 1));
      setCurrentIndex(n);
      setCalculationComplete(true);
      setCalculating(false);
      return;
    }
    
    let a = 0, b = 1;
    const sequence = [a, b];
    
    setFibonacciSequence(sequence);
    
    for (let i = 2; i <= n; i++) {
      setCurrentIndex(i);
      setActiveIndices([i-1, i-2]);
      await sleep(500);
      
      const next = a + b;
      sequence.push(next);
      setFibonacciSequence([...sequence]);
      
      a = b;
      b = next;
      
      await sleep(500);
      setActiveIndices([]);
    }
    
    setCurrentIndex(n);
    setCalculationComplete(true);
    setCalculating(false);
  };
  
  // Recursive Fibonacci visualization for small values only
  const buildRecursionTree = async (n, depth = 0, position = 0, parent = null) => {
    if (n > 15) return; // Prevent excessive recursion
    
    const nodeId = `${depth}-${position}`;
    
    // Add node to tree
    setRecursionTree(prevTree => {
      const newTree = [...prevTree];
      if (!newTree[depth]) newTree[depth] = [];
      newTree[depth][position] = { n, parent, id: nodeId };
      return newTree;
    });
    
    // Mark node as active
    setActiveNodes(prev => {
      const newSet = new Set(prev);
      newSet.add(nodeId);
      return newSet;
    });
    
    await sleep(300);
    
    // Base cases
    if (n <= 1) {
      // Mark as calculated
      setCalculatedNodes(prev => {
        const newSet = new Set(prev);
        newSet.add(nodeId);
        return newSet;
      });
      
      // Remove from active
      setActiveNodes(prev => {
        const newSet = new Set(prev);
        newSet.delete(nodeId);
        return newSet;
      });
      
      return n;
    }
    
    // Recursive calls
    const leftValue = await buildRecursionTree(n - 1, depth + 1, position * 2, nodeId);
    const rightValue = await buildRecursionTree(n - 2, depth + 1, position * 2 + 1, nodeId);
    
    // Calculate current node value
    const result = leftValue + rightValue;
    
    // Mark as calculated
    setCalculatedNodes(prev => {
      const newSet = new Set(prev);
      newSet.add(nodeId);
      return newSet;
    });
    
    // Remove from active
    setActiveNodes(prev => {
      const newSet = new Set(prev);
      newSet.delete(nodeId);
      return newSet;
    });
    
    await sleep(300);
    
    return result;
  };
  
  const calculateFibonacciRecursive = async () => {
    if (n > 10) {
      alert("Recursive visualization is limited to n ≤ 10 to prevent browser hanging");
      setCalculating(false);
      return;
    }
    
    setRecursionTree([]);
    setCalculatedNodes(new Set());
    setActiveNodes(new Set());
    
    const result = await buildRecursionTree(parseInt(n), 0, 0);
    const sequence = [];
    for (let i = 0; i <= n; i++) {
      if (i <= 1) {
        sequence.push(i);
      } else {
        sequence.push(sequence[i-1] + sequence[i-2]);
      }
    }
    
    setFibonacciSequence(sequence);
    setCurrentIndex(n);
    setCalculationComplete(true);
    setCalculating(false);
  };
  
  const handleCalculate = () => {
    resetCalculation();
    setCalculating(true);
    
    switch(method) {
      case 'recursive':
        calculateFibonacciRecursive();
        break;
      case 'dp':
        calculateFibonacciDP();
        break;
      case 'iterative':
      default:
        calculateFibonacciOptimized();
        break;
    }
  };
  
  const handleNChange = (e) => {
    const value = e.target.value;
    if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 50)) {
      setN(value);
    }
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Fibonacci Sequence</Title>
        <Description>
          A classic sequence where each number is the sum of the two preceding ones, usually starting with 0 and 1.
        </Description>
      </Header>
      
      <InputSection>
        <SectionTitle>Input</SectionTitle>
        <InputGroup>
          <Label htmlFor="n">Number of elements (n):</Label>
          <Input 
            id="n"
            type="number"
            min="0"
            max="50"
            value={n}
            onChange={handleNChange}
            disabled={calculating}
          />
        </InputGroup>
        
        <Label>Implementation Method:</Label>
        <MethodSelector>
          <MethodButton 
            active={method === 'iterative'} 
            onClick={() => setMethod('iterative')}
            disabled={calculating}
          >
            Iterative
          </MethodButton>
          <MethodButton 
            active={method === 'dp'} 
            onClick={() => setMethod('dp')}
            disabled={calculating}
          >
            Dynamic Programming
          </MethodButton>
          <MethodButton 
            active={method === 'recursive'} 
            onClick={() => setMethod('recursive')}
            disabled={calculating}
          >
            Recursive (n ≤ 10)
          </MethodButton>
        </MethodSelector>
        
        <Button onClick={handleCalculate} disabled={calculating || n === '' || parseInt(n) < 0}>
          {calculating ? 'Calculating...' : 'Calculate Fibonacci'}
        </Button>
      </InputSection>
      
      <VisualizationContainer>
        <SectionTitle>Visualization</SectionTitle>
        
        {method !== 'recursive' && (
          <FibonacciTable>
            {fibonacciSequence.map((value, index) => {
              const isActive = activeIndices.includes(index);
              const isCurrent = index === currentIndex;
              
              return (
                <FibonacciCell 
                  key={index}
                  active={isActive}
                  current={isCurrent}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <FibonacciIndex>F({index})</FibonacciIndex>
                  <FibonacciValue>{value}</FibonacciValue>
                </FibonacciCell>
              );
            })}
          </FibonacciTable>
        )}
        
        {method === 'recursive' && recursionTree.length > 0 && (
          <RecursionTree>
            {recursionTree.map((level, levelIdx) => (
              <React.Fragment key={levelIdx}>
                <TreeLevel>
                  {level.map((node, nodeIdx) => (
                    node && (
                      <TreeNodeWrapper key={`${levelIdx}-${nodeIdx}`}>
                        <TreeNode 
                          active={activeNodes.has(node.id)}
                          calculated={calculatedNodes.has(node.id)}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          F({node.n})
                        </TreeNode>
                        {(node.parent !== null && levelIdx > 0) && <TreeConnector />}
                      </TreeNodeWrapper>
                    )
                  ))}
                </TreeLevel>
              </React.Fragment>
            ))}
          </RecursionTree>
        )}
        
        {calculationComplete && fibonacciSequence.length > 0 && (
          <Result>
            <span>Fibonacci number at position {n}:</span>
            <strong>{fibonacciSequence[n]}</strong>
          </Result>
        )}
      </VisualizationContainer>
      
      <SectionTitle>How It Works</SectionTitle>
      <ExplanationCard>
        <p>
          The Fibonacci sequence is a series of numbers where each number is the sum of the two 
          preceding ones, usually starting with 0 and 1.
        </p>
        
        <p>
          The sequence starts: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
        </p>
        
        <p>
          The mathematical definition is:
        </p>
        <ul>
          <li>F(0) = 0</li>
          <li>F(1) = 1</li>
          <li>F(n) = F(n-1) + F(n-2) for n > 1</li>
        </ul>
        
        <h3>Different Implementation Approaches</h3>
        
        <h4>1. Recursive Implementation</h4>
        <p>
          The direct translation of the mathematical definition into code:
        </p>
        <CodeBlock>
{`function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`}
        </CodeBlock>
        
        <p>
          While elegant, this approach has exponential time complexity O(2^n) due to redundant calculations.
        </p>
        
        <h4>2. Dynamic Programming (Memoization)</h4>
        <p>
          We can optimize the recursive approach by storing already calculated values:
        </p>
        <CodeBlock>
{`function fibonacciDP(n) {
  const memo = Array(n + 1).fill(0);
  memo[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  
  return memo[n];
}`}
        </CodeBlock>
        
        <h4>3. Iterative (Space-Optimized)</h4>
        <p>
          We can further optimize space by only keeping track of the last two values:
        </p>
        <CodeBlock>
{`function fibonacciIterative(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  
  let a = 0, b = 1;
  
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}`}
        </CodeBlock>
        
        <h3>Time and Space Complexity</h3>
        
        <TimeComplexityTable>
          <thead>
            <tr>
              <TableHeader>Implementation</TableHeader>
              <TableHeader>Time Complexity</TableHeader>
              <TableHeader>Space Complexity</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Recursive</TableCell>
              <TableCell>O(2<sup>n</sup>)</TableCell>
              <TableCell>O(n) - call stack depth</TableCell>
            </tr>
            <tr>
              <TableCell>Dynamic Programming</TableCell>
              <TableCell>O(n)</TableCell>
              <TableCell>O(n)</TableCell>
            </tr>
            <tr>
              <TableCell>Iterative</TableCell>
              <TableCell>O(n)</TableCell>
              <TableCell>O(1)</TableCell>
            </tr>
          </tbody>
        </TimeComplexityTable>
        
        <Note>
          <p>
            The Fibonacci sequence appears in many natural phenomena, such as:
          </p>
          <ul>
            <li>The arrangement of leaves on many plants (phyllotaxis)</li>
            <li>The spiral patterns of pinecones and pineapples</li>
            <li>The branching of trees</li>
            <li>The ratio of consecutive Fibonacci numbers approaches the Golden Ratio (approximately 1.618)</li>
          </ul>
          <p>
            In computer science, the Fibonacci sequence serves as an excellent example for 
            understanding recursion, dynamic programming, and algorithm optimization.
          </p>
        </Note>
      </ExplanationCard>
    </PageContainer>
  );
};

// Create a new component that uses the HOC
const Fibonacci = withAlgorithmState(FibonacciComponent, 'fibonacci');
export default Fibonacci; 