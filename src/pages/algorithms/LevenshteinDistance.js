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

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const TableCell = styled(motion.td)`
  border: 1px solid var(--border);
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  position: relative;
  background-color: ${props => 
    props.active ? 'rgba(var(--primary-rgb), 0.2)' : 
    props.optimal ? 'rgba(var(--success-rgb), 0.2)' : 
    props.current ? 'rgba(var(--info-rgb), 0.2)' : 
    'transparent'};
`;

const TableHeader = styled.th`
  border: 1px solid var(--border);
  padding: 0.75rem;
  text-align: center;
  background-color: var(--primary-light);
  color: white;
`;

const IndexCell = styled.td`
  border: 1px solid var(--border);
  padding: 0.75rem;
  text-align: center;
  background-color: var(--primary-light);
  color: white;
  font-weight: bold;
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

const OperationBox = styled.div`
  margin-top: 10px;
  font-size: 0.8rem;
  color: ${props => 
    props.insert ? 'var(--success)' : 
    props.delete ? 'var(--error)' : 
    props.substitute ? 'var(--warning)' : 
    'var(--text-secondary)'};
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
`;

const OperationArrow = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-bottom: 8px solid ${props => 
    props.insert ? 'var(--success)' : 
    props.delete ? 'var(--error)' : 
    props.substitute ? 'var(--warning)' : 
    props.copy ? 'var(--info)' : 
    'transparent'};
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

const Legend = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 1rem 0;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LegendColor = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: ${props => props.color};
`;

const LevenshteinDistance = () => {
  const [source, setSource] = useState('kitten');
  const [target, setTarget] = useState('sitting');
  const [dp, setDp] = useState([]);
  const [activeCell, setActiveCell] = useState(null);
  const [optimalPath, setOptimalPath] = useState([]);
  const [currentCell, setCurrentCell] = useState(null);
  const [distance, setDistance] = useState(0);
  const [operations, setOperations] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(1000);
  const [stepsLog, setStepsLog] = useState([]);
  
  const animationRef = useRef(null);
  
  // Initialize DP table
  const initializeDP = () => {
    const rows = source.length + 1;
    const cols = target.length + 1;
    const newDp = Array(rows).fill().map(() => Array(cols).fill(0));
    
    // Initialize first row and column
    for (let i = 0; i <= source.length; i++) {
      newDp[i][0] = i;
    }
    
    for (let j = 0; j <= target.length; j++) {
      newDp[0][j] = j;
    }
    
    setDp(newDp);
    return newDp;
  };
  
  // Calculate Levenshtein distance
  const calculateDistance = () => {
    const rows = source.length + 1;
    const cols = target.length + 1;
    const newDp = initializeDP();
    const steps = [];
    
    // Fill the DP table
    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        // Consider different operations
        const deleteCost = newDp[i-1][j] + 1;
        const insertCost = newDp[i][j-1] + 1;
        const substituteCost = newDp[i-1][j-1] + (source[i-1] === target[j-1] ? 0 : 1);
        
        steps.push({
          type: 'compare',
          i, j,
          message: `Comparing source[${i-1}]="${source[i-1]}" with target[${j-1}]="${target[j-1]}"`
        });
        
        // Calculate costs
        steps.push({
          type: 'cost',
          i, j,
          deleteCost,
          insertCost,
          substituteCost,
          message: `Costs - Delete: ${deleteCost}, Insert: ${insertCost}, ${source[i-1] === target[j-1] ? 'Copy' : 'Substitute'}: ${substituteCost}`
        });
        
        // Choose minimum cost
        newDp[i][j] = Math.min(deleteCost, insertCost, substituteCost);
        
        let operation = '';
        if (newDp[i][j] === deleteCost) {
          operation = 'delete';
        } else if (newDp[i][j] === insertCost) {
          operation = 'insert';
        } else {
          operation = source[i-1] === target[j-1] ? 'copy' : 'substitute';
        }
        
        steps.push({
          type: 'update',
          i, j,
          value: newDp[i][j],
          operation,
          message: `Cell (${i},${j}) updated with minimum cost: ${newDp[i][j]} (${operation})`
        });
      }
    }
    
    // Trace back the optimal path
    const path = [];
    const ops = [];
    let i = source.length;
    let j = target.length;
    
    steps.push({
      type: 'backtrack-start',
      message: `Starting backtracking from cell (${i},${j}) with value ${newDp[i][j]}`
    });
    
    while (i > 0 || j > 0) {
      path.push({i, j});
      
      if (i > 0 && j > 0 && newDp[i][j] === newDp[i-1][j-1] && source[i-1] === target[j-1]) {
        // Copy operation
        ops.push({
          type: 'copy',
          i, j,
          char: source[i-1]
        });
        
        steps.push({
          type: 'backtrack',
          i, j,
          nextI: i-1,
          nextJ: j-1,
          operation: 'copy',
          message: `Characters match: "${source[i-1]}" copied. Move diagonally to (${i-1},${j-1})`
        });
        
        i--;
        j--;
      } else if (i > 0 && j > 0 && newDp[i][j] === newDp[i-1][j-1] + 1) {
        // Substitute operation
        ops.push({
          type: 'substitute',
          i, j,
          oldChar: source[i-1],
          newChar: target[j-1]
        });
        
        steps.push({
          type: 'backtrack',
          i, j,
          nextI: i-1,
          nextJ: j-1,
          operation: 'substitute',
          message: `Substituted "${source[i-1]}" with "${target[j-1]}". Move diagonally to (${i-1},${j-1})`
        });
        
        i--;
        j--;
      } else if (i > 0 && newDp[i][j] === newDp[i-1][j] + 1) {
        // Delete operation
        ops.push({
          type: 'delete',
          i, j,
          char: source[i-1]
        });
        
        steps.push({
          type: 'backtrack',
          i, j,
          nextI: i-1,
          nextJ: j,
          operation: 'delete',
          message: `Deleted "${source[i-1]}". Move up to (${i-1},${j})`
        });
        
        i--;
      } else if (j > 0 && newDp[i][j] === newDp[i][j-1] + 1) {
        // Insert operation
        ops.push({
          type: 'insert',
          i, j,
          char: target[j-1]
        });
        
        steps.push({
          type: 'backtrack',
          i, j,
          nextI: i,
          nextJ: j-1,
          operation: 'insert',
          message: `Inserted "${target[j-1]}". Move left to (${i},${j-1})`
        });
        
        j--;
      }
    }
    
    // Reverse to get operations in the right order
    ops.reverse();
    
    setDp(newDp);
    setDistance(newDp[source.length][target.length]);
    setOptimalPath(path);
    setOperations(ops);
    setStepsLog(steps);
    setTotalSteps(steps.length);
    
    return { distance: newDp[source.length][target.length], steps, operations: ops };
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
      case 'compare':
      case 'cost':
        setActiveCell({i: step.i, j: step.j});
        setCurrentCell(null);
        break;
      case 'update':
        setActiveCell({i: step.i, j: step.j});
        setCurrentCell(null);
        break;
      case 'backtrack-start':
        setActiveCell(null);
        setCurrentCell({i: source.length, j: target.length});
        break;
      case 'backtrack':
        setActiveCell(null);
        setCurrentCell({i: step.i, j: step.j});
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
    setActiveCell(null);
    setCurrentCell(null);
    setOptimalPath([]);
    setOperations([]);
    
    // Calculate and prepare animation
    const { steps } = calculateDistance();
    
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
    setActiveCell(null);
    setCurrentCell(null);
    setOptimalPath([]);
    setOperations([]);
    initializeDP();
    setDistance(0);
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
  
  // Format operations for display
  const formatOperations = () => {
    return operations.map((op, index) => {
      switch (op.type) {
        case 'copy':
          return `Keep '${op.char}'`;
        case 'substitute':
          return `Replace '${op.oldChar}' with '${op.newChar}'`;
        case 'delete':
          return `Delete '${op.char}'`;
        case 'insert':
          return `Insert '${op.char}'`;
        default:
          return '';
      }
    }).join(', ');
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Levenshtein Distance</Title>
        <Description>
          A string metric for measuring the difference between two sequences, also known as the edit distance.
        </Description>
      </Header>
      
      <InputSection>
        <SectionTitle>Input</SectionTitle>
        <InputGroup>
          <Label htmlFor="source">Source String:</Label>
          <Input 
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            disabled={isAnimating}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="target">Target String:</Label>
          <Input 
            id="target"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            disabled={isAnimating}
          />
        </InputGroup>
        
        <VisualizationControls>
          <Button onClick={startVisualization} disabled={isAnimating || !source || !target}>
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
        <SectionTitle>DP Table</SectionTitle>
        
        <Legend>
          <LegendItem>
            <LegendColor color="rgba(var(--primary-rgb), 0.2)" />
            <span>Current Cell</span>
          </LegendItem>
          <LegendItem>
            <LegendColor color="rgba(var(--info-rgb), 0.2)" />
            <span>Backtracking</span>
          </LegendItem>
          <LegendItem>
            <LegendColor color="rgba(var(--success-rgb), 0.2)" />
            <span>Optimal Path</span>
          </LegendItem>
        </Legend>
        
        {dp.length > 0 && (
          <Table>
            <thead>
              <tr>
                <TableHeader></TableHeader>
                <TableHeader></TableHeader>
                {target.split('').map((char, idx) => (
                  <TableHeader key={idx}>{char}</TableHeader>
                ))}
              </tr>
            </thead>
            <tbody>
              {dp.map((row, i) => (
                <tr key={i}>
                  {i === 0 ? (
                    <IndexCell></IndexCell>
                  ) : (
                    <IndexCell>{source[i-1]}</IndexCell>
                  )}
                  {row.map((cell, j) => {
                    const isActive = activeCell && activeCell.i === i && activeCell.j === j;
                    const isCurrent = currentCell && currentCell.i === i && currentCell.j === j;
                    const isOptimal = optimalPath.some(p => p.i === i && p.j === j);
                    
                    // Determine operation for backtracking
                    let operation = null;
                    if (isOptimal && i > 0 && j > 0) {
                      const op = operations.find(o => o.i === i && o.j === j);
                      if (op) operation = op.type;
                    }
                    
                    return (
                      <TableCell 
                        key={j}
                        active={isActive}
                        current={isCurrent}
                        optimal={isOptimal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {cell}
                        {operation && (
                          <OperationArrow 
                            insert={operation === 'insert'}
                            delete={operation === 'delete'}
                            substitute={operation === 'substitute'}
                            copy={operation === 'copy'}
                          />
                        )}
                      </TableCell>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        
        {distance > 0 && (
          <Result>
            <span>Levenshtein Distance: </span>
            <strong>{distance}</strong>
          </Result>
        )}
        
        {operations.length > 0 && (
          <Result>
            <span>Operations: </span>
            <span>{formatOperations()}</span>
          </Result>
        )}
      </VisualizationContainer>
      
      <SectionTitle>How It Works</SectionTitle>
      <ExplanationCard>
        <p>
          The Levenshtein distance between two strings is the minimum number of single-character edits
          (insertions, deletions, or substitutions) required to change one string into the other.
        </p>
        
        <h3>Dynamic Programming Approach</h3>
        <p>
          We solve this problem using a dynamic programming approach by filling a table where:
        </p>
        <ul>
          <li>dp[i][j] represents the minimum number of operations to convert the first i characters of the source string to the first j characters of the target string.</li>
        </ul>
        
        <h3>The Algorithm</h3>
        <p>The DP recurrence relation is:</p>
        <CodeBlock>
{`// Base cases
dp[i][0] = i // Deleting i characters from source
dp[0][j] = j // Inserting j characters from target

// For each cell in the table
dp[i][j] = min(
  dp[i-1][j] + 1,      // Deletion
  dp[i][j-1] + 1,      // Insertion
  dp[i-1][j-1] + (source[i-1] === target[j-1] ? 0 : 1)  // Substitution or Copy
)`}
        </CodeBlock>
        
        <CodeBlock>
{`function levenshteinDistance(source, target) {
  const m = source.length;
  const n = target.length;
  
  // Create the DP table
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  // Initialize first row and column
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }
  
  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (source[i-1] === target[j-1]) {
        // No operation needed if characters match
        dp[i][j] = dp[i-1][j-1];
      } else {
        // Minimum of the three operations
        dp[i][j] = Math.min(
          dp[i-1][j] + 1,  // Deletion
          dp[i][j-1] + 1,  // Insertion
          dp[i-1][j-1] + 1 // Substitution
        );
      }
    }
  }
  
  return dp[m][n];
}`}
        </CodeBlock>
        
        <h3>Time and Space Complexity</h3>
        <ul>
          <li><strong>Time Complexity:</strong> O(m × n) where m and n are the lengths of the source and target strings</li>
          <li><strong>Space Complexity:</strong> O(m × n) for the DP table</li>
        </ul>
        
        <Note>
          <p>
            Levenshtein distance has numerous applications:
          </p>
          <ul>
            <li>Spell-checking and auto-correct features</li>
            <li>DNA sequence alignment in bioinformatics</li>
            <li>Plagiarism detection</li>
            <li>Fuzzy string searching</li>
            <li>Speech recognition</li>
          </ul>
          <p>
            The distance can be interpreted as the minimum number of operations needed to transform
            one string into another, which makes it intuitive for measuring string similarity.
          </p>
        </Note>
      </ExplanationCard>
    </PageContainer>
  );
};

export default LevenshteinDistance; 