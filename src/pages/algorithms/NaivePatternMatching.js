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

const NaivePatternMatching = () => {
  const [text, setText] = useState('ABABDABACDABABCABAB');
  const [pattern, setPattern] = useState('ABABCABAB');
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentPatternPosition, setCurrentPatternPosition] = useState(0);
  const [matchPositions, setMatchPositions] = useState([]);
  const [mismatchPosition, setMismatchPosition] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(1000);
  const [stepsLog, setStepsLog] = useState([]);
  const [characterWidth, setCharacterWidth] = useState(44); // Character width + margin
  
  const animationRef = useRef(null);
  
  // Perform naive pattern matching
  const findPatternMatches = () => {
    const steps = [];
    const matches = [];
    
    for (let i = 0; i <= text.length - pattern.length; i++) {
      steps.push({
        type: 'position',
        textPosition: i,
        patternPosition: 0,
        message: `Starting comparison at position ${i}`
      });
      
      let j;
      for (j = 0; j < pattern.length; j++) {
        steps.push({
          type: 'compare',
          textPosition: i + j,
          patternPosition: j,
          message: `Comparing text[${i + j}] = "${text[i + j]}" with pattern[${j}] = "${pattern[j]}"`
        });
        
        if (text[i + j] !== pattern[j]) {
          steps.push({
            type: 'mismatch',
            textPosition: i + j,
            patternPosition: j,
            message: `Mismatch found at position ${i + j}: "${text[i + j]}" ≠ "${pattern[j]}"`
          });
          break;
        }
        
        steps.push({
          type: 'match',
          textPosition: i + j,
          patternPosition: j,
          message: `Match found at position ${i + j}: "${text[i + j]}" = "${pattern[j]}"`
        });
      }
      
      if (j === pattern.length) {
        matches.push(i);
        steps.push({
          type: 'complete-match',
          position: i,
          message: `Complete pattern match found starting at position ${i}`
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
      case 'position':
        setCurrentPosition(step.textPosition);
        setCurrentPatternPosition(step.patternPosition);
        setMismatchPosition(null);
        break;
      case 'compare':
        setCurrentPosition(step.textPosition);
        setCurrentPatternPosition(step.patternPosition);
        setMismatchPosition(null);
        break;
      case 'match':
        setCurrentPosition(step.textPosition);
        setCurrentPatternPosition(step.patternPosition);
        setMismatchPosition(null);
        break;
      case 'mismatch':
        setCurrentPosition(step.textPosition);
        setCurrentPatternPosition(step.patternPosition);
        setMismatchPosition(step.textPosition);
        break;
      case 'complete-match':
        // Just display the message
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
    setCurrentPatternPosition(0);
    setMatchPositions([]);
    setMismatchPosition(null);
    
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
    setCurrentPatternPosition(0);
    setMatchPositions([]);
    setMismatchPosition(null);
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
        <Title>Naive Pattern Matching</Title>
        <Description>
          A straightforward algorithm to find all occurrences of a pattern within a given text.
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
        <StringVisualization>
          {text.split('').map((char, index) => {
            const isMatch = matchPositions.some(pos => index >= pos && index < pos + pattern.length);
            const isCurrent = index === currentPosition;
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
                  current={isCurrent}
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
          {pattern.split('').map((char, index) => {
            const isCurrent = index === currentPatternPosition;
            const isMismatch = isCurrent && currentPosition === mismatchPosition;
            
            return (
              <CharacterContainer key={index}>
                <Character
                  current={isCurrent}
                  mismatch={isMismatch}
                >
                  {char}
                </Character>
                <Index>{index}</Index>
              </CharacterContainer>
            );
          })}
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
          The Naive Pattern Matching algorithm is the simplest approach to finding 
          all occurrences of a pattern string within a text string.
        </p>
        
        <h3>The Algorithm</h3>
        <p>
          The algorithm works by sliding the pattern over the text one by one 
          and checking for a match at each position. For each position, it checks 
          if the pattern matches the text at that position by comparing characters one by one.
        </p>
        
        <CodeBlock>
{`function naivePatternMatching(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const matches = [];
  
  // Slide the pattern over the text
  for (let i = 0; i <= n - m; i++) {
    let j;
    
    // Check for pattern match at current position
    for (j = 0; j < m; j++) {
      if (text[i + j] !== pattern[j]) {
        break;  // Mismatch found, break inner loop
      }
    }
    
    // If inner loop completed without breaking, we found a match
    if (j === m) {
      matches.push(i);  // Store the starting position of the match
    }
  }
  
  return matches;
}`}
        </CodeBlock>
        
        <h3>Time and Space Complexity</h3>
        <ul>
          <li><strong>Time Complexity:</strong> O((n-m+1) × m) where:
            <ul>
              <li>n is the length of the text</li>
              <li>m is the length of the pattern</li>
            </ul>
            In the worst case, this is O(n × m)
          </li>
          <li><strong>Space Complexity:</strong> O(1) if we don't count the space used to store the matches</li>
        </ul>
        
        <Note>
          <p>
            While simple to understand and implement, the Naive Pattern Matching algorithm 
            is not the most efficient for large texts. More advanced algorithms like 
            Knuth-Morris-Pratt (KMP), Boyer-Moore, or Rabin-Karp offer better performance
            by avoiding redundant comparisons.
          </p>
          <p>
            Applications of pattern matching include:
          </p>
          <ul>
            <li>Text editors for find/replace functionality</li>
            <li>Intrusion detection systems</li>
            <li>Spam filters</li>
            <li>Plagiarism detection</li>
            <li>DNA sequence analysis</li>
          </ul>
        </Note>
      </ExplanationCard>
    </PageContainer>
  );
};

export default NaivePatternMatching; 