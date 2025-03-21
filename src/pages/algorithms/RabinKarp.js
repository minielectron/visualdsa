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

const StringVisualization = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
  font-family: monospace;
  font-size: 1.5rem;
`;

const CharacterContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2px;
`;

const Character = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${props => props.match ? 'var(--success)' : 
                            props.current ? 'var(--primary)' : 
                            props.mismatch ? 'var(--error)' : 
                            'var(--border)'};
  background-color: ${props => props.match ? 'rgba(var(--success-rgb), 0.2)' : 
                             props.current ? 'rgba(var(--primary-rgb), 0.2)' : 
                             props.mismatch ? 'rgba(var(--error-rgb), 0.2)' : 
                             'transparent'};
  border-radius: var(--border-radius);
  position: relative;
`;

const HashContainer = styled.div`
  font-family: monospace;
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem 0;
  padding: 1rem;
  background-color: rgba(var(--primary-rgb), 0.05);
  border-radius: var(--border-radius);
`;

const PatternVisualization = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  padding-left: ${props => props.offset}px;
  transition: padding-left 0.5s ease;
`;

const Index = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
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
  line-height: 1.4;
`;

const MatchPositions = styled.span`
  font-weight: 500;
  color: var(--primary);
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

const Highlight = styled.span`
  background-color: rgba(var(--primary-rgb), 0.1);
  color: var(--primary);
  padding: 0 4px;
  border-radius: 3px;
  font-weight: 500;
`;

const RabinKarp = () => {
  const [text, setText] = useState('ABABCABABCABDAB');
  const [pattern, setPattern] = useState('ABABC');
  const [prime, setPrime] = useState(101);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [patternHash, setPatternHash] = useState(0);
  const [currentWindowHash, setCurrentWindowHash] = useState(0);
  const [matchPositions, setMatchPositions] = useState([]);
  const [mismatchPosition, setMismatchPosition] = useState(null);
  const [activeWindow, setActiveWindow] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(1000);
  const [stepsLog, setStepsLog] = useState([]);
  const [characterWidth, setCharacterWidth] = useState(44); // Character width + margin
  
  const animationRef = useRef(null);
  
  // Compute hash value for a string
  const computeHash = (str, prime, m) => {
    let hash = 0;
    
    // For each character in the string
    for (let i = 0; i < m; i++) {
      // Add character code to hash
      hash = (hash * 256 + str.charCodeAt(i)) % prime;
    }
    
    return hash;
  };
  
  // Recalculate hash value for the next window
  const recalculateHash = (oldHash, oldChar, newChar, prime, d) => {
    let newHash = ((oldHash - oldChar.charCodeAt(0) * d) * 256 + newChar.charCodeAt(0)) % prime;
    
    // Ensure hash is always positive
    if (newHash < 0) {
      newHash += prime;
    }
    
    return newHash;
  };
  
  // Calculate highest power of 256 for the sliding window
  const calculateHighestPower = (m, prime) => {
    let highestPower = 1;
    
    // Calculate (256^(m-1)) % prime
    for (let i = 0; i < m - 1; i++) {
      highestPower = (highestPower * 256) % prime;
    }
    
    return highestPower;
  };
  
  // Perform Rabin-Karp algorithm
  const findPatternMatches = () => {
    const steps = [];
    const matches = [];
    const n = text.length;
    const m = pattern.length;
    
    // If pattern is longer than text, no matches possible
    if (m > n) {
      setStepsLog([{
        type: 'info',
        message: 'Pattern is longer than text, no matches possible'
      }]);
      setTotalSteps(1);
      return { matches: [], steps: [] };
    }
    
    // Calculate hash value of pattern
    const patternHashValue = computeHash(pattern, prime, m);
    setPatternHash(patternHashValue);
    
    steps.push({
      type: 'hash',
      hashValue: patternHashValue,
      target: 'pattern',
      message: `Computed hash value for pattern "${pattern}": ${patternHashValue}`
    });
    
    // Calculate hash value of first window of text
    const textHashValue = computeHash(text.substring(0, m), prime, m);
    setCurrentWindowHash(textHashValue);
    
    steps.push({
      type: 'hash',
      hashValue: textHashValue,
      target: 'window',
      windowStart: 0,
      windowEnd: m - 1,
      message: `Computed hash value for first window "${text.substring(0, m)}": ${textHashValue}`
    });
    
    // Highest power of 256 for rolling hash calculation
    const highestPower = calculateHighestPower(m, prime);
    
    steps.push({
      type: 'power',
      power: highestPower,
      message: `Calculated highest power of 256 for rolling hash: ${highestPower}`
    });
    
    // Check if the first window matches
    if (patternHashValue === textHashValue) {
      steps.push({
        type: 'hash-match',
        position: 0,
        message: `Hash values match at position 0: ${patternHashValue} = ${textHashValue}. Verifying characters...`
      });
      
      // Need to verify character by character
      let match = true;
      for (let i = 0; i < m; i++) {
        steps.push({
          type: 'verify',
          textPosition: i,
          patternPosition: i,
          match: text[i] === pattern[i],
          message: `Comparing text[${i}] = "${text[i]}" with pattern[${i}] = "${pattern[i]}": ${text[i] === pattern[i] ? 'Match' : 'Mismatch'}`
        });
        
        if (text[i] !== pattern[i]) {
          match = false;
          steps.push({
            type: 'mismatch',
            position: i,
            message: `Character mismatch at position ${i}. Continuing search...`
          });
          break;
        }
      }
      
      if (match) {
        matches.push(0);
        steps.push({
          type: 'match',
          position: 0,
          message: `Complete pattern match found starting at position 0`
        });
      }
    } else {
      steps.push({
        type: 'hash-mismatch',
        message: `Hash values don't match: ${patternHashValue} ≠ ${textHashValue}. Continuing search...`
      });
    }
    
    // Slide the window and check for matches
    for (let i = 1; i <= n - m; i++) {
      // Calculate new hash value based on previous one
      const newHash = recalculateHash(
        textHashValue, 
        text[i - 1], 
        text[i + m - 1], 
        prime, 
        highestPower
      );
      
      steps.push({
        type: 'slide',
        position: i,
        oldHash: textHashValue,
        newHash: newHash,
        windowStart: i,
        windowEnd: i + m - 1,
        message: `Sliding window to position ${i}: "${text.substring(i, i + m)}". New hash: ${newHash}`
      });
      
      // Update current hash value
      textHashValue = newHash;
      
      // If hashes match, verify character by character
      if (patternHashValue === textHashValue) {
        steps.push({
          type: 'hash-match',
          position: i,
          message: `Hash values match at position ${i}: ${patternHashValue} = ${textHashValue}. Verifying characters...`
        });
        
        let match = true;
        for (let j = 0; j < m; j++) {
          steps.push({
            type: 'verify',
            textPosition: i + j,
            patternPosition: j,
            match: text[i + j] === pattern[j],
            message: `Comparing text[${i + j}] = "${text[i + j]}" with pattern[${j}] = "${pattern[j]}": ${text[i + j] === pattern[j] ? 'Match' : 'Mismatch'}`
          });
          
          if (text[i + j] !== pattern[j]) {
            match = false;
            steps.push({
              type: 'mismatch',
              position: i + j,
              message: `Character mismatch at position ${i + j}. Continuing search...`
            });
            break;
          }
        }
        
        if (match) {
          matches.push(i);
          steps.push({
            type: 'match',
            position: i,
            message: `Complete pattern match found starting at position ${i}`
          });
        }
      } else {
        steps.push({
          type: 'hash-mismatch',
          message: `Hash values don't match: ${patternHashValue} ≠ ${textHashValue}. Continuing search...`
        });
      }
    }
    
    setStepsLog(steps);
    setTotalSteps(steps.length);
    setMatchPositions(matches);
    
    return { matches, steps };
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
      case 'hash':
        if (step.target === 'pattern') {
          setPatternHash(step.hashValue);
        } else if (step.target === 'window') {
          setCurrentWindowHash(step.hashValue);
          setCurrentPosition(step.windowStart);
          setActiveWindow([step.windowStart, step.windowEnd]);
        }
        break;
      case 'slide':
        setCurrentWindowHash(step.newHash);
        setCurrentPosition(step.position);
        setActiveWindow([step.windowStart, step.windowEnd]);
        setMismatchPosition(null);
        break;
      case 'hash-match':
      case 'hash-mismatch':
        // Just update the message display
        break;
      case 'verify':
        if (!step.match) {
          setMismatchPosition(step.textPosition);
        }
        break;
      case 'mismatch':
        setMismatchPosition(step.position);
        break;
      case 'match':
        // Already handled by setting matchPositions at the end
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
    setCurrentPosition(0);
    setPatternHash(0);
    setCurrentWindowHash(0);
    setMatchPositions([]);
    setMismatchPosition(null);
    setActiveWindow([]);
    
    // Calculate and prepare animation
    const { steps } = findPatternMatches();
    
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
    setCurrentPosition(0);
    setPatternHash(0);
    setCurrentWindowHash(0);
    setMatchPositions([]);
    setMismatchPosition(null);
    setActiveWindow([]);
    setStepsLog([]);
  };
  
  // Handle prime number input
  const handlePrimeChange = (e) => {
    const value = parseInt(e.target.value) || 101;
    setPrime(value);
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
        <Title>Rabin-Karp Algorithm</Title>
        <Description>
          An efficient string searching algorithm that uses hashing to find instances of a pattern within a text.
        </Description>
      </Header>
      
      <InputSection>
        <SectionTitle>Input</SectionTitle>
        <InputGroup>
          <Label htmlFor="text">Text:</Label>
          <Input 
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isAnimating}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="pattern">Pattern to Find:</Label>
          <Input 
            id="pattern"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            disabled={isAnimating}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="prime">Prime Number (for hash function):</Label>
          <Input 
            id="prime"
            type="number"
            value={prime}
            onChange={handlePrimeChange}
            min="2"
            disabled={isAnimating}
          />
        </InputGroup>
        
        <VisualizationControls>
          <Button onClick={startVisualization} disabled={isAnimating || !text || !pattern}>
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
        <HashContainer>
          <div>Pattern Hash: <Highlight>{patternHash}</Highlight></div>
          <div>Current Window Hash: <Highlight>{currentWindowHash}</Highlight></div>
        </HashContainer>
        
        <StringVisualization>
          {text.split('').map((char, index) => {
            const isMatch = matchPositions.some(pos => index >= pos && index < pos + pattern.length);
            const isInWindow = activeWindow.length && index >= activeWindow[0] && index <= activeWindow[1];
            const isMismatch = index === mismatchPosition;
            
            return (
              <CharacterContainer 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
              >
                <Character
                  match={isMatch}
                  current={isInWindow}
                  mismatch={isMismatch}
                >
                  {char}
                </Character>
                <Index>{index}</Index>
              </CharacterContainer>
            );
          })}
        </StringVisualization>
        
        <PatternVisualization offset={currentPosition * characterWidth}>
          {pattern.split('').map((char, index) => (
            <CharacterContainer key={index}>
              <Character>
                {char}
              </Character>
              <Index>{index}</Index>
            </CharacterContainer>
          ))}
        </PatternVisualization>
        
        {matchPositions.length > 0 && (
          <Result>
            Pattern found at positions: <MatchPositions>{matchPositions.join(', ')}</MatchPositions>
          </Result>
        )}
        
        {currentStep === totalSteps && matchPositions.length === 0 && (
          <Result>
            No matches found
          </Result>
        )}
      </VisualizationContainer>
      
      <SectionTitle>How It Works</SectionTitle>
      <ExplanationCard>
        <p>
          The Rabin-Karp algorithm is a string-searching algorithm that uses hashing to find
          patterns in strings. Unlike naive pattern matching, it avoids comparing every character
          by using a hash function to compare pattern hash with window hash.
        </p>
        
        <h3>The Algorithm</h3>
        <p>
          Rabin-Karp calculates a hash value for the pattern and for each possible 
          m-length substring of the text (where m is the pattern length). If the hash 
          values match, it performs a full comparison to confirm a match.
        </p>
        
        <p>Key steps of the algorithm:</p>
        <ol>
          <li>Calculate the hash value of the pattern</li>
          <li>Calculate the hash value of the first m characters of the text</li>
          <li>Compare the hash values. If they match, verify character by character</li>
          <li>Slide the window by one position and efficiently recalculate the hash (rolling hash)</li>
          <li>Repeat steps 3-4 until the end of the text</li>
        </ol>
        
        <CodeBlock>
{`function rabinKarp(text, pattern, prime = 101) {
  const n = text.length;
  const m = pattern.length;
  const matches = [];
  
  // If pattern is longer than text, no matches possible
  if (m > n) return matches;
  
  // Calculate hash value for pattern
  let patternHash = 0;
  let textHash = 0;
  let highestPower = 1;
  
  // Calculate hash for pattern and first window of text
  for (let i = 0; i < m; i++) {
    patternHash = (patternHash * 256 + pattern.charCodeAt(i)) % prime;
    textHash = (textHash * 256 + text.charCodeAt(i)) % prime;
  }
  
  // Calculate highest power of 256 for the rolling hash calculation
  for (let i = 0; i < m - 1; i++) {
    highestPower = (highestPower * 256) % prime;
  }
  
  // Check all potential matches
  for (let i = 0; i <= n - m; i++) {
    // If hashes match, verify character by character
    if (patternHash === textHash) {
      let match = true;
      
      for (let j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      
      if (match) matches.push(i);
    }
    
    // Calculate hash for next window
    if (i < n - m) {
      textHash = ((textHash - text.charCodeAt(i) * highestPower) * 256 
                 + text.charCodeAt(i + m)) % prime;
                 
      // Ensure hash is positive
      if (textHash < 0) textHash += prime;
    }
  }
  
  return matches;
}`}
        </CodeBlock>
        
        <h3>Time and Space Complexity</h3>
        <ul>
          <li><strong>Average Time Complexity:</strong> O(n + m) where:
            <ul>
              <li>n is the length of the text</li>
              <li>m is the length of the pattern</li>
            </ul>
          </li>
          <li><strong>Worst Case Time Complexity:</strong> O(n × m) - occurs when all hash values match but the strings don't</li>
          <li><strong>Space Complexity:</strong> O(1)</li>
        </ul>
        
        <Note>
          <p>
            The efficiency of Rabin-Karp depends heavily on the chosen hash function.
            A good hash function minimizes the number of "spurious hits" (false hash matches)
            to achieve the average-case time complexity.
          </p>
          <p>
            The algorithm is especially useful when searching for multiple patterns in a text,
            as you only need to compute the hash value of the text window once per position.
          </p>
          <p>
            Applications of Rabin-Karp include:
          </p>
          <ul>
            <li>Plagiarism detection</li>
            <li>Finding DNA patterns</li>
            <li>Two-dimensional pattern matching</li>
            <li>Detecting duplicate files (file fingerprinting)</li>
          </ul>
        </Note>
      </ExplanationCard>
    </PageContainer>
  );
};

export default RabinKarp; 