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
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const InputField = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: var(--border-radius);
  border: 1px solid #ccc;
  flex: 1;
  font-family: monospace;
`;

const Label = styled.label`
  min-width: 100px;
  font-weight: 500;
`;

const CharactersContainer = styled.div`
  display: flex;
  margin: 1.5rem 0;
  width: 100%;
  overflow-x: auto;
  padding: 1rem 0;
`;

const CharacterBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 5px;
  position: relative;
  background-color: ${props => {
    if (props.matching) return '#4caf50';
    if (props.active) return 'var(--primary)';
    if (props.highlighted) return 'var(--primary-light)';
    return 'white';
  }};
  color: ${props => (props.active || props.matching || props.highlighted) ? 'white' : 'var(--text-primary)'};
  font-family: monospace;
`;

const IndexBox = styled.div`
  position: absolute;
  top: -25px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

const LPSContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
  overflow-x: auto;
`;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 1rem 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 0.5rem;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
`;

const Td = styled.td`
  padding: 0.5rem;
  border: 1px solid #ddd;
  text-align: center;
  background-color: ${props => props.highlighted ? 'var(--primary-light)' : 'white'};
  color: ${props => props.highlighted ? 'white' : 'var(--text-primary)'};
`;

const MessageContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
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

const ResultContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background: ${props => props.success ? '#e8f5e9' : '#ffebee'};
  border-radius: var(--border-radius);
  text-align: center;
  font-weight: 500;
  color: ${props => props.success ? '#2e7d32' : '#c62828'};
`;

const javaCode = `
public class KnuthMorrisPratt {
    /**
     * Searches for occurrences of pattern in text using the KMP algorithm
     * 
     * @param text the text to search in
     * @param pattern the pattern to search for
     * @return an array of starting indices of all occurrences
     */
    public static int[] search(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();
        
        if (m == 0) {
            return new int[0];
        }
        
        // Compute the longest prefix suffix array
        int[] lps = computeLPSArray(pattern);
        
        List<Integer> occurrences = new ArrayList<>();
        
        int i = 0; // index for text
        int j = 0; // index for pattern
        
        while (i < n) {
            // Characters match, move both pointers
            if (pattern.charAt(j) == text.charAt(i)) {
                i++;
                j++;
            }
            
            // Found a full match
            if (j == m) {
                occurrences.add(i - j); // Store the starting index
                j = lps[j - 1]; // Look for the next match
            }
            // Characters don't match
            else if (i < n && pattern.charAt(j) != text.charAt(i)) {
                if (j != 0) {
                    j = lps[j - 1]; // Use the lps array to shift pattern
                } else {
                    i++; // Move to next character in text
                }
            }
        }
        
        // Convert list to array
        return occurrences.stream().mapToInt(Integer::intValue).toArray();
    }
    
    /**
     * Computes the Longest Prefix Suffix (LPS) array for KMP algorithm
     * 
     * @param pattern the pattern string
     * @return the LPS array
     */
    private static int[] computeLPSArray(String pattern) {
        int m = pattern.length();
        int[] lps = new int[m];
        
        // Length of the previous longest prefix suffix
        int len = 0;
        int i = 1;
        
        // lps[0] is always 0
        lps[0] = 0;
        
        // Calculate lps[i] for i = 1 to m-1
        while (i < m) {
            if (pattern.charAt(i) == pattern.charAt(len)) {
                // If characters match, increment length of matched characters
                len++;
                lps[i] = len;
                i++;
            } else {
                // If characters don't match
                if (len != 0) {
                    // Use the previously computed LPS value
                    len = lps[len - 1];
                } else {
                    // No prefix to match
                    lps[i] = 0;
                    i++;
                }
            }
        }
        
        return lps;
    }
    
    public static void main(String[] args) {
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABABCABAB";
        
        int[] occurrences = search(text, pattern);
        
        if (occurrences.length > 0) {
            System.out.println("Pattern found at indices:");
            for (int index : occurrences) {
                System.out.println(index);
            }
        } else {
            System.out.println("Pattern not found");
        }
    }
}
`;

const KMP = () => {
  const [text, setText] = useState("ABABDABACDABABCABAB");
  const [pattern, setPattern] = useState("ABABCABAB");
  const [lps, setLps] = useState([]);
  const [textHighlight, setTextHighlight] = useState([]);
  const [patternHighlight, setPatternHighlight] = useState([]);
  const [matchIndices, setMatchIndices] = useState([]);
  const [message, setMessage] = useState("");
  const [searching, setSearching] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [activeTab, setActiveTab] = useState('visualization');
  const [currentLpsIndex, setCurrentLpsIndex] = useState(-1);
  const [lpsComputing, setLpsComputing] = useState(false);
  const [activeTextIndex, setActiveTextIndex] = useState(-1);
  const [activePatternIndex, setActivePatternIndex] = useState(-1);
  
  // Reset state when text or pattern changes
  useEffect(() => {
    resetSearch();
  }, [text, pattern]);
  
  const resetSearch = () => {
    setLps([]);
    setTextHighlight([]);
    setPatternHighlight([]);
    setMatchIndices([]);
    setMessage("");
    setSearching(false);
    setCurrentLpsIndex(-1);
    setLpsComputing(false);
    setActiveTextIndex(-1);
    setActivePatternIndex(-1);
  };
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  const computeLPSArray = async () => {
    if (searching) return;
    
    setLpsComputing(true);
    setMessage("Computing LPS array...");
    
    const m = pattern.length;
    const newLps = new Array(m).fill(0);
    setLps(newLps);
    
    // Length of the previous longest prefix suffix
    let len = 0;
    let i = 1;
    
    setCurrentLpsIndex(0);
    await sleep(speed);
    
    // Calculate lps[i] for i = 1 to m-1
    while (i < m) {
      setActivePatternIndex(i);
      setCurrentLpsIndex(i);
      await sleep(speed);
      
      if (pattern[i] === pattern[len]) {
        // If characters match, increment length of matched characters
        len++;
        newLps[i] = len;
        
        setMessage(`LPS[${i}] = ${len} because characters at positions ${i} and ${len - 1} match`);
        setLps([...newLps]);
        
        i++;
      } else {
        // If characters don't match
        if (len !== 0) {
          // Use the previously computed LPS value
          setMessage(`Characters don't match. Using previous value LPS[${len - 1}] = ${newLps[len - 1]}`);
          len = newLps[len - 1];
          await sleep(speed);
        } else {
          // No prefix to match
          newLps[i] = 0;
          
          setMessage(`Characters don't match and no prefix exists. Setting LPS[${i}] = 0`);
          setLps([...newLps]);
          
          i++;
        }
      }
      
      await sleep(speed);
    }
    
    setMessage("LPS array computation complete");
    setCurrentLpsIndex(-1);
    setLpsComputing(false);
    setActivePatternIndex(-1);
    
    return newLps;
  };
  
  const performSearch = async () => {
    if (searching || pattern.length === 0) return;
    
    setSearching(true);
    setMatchIndices([]);
    
    // First compute the LPS array
    const lpsArray = await computeLPSArray();
    
    setMessage("Starting KMP search...");
    await sleep(speed);
    
    const n = text.length;
    const m = pattern.length;
    
    let i = 0; // index for text
    let j = 0; // index for pattern
    const occurrences = [];
    
    while (i < n) {
      setActiveTextIndex(i);
      setActivePatternIndex(j);
      
      await sleep(speed);
      
      // Characters match, move both pointers
      if (pattern[j] === text[i]) {
        setMessage(`Match at text[${i}] and pattern[${j}]`);
        setTextHighlight([...textHighlight, i]);
        setPatternHighlight([...patternHighlight, j]);
        
        i++;
        j++;
      }
      
      // Found a full match
      if (j === m) {
        const startIndex = i - j;
        occurrences.push(startIndex);
        
        setMatchIndices([...matchIndices, startIndex]);
        setMessage(`Pattern found starting at index ${startIndex}`);
        
        await sleep(speed);
        
        // Reset highlighting for the next search
        setTextHighlight([]);
        setPatternHighlight([]);
        
        j = lpsArray[j - 1]; // Look for the next match using LPS
        setMessage(`Shifting pattern using LPS[${j - 1}] = ${lpsArray[j - 1]}`);
      }
      // Characters don't match
      else if (i < n && pattern[j] !== text[i]) {
        if (j !== 0) {
          setMessage(`Mismatch at text[${i}] and pattern[${j}]. Shifting pattern using LPS[${j - 1}] = ${lpsArray[j - 1]}`);
          j = lpsArray[j - 1]; // Use the lps array to shift pattern
        } else {
          setMessage(`Mismatch at text[${i}] and pattern[0]. Moving to next character in text.`);
          i++; // Move to next character in text
        }
        
        // Reset highlighting
        setTextHighlight([]);
        setPatternHighlight([]);
      }
      
      await sleep(speed);
    }
    
    if (occurrences.length === 0) {
      setMessage("Pattern not found in text");
    } else {
      setMessage(`Search complete. Found ${occurrences.length} occurrence(s) of the pattern.`);
    }
    
    setActiveTextIndex(-1);
    setActivePatternIndex(-1);
    setSearching(false);
  };
  
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  
  const handlePatternChange = (e) => {
    setPattern(e.target.value);
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Knuth-Morris-Pratt (KMP) Algorithm</Title>
        <Description>
          KMP is an efficient string searching algorithm that uses information about the pattern 
          to minimize comparisons when finding matches in a text.
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
          <InputContainer>
            <InputField>
              <Label>Text:</Label>
              <Input
                type="text"
                value={text}
                onChange={handleTextChange}
                disabled={searching || lpsComputing}
              />
            </InputField>
            <InputField>
              <Label>Pattern:</Label>
              <Input
                type="text"
                value={pattern}
                onChange={handlePatternChange}
                disabled={searching || lpsComputing}
              />
            </InputField>
          </InputContainer>
          
          <ControlsContainer>
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
                  disabled={searching || lpsComputing}
                />
                <span>Slow</span>
              </SliderContainer>
            </SpeedControl>
            
            <Button 
              onClick={performSearch} 
              disabled={searching || lpsComputing || pattern.length === 0}
            >
              {searching || lpsComputing ? 'Processing...' : 'Search'}
            </Button>
            
            <Button 
              onClick={resetSearch} 
              disabled={searching || lpsComputing}
            >
              Reset
            </Button>
          </ControlsContainer>
          
          {message && <MessageContainer>{message}</MessageContainer>}
          
          <div>
            <h3>Text</h3>
            <CharactersContainer>
              {text.split('').map((char, index) => (
                <CharacterBox 
                  key={index}
                  active={index === activeTextIndex}
                  matching={matchIndices.some(start => index >= start && index < start + pattern.length)}
                  highlighted={textHighlight.includes(index)}
                >
                  <IndexBox>{index}</IndexBox>
                  {char}
                </CharacterBox>
              ))}
            </CharactersContainer>
          </div>
          
          <div>
            <h3>Pattern</h3>
            <CharactersContainer>
              {pattern.split('').map((char, index) => (
                <CharacterBox 
                  key={index}
                  active={index === activePatternIndex}
                  highlighted={patternHighlight.includes(index)}
                >
                  <IndexBox>{index}</IndexBox>
                  {char}
                </CharacterBox>
              ))}
            </CharactersContainer>
          </div>
          
          {lps.length > 0 && (
            <LPSContainer>
              <h3>Longest Prefix Suffix (LPS) Array</h3>
              <TableContainer>
                <Table>
                  <thead>
                    <tr>
                      <Th>Index</Th>
                      {pattern.split('').map((_, index) => (
                        <Th key={index}>{index}</Th>
                      ))}
                    </tr>
                    <tr>
                      <Th>Character</Th>
                      {pattern.split('').map((char, index) => (
                        <Th key={index}>{char}</Th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <Td>LPS Value</Td>
                      {lps.map((value, index) => (
                        <Td key={index} highlighted={index === currentLpsIndex}>
                          {value}
                        </Td>
                      ))}
                    </tr>
                  </tbody>
                </Table>
              </TableContainer>
            </LPSContainer>
          )}
          
          {matchIndices.length > 0 && (
            <ResultContainer success>
              Pattern found at position(s): {matchIndices.join(', ')}
            </ResultContainer>
          )}
          
          {searching === false && matchIndices.length === 0 && message.includes("not found") && (
            <ResultContainer success={false}>
              Pattern not found in the text
            </ResultContainer>
          )}
        </VisualizationContainer>
      )}
      
      {activeTab === 'explanation' && (
        <VisualizationContainer>
          <AlgorithmSteps>
            <h3>What is the Knuth-Morris-Pratt (KMP) Algorithm?</h3>
            <p>
              The KMP algorithm is an efficient string matching algorithm that uses information about 
              the pattern to minimize the number of comparisons when searching for pattern occurrences in a text.
              Unlike the naive approach (comparing at each position), KMP avoids unnecessary comparisons by 
              utilizing the previously matched characters.
            </p>
            
            <h3>Key Concept: Longest Prefix Suffix (LPS) Array</h3>
            <p>
              The core of the KMP algorithm is the Longest Prefix Suffix (LPS) array, which:
            </p>
            <ul>
              <li>For each position i in the pattern, lps[i] stores the length of the longest proper prefix that is also a suffix ending at i</li>
              <li>Helps in determining where to resume matching after a mismatch, eliminating redundant comparisons</li>
              <li>Enables "sliding" the pattern efficiently without going back in the text</li>
            </ul>
            
            <h3>How KMP Works</h3>
            <ol>
              <li>
                <strong>Preprocessing:</strong> Compute the LPS array for the pattern.
                <ul>
                  <li>This helps identify where to resume comparisons after a mismatch</li>
                  <li>The LPS array is built in O(m) time, where m is the pattern length</li>
                </ul>
              </li>
              <li>
                <strong>Searching:</strong> Use the LPS array to efficiently search for the pattern in the text.
                <ul>
                  <li>Maintain two pointers: i for the text and j for the pattern</li>
                  <li>When characters match, increment both pointers</li>
                  <li>When j equals the pattern length, a match is found</li>
                  <li>On a mismatch:
                    <ul>
                      <li>If j {'>'} 0, set j = lps[j-1] (skip unnecessary comparisons)</li>
                      <li>If j = 0, increment i to check the next position in text</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
            
            <h3>Example</h3>
            <p>
              Consider searching for pattern "ABABCABAB" in text "ABABDABACDABABCABAB":
            </p>
            <ol>
              <li>Compute the LPS array for "ABABCABAB", which is [0,0,1,2,0,1,2,3,4]</li>
              <li>When a mismatch occurs (e.g., at 'D' in text), instead of starting over, use the LPS array to skip redundant comparisons</li>
              <li>For example, if mismatch occurs after matching "ABAB", we know the last 2 characters of the matched portion are "AB", which is also the prefix of the pattern</li>
              <li>So we can resume matching from the 3rd character of the pattern instead of starting over</li>
            </ol>
            
            <h3>Advantages of KMP</h3>
            <ul>
              <li>Never backtracks in the text - each character in the text is examined exactly once</li>
              <li>Linear time complexity O(n+m) where n is text length and m is pattern length</li>
              <li>Particularly efficient for patterns with repeating substrings</li>
            </ul>
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
                  <Th>Stage</Th>
                  <Th>Complexity</Th>
                  <Th>Explanation</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>Preprocessing (LPS Array)</Td>
                  <Td>O(m)</Td>
                  <Td>Where m is the length of the pattern. Each character is processed once.</Td>
                </tr>
                <tr>
                  <Td>Searching</Td>
                  <Td>O(n)</Td>
                  <Td>Where n is the length of the text. Each character in the text is examined exactly once.</Td>
                </tr>
                <tr>
                  <Td>Overall</Td>
                  <Td>O(n+m)</Td>
                  <Td>Linear time complexity, significantly better than the naive O(n×m) approach.</Td>
                </tr>
              </tbody>
            </ComplexityTable>
          </ComplexityContainer>
          
          <ComplexityContainer>
            <ComplexityTitle>Space Complexity</ComplexityTitle>
            <ComplexityTable>
              <thead>
                <tr>
                  <Th>Component</Th>
                  <Th>Complexity</Th>
                  <Th>Explanation</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>LPS Array</Td>
                  <Td>O(m)</Td>
                  <Td>The LPS array stores one value for each character in the pattern.</Td>
                </tr>
                <tr>
                  <Td>Overall</Td>
                  <Td>O(m)</Td>
                  <Td>Only requires additional space proportional to the pattern length.</Td>
                </tr>
              </tbody>
            </ComplexityTable>
          </ComplexityContainer>
          
          <ComplexityContainer>
            <ComplexityTitle>Comparison with Other String Matching Algorithms</ComplexityTitle>
            <ComplexityTable>
              <thead>
                <tr>
                  <Th>Algorithm</Th>
                  <Th>Time Complexity</Th>
                  <Th>Preprocessing</Th>
                  <Th>Suitable for</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>Naive Approach</Td>
                  <Td>O(n×m)</Td>
                  <Td>None</Td>
                  <Td>Short patterns or when simplicity is important</Td>
                </tr>
                <tr>
                  <Td>KMP</Td>
                  <Td>O(n+m)</Td>
                  <Td>O(m)</Td>
                  <Td>Patterns with repeating sub-patterns</Td>
                </tr>
                <tr>
                  <Td>Rabin-Karp</Td>
                  <Td>O(n+m) average, O(n×m) worst</Td>
                  <Td>O(m)</Td>
                  <Td>Multiple pattern search, fingerprinting</Td>
                </tr>
                <tr>
                  <Td>Boyer-Moore</Td>
                  <Td>O(n/m) best, O(n×m) worst</Td>
                  <Td>O(m+σ)</Td>
                  <Td>Large alphabets, patterns where mismatch likely near end</Td>
                </tr>
              </tbody>
            </ComplexityTable>
          </ComplexityContainer>
        </VisualizationContainer>
      )}
    </PageContainer>
  );
};

export default KMP; 