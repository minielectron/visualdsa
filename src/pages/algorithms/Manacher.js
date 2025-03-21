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
    if (props.isPalindrome) return 'rgba(var(--success-rgb), 0.2)';
    if (props.isCenter) return 'rgba(var(--primary-rgb), 0.2)';
    if (props.isActive) return 'rgba(var(--secondary-rgb), 0.1)';
    if (props.isSeparator) return 'rgba(var(--warning-rgb), 0.1)';
    return 'var(--surface-variant)';
  }};
  color: ${props => {
    if (props.isPalindrome) return 'var(--success)';
    if (props.isCenter) return 'var(--primary)';
    if (props.isActive) return 'var(--secondary)';
    if (props.isSeparator) return 'var(--warning)';
    return 'var(--text-primary)';
  }};
  border-color: ${props => {
    if (props.isPalindrome) return 'var(--success)';
    if (props.isCenter) return 'var(--primary)';
    if (props.isActive) return 'var(--secondary)';
    if (props.isSeparator) return 'var(--warning)';
    return 'var(--border)';
  }};
  font-weight: ${props => (props.isPalindrome || props.isCenter) ? 'bold' : 'normal'};
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

const PArrayContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: var(--surface-variant);
  border-radius: var(--border-radius);
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const PArrayValue = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin: 0.25rem;
  text-align: center;
  line-height: 2rem;
  border-radius: 4px;
  border: 1px solid var(--border);
  font-family: monospace;
  font-size: 1.1rem;
  background-color: ${props => props.isActive ? 'rgba(var(--primary-rgb), 0.2)' : 'var(--surface-variant)'};
  color: ${props => props.isActive ? 'var(--primary)' : 'var(--text-primary)'};
  border-color: ${props => props.isActive ? 'var(--primary)' : 'var(--border)'};
  font-weight: ${props => props.isActive ? 'bold' : 'normal'};
`;

const PArrayLabel = styled.div`
  display: flex;
  margin: 0.25rem;
  justify-content: space-between;
  font-family: monospace;
  color: var(--text-secondary);
  font-size: 0.8rem;
`;

const IndexLabel = styled.div`
  display: flex;
  margin: 0.25rem;
  justify-content: space-between;
  font-family: monospace;
  color: var(--text-secondary);
  font-size: 0.8rem;
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
  border-left: 4px solid var(--primary);
`;

const StepTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.div`
  color: var(--text-secondary);
`;

const Result = styled.div`
  background: var(--surface-variant);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ResultText = styled.div`
  font-weight: bold;
  color: var(--success);
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

const ManacherComponent = () => {
  const { algorithmState, updateAlgorithmState } = useAlgorithmState();
  
  const [text, setText] = useState(algorithmState.text || "racecar");
  const [processedText, setProcessedText] = useState(algorithmState.processedText || "");
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentCenter, setCurrentCenter] = useState(algorithmState.currentCenter || -1);
  const [currentRight, setCurrentRight] = useState(algorithmState.currentRight || -1);
  const [pArray, setPArray] = useState(algorithmState.pArray || []);
  const [steps, setSteps] = useState(algorithmState.steps || []);
  const [currentStep, setCurrentStep] = useState(algorithmState.currentStep || 0);
  const [totalSteps, setTotalSteps] = useState(algorithmState.totalSteps || 0);
  const [animationSpeed, setAnimationSpeed] = useState(algorithmState.animationSpeed || 1000);
  const [longestPalindrome, setLongestPalindrome] = useState(algorithmState.longestPalindrome || "");
  const [palindromeCenter, setPalindromeCenter] = useState(algorithmState.palindromeCenter || -1);
  const [palindromeLength, setPalindromeLength] = useState(algorithmState.palindromeLength || 0);
  const [activeIndices, setActiveIndices] = useState(algorithmState.activeIndices || []);
  const [oldCenter, setOldCenter] = useState(algorithmState.oldCenter || -1);
  const [mirrorIndex, setMirrorIndex] = useState(algorithmState.mirrorIndex || -1);
  
  const animationRef = useRef(null);
  
  // Update localStorage when state changes
  useEffect(() => {
    updateAlgorithmState({
      text,
      processedText,
      currentCenter,
      currentRight,
      pArray,
      steps,
      currentStep,
      totalSteps,
      animationSpeed,
      longestPalindrome,
      palindromeCenter,
      palindromeLength,
      activeIndices,
      oldCenter,
      mirrorIndex
    });
  }, [
    text, processedText, currentCenter, currentRight, pArray,
    steps, currentStep, totalSteps, animationSpeed,
    longestPalindrome, palindromeCenter, palindromeLength,
    activeIndices, oldCenter, mirrorIndex, updateAlgorithmState
  ]);
  
  const processString = (s) => {
    // Insert special character '#' between each character and at the boundaries
    let processed = "#";
    for (let i = 0; i < s.length; i++) {
      processed += s[i] + "#";
    }
    return processed;
  };
  
  const runManacherAlgorithm = () => {
    const s = processString(text);
    setProcessedText(s);
    
    const n = s.length;
    const p = new Array(n).fill(0);
    let center = 0;
    let right = 0;
    
    let maxLen = 0;
    let maxCenter = 0;
    
    const steps = [];
    
    steps.push({
      title: "Initialization",
      description: `Preprocessed string: "${s}". Initialize P array with zeros.`,
      center: -1,
      right: -1,
      pArray: [...p],
      activeIndices: [],
      oldCenter: -1,
      mirrorIndex: -1
    });
    
    for (let i = 0; i < n; i++) {
      let step = {
        title: `Examining position ${i}`,
        description: "",
        center,
        right,
        pArray: [...p],
        activeIndices: [],
        oldCenter: -1,
        mirrorIndex: -1
      };
      
      if (i < right) {
        // We are within the right boundary of a previously found palindrome
        const mirror = 2 * center - i; // Mirror position across center
        
        // Start with the minimum of the mirror's palindrome length and the distance to the right boundary
        p[i] = Math.min(right - i, p[mirror]);
        
        step.description = `Position ${i} is within the right boundary ${right} of palindrome centered at ${center}. ` +
                          `Its mirror position is ${mirror} with P[${mirror}] = ${p[mirror]}. ` +
                          `Setting P[${i}] = min(${right - i}, ${p[mirror]}) = ${p[i]}.`;
        step.mirrorIndex = mirror;
        step.oldCenter = center;
        step.activeIndices = [i - p[i], i + p[i]];
      } else {
        // We are outside any known palindrome, start with radius 0
        p[i] = 0;
        step.description = `Position ${i} is not within any known palindrome. Starting with P[${i}] = 0.`;
      }
      
      steps.push(step);
      
      // Attempt to expand the palindrome centered at i
      let beforeExpansion = p[i];
      
      // Try to expand while we're within bounds and characters match
      while (i - p[i] - 1 >= 0 && 
             i + p[i] + 1 < n && 
             s[i - p[i] - 1] === s[i + p[i] + 1]) {
        p[i]++;
      }
      
      if (p[i] > beforeExpansion) {
        steps.push({
          title: `Expanding palindrome at position ${i}`,
          description: `Expanded the palindrome from radius ${beforeExpansion} to ${p[i]} by checking characters at positions ${i - p[i]} and ${i + p[i]}.`,
          center,
          right,
          pArray: [...p],
          activeIndices: [i - p[i], i + p[i]],
          oldCenter: -1,
          mirrorIndex: -1
        });
      }
      
      // If our palindrome expands past the right boundary, update center and right
      if (i + p[i] > right) {
        center = i;
        right = i + p[i];
        
        steps.push({
          title: `Updating boundaries`,
          description: `Palindrome at position ${i} extends beyond the right boundary. Updating center to ${center} and right boundary to ${right}.`,
          center,
          right,
          pArray: [...p],
          activeIndices: [],
          oldCenter: -1,
          mirrorIndex: -1
        });
      }
      
      // Keep track of the longest palindrome
      if (p[i] > maxLen) {
        maxLen = p[i];
        maxCenter = i;
        
        steps.push({
          title: `New longest palindrome found`,
          description: `Found new longest palindrome centered at position ${i} with radius ${p[i]}.`,
          center,
          right,
          pArray: [...p],
          activeIndices: [],
          oldCenter: -1,
          mirrorIndex: -1
        });
      }
    }
    
    // Extract the longest palindromic substring
    const start = Math.floor((maxCenter - maxLen) / 2);
    const longestPalindrome = text.substring(start, start + maxLen);
    
    steps.push({
      title: "Algorithm complete",
      description: `The longest palindromic substring is "${longestPalindrome}" starting at position ${start} in the original string.`,
      center,
      right,
      pArray: [...p],
      activeIndices: [],
      oldCenter: -1,
      mirrorIndex: -1,
      finalPalindrome: {
        start: maxCenter - maxLen,
        end: maxCenter + maxLen,
        text: longestPalindrome
      }
    });
    
    setLongestPalindrome(longestPalindrome);
    setPalindromeCenter(maxCenter);
    setPalindromeLength(maxLen);
    
    return { p, steps };
  };
  
  const animateStep = (stepIndex) => {
    if (stepIndex >= steps.length) {
      setIsAnimating(false);
      return;
    }
    
    const step = steps[stepIndex];
    setCurrentStep(stepIndex + 1);
    
    setPArray(step.pArray);
    setCurrentCenter(step.center);
    setCurrentRight(step.right);
    setActiveIndices(step.activeIndices || []);
    setOldCenter(step.oldCenter);
    setMirrorIndex(step.mirrorIndex);
    
    if (step.finalPalindrome) {
      // Highlight the final palindrome
      const highlightIndices = [];
      for (let i = step.finalPalindrome.start; i <= step.finalPalindrome.end; i++) {
        highlightIndices.push(i);
      }
      setActiveIndices(highlightIndices);
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
    setCurrentCenter(-1);
    setCurrentRight(-1);
    setPArray([]);
    setSteps([]);
    setLongestPalindrome("");
    setPalindromeCenter(-1);
    setPalindromeLength(0);
    setActiveIndices([]);
    setOldCenter(-1);
    setMirrorIndex(-1);
    
    // Run algorithm and prepare animation
    const { p, steps } = runManacherAlgorithm();
    setPArray(p);
    setSteps(steps);
    setTotalSteps(steps.length);
    
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
    setCurrentCenter(-1);
    setCurrentRight(-1);
    setPArray([]);
    setSteps([]);
    setLongestPalindrome("");
    setPalindromeCenter(-1);
    setPalindromeLength(0);
    setActiveIndices([]);
    setOldCenter(-1);
    setMirrorIndex(-1);
    setProcessedText("");
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
        <Title>Manacher's Algorithm</Title>
        <Description>
          A linear time algorithm for finding the longest palindromic substring in a string.
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
            placeholder="Enter a string"
          />
        </InputGroup>
        
        <ControlsContainer>
          <div>
            <Button onClick={startVisualization} disabled={isAnimating || !text}>
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
            <span>Palindrome</span>
          </LegendItem>
          <LegendItem>
            <LegendColor color="rgba(var(--primary-rgb), 0.2)" border="var(--primary)" />
            <span>Current Center</span>
          </LegendItem>
          <LegendItem>
            <LegendColor color="rgba(var(--secondary-rgb), 0.1)" border="var(--secondary)" />
            <span>Active Expansion</span>
          </LegendItem>
          <LegendItem>
            <LegendColor color="rgba(var(--warning-rgb), 0.1)" border="var(--warning)" />
            <span>Separator (#)</span>
          </LegendItem>
        </Legend>
        
        {processedText && (
          <>
            <div>
              <strong>Processed String:</strong>
            </div>
            <IndexLabel>
              {processedText && Array.from({ length: Math.min(20, processedText.length) }, (_, i) => (
                <span key={i}>{i}</span>
              ))}
            </IndexLabel>
            
            <TextContainer>
              {processedText && processedText.split('').map((char, index) => {
                const isPalindrome = palindromeCenter !== -1 && 
                                   index >= palindromeCenter - palindromeLength && 
                                   index <= palindromeCenter + palindromeLength;
                const isCenter = index === currentCenter;
                const isActive = activeIndices.includes(index);
                const isSeparator = char === '#';
                const isMirror = index === mirrorIndex;
                
                return (
                  <TextCharacter
                    key={index}
                    isPalindrome={isPalindrome}
                    isCenter={isCenter}
                    isActive={isActive || isMirror}
                    isSeparator={isSeparator}
                  >
                    {char}
                  </TextCharacter>
                );
              })}
            </TextContainer>
            
            <div style={{ marginTop: '1.5rem' }}>
              <strong>P Array:</strong> (palindrome radii)
            </div>
            <PArrayLabel>
              {pArray && Array.from({ length: Math.min(20, pArray.length) }, (_, i) => (
                <span key={i}>{i}</span>
              ))}
            </PArrayLabel>
            
            <PArrayContainer>
              {pArray && pArray.map((value, index) => (
                <PArrayValue
                  key={index}
                  isActive={index === currentCenter || index === mirrorIndex}
                >
                  {value}
                </PArrayValue>
              ))}
            </PArrayContainer>
          </>
        )}
        
        {longestPalindrome && (
          <Result>
            <div>Longest Palindromic Substring:</div>
            <ResultText>"{longestPalindrome}"</ResultText>
            <div>
              In original string starting at position {Math.floor((palindromeCenter - palindromeLength) / 2)}, length {longestPalindrome.length}
            </div>
          </Result>
        )}
        
        {currentStep > 0 && steps[currentStep - 1] && (
          <div style={{ marginTop: '2rem' }}>
            <h3>Algorithm Steps</h3>
            <Step 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <StepTitle>{steps[currentStep - 1].title}</StepTitle>
              <StepDescription>{steps[currentStep - 1].description}</StepDescription>
            </Step>
          </div>
        )}
      </VisualizationContainer>
      
      <SectionTitle>How It Works</SectionTitle>
      <ExplanationCard>
        <p>
          Manacher's Algorithm is an efficient approach for finding the longest palindromic substring in a string, with linear time complexity O(n).
        </p>
        
        <h3>Key Concepts</h3>
        <ol>
          <li><strong>String Preprocessing</strong>: Insert special characters (e.g., '#') between each character and at the boundaries to handle both even and odd-length palindromes uniformly.</li>
          <li><strong>P Array</strong>: For each position i in the processed string, P[i] represents the radius of the palindrome centered at i.</li>
          <li><strong>Center and Right Boundary</strong>: Keep track of the center and right boundary of the rightmost palindrome encountered so far.</li>
          <li><strong>Palindrome Expansion</strong>: Use previously computed information to avoid redundant character comparisons.</li>
        </ol>
        
        <h3>The Algorithm</h3>
        <ol>
          <li>Preprocess the input string to handle both even and odd length palindromes.</li>
          <li>Initialize an array P to store the palindrome radii.</li>
          <li>Initialize variables to track the center (C) and right boundary (R) of the rightmost palindrome found.</li>
          <li>For each position i in the preprocessed string:
            <ul>
              <li>If i is within a previously found palindrome (i {'<'} R), use the mirror property to initialize P[i].</li>
              <li>Otherwise, initialize P[i] = 0.</li>
              <li>Attempt to expand the palindrome centered at i as far as possible.</li>
              <li>If the expanded palindrome extends beyond the current right boundary (i + P[i] {'>'} R), update the center C and right boundary R.</li>
            </ul>
          </li>
          <li>Find the maximum value in P to determine the center and length of the longest palindromic substring.</li>
          <li>Convert back to the original string coordinates to extract the result.</li>
        </ol>
        
        <h3>Pseudocode</h3>
        <CodeBlock>
{`function manacherAlgorithm(s) {
  // Preprocess the string
  let t = "#" + s.split('').join('#') + "#"
  
  // Initialize P array
  let n = t.length
  let P = new Array(n).fill(0)
  
  let C = 0  // center of the rightmost palindrome
  let R = 0  // right boundary of the rightmost palindrome
  
  for (let i = 0; i < n; i++) {
    // Mirror position across center C
    let mirror = 2 * C - i
    
    // If within right boundary, use mirror value as a shortcut
    if (i < R) {
      P[i] = Math.min(R - i, P[mirror])
    }
    
    // Attempt to expand palindrome centered at i
    while (i - P[i] - 1 >= 0 && i + P[i] + 1 < n && 
           t[i - P[i] - 1] === t[i + P[i] + 1]) {
      P[i]++
    }
    
    // If expanded palindrome extends past R,
    // adjust center and boundary
    if (i + P[i] > R) {
      C = i
      R = i + P[i]
    }
  }
  
  // Find the maximum palindrome
  let maxLen = 0
  let centerIndex = 0
  
  for (let i = 0; i < n; i++) {
    if (P[i] > maxLen) {
      maxLen = P[i]
      centerIndex = i
    }
  }
  
  // Convert to original string coordinates
  let start = Math.floor((centerIndex - maxLen) / 2)
  return s.substring(start, start + maxLen)
}`}
        </CodeBlock>
        
        <h3>Time and Space Complexity</h3>
        <ul>
          <li><strong>Time Complexity</strong>: O(n) - Each character is processed once.</li>
          <li><strong>Space Complexity</strong>: O(n) - For storing the processed string and the P array.</li>
        </ul>
        
        <h3>Why It's Efficient</h3>
        <p>
          The key insight of Manacher's Algorithm is reusing previously computed information. 
          Unlike naive approaches (O(n³)) or dynamic programming (O(n²)), Manacher's Algorithm 
          avoids redundant comparisons by leveraging the symmetry properties of palindromes.
        </p>
        
        <Note>
          <p>
            Manacher's Algorithm has applications in various fields:
          </p>
          <ul>
            <li>Text processing and search</li>
            <li>Bioinformatics (DNA sequence analysis)</li>
            <li>Pattern recognition</li>
            <li>Data compression</li>
          </ul>
          <p>
            It's particularly useful when efficient palindrome detection is required in large datasets.
          </p>
        </Note>
      </ExplanationCard>
    </PageContainer>
  );
};

// Create a new component that uses the HOC
const Manacher = withAlgorithmState(ManacherComponent, 'manacher');
export default Manacher; 