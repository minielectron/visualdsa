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
  background-color: ${props => props.active ? 'rgba(var(--primary-rgb), 0.2)' : 
                               props.path ? 'rgba(var(--success-rgb), 0.2)' : 
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

const LCS = () => {
  const [string1, setString1] = useState('ABCBDAB');
  const [string2, setString2] = useState('BDCABA');
  const [dp, setDp] = useState([]);
  const [lcs, setLcs] = useState('');
  const [activeCell, setActiveCell] = useState(null);
  const [pathCells, setPathCells] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(1000);
  const [stepsLog, setStepsLog] = useState([]);
  
  const animationRef = useRef(null);
  
  // Initialize DP table
  const initializeDP = () => {
    const rows = string1.length + 1;
    const cols = string2.length + 1;
    const newDp = Array(rows).fill().map(() => Array(cols).fill(0));
    setDp(newDp);
    return newDp;
  };
  
  // Calculate LCS (non-animated version)
  const calculateLCS = () => {
    const rows = string1.length + 1;
    const cols = string2.length + 1;
    const newDp = initializeDP();
    const steps = [];
    
    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        steps.push({
          type: 'compare',
          i, j,
          message: `Comparing ${string1[i-1]} and ${string2[j-1]}`
        });
        
        if (string1[i-1] === string2[j-1]) {
          newDp[i][j] = newDp[i-1][j-1] + 1;
          steps.push({
            type: 'match',
            i, j,
            value: newDp[i][j],
            message: `Match found: ${string1[i-1]} = ${string2[j-1]}. Setting dp[${i}][${j}] = dp[${i-1}][${j-1}] + 1 = ${newDp[i][j]}`
          });
        } else {
          newDp[i][j] = Math.max(newDp[i-1][j], newDp[i][j-1]);
          steps.push({
            type: 'max',
            i, j,
            value: newDp[i][j],
            message: `No match. Setting dp[${i}][${j}] = max(dp[${i-1}][${j}], dp[${i}][${j-1}]) = max(${newDp[i-1][j]}, ${newDp[i][j-1]}) = ${newDp[i][j]}`
          });
        }
      }
    }
    
    // Backtrack to find the LCS
    let i = string1.length;
    let j = string2.length;
    let lcsResult = '';
    const path = [];
    
    while (i > 0 && j > 0) {
      path.push({i, j});
      steps.push({
        type: 'backtrack',
        i, j,
        message: `Backtracking: Checking cell (${i}, ${j})`
      });
      
      if (string1[i-1] === string2[j-1]) {
        lcsResult = string1[i-1] + lcsResult;
        steps.push({
          type: 'backtrack-match',
          i, j,
          char: string1[i-1],
          message: `Found a match: ${string1[i-1]}. Adding to LCS.`
        });
        i--;
        j--;
      } else if (newDp[i-1][j] > newDp[i][j-1]) {
        steps.push({
          type: 'backtrack-up',
          i, j,
          message: `Moving up since dp[${i-1}][${j}] (${newDp[i-1][j]}) > dp[${i}][${j-1}] (${newDp[i][j-1]})`
        });
        i--;
      } else {
        steps.push({
          type: 'backtrack-left',
          i, j,
          message: `Moving left since dp[${i}][${j-1}] (${newDp[i][j-1]}) ≥ dp[${i-1}][${j}] (${newDp[i-1][j]})`
        });
        j--;
      }
    }
    
    setDp(newDp);
    setLcs(lcsResult);
    setPathCells(path);
    setStepsLog(steps);
    setTotalSteps(steps.length);
    return { lcsResult, steps };
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
      case 'match':
      case 'max':
        setActiveCell({i: step.i, j: step.j});
        break;
      case 'backtrack':
      case 'backtrack-match':
      case 'backtrack-up':
      case 'backtrack-left':
        setActiveCell({i: step.i, j: step.j});
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
    setPathCells([]);
    
    // Calculate and prepare animation
    const { steps } = calculateLCS();
    
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
    setPathCells([]);
    initializeDP();
    setLcs('');
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
  
  return (
    <PageContainer>
      <Header>
        <Title>Longest Common Subsequence</Title>
        <Description>
          A classic dynamic programming problem to find the longest subsequence common to two sequences.
        </Description>
      </Header>
      
      <InputSection>
        <SectionTitle>Input</SectionTitle>
        <InputGroup>
          <Label htmlFor="string1">First String:</Label>
          <Input 
            id="string1"
            value={string1}
            onChange={(e) => setString1(e.target.value)}
            disabled={isAnimating}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="string2">Second String:</Label>
          <Input 
            id="string2"
            value={string2}
            onChange={(e) => setString2(e.target.value)}
            disabled={isAnimating}
          />
        </InputGroup>
        
        <VisualizationControls>
          <Button onClick={startVisualization} disabled={isAnimating || !string1 || !string2}>
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
        {dp.length > 0 && (
          <Table>
            <thead>
              <tr>
                <TableHeader></TableHeader>
                <TableHeader></TableHeader>
                {string2.split('').map((char, idx) => (
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
                    <IndexCell>{string1[i-1]}</IndexCell>
                  )}
                  {row.map((cell, j) => {
                    const isActive = activeCell && activeCell.i === i && activeCell.j === j;
                    const isPath = pathCells.some(p => p.i === i && p.j === j);
                    return (
                      <TableCell 
                        key={j}
                        active={isActive}
                        path={isPath}
                        initial={isActive ? { scale: 0.8 } : { scale: 1 }}
                        animate={isActive ? { scale: 1, backgroundColor: 'rgba(var(--primary-rgb), 0.2)' } : 
                                isPath ? { backgroundColor: 'rgba(var(--success-rgb), 0.2)' } : 
                                { scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {cell}
                      </TableCell>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        
        {lcs && (
          <Result>
            <span>Longest Common Subsequence: </span>
            <strong>{lcs}</strong>
          </Result>
        )}
      </VisualizationContainer>
      
      <SectionTitle>How It Works</SectionTitle>
      <ExplanationCard>
        <p>
          The Longest Common Subsequence (LCS) problem is a classic problem in computer science,
          which aims to find the longest subsequence common to two sequences.
          Unlike substrings, subsequences are not required to occupy consecutive positions within the original sequences.
        </p>
        
        <h3>Dynamic Programming Approach</h3>
        <p>
          The LCS problem exhibits optimal substructure and overlapping subproblems,
          making it an ideal candidate for a dynamic programming solution.
        </p>
        
        <p>Let's define:</p>
        <ul>
          <li>X = {string1} (of length m)</li>
          <li>Y = {string2} (of length n)</li>
        </ul>
        
        <p>
          We create a table DP[m+1][n+1] where DP[i][j] represents the length of LCS 
          of the prefixes X[0...i-1] and Y[0...j-1].
        </p>
        
        <h3>The Algorithm</h3>
        <CodeBlock>
{`// Fill dp table
for (let i = 1; i <= m; i++) {
  for (let j = 1; j <= n; j++) {
    if (X[i-1] == Y[j-1]) {
      // If the current characters match
      dp[i][j] = dp[i-1][j-1] + 1;
    } else {
      // If they don't match, take the maximum from either excluding X[i-1] or Y[j-1]
      dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
    }
  }
}

// Backtrack to find the actual LCS
let i = m, j = n;
let lcs = "";
while (i > 0 && j > 0) {
  if (X[i-1] == Y[j-1]) {
    // Current characters are part of LCS
    lcs = X[i-1] + lcs;
    i--;
    j--;
  }
  else if (dp[i-1][j] > dp[i][j-1]) {
    // Exclude current character from X
    i--;
  }
  else {
    // Exclude current character from Y
    j--;
  }
}

return lcs;`}
        </CodeBlock>
        
        <h3>Time and Space Complexity</h3>
        <ul>
          <li><strong>Time Complexity:</strong> O(m × n) where m and n are the lengths of the two strings</li>
          <li><strong>Space Complexity:</strong> O(m × n) for the DP table</li>
        </ul>
        
        <Note>
          <p>
            The LCS has numerous applications including:
          </p>
          <ul>
            <li>Comparing DNA or protein sequences in bioinformatics</li>
            <li>File comparison in utilities like diff</li>
            <li>Version control systems to identify changes</li>
            <li>Spell checking and correction</li>
          </ul>
        </Note>
      </ExplanationCard>
    </PageContainer>
  );
};

export default LCS; 