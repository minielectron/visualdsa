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

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`;

const ItemCard = styled(motion.div)`
  width: 100px;
  height: 120px;
  background: ${props => props.selected ? 'var(--secondary)' : 'var(--primary-light)'};
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  color: white;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
`;

const ItemIndex = styled.div`
  font-size: 0.8rem;
  opacity: 0.7;
`;

const ItemValue = styled.div`
  font-size: 1.2rem;
  text-align: center;
`;

const ItemWeight = styled.div`
  font-size: 0.9rem;
  text-align: center;
`;

const DPTableContainer = styled.div`
  overflow-x: auto;
  margin: 2rem 0;
`;

const DPTable = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
`;

const DPCell = styled.td`
  border: 1px solid #ddd;
  width: 50px;
  height: 50px;
  text-align: center;
  background-color: ${props => 
    props.active ? 'var(--primary)' : 
    props.highlight ? 'var(--primary-light)' : 
    'white'};
  color: ${props => (props.active || props.highlight) ? 'white' : 'var(--text-primary)'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  transition: all 0.3s;
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

const ResultContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f0f8ff;
  border-radius: var(--border-radius);
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--primary);
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

const KnapsackCapacity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;

const KnapsackIcon = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  margin-bottom: 1rem;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
`;

const javaCode = `
public class Knapsack {
    /**
     * Solves the 0/1 Knapsack problem using dynamic programming
     * 
     * @param weights array of item weights
     * @param values array of item values
     * @param capacity the maximum weight the knapsack can hold
     * @param n number of items
     * @return the maximum value that can be put in a knapsack of given capacity
     */
    public static int knapsack(int[] weights, int[] values, int capacity, int n) {
        // Create a 2D dp array to store the maximum value that can be obtained
        // using i items and j weight capacity
        int[][] dp = new int[n + 1][capacity + 1];
        
        // Fill the dp table in bottom-up manner
        for (int i = 0; i <= n; i++) {
            for (int w = 0; w <= capacity; w++) {
                // Base case: no items or no capacity
                if (i == 0 || w == 0) {
                    dp[i][w] = 0;
                }
                // If weight of current item is less than or equal to capacity,
                // we have two choices: include it or exclude it
                else if (weights[i - 1] <= w) {
                    // Maximum of (value of current item + value of remaining capacity,
                    // value if current item is excluded)
                    dp[i][w] = Math.max(
                        values[i - 1] + dp[i - 1][w - weights[i - 1]],
                        dp[i - 1][w]
                    );
                }
                // If weight of current item is more than capacity, we can't include it
                else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }
        
        return dp[n][capacity];
    }
    
    /**
     * Returns the list of selected items
     */
    public static boolean[] getSelectedItems(int[] weights, int[] values, int capacity, int n) {
        int[][] dp = new int[n + 1][capacity + 1];
        
        // Fill the dp table
        for (int i = 0; i <= n; i++) {
            for (int w = 0; w <= capacity; w++) {
                if (i == 0 || w == 0) {
                    dp[i][w] = 0;
                }
                else if (weights[i - 1] <= w) {
                    dp[i][w] = Math.max(
                        values[i - 1] + dp[i - 1][w - weights[i - 1]],
                        dp[i - 1][w]
                    );
                }
                else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }
        
        // Backtrack to find items
        boolean[] selected = new boolean[n];
        int w = capacity;
        
        for (int i = n; i > 0; i--) {
            // If current item is included
            if (dp[i][w] != dp[i - 1][w]) {
                selected[i - 1] = true;
                w = w - weights[i - 1];
            }
        }
        
        return selected;
    }
    
    // Driver method to test the algorithm
    public static void main(String[] args) {
        int[] values = {60, 100, 120};
        int[] weights = {10, 20, 30};
        int capacity = 50;
        int n = values.length;
        
        System.out.println("Maximum value: " + knapsack(weights, values, capacity, n));
        
        boolean[] selected = getSelectedItems(weights, values, capacity, n);
        System.out.println("Selected items: ");
        for (int i = 0; i < n; i++) {
            if (selected[i]) {
                System.out.println("Item " + (i+1) + " (Weight: " + weights[i] + ", Value: " + values[i] + ")");
            }
        }
    }
}
`;

const defaultItems = [
  { id: 0, weight: 10, value: 60 },
  { id: 1, weight: 20, value: 100 },
  { id: 2, weight: 30, value: 120 },
  { id: 3, weight: 15, value: 80 },
  { id: 4, weight: 25, value: 110 }
];

const Knapsack = () => {
  const [items, setItems] = useState(defaultItems);
  const [capacity, setCapacity] = useState(50);
  const [dpTable, setDpTable] = useState([]);
  const [calculating, setCalculating] = useState(false);
  const [speed, setSpeed] = useState(500); // milliseconds per step
  const [activeCell, setActiveCell] = useState(null);
  const [highlightedCells, setHighlightedCells] = useState([]);
  const [activeTab, setActiveTab] = useState('visualization');
  const [message, setMessage] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [maxValue, setMaxValue] = useState(null);
  
  // Initialize DP table
  useEffect(() => {
    resetCalculation();
  }, [items, capacity]);
  
  const resetCalculation = () => {
    setCalculating(false);
    setActiveCell(null);
    setHighlightedCells([]);
    setMessage('');
    setSelectedItems([]);
    setMaxValue(null);
    
    // Initialize the DP table with zeros
    const n = items.length;
    const newDpTable = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    setDpTable(newDpTable);
  };
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  const calculateKnapsack = async () => {
    if (calculating) return;
    
    setCalculating(true);
    setMessage('Starting 0/1 Knapsack calculation...');
    
    const n = items.length;
    const weights = items.map(item => item.weight);
    const values = items.map(item => item.value);
    
    // Create a copy of the DP table to modify
    const newDpTable = [...dpTable];
    
    // Fill the first row and column with zeros (base case)
    for (let i = 0; i <= n; i++) {
      setActiveCell([i, 0]);
      newDpTable[i][0] = 0;
      setDpTable([...newDpTable]);
      await sleep(speed / 2);
    }
    
    for (let w = 0; w <= capacity; w++) {
      setActiveCell([0, w]);
      newDpTable[0][w] = 0;
      setDpTable([...newDpTable]);
      await sleep(speed / 2);
    }
    
    // Fill the DP table
    for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= capacity; w++) {
        setActiveCell([i, w]);
        setHighlightedCells([]);
        await sleep(speed);
        
        // If the current item's weight is less than or equal to the current capacity
        if (weights[i - 1] <= w) {
          // Highlight cells used in calculation
          setHighlightedCells([
            [i - 1, w], // The value without the current item
            [i - 1, w - weights[i - 1]] // The value for the remaining capacity if we include the current item
          ]);
          
          const includeItem = values[i - 1] + newDpTable[i - 1][w - weights[i - 1]];
          const excludeItem = newDpTable[i - 1][w];
          
          setMessage(`For item ${i} (Weight: ${weights[i - 1]}, Value: ${values[i - 1]}) and capacity ${w}:
            Include: ${values[i - 1]} + dp[${i - 1}][${w - weights[i - 1]}] = ${values[i - 1]} + ${newDpTable[i - 1][w - weights[i - 1]]} = ${includeItem}
            Exclude: dp[${i - 1}][${w}] = ${excludeItem}
            Choose max: ${Math.max(includeItem, excludeItem)}`);
          
          await sleep(speed);
          
          newDpTable[i][w] = Math.max(
            values[i - 1] + newDpTable[i - 1][w - weights[i - 1]],
            newDpTable[i - 1][w]
          );
        } else {
          // Highlight cell above (we can't include this item)
          setHighlightedCells([[i - 1, w]]);
          
          setMessage(`For item ${i} (Weight: ${weights[i - 1]}, Value: ${values[i - 1]}) and capacity ${w}:
            Item is too heavy (${weights[i - 1]} > ${w}), so we skip it.
            dp[${i}][${w}] = dp[${i - 1}][${w}] = ${newDpTable[i - 1][w]}`);
          
          await sleep(speed);
          
          newDpTable[i][w] = newDpTable[i - 1][w];
        }
        
        setDpTable([...newDpTable]);
        await sleep(speed);
      }
    }
    
    setMaxValue(newDpTable[n][capacity]);
    setMessage(`Maximum possible value: ${newDpTable[n][capacity]}`);
    
    // Backtrack to find which items are included
    let remainingCapacity = capacity;
    const newSelectedItems = Array(n).fill(false);
    
    for (let i = n; i > 0; i--) {
      if (newDpTable[i][remainingCapacity] !== newDpTable[i - 1][remainingCapacity]) {
        newSelectedItems[i - 1] = true;
        remainingCapacity -= weights[i - 1];
        
        setActiveCell([i, remainingCapacity]);
        await sleep(speed);
      }
    }
    
    setSelectedItems(newSelectedItems);
    setHighlightedCells([]);
    setActiveCell(null);
    setCalculating(false);
  };
  
  const handleCapacityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setCapacity(value);
    }
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>0/1 Knapsack Problem - Dynamic Programming</Title>
        <Description>
          The 0/1 Knapsack problem is a classic example of dynamic programming where we need to find the 
          maximum value subset of items that fit within a knapsack of fixed capacity.
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
              <label>Knapsack Capacity:</label>
              <Input
                type="number"
                min="1"
                max="100"
                value={capacity}
                onChange={handleCapacityChange}
                disabled={calculating}
              />
            </InputContainer>
            
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
            
            <Button onClick={calculateKnapsack} disabled={calculating}>
              {calculating ? 'Calculating...' : 'Calculate'}
            </Button>
            
            <Button onClick={resetCalculation} disabled={calculating}>
              Reset
            </Button>
          </ControlsContainer>
          
          <KnapsackCapacity>
            <KnapsackIcon>
              <div>Capacity</div>
              <div style={{ fontSize: '1.5rem' }}>{capacity}</div>
            </KnapsackIcon>
          </KnapsackCapacity>
          
          <ItemsContainer>
            {items.map((item, index) => (
              <ItemCard 
                key={item.id}
                selected={selectedItems[index]}
                animate={{
                  scale: selectedItems[index] ? 1.1 : 1,
                  y: selectedItems[index] ? -10 : 0
                }}
              >
                <ItemIndex>Item {index + 1}</ItemIndex>
                <ItemValue>Value: {item.value}</ItemValue>
                <ItemWeight>Weight: {item.weight}</ItemWeight>
              </ItemCard>
            ))}
          </ItemsContainer>
          
          {message && <MessageContainer>{message}</MessageContainer>}
          
          {maxValue !== null && (
            <ResultContainer>
              Maximum Value: {maxValue}
            </ResultContainer>
          )}
          
          <DPTableContainer>
            <DPTable>
              <thead>
                <tr>
                  <th></th>
                  {Array.from({ length: capacity + 1 }, (_, i) => (
                    <th key={i}>{i}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dpTable.map((row, i) => (
                  <tr key={i}>
                    <th>{i}</th>
                    {row.map((cell, j) => (
                      <DPCell 
                        key={j}
                        active={activeCell && activeCell[0] === i && activeCell[1] === j}
                        highlight={highlightedCells.some(([hi, hj]) => hi === i && hj === j)}
                      >
                        {cell}
                      </DPCell>
                    ))}
                  </tr>
                ))}
              </tbody>
            </DPTable>
          </DPTableContainer>
        </VisualizationContainer>
      )}
      
      {activeTab === 'explanation' && (
        <VisualizationContainer>
          <AlgorithmSteps>
            <h3>What is the 0/1 Knapsack Problem?</h3>
            <p>
              The 0/1 Knapsack problem is a problem where you have a set of items, each with a weight and a value, 
              and you need to determine which items to include in a collection so that the total weight is less 
              than or equal to a given limit (capacity) and the total value is as large as possible.
            </p>
            <p>
              It's called the "0/1" knapsack problem because each item must either be taken completely (1) or not at all (0).
            </p>
            
            <h3>Dynamic Programming Approach</h3>
            <p>
              The 0/1 Knapsack problem can be solved efficiently using dynamic programming. Here's how:
            </p>
            
            <h4>Step 1: Create a DP Table</h4>
            <p>
              Create a 2D array dp[n+1][capacity+1] where:
              <ul>
                <li>n is the number of items</li>
                <li>capacity is the maximum weight the knapsack can hold</li>
                <li>dp[i][j] represents the maximum value that can be obtained using the first i items and with a weight limit of j</li>
              </ul>
            </p>
            
            <h4>Step 2: Base Case</h4>
            <p>
              Initialize the first row and first column to 0.
              <ul>
                <li>dp[0][j] = 0 for all j (no items, no value)</li>
                <li>dp[i][0] = 0 for all i (zero capacity, no value)</li>
              </ul>
            </p>
            
            <h4>Step 3: Fill the DP Table</h4>
            <p>
              For each item i and each capacity j:
              <ul>
                <li>If the weight of item i is greater than capacity j, we can't include it: dp[i][j] = dp[i-1][j]</li>
                <li>Otherwise, we have two choices: include the item or exclude it. Take the maximum:
                  <ul>
                    <li>Include: value of item i + maximum value with remaining capacity (dp[i-1][j-weight[i]])</li>
                    <li>Exclude: maximum value without item i (dp[i-1][j])</li>
                  </ul>
                </li>
              </ul>
            </p>
            
            <h4>Step 4: Extract the Result</h4>
            <p>
              The value in dp[n][capacity] gives the maximum value possible.
              To find which items were included, we can backtrack through the table.
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
                  <Td>Naive Recursive</Td>
                  <Td>O(2<sup>n</sup>)</Td>
                  <Td>For each item, we have two choices (include or exclude), leading to exponential complexity.</Td>
                </tr>
                <tr>
                  <Td>Dynamic Programming</Td>
                  <Td>O(n × W)</Td>
                  <Td>We fill a table of size n×W where n is the number of items and W is the capacity.</Td>
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
                  <Td>Naive Recursive</Td>
                  <Td>O(n)</Td>
                  <Td>Maximum depth of the recursion stack.</Td>
                </tr>
                <tr>
                  <Td>Dynamic Programming</Td>
                  <Td>O(n × W)</Td>
                  <Td>We use a 2D array of size n×W.</Td>
                </tr>
                <tr>
                  <Td>Space-Optimized DP</Td>
                  <Td>O(W)</Td>
                  <Td>We can optimize to use only one row of size W at a time.</Td>
                </tr>
              </tbody>
            </ComplexityTable>
          </ComplexityContainer>
        </VisualizationContainer>
      )}
    </PageContainer>
  );
};

export default Knapsack; 