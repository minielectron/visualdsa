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

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s;
  min-height: 100px;
  resize: vertical;
  
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

const TextCharacter = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin: 0.25rem;
  text-align: center;
  line-height: 2rem;
  border-radius: 4px;
  border: 1px solid var(--border);
  font-family: monospace;
  font-size: 1.25rem;
  background-color: ${props => {
    if (props.isMatch) return 'rgba(var(--success-rgb), 0.2)';
    if (props.isMismatch) return 'rgba(var(--error-rgb), 0.2)';
    if (props.isCurrent) return 'rgba(var(--primary-rgb), 0.2)';
    if (props.isSkip) return 'rgba(var(--warning-rgb), 0.2)';
    return 'var(--surface-variant)';
  }};
  color: ${props => {
    if (props.isMatch) return 'var(--success)';
    if (props.isMismatch) return 'var(--error)';
    if (props.isCurrent) return 'var(--primary)';
    if (props.isSkip) return 'var(--warning)';
    return 'var(--text-primary)';
  }};
  border-color: ${props => {
    if (props.isMatch) return 'var(--success)';
    if (props.isMismatch) return 'var(--error)';
    if (props.isCurrent) return 'var(--primary)';
    if (props.isSkip) return 'var(--warning)';
    return 'var(--border)';
  }};
  font-weight: ${props => (props.isMatch || props.isMismatch || props.isCurrent) ? 'bold' : 'normal'};
`;

const TextContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: var(--surface-variant);
  border-radius: var(--border-radius);
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const PatternContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: var(--surface-variant);
  border-radius: var(--border-radius);
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: ${props => `flex-start`};
  margin-left: ${props => props.alignment || '0'};
`;

const BadCharTable = styled.div`
  margin: 1.5rem 0;
  overflow-x: auto;
`;

const GoodSuffixTable = styled.div`
  margin: 1.5rem 0;
  overflow-x: auto;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 1rem 0;
`;

const TableHeader = styled.th`
  background-color: var(--primary-light);
  color: white;
  padding: 0.5rem;
  text-align: center;
  border: 1px solid var(--border);
`;

const TableCell = styled.td`
  padding: 0.5rem;
  text-align: center;
  border: 1px solid var(--border);
`;

const InfoText = styled.div`
  margin: 1rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Step = styled(motion.div)`
  padding: 1rem;
  background-color: var(--surface-variant);
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  border-left: 4px solid ${props => 
    props.type === 'match' ? 'var(--success)' : 
    props.type === 'mismatch' ? 'var(--error)' : 
    props.type === 'skip' ? 'var(--warning)' : 'var(--primary)'};
`;

const StepTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.div`
  color: var(--text-secondary);
`;

const IndexLabel = styled.div`
  display: flex;
  margin: 0.25rem;
  justify-content: space-between;
  font-family: monospace;
  color: var(--text-secondary);
  font-size: 0.8rem;
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

const MatchCount = styled.span`
  font-weight: bold;
  color: var(--primary);
`;

const MatchPositions = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SpeedControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StepCounter = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
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

const BoyerMoore = () => {
  const [text, setText] = useState("Here is a simple example text for demonstrating the Boyer-Moore algorithm for pattern matching.");
  const [pattern, setPattern] = useState("pattern");
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(-1);
  const [currentPatternIndex, setCurrentPatternIndex] = useState(-1);
  const [matchPositions, setMatchPositions] = useState([]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(1000);
  const [badCharTable, setBadCharTable] = useState({});
  const [goodSuffixTable, setGoodSuffixTable] = useState([]);
  const [skipIndices, setSkipIndices] = useState([]);
  
  const animationRef = useRef(null);
  
  const createBadCharTable = (pattern) => {
    const table = {};
    
    // Default value for all characters (pattern length)
    for (let i = 0; i < pattern.length - 1; i++) {
      // The bad character rule uses the rightmost occurrence
      table[pattern[i]] = pattern.length - 1 - i;
    }
    
    return table;
  };
  
  const createGoodSuffixTable = (pattern) => {
    const m = pattern.length;
    const table = new Array(m).fill(m);
    
    // Preprocessing for case 2
    const suffix = new Array(m + 1).fill(0);
    
    // First pass: compute the length of the longest suffix matching a prefix for each position
    let f = 0;
    for (let i = m - 1, g = m - 1; i >= 0; i--) {
      if (i > g && suffix[i + m - 1 - f] < i - g) {
        suffix[i] = suffix[i + m - 1 - f];
      } else {
        if (i < g) g = i;
        f = i;
        while (g >= 0 && pattern[g] === pattern[g + m - 1 - f]) g--;
        suffix[i] = f - g;
      }
    }
    
    // Second pass: fill in the actual good suffix shift table
    for (let i = 0; i < m; i++) {
      table[m - 1 - suffix[i]] = m - 1 - i;
    }
    
    // Fill in the shifts for the case when only a portion of the pattern matches
    let j = 0;
    for (let i = 0; i < m - 1; i++) {
      if (suffix[i] === i + 1) {
        for (; j < m - 1 - i; j++) {
          if (table[j] === m) table[j] = m - 1 - i;
        }
      }
    }
    
    return table;
  };
  
  const findPatternMatches = () => {
    if (!text || !pattern || pattern.length === 0) {
      return { steps: [], matches: [] };
    }
    
    const n = text.length;
    const m = pattern.length;
    const matches = [];
    const steps = [];
    
    const badChar = createBadCharTable(pattern);
    const goodSuffix = createGoodSuffixTable(pattern);
    
    setBadCharTable(badChar);
    setGoodSuffixTable(goodSuffix);
    
    // Generate table explanation for steps
    const tableStep = {
      type: 'table',
      title: "Preprocessing Tables",
      description: "Generated Bad Character and Good Suffix tables for efficient shifting.",
      textIndex: -1,
      patternIndex: -1,
      shift: 0
    };
    steps.push(tableStep);
    
    let i = 0; // Position of the pattern's right end in the text
    
    while (i <= n - m) {
      let j = m - 1; // Index in pattern, starting from the end
      
      // Compare characters from right to left
      while (j >= 0 && pattern[j] === text[i + j]) {
        j--;
      }
      
      if (j < 0) {
        // Pattern found
        matches.push(i);
        
        steps.push({
          type: 'match',
          title: `Match Found at Position ${i}`,
          description: `Complete match of "${pattern}" found at position ${i} in the text.`,
          textIndex: i,
          patternIndex: -1,
          shift: 1, // Shift by 1 to avoid getting stuck
          matchStart: i,
          matchEnd: i + m - 1
        });
        
        // Shift to the next position (can be optimized further)
        i += 1;
      } else {
        // Mismatch
        // Calculate shift based on bad character rule
        const badCharShift = badChar[text[i + j]] || m;
        
        // Calculate shift based on good suffix rule
        const goodSuffixShift = goodSuffix[j];
        
        // Take the maximum shift from both rules
        const shift = Math.max(badCharShift, goodSuffixShift);
        
        steps.push({
          type: 'mismatch',
          title: `Mismatch at Position ${i + j}`,
          description: `Mismatch detected. Character '${text[i + j]}' in text doesn't match '${pattern[j]}' in pattern. ` +
                      `Bad character shift: ${badCharShift}, Good suffix shift: ${goodSuffixShift}. ` + 
                      `Taking the maximum shift of ${shift}.`,
          textIndex: i + j,
          patternIndex: j,
          shift: shift,
          alignmentIndex: i
        });
        
        i += shift;
      }
    }
    
    if (matches.length === 0) {
      steps.push({
        type: 'info',
        title: "Search Complete",
        description: `No occurrences of "${pattern}" found in the text.`,
        textIndex: -1,
        patternIndex: -1,
        shift: 0
      });
    } else {
      steps.push({
        type: 'info',
        title: "Search Complete",
        description: `Found ${matches.length} occurrence${matches.length > 1 ? 's' : ''} of "${pattern}" in the text at position${matches.length > 1 ? 's' : ''} ${matches.join(', ')}.`,
        textIndex: -1,
        patternIndex: -1,
        shift: 0
      });
    }
    
    return { steps, matches };
  };
  
  const animateStep = (stepIndex) => {
    if (stepIndex >= steps.length) {
      setIsAnimating(false);
      return;
    }
    
    const step = steps[stepIndex];
    setCurrentStep(stepIndex + 1);
    
    // Reset states
    setCurrentTextIndex(-1);
    setCurrentPatternIndex(-1);
    setSkipIndices([]);
    
    if (step.type === 'mismatch') {
      setCurrentTextIndex(step.textIndex);
      setCurrentPatternIndex(step.patternIndex);
      
      // Highlight characters to be skipped
      const skipIndices = [];
      for (let i = 0; i < step.shift; i++) {
        if (step.alignmentIndex + i < text.length) {
          skipIndices.push(step.alignmentIndex + i);
        }
      }
      setSkipIndices(skipIndices);
    } else if (step.type === 'match') {
      // Highlight the entire matched substring
      const matchIndices = [];
      for (let i = step.matchStart; i <= step.matchEnd; i++) {
        matchIndices.push(i);
      }
      setCurrentTextIndex(matchIndices);
    }
    
    // Schedule next step
    animationRef.current = setTimeout(() => {
      animateStep(stepIndex + 1);
    }, animationSpeed);
  };
  
  const startVisualization = () => {
    if (isAnimating) return;
    
    // Reset state
    setIsAnimating(true);
    setCurrentStep(0);
    setCurrentTextIndex(-1);
    setCurrentPatternIndex(-1);
    setMatchPositions([]);
    setSkipIndices([]);
    setSteps([]);
    
    // Run search and prepare animation
    const { steps, matches } = findPatternMatches();
    setSteps(steps);
    setTotalSteps(steps.length);
    setMatchPositions(matches);
    
    // Start animation
    if (animationRef.current) clearTimeout(animationRef.current);
    animationRef.current = setTimeout(() => {
      animateStep(0);
    }, 500);
  };
  
  const stopVisualization = () => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }
    setIsAnimating(false);
  };
  
  const resetVisualization = () => {
    stopVisualization();
    setCurrentStep(0);
    setCurrentTextIndex(-1);
    setCurrentPatternIndex(-1);
    setMatchPositions([]);
    setSkipIndices([]);
    setSteps([]);
    setBadCharTable({});
    setGoodSuffixTable([]);
  };
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);
  
  const renderBadCharTable = () => {
    if (Object.keys(badCharTable).length === 0) return null;
    
    return (
      <BadCharTable>
        <h3>Bad Character Table</h3>
        <Table>
          <thead>
            <tr>
              <TableHeader>Character</TableHeader>
              {Object.keys(badCharTable).map((char, index) => (
                <TableHeader key={index}>{char === ' ' ? '(space)' : char}</TableHeader>
              ))}
              <TableHeader>Any other character</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Shift</TableCell>
              {Object.values(badCharTable).map((shift, index) => (
                <TableCell key={index}>{shift}</TableCell>
              ))}
              <TableCell>{pattern.length}</TableCell>
            </tr>
          </tbody>
        </Table>
        <InfoText>
          The Bad Character Table tells us how far to shift the pattern when a mismatch occurs.
          When a character in the text doesn't match the corresponding character in the pattern,
          we look up the rightmost occurrence of that character in the pattern, and shift accordingly.
        </InfoText>
      </BadCharTable>
    );
  };
  
  const renderGoodSuffixTable = () => {
    if (goodSuffixTable.length === 0) return null;
    
    return (
      <GoodSuffixTable>
        <h3>Good Suffix Table</h3>
        <Table>
          <thead>
            <tr>
              <TableHeader>j (mismatch position)</TableHeader>
              {goodSuffixTable.map((_, index) => (
                <TableHeader key={index}>{index}</TableHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Shift</TableCell>
              {goodSuffixTable.map((shift, index) => (
                <TableCell key={index}>{shift}</TableCell>
              ))}
            </tr>
          </tbody>
        </Table>
        <InfoText>
          The Good Suffix Table provides shift values based on partially matched suffixes.
          When a mismatch occurs at position j in the pattern, we use this table to determine
          how far to shift the pattern based on previously matched characters.
        </InfoText>
      </GoodSuffixTable>
    );
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Boyer-Moore Algorithm</Title>
        <Description>
          An efficient string searching algorithm that uses preprocessing to achieve faster searches.
        </Description>
      </Header>
      
      <InputSection>
        <SectionTitle>Input</SectionTitle>
        <InputGroup>
          <Label htmlFor="text">Text:</Label>
          <Textarea 
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isAnimating}
          />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="pattern">Pattern to Search:</Label>
          <Input 
            id="pattern"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            disabled={isAnimating}
          />
        </InputGroup>
        
        <ControlsContainer>
          <div>
            <Button onClick={startVisualization} disabled={isAnimating || !text || !pattern}>
              Start Visualization
            </Button>
            <Button onClick={stopVisualization} disabled={!isAnimating}>
              Stop
            </Button>
            <Button onClick={resetVisualization} disabled={isAnimating}>
              Reset
            </Button>
          </div>
          
          <SpeedControl>
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
          </SpeedControl>
        </ControlsContainer>
        
        {currentStep > 0 && (
          <StepCounter>
            Step {currentStep} of {totalSteps}
          </StepCounter>
        )}
      </InputSection>
      
      <VisualizationContainer>
        <SectionTitle>Visualization</SectionTitle>
        
        <Legend>
          <LegendItem>
            <LegendColor color="rgba(var(--success-rgb), 0.2)" border="var(--success)" />
            <span>Match</span>
          </LegendItem>
          <LegendItem>
            <LegendColor color="rgba(var(--error-rgb), 0.2)" border="var(--error)" />
            <span>Mismatch</span>
          </LegendItem>
          <LegendItem>
            <LegendColor color="rgba(var(--primary-rgb), 0.2)" border="var(--primary)" />
            <span>Current Comparison</span>
          </LegendItem>
          <LegendItem>
            <LegendColor color="rgba(var(--warning-rgb), 0.2)" border="var(--warning)" />
            <span>Skip (Shift)</span>
          </LegendItem>
        </Legend>
        
        <IndexLabel>
          {text && Array.from({ length: Math.min(10, text.length) }, (_, i) => (
            <span key={i}>{i}</span>
          ))}
        </IndexLabel>
        
        <TextContainer>
          {text && text.split('').map((char, index) => {
            const isMatch = Array.isArray(currentTextIndex) && currentTextIndex.includes(index);
            const isMismatch = typeof currentTextIndex === 'number' && index === currentTextIndex;
            const isCurrent = typeof currentTextIndex === 'number' && index === currentTextIndex;
            const isSkip = skipIndices.includes(index);
            
            return (
              <TextCharacter
                key={index}
                isMatch={isMatch}
                isMismatch={isMismatch}
                isCurrent={isCurrent}
                isSkip={isSkip}
              >
                {char}
              </TextCharacter>
            );
          })}
        </TextContainer>
        
        {currentStep > 0 && steps[currentStep - 1]?.alignmentIndex !== undefined && (
          <PatternContainer alignment={`${steps[currentStep - 1].alignmentIndex * 2.5}rem`}>
            {pattern && pattern.split('').map((char, index) => {
              const isMatch = Array.isArray(currentTextIndex) && 
                              index < pattern.length && 
                              currentTextIndex.includes(steps[currentStep - 1].alignmentIndex + index);
              const isMismatch = typeof currentPatternIndex === 'number' && index === currentPatternIndex;
              const isCurrent = typeof currentPatternIndex === 'number' && index === currentPatternIndex;
              
              return (
                <TextCharacter
                  key={index}
                  isMatch={isMatch}
                  isMismatch={isMismatch}
                  isCurrent={isCurrent}
                >
                  {char}
                </TextCharacter>
              );
            })}
          </PatternContainer>
        )}
        
        {currentStep > 0 && steps[currentStep - 1]?.type === 'table' && (
          <>
            {renderBadCharTable()}
            {renderGoodSuffixTable()}
          </>
        )}
        
        {matchPositions.length > 0 && (
          <Result>
            <span>
              <MatchCount>{matchPositions.length}</MatchCount> matches found
              <MatchPositions>
                at positions: {matchPositions.join(', ')}
              </MatchPositions>
            </span>
          </Result>
        )}
        
        {currentStep > 0 && (
          <div style={{ marginTop: '2rem' }}>
            <h3>Algorithm Steps</h3>
            <Step 
              type={steps[currentStep - 1]?.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <StepTitle>{steps[currentStep - 1]?.title}</StepTitle>
              <StepDescription>{steps[currentStep - 1]?.description}</StepDescription>
            </Step>
          </div>
        )}
      </VisualizationContainer>
      
      <SectionTitle>How It Works</SectionTitle>
      <ExplanationCard>
        <p>
          The Boyer-Moore algorithm is a powerful string searching algorithm designed to be more efficient than simpler approaches like naive pattern matching. 
          It is particularly efficient for large alphabets and long patterns.
        </p>
        
        <h3>Key Features</h3>
        <ul>
          <li>Searches from right to left within the pattern</li>
          <li>Uses two main heuristics for skipping portions of the text:
            <ul>
              <li><strong>Bad Character Rule</strong>: When a mismatch occurs, shift the pattern to align the mismatched character with its rightmost occurrence in the pattern.</li>
              <li><strong>Good Suffix Rule</strong>: When a mismatch occurs after a partial match, shift the pattern to align the matched suffix with its previous occurrence in the pattern.</li>
            </ul>
          </li>
          <li>Preprocesses the pattern to create lookup tables for both rules</li>
          <li>Can skip large portions of the text without even examining them</li>
        </ul>
        
        <h3>The Algorithm</h3>
        <ol>
          <li>Preprocess the pattern to create the bad character and good suffix tables.</li>
          <li>Align the pattern at the beginning of the text.</li>
          <li>Compare characters from right to left in the pattern.</li>
          <li>If a mismatch occurs:
            <ul>
              <li>Use the bad character rule to determine a shift.</li>
              <li>Use the good suffix rule to determine another shift.</li>
              <li>Take the maximum of these two shifts.</li>
            </ul>
          </li>
          <li>If a complete match is found, record it and shift by 1 (or by the good suffix rule).</li>
          <li>Repeat steps 3-5 until the pattern has been compared against all possible positions in the text.</li>
        </ol>
        
        <h3>Pseudocode</h3>
        <CodeBlock>
{`function boyerMooreSearch(text, pattern) {
  n = text.length
  m = pattern.length
  matches = []
  
  // Preprocess pattern
  badChar = createBadCharTable(pattern)
  goodSuffix = createGoodSuffixTable(pattern)
  
  i = 0  // Position of the pattern's right end in the text
  while (i <= n - m) {
    j = m - 1  // Index in pattern, starting from the end
    
    // Compare characters from right to left
    while (j >= 0 && pattern[j] == text[i+j]) {
      j--
    }
    
    if (j < 0) {
      // Pattern found
      matches.push(i)
      i += goodSuffix[0]  // Shift using good suffix rule
    } else {
      // Mismatch occurred, calculate shifts
      badCharShift = badChar[text[i+j]] or m
      goodSuffixShift = goodSuffix[j]
      
      // Take the maximum shift
      i += max(badCharShift, goodSuffixShift)
    }
  }
  
  return matches
}`}
        </CodeBlock>
        
        <h3>Time Complexity</h3>
        <ul>
          <li><strong>Preprocessing</strong>: O(m + σ) where m is the pattern length and σ is the alphabet size</li>
          <li><strong>Best Case</strong>: O(n/m) - can skip large portions of text</li>
          <li><strong>Average Case</strong>: O(n)</li>
          <li><strong>Worst Case</strong>: O(n*m) - but this is rare in practice</li>
        </ul>
        
        <h3>Space Complexity</h3>
        <p>
          O(m + σ) for storing the preprocessing tables.
        </p>
        
        <Note>
          <p>
            Boyer-Moore is typically the algorithm of choice for practical string searching applications when:
          </p>
          <ul>
            <li>The pattern is relatively long</li>
            <li>The alphabet is large (like ASCII or Unicode text)</li>
            <li>Multiple searches of the same pattern will be performed</li>
          </ul>
          <p>
            Many real-world implementations use simplified variants like Boyer-Moore-Horspool or 
            combine it with other algorithms for improved performance in specific cases.
          </p>
        </Note>
      </ExplanationCard>
    </PageContainer>
  );
};

export default BoyerMoore; 