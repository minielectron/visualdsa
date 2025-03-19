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

const ArrayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
`;

const ArrayItem = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => {
    if (props.found) return 'var(--secondary)';
    if (props.current) return 'var(--primary)';
    if (props.visited) return 'var(--primary-light)';
    return '#f0f0f0';
  }};
  color: ${props => {
    if (props.found || props.current || props.visited) return 'white';
    return 'var(--text-primary)';
  }};
  font-weight: 600;
  position: relative;
`;

const IndexLabel = styled.span`
  position: absolute;
  top: -25px;
  font-size: 0.75rem;
  color: var(--text-secondary);
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
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

const SpeedControl = styled.div`
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
  background: ${props => props.error ? '#ffebee' : '#e8f5e9'};
  color: ${props => props.error ? '#d32f2f' : '#2e7d32'};
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

const StepDescription = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
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

const javaCode = `
public class LinearSearch {
  // Returns index of x if it is present in arr[],
  // else return -1
  public static int linearSearch(int[] arr, int x) {
    // Time complexity: O(n)
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] == x) {
        return i; // Element found, return index
      }
    }
    
    // Element not found
    return -1;
  }
  
  // Driver method to test the algorithm
  public static void main(String[] args) {
    int[] arr = {10, 20, 80, 30, 60, 50, 110, 100, 130, 170};
    int x = 110;
    
    int result = linearSearch(arr, x);
    
    if (result == -1)
      System.out.println("Element not present in array");
    else
      System.out.println("Element found at index " + result);
  }
}
`;

const LinearSearch = () => {
  const [array, setArray] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searching, setSearching] = useState(false);
  const [found, setFound] = useState(false);
  const [foundIndex, setFoundIndex] = useState(-1);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [visitedIndices, setVisitedIndices] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [stepDescription, setStepDescription] = useState('');
  const [speed, setSpeed] = useState(500); // milliseconds per step
  const [activeTab, setActiveTab] = useState('visualization');
  
  // Initialize array with random values
  useEffect(() => {
    generateRandomArray();
  }, []);
  
  const generateRandomArray = () => {
    const size = 15;
    const randomArray = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
    setArray(randomArray);
    resetSearch();
  };
  
  const resetSearch = () => {
    setSearchValue('');
    setSearching(false);
    setFound(false);
    setFoundIndex(-1);
    setCurrentIndex(-1);
    setVisitedIndices([]);
    setMessage('');
    setError(false);
    setStepDescription('');
  };
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  const handleSearch = async () => {
    const value = parseInt(searchValue);
    
    if (isNaN(value)) {
      setError(true);
      setMessage('Please enter a valid number');
      return;
    }
    
    setError(false);
    setSearching(true);
    setFound(false);
    setFoundIndex(-1);
    setVisitedIndices([]);
    setMessage('Searching...');
    setStepDescription(`Starting linear search for value ${value}`);
    
    // Linear search algorithm
    for (let i = 0; i < array.length; i++) {
      setCurrentIndex(i);
      setVisitedIndices(prev => [...prev, i]);
      setStepDescription(`Checking if ${array[i]} equals ${value} at index ${i}`);
      await sleep(speed);
      
      if (array[i] === value) {
        setFoundIndex(i);
        setFound(true);
        setMessage(`Found ${value} at index ${i}`);
        setStepDescription(`Found ${value} at index ${i}!`);
        break;
      }
      
      // If we're at the last element and haven't found the value
      if (i === array.length - 1) {
        setError(true);
        setMessage(`${value} not found in the array`);
        setStepDescription(`${value} is not present in the array`);
      }
    }
    
    setSearching(false);
    setCurrentIndex(-1);
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Linear Search</Title>
        <Description>
          Linear Search is the simplest search algorithm that searches for an element in a list by
          checking each element sequentially until a match is found or the whole list has been searched.
        </Description>
      </Header>
      
      <VisualizationContainer>
        <TabContainer>
          <TabButton 
            active={activeTab === 'visualization'} 
            onClick={() => setActiveTab('visualization')}
          >
            Visualization
          </TabButton>
          <TabButton 
            active={activeTab === 'code'} 
            onClick={() => setActiveTab('code')}
          >
            Code
          </TabButton>
        </TabContainer>
        
        {activeTab === 'visualization' ? (
          <>
            <ControlsContainer>
              <SpeedControl>
                <span>Speed:</span>
                <Slider 
                  type="range" 
                  min="100" 
                  max="1000" 
                  step="50"
                  value={speed} 
                  onChange={(e) => setSpeed(parseInt(e.target.value))}
                  disabled={searching}
                />
                <span>{speed}ms</span>
              </SpeedControl>
              
              <div>
                <Input 
                  type="number" 
                  placeholder="Search value" 
                  value={searchValue} 
                  onChange={(e) => setSearchValue(e.target.value)} 
                  disabled={searching}
                />
              </div>
              
              <Button onClick={handleSearch} disabled={searching || searchValue === ''}>
                Search
              </Button>
              
              <Button onClick={generateRandomArray} disabled={searching}>
                Generate New Array
              </Button>
              
              <Button onClick={resetSearch} disabled={searching}>
                Reset
              </Button>
            </ControlsContainer>
            
            <ArrayContainer>
              {array.map((value, index) => (
                <ArrayItem 
                  key={index}
                  current={index === currentIndex}
                  found={index === foundIndex && found}
                  visited={visitedIndices.includes(index) && index !== currentIndex && index !== foundIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <IndexLabel>{index}</IndexLabel>
                  {value}
                </ArrayItem>
              ))}
            </ArrayContainer>
            
            {stepDescription && (
              <StepDescription>
                {stepDescription}
              </StepDescription>
            )}
            
            {message && (
              <MessageContainer error={error}>
                {message}
              </MessageContainer>
            )}
            
            <ComplexityContainer>
              <ComplexityTitle>Algorithm Complexity</ComplexityTitle>
              <p>Linear search is simple but inefficient for large datasets compared to other search algorithms.</p>
              
              <ComplexityTable>
                <thead>
                  <tr>
                    <Th>Time Complexity</Th>
                    <Th>Space Complexity</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Td>
                      <div>Best Case: O(1)</div>
                      <div>Average Case: O(n)</div>
                      <div>Worst Case: O(n)</div>
                    </Td>
                    <Td>O(1)</Td>
                  </tr>
                </tbody>
              </ComplexityTable>
            </ComplexityContainer>
          </>
        ) : (
          <CodeViewer title="Linear Search Implementation (Java)" code={javaCode} />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default LinearSearch; 