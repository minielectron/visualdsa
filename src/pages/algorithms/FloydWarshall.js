import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import CodeViewer from '../../components/common/CodeViewer';

const PageContainer = styled.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: var(--primary);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const VisualizationContainer = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem auto;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
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

const NodeCount = styled.div`
  margin-right: 1rem;
`;

const GraphContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background: #f8f9fa;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px solid #eaeaea;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const MatrixContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 1rem 0;
`;

const StepContainer = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #eaeaea;
`;

const StepTitle = styled.h3`
  color: var(--primary);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const StepHighlight = styled.span`
  background-color: ${props => props.color || "#bbdefb"};
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
  font-weight: ${props => props.bold ? "bold" : "normal"};
`;

const Node = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  font-weight: bold;
  background: ${props => props.highlighted ? '#FFC107' : 'var(--primary-light)'};
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  z-index: 2;
  
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }
`;

const Edge = styled.div`
  position: absolute;
  height: 2px;
  background: ${props => {
    if (props.isCurrentPath) return '#FFC107';
    if (props.isUpdated) return '#4CAF50';
    return '#ccc';
  }};
  transform-origin: left center;
  z-index: 1;
  
  &:after {
    content: '${props => props.weight === Infinity ? "∞" : props.weight}';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 0.8rem;
    color: ${props => props.isUpdated ? '#4CAF50' : 'var(--text-secondary)'};
    font-weight: ${props => props.isUpdated ? 'bold' : 'normal'};
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
`;

const Matrix = styled.table`
  border-collapse: collapse;
  margin: 1rem auto;
  font-family: monospace;
  
  th, td {
    border: 1px solid #ddd;
    padding: 0.5rem;
    text-align: center;
    min-width: 40px;
  }
  
  th {
    background-color: var(--primary);
    color: white;
  }
  
  td.highlighted {
    background-color: #FFC107;
    font-weight: bold;
  }
  
  td.updated {
    background-color: #E8F5E9;
    color: #4CAF50;
    font-weight: bold;
  }
  
  td.infinity {
    color: #999;
  }
`;

const MessageContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  text-align: center;
`;

const InfoPanel = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LegendColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: ${props => props.square ? '0' : '50%'};
  background: ${props => props.color};
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

const TheorySection = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: var(--border-radius);
  
  h3 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
  
  h4 {
    color: var(--primary);
    margin: 1.5rem 0 0.5rem;
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  ul, ol {
    padding-left: 2rem;
    margin-bottom: 1rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const AlgorithmSteps = styled.div`
  counter-reset: step;
  
  li {
    position: relative;
    margin-bottom: 1.5rem;
    padding-left: 2.5rem;
    counter-increment: step;
    
    &:before {
      content: counter(step);
      position: absolute;
      left: 0;
      top: 0;
      background: var(--primary);
      color: white;
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  }
`;

const CodeSnippet = styled.pre`
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
  font-family: monospace;
  margin: 1rem 0;
`;

const javaCode = `
public class FloydWarshall {
    private static final int INF = Integer.MAX_VALUE;
    
    public static void floydWarshall(int[][] graph) {
        int V = graph.length;
        int[][] dist = new int[V][V];
        
        // Initialize the distance matrix
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                dist[i][j] = graph[i][j];
            }
        }
        
        // Update distances considering all vertices as intermediate
        for (int k = 0; k < V; k++) {
            // Pick all vertices as source one by one
            for (int i = 0; i < V; i++) {
                // Pick all vertices as destination one by one
                for (int j = 0; j < V; j++) {
                    // If vertex k is on the shortest path from i to j,
                    // then update the value of dist[i][j]
                    if (dist[i][k] != INF && dist[k][j] != INF && 
                        dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }
        
        // Print the shortest distance matrix
        printSolution(dist);
    }
    
    private static void printSolution(int[][] dist) {
        int V = dist.length;
        System.out.println("The following matrix shows the shortest distances between every pair of vertices:");
        
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                if (dist[i][j] == INF) {
                    System.out.print("INF ");
                } else {
                    System.out.print(dist[i][j] + "   ");
                }
            }
            System.out.println();
        }
    }
    
    // Driver code
    public static void main(String[] args) {
        int V = 4;
        int[][] graph = {
            {0, 5, INF, 10},
            {INF, 0, 3, INF},
            {INF, INF, 0, 1},
            {INF, INF, INF, 0}
        };
        
        floydWarshall(graph);
    }
}
`;

const FloydWarshall = () => {
  const [nodeCount, setNodeCount] = useState(4);
  const [speed, setSpeed] = useState(1000);
  const [running, setRunning] = useState(false);
  const [matrix, setMatrix] = useState([]);
  const [currentK, setCurrentK] = useState(null);
  const [currentI, setCurrentI] = useState(null);
  const [currentJ, setCurrentJ] = useState(null);
  const [updatedCell, setUpdatedCell] = useState(null);
  const [message, setMessage] = useState(null);
  const [step, setStep] = useState(0);
  const [activeTab, setActiveTab] = useState('visualization');
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [currentPath, setCurrentPath] = useState(null);
  
  // Array of step descriptions
  const steps = [
    {
      title: "Initialization",
      description: "The algorithm begins by initializing the distance matrix. Each cell [i][j] represents the weight of the direct edge from vertex i to vertex j. If there's no direct edge, the value is set to infinity.",
    },
    {
      title: "Select Intermediate Vertex",
      description: `The outer loop selects each vertex as a potential intermediate vertex (k=${currentK}). The algorithm will check if going through this vertex results in shorter paths.`,
    },
    {
      title: "Consider All Source-Destination Pairs",
      description: `For each pair of source (i=${currentI}) and destination (j=${currentJ}) vertices, check if the path i→k→j is shorter than the current best-known path i→j.`,
    },
    {
      title: "Update Shorter Path",
      description: `If the path through k is shorter, update the distance[i][j] with the new shorter distance. Current check: ${matrix[currentI]?.[currentJ] === Infinity ? '∞' : matrix[currentI]?.[currentJ]} > ${matrix[currentI]?.[currentK] === Infinity ? '∞' : matrix[currentI]?.[currentK]} + ${matrix[currentK]?.[currentJ] === Infinity ? '∞' : matrix[currentK]?.[currentJ]}${updatedCell ? ' = ' + (matrix[currentI]?.[currentK] + matrix[currentK]?.[currentJ]) : ''}`,
    },
    {
      title: "Complete Algorithm",
      description: `The algorithm has finished processing all possible intermediate vertices. The final matrix shows the shortest path distances between every pair of vertices.`,
    },
  ];
  
  useEffect(() => {
    generateRandomGraph();
  }, [nodeCount]);
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  const generateRandomGraph = () => {
    // Create nodes in a circular layout
    const newNodes = [];
    const radius = 100;
    const centerX = 150;
    const centerY = 150;
    
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i * 2 * Math.PI) / nodeCount;
      newNodes.push({
        id: i,
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      });
    }
    
    // Generate adjacency matrix with random weights
    const newMatrix = Array(nodeCount).fill().map(() => Array(nodeCount).fill(Infinity));
    const newEdges = [];
    
    // Set diagonal to 0 (distance from a vertex to itself)
    for (let i = 0; i < nodeCount; i++) {
      newMatrix[i][i] = 0;
    }
    
    // Generate random edges (30-60% connectivity)
    const minEdges = Math.floor(nodeCount * (nodeCount - 1) * 0.3);
    const maxEdges = Math.floor(nodeCount * (nodeCount - 1) * 0.6);
    const numEdges = Math.floor(Math.random() * (maxEdges - minEdges + 1)) + minEdges;
    
    let edgesAdded = 0;
    while (edgesAdded < numEdges) {
      const from = Math.floor(Math.random() * nodeCount);
      const to = Math.floor(Math.random() * nodeCount);
      
      if (from !== to && newMatrix[from][to] === Infinity) {
        const weight = Math.floor(Math.random() * 9) + 1;
        newMatrix[from][to] = weight;
        
        newEdges.push({
          from,
          to,
          weight,
        });
        
        edgesAdded++;
      }
    }
    
    setNodes(newNodes);
    setEdges(newEdges);
    setMatrix(newMatrix);
    setCurrentK(null);
    setCurrentI(null);
    setCurrentJ(null);
    setUpdatedCell(null);
    setMessage(null);
    setStep(0);
    setCurrentPath(null);
  };
  
  const runFloydWarshall = async () => {
    if (running) return;
    
    setRunning(true);
    setMessage("Running Floyd-Warshall algorithm...");
    setStep(1);
    
    // Create a deep copy of the matrix to work with
    const dist = JSON.parse(JSON.stringify(matrix));
    
    // Main Floyd-Warshall algorithm
    await sleep(speed);
    
    // For each intermediate vertex
    for (let k = 0; k < nodeCount; k++) {
      setCurrentK(k);
      setMessage(`Considering vertex ${k} as an intermediate vertex...`);
      setStep(2);
      await sleep(speed);
      
      // For each source vertex
      for (let i = 0; i < nodeCount; i++) {
        // Skip if it's the same vertex
        if (i === k) continue;
        
        // For each destination vertex
        for (let j = 0; j < nodeCount; j++) {
          // Skip if it's the same vertex or if it's the intermediate vertex
          if (j === i || j === k) continue;
          
          setCurrentI(i);
          setCurrentJ(j);
          setCurrentPath({ i, j, k });
          setStep(3);
          
          await sleep(speed);
          
          // If there's a path from i to k and from k to j
          if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
            setStep(4);
            
            // If the path through k is shorter than the direct path
            if (dist[i][k] + dist[k][j] < dist[i][j]) {
              const prevValue = dist[i][j];
              dist[i][j] = dist[i][k] + dist[k][j];
              
              setUpdatedCell({ i, j, prev: prevValue, new: dist[i][j] });
              setMessage(`Updated distance from ${i} to ${j} using ${k} as intermediate: ${prevValue === Infinity ? '∞' : prevValue} → ${dist[i][j]}`);
              setMatrix([...dist]);
              
              await sleep(speed);
            } else {
              setMessage(`No improvement for path from ${i} to ${j} using ${k} as intermediate.`);
              await sleep(speed / 2);
            }
            
            setUpdatedCell(null);
          }
        }
      }
    }
    
    setCurrentI(null);
    setCurrentJ(null);
    setCurrentK(null);
    setCurrentPath(null);
    setMessage("Algorithm completed! The matrix now shows shortest paths between all pairs of vertices.");
    setStep(5);
    setRunning(false);
  };
  
  const resetVisualization = () => {
    generateRandomGraph();
  };
  
  // Calculate edge positions
  const getEdgeStyle = (edge) => {
    const fromNode = nodes.find(n => n.id === edge.from);
    const toNode = nodes.find(n => n.id === edge.to);
    
    if (!fromNode || !toNode) return {};
    
    const dx = toNode.x - fromNode.x;
    const dy = toNode.y - fromNode.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    
    return {
      left: `${fromNode.x + 20}px`,
      top: `${fromNode.y + 20}px`,
      width: `${distance - 40}px`,
      transform: `rotate(${angle}deg)`
    };
  };
  
  // Determine if this edge is in the current path being considered
  const isEdgeInCurrentPath = (edge) => {
    if (!currentPath) return false;
    
    const { i, j, k } = currentPath;
    return (edge.from === i && edge.to === k) || (edge.from === k && edge.to === j);
  };
  
  // Determine if this edge has been updated in the current step
  const isEdgeUpdated = (edge) => {
    if (!updatedCell) return false;
    
    return edge.from === updatedCell.i && edge.to === updatedCell.j;
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Floyd-Warshall Algorithm</Title>
        <Description>
          The Floyd-Warshall algorithm finds the shortest paths between all pairs of vertices in a weighted graph, 
          handling positive and negative edge weights (as long as there are no negative cycles).
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
            active={activeTab === 'theory'} 
            onClick={() => setActiveTab('theory')}
          >
            Theory
          </TabButton>
          <TabButton 
            active={activeTab === 'code'} 
            onClick={() => setActiveTab('code')}
          >
            Code
          </TabButton>
        </TabContainer>
        
        {activeTab === 'visualization' && (
          <>
            <ControlsContainer>
              <SliderContainer>
                <NodeCount>Vertices: {nodeCount}</NodeCount>
                <Slider 
                  type="range" 
                  min="3" 
                  max="6" 
                  value={nodeCount} 
                  onChange={(e) => setNodeCount(parseInt(e.target.value))}
                  disabled={running}
                />
              </SliderContainer>
              
              <SpeedControl>
                <span>Speed:</span>
                <Slider 
                  type="range" 
                  min="200" 
                  max="2000" 
                  step="200"
                  value={speed} 
                  onChange={(e) => setSpeed(parseInt(e.target.value))}
                  disabled={running}
                />
                <span>{speed}ms</span>
              </SpeedControl>
              
              <Button onClick={generateRandomGraph} disabled={running}>
                New Graph
              </Button>
              
              <Button onClick={runFloydWarshall} disabled={running}>
                {running ? 'Running...' : 'Run Floyd-Warshall'}
              </Button>
              
              <Button onClick={resetVisualization} disabled={running}>
                Reset
              </Button>
            </ControlsContainer>
            
            <InfoPanel>
              The Floyd-Warshall algorithm computes shortest paths between all pairs of vertices in a weighted graph.
              It can handle positive and negative edge weights but no negative cycles.
            </InfoPanel>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ flex: '1 1 300px' }}>
                <GraphContainer>
                  {edges.map((edge) => (
                    <Edge 
                      key={`${edge.from}-${edge.to}`} 
                      style={getEdgeStyle(edge)}
                      weight={edge.weight}
                      isCurrentPath={isEdgeInCurrentPath(edge)}
                      isUpdated={isEdgeUpdated(edge)}
                    />
                  ))}
                  
                  {nodes.map((node) => (
                    <Node
                      key={node.id}
                      style={{ left: `${node.x}px`, top: `${node.y}px` }}
                      highlighted={node.id === currentK || node.id === currentI || node.id === currentJ}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {node.id}
                    </Node>
                  ))}
                </GraphContainer>
                
                <Legend>
                  <LegendItem>
                    <LegendColor color="#FFC107" />
                    <span>Current Vertex</span>
                  </LegendItem>
                  <LegendItem>
                    <LegendColor color="#FFC107" square={true} style={{ height: '2px', width: '20px', borderRadius: '0' }} />
                    <span>Path Being Considered</span>
                  </LegendItem>
                  <LegendItem>
                    <LegendColor color="#4CAF50" square={true} style={{ height: '2px', width: '20px', borderRadius: '0' }} />
                    <span>Updated Path</span>
                  </LegendItem>
                </Legend>
              </div>
              
              <div style={{ flex: '1 1 300px' }}>
                <StepContainer>
                  <StepTitle>Step {step}: {steps[step-1]?.title || ""}</StepTitle>
                  <StepDescription>
                    {steps[step-1]?.description || ""}
                  </StepDescription>
                </StepContainer>
                
                <MatrixContainer>
                  <Matrix>
                    <thead>
                      <tr>
                        <th></th>
                        {Array.from({ length: nodeCount }, (_, i) => (
                          <th key={i}>{i}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {matrix.map((row, i) => (
                        <tr key={i}>
                          <th>{i}</th>
                          {row.map((cell, j) => (
                            <td 
                              key={j} 
                              className={
                                updatedCell && updatedCell.i === i && updatedCell.j === j 
                                  ? 'updated' 
                                  : ((currentI === i && currentJ === j) || 
                                     (currentI === i && currentK === j) || 
                                     (currentK === i && currentJ === j)) 
                                    ? 'highlighted' 
                                    : cell === Infinity 
                                      ? 'infinity' 
                                      : ''
                              }
                            >
                              {cell === Infinity ? "∞" : cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </Matrix>
                </MatrixContainer>
              </div>
            </div>
            
            {message && (
              <MessageContainer>
                {message}
              </MessageContainer>
            )}
            
            <ComplexityContainer>
              <ComplexityTitle>Algorithm Complexity</ComplexityTitle>
              <p>Floyd-Warshall is an efficient algorithm for finding shortest paths in weighted graphs.</p>
              
              <ComplexityTable>
                <thead>
                  <tr>
                    <Th>Time Complexity</Th>
                    <Th>Space Complexity</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Td>O(V³) where V is the number of vertices</Td>
                    <Td>O(V²)</Td>
                  </tr>
                </tbody>
              </ComplexityTable>
            </ComplexityContainer>
          </>
        )}
        
        {activeTab === 'theory' && (
          <TheorySection>
            <h3>Floyd-Warshall Algorithm</h3>
            
            <p>
              The Floyd-Warshall algorithm is a dynamic programming approach that finds the shortest paths between all pairs of vertices in a weighted graph.
              Unlike Dijkstra's algorithm (single-source) or Bellman-Ford (single-source with negative weights), Floyd-Warshall computes shortest paths between <em>every</em> pair of vertices.
            </p>
            
            <h4>Key Features</h4>
            
            <ul>
              <li><strong>All-pairs shortest paths:</strong> Computes shortest distances between all pairs of vertices</li>
              <li><strong>Handles negative weights:</strong> Can process graphs with negative weight edges (but no negative cycles)</li>
              <li><strong>Based on dynamic programming:</strong> Uses a systematic approach to build solutions from simpler subproblems</li>
              <li><strong>Simple implementation:</strong> Straightforward triple-nested loop structure</li>
              <li><strong>Works with all graph types:</strong> Works on directed, undirected, sparse, and dense graphs</li>
            </ul>
            
            <h4>Core Concept</h4>
            
            <p>
              The fundamental insight of Floyd-Warshall is to use intermediate vertices to find shorter paths. For each pair of vertices (i,j), 
              we check if going through another vertex k results in a shorter path than the current best path from i to j.
            </p>
            
            <p>
              The key recurrence relation is:
            </p>
            
            <CodeSnippet>
              distance[i][j] = min(distance[i][j], distance[i][k] + distance[k][j])
            </CodeSnippet>
            
            <p>
              This formula states: "The shortest path from i to j is either the previously known shortest path from i to j, 
              or the path from i to k plus the path from k to j (going through k as an intermediate point)."
            </p>
            
            <h4>Algorithm Steps</h4>
            
            <AlgorithmSteps>
              <li>
                <strong>Initialize the distance matrix:</strong> For each pair of vertices (i,j), set distance[i][j] to the weight of the edge (i,j) if it exists, or infinity if there's no direct edge. Set distance[i][i] = 0 for all i (distance from a vertex to itself).
              </li>
              <li>
                <strong>Consider all vertices as intermediates:</strong> For each vertex k, consider it as an intermediate vertex for every pair (i,j).
              </li>
              <li>
                <strong>Update distances with intermediate vertices:</strong> For each (i,j) pair, check if the path i→k→j is shorter than the current best path i→j. If so, update the distance[i][j].
              </li>
              <li>
                <strong>Complete the algorithm:</strong> After considering all vertices as intermediates, the distance matrix contains the shortest distances between all pairs of vertices.
              </li>
            </AlgorithmSteps>
            
            <h4>Applications</h4>
            
            <p>Floyd-Warshall algorithm is used in various applications including:</p>
            
            <ul>
              <li><strong>Network routing:</strong> Finding optimal routes between all network nodes</li>
              <li><strong>Road systems:</strong> Computing shortest paths between all locations</li>
              <li><strong>Transitive closure of directed graphs:</strong> Determining if there's a path between any two vertices</li>
              <li><strong>Inversion of matrices:</strong> Computing matrix inverses using Gauss-Jordan elimination</li>
              <li><strong>Computer networks:</strong> Routing protocols and network planning</li>
            </ul>
            
            <h4>Advantages and Limitations</h4>
            
            <p><strong>Advantages:</strong></p>
            <ul>
              <li>Simple implementation with just a few lines of code</li>
              <li>Handles negative weight edges</li>
              <li>Computes all shortest paths in a single run</li>
              <li>Works well for dense graphs</li>
            </ul>
            
            <p><strong>Limitations:</strong></p>
            <ul>
              <li>O(V³) time complexity makes it slow for very large graphs</li>
              <li>Cannot handle graphs with negative cycles</li>
              <li>Less efficient than Dijkstra's algorithm for single-source problems</li>
              <li>O(V²) space complexity can be prohibitive for large graphs</li>
            </ul>
            
            <h4>Detecting Negative Cycles</h4>
            
            <p>
              A useful property of the Floyd-Warshall algorithm is that it can be extended to detect negative cycles.
              After the algorithm completes, if any vertex has a negative distance to itself (distance[i][i] &lt; 0), 
              then the graph contains a negative cycle.
            </p>
          </TheorySection>
        )}
        
        {activeTab === 'code' && (
          <CodeViewer title="Floyd-Warshall Algorithm Implementation (Java)" code={javaCode} />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default FloydWarshall; 