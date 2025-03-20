import React, { useState, useEffect, useRef } from 'react';
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
  height: 400px;
  background: #f8f9fa;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px solid #eaeaea;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 350px;
  }
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
  background: ${props => {
    if (props.isStart) return '#4CAF50';
    if (props.isNegativeCycle) return '#D32F2F'; // Red for negative cycle
    if (props.isVisited) return '#2196F3';
    if (props.isCurrent) return '#FFC107';
    return 'var(--primary-light)';
  }};
  color: white;
  cursor: pointer;
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
    if (props.isNegativeCycle) return '#D32F2F'; // Red for negative cycle
    if (props.isPath) return '#4CAF50';
    if (props.isVisited) return '#2196F3';
    return '#ccc';
  }};
  transform-origin: left center;
  z-index: 1;
  
  &:after {
    content: '${props => props.weight}';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 0.8rem;
    color: ${props => props.isNegative ? '#D32F2F' : 'var(--text-secondary)'};
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    font-weight: ${props => props.isNegative ? 'bold' : 'normal'};
  }
`;

const MessageContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: ${props => props.error ? '#FFEBEE' : '#f5f9ff'};
  color: ${props => props.error ? '#D32F2F' : 'inherit'};
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
  border-radius: 50%;
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
    margin-bottom: 1rem;
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

const javaCode = `
import java.util.*;

public class BellmanFord {
    // Edge class to represent graph edges
    static class Edge {
        int source;
        int destination;
        int weight;
        
        Edge(int source, int destination, int weight) {
            this.source = source;
            this.destination = destination;
            this.weight = weight;
        }
    }
    
    // Main Bellman-Ford implementation
    static boolean bellmanFord(int vertices, List<Edge> edges, int source, int[] distances, int[] predecessors) {
        // Step 1: Initialize distances and predecessors
        Arrays.fill(distances, Integer.MAX_VALUE);
        Arrays.fill(predecessors, -1);
        distances[source] = 0;
        
        // Step 2: Relax all edges |V| - 1 times
        for (int i = 0; i < vertices - 1; i++) {
            for (Edge edge : edges) {
                int u = edge.source;
                int v = edge.destination;
                int weight = edge.weight;
                
                // If we can improve the distance to v through u
                if (distances[u] != Integer.MAX_VALUE && distances[u] + weight < distances[v]) {
                    distances[v] = distances[u] + weight;
                    predecessors[v] = u;
                }
            }
        }
        
        // Step 3: Check for negative weight cycles
        for (Edge edge : edges) {
            int u = edge.source;
            int v = edge.destination;
            int weight = edge.weight;
            
            // If we can still improve, then there is a negative weight cycle
            if (distances[u] != Integer.MAX_VALUE && distances[u] + weight < distances[v]) {
                return false; // Negative cycle detected
            }
        }
        
        return true; // No negative cycle
    }
    
    // Utility method to construct path from source to destination
    static List<Integer> constructPath(int[] predecessors, int destination) {
        List<Integer> path = new ArrayList<>();
        while (destination != -1) {
            path.add(0, destination);
            destination = predecessors[destination];
        }
        return path;
    }
    
    // Driver code to test the algorithm
    public static void main(String[] args) {
        int vertices = 5;
        List<Edge> edges = new ArrayList<>();
        
        // Add edges
        edges.add(new Edge(0, 1, -1));
        edges.add(new Edge(0, 2, 4));
        edges.add(new Edge(1, 2, 3));
        edges.add(new Edge(1, 3, 2));
        edges.add(new Edge(1, 4, 2));
        edges.add(new Edge(3, 2, 5));
        edges.add(new Edge(3, 1, 1));
        edges.add(new Edge(4, 3, -3));
        
        int source = 0;
        int[] distances = new int[vertices];
        int[] predecessors = new int[vertices];
        
        boolean noNegativeCycle = bellmanFord(vertices, edges, source, distances, predecessors);
        
        if (noNegativeCycle) {
            System.out.println("Shortest distances from source vertex " + source + ":");
            for (int i = 0; i < vertices; i++) {
                System.out.println("Vertex " + i + ": " + distances[i]);
                
                List<Integer> path = constructPath(predecessors, i);
                System.out.print("Path: ");
                for (int vertex : path) {
                    System.out.print(vertex + " ");
                }
                System.out.println();
            }
        } else {
            System.out.println("Graph contains negative weight cycle");
        }
    }
}
`;

const BellmanFord = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [nodeCount, setNodeCount] = useState(5);
  const [speed, setSpeed] = useState(700);
  const [startNode, setStartNode] = useState(0);
  const [running, setRunning] = useState(false);
  const [visited, setVisited] = useState([]);
  const [currentEdge, setCurrentEdge] = useState(null);
  const [currentNode, setCurrentNode] = useState(null);
  const [distances, setDistances] = useState([]);
  const [predecessors, setPredecessors] = useState([]);
  const [path, setPath] = useState([]);
  const [negativeCycle, setNegativeCycle] = useState([]);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState('visualization');
  const [isDragging, setIsDragging] = useState(false);
  const [draggedNode, setDraggedNode] = useState(null);
  const [iteration, setIteration] = useState(0);
  
  const graphContainerRef = useRef(null);
  
  // Initialize graph with random nodes and edges
  useEffect(() => {
    generateRandomGraph(false);
  }, [nodeCount]);
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  const generateRandomGraph = (includeNegative = false) => {
    // Generate random nodes
    const containerWidth = graphContainerRef.current?.clientWidth || 800;
    const containerHeight = graphContainerRef.current?.clientHeight || 400;
    const padding = 50;
    
    const newNodes = [];
    for (let i = 0; i < nodeCount; i++) {
      newNodes.push({
        id: i,
        x: Math.random() * (containerWidth - 2 * padding) + padding,
        y: Math.random() * (containerHeight - 2 * padding) + padding,
      });
    }
    
    // Generate random edges
    const newEdges = [];
    // Ensure connectivity
    for (let i = 0; i < nodeCount - 1; i++) {
      newEdges.push({
        from: i,
        to: i + 1,
        weight: Math.floor(Math.random() * 9) + 1
      });
    }
    
    // Add more random edges
    const edgesCount = nodeCount * 2;
    for (let i = 0; i < edgesCount; i++) {
      const from = Math.floor(Math.random() * nodeCount);
      const to = Math.floor(Math.random() * nodeCount);
      
      if (from !== to && !newEdges.some(e => e.from === from && e.to === to)) {
        const weight = includeNegative && Math.random() < 0.25 
          ? -Math.floor(Math.random() * 5) - 1   // Negative weight (25% chance if includeNegative is true)
          : Math.floor(Math.random() * 9) + 1;   // Positive weight
        newEdges.push({ from, to, weight });
      }
    }
    
    setNodes(newNodes);
    setEdges(newEdges);
    setStartNode(0);
    setVisited([]);
    setCurrentNode(null);
    setCurrentEdge(null);
    setDistances([]);
    setPredecessors([]);
    setPath([]);
    setNegativeCycle([]);
    setMessage(null);
    setError(false);
    setIteration(0);
  };
  
  const handleNodeMouseDown = (e, nodeId) => {
    e.preventDefault();
    if (running) return;
    
    setIsDragging(true);
    setDraggedNode(nodeId);
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging || running) return;
    
    const containerRect = graphContainerRef.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;
    
    setNodes(prev => prev.map(node => 
      node.id === draggedNode 
        ? { ...node, x, y } 
        : node
    ));
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggedNode(null);
  };
  
  const handleNodeClick = (nodeId) => {
    if (running) return;
    setStartNode(nodeId);
  };
  
  const runBellmanFord = async () => {
    if (running) return;
    
    setRunning(true);
    setVisited([]);
    setCurrentNode(startNode);
    setCurrentEdge(null);
    setPath([]);
    setNegativeCycle([]);
    setMessage("Running Bellman-Ford algorithm...");
    setError(false);
    setIteration(0);
    
    // Initialize distances and predecessors
    const dist = Array(nodeCount).fill(Infinity);
    const pred = Array(nodeCount).fill(null);
    dist[startNode] = 0;
    
    setDistances([...dist]);
    setPredecessors([...pred]);
    
    await sleep(speed);
    
    // Main Bellman-Ford algorithm
    // Relax all edges |V| - 1 times
    for (let i = 0; i < nodeCount - 1; i++) {
      setIteration(i + 1);
      setMessage(`Iteration ${i + 1} of ${nodeCount - 1}: Relaxing all edges...`);
      await sleep(speed / 2);
      
      for (let j = 0; j < edges.length; j++) {
        const edge = edges[j];
        const u = edge.from;
        const v = edge.to;
        const weight = edge.weight;
        
        setCurrentEdge({ from: u, to: v });
        setCurrentNode(u);
        
        await sleep(speed);
        
        // If we can improve the distance to v through u
        if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
          dist[v] = dist[u] + weight;
          pred[v] = u;
          
          setDistances([...dist]);
          setPredecessors([...pred]);
          setVisited(prev => [...prev, v]);
          setCurrentNode(v);
          
          await sleep(speed);
        }
        
        setCurrentEdge(null);
      }
    }
    
    // Check for negative weight cycles
    let hasNegativeCycle = false;
    let cycleEdge = null;
    
    setMessage("Checking for negative weight cycles...");
    await sleep(speed);
    
    for (let j = 0; j < edges.length; j++) {
      const edge = edges[j];
      const u = edge.from;
      const v = edge.to;
      const weight = edge.weight;
      
      setCurrentEdge({ from: u, to: v });
      setCurrentNode(u);
      
      await sleep(speed);
      
      // If we can still improve, then there is a negative weight cycle
      if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
        hasNegativeCycle = true;
        cycleEdge = edge;
        break;
      }
      
      setCurrentEdge(null);
    }
    
    if (hasNegativeCycle) {
      setMessage("Negative weight cycle detected! The algorithm cannot compute shortest paths in this graph.");
      setError(true);
      
      // Identify the negative cycle for visualization
      const cycle = [];
      let currentV = cycleEdge.to;
      
      // Mark visited nodes to avoid infinite loop
      const marked = new Set();
      
      while (!marked.has(currentV)) {
        cycle.push(currentV);
        marked.add(currentV);
        currentV = pred[currentV];
        
        if (currentV === null) break;
      }
      
      // Add the start of the cycle again
      if (currentV !== null) {
        cycle.push(currentV);
        
        // Reverse to get the actual cycle order
        const cycleStart = cycle.lastIndexOf(currentV);
        const actualCycle = cycle.slice(cycleStart);
        setNegativeCycle(actualCycle);
      }
    } else {
      setMessage("Algorithm completed! No negative weight cycles detected.");
      
      // Highlight the path to all nodes
      // For demonstration, let's show path to the node furthest from start
      let maxDist = -Infinity;
      let furthestNode = null;
      
      for (let i = 0; i < nodeCount; i++) {
        if (dist[i] !== Infinity && dist[i] > maxDist) {
          maxDist = dist[i];
          furthestNode = i;
        }
      }
      
      if (furthestNode !== null) {
        const path = [];
        let current = furthestNode;
        
        while (current !== null) {
          path.unshift(current);
          current = pred[current];
        }
        
        // Animate path
        for (let i = 0; i < path.length; i++) {
          await sleep(speed / 2);
          setPath(path.slice(0, i + 1));
        }
      }
    }
    
    setRunning(false);
    setCurrentNode(null);
    setCurrentEdge(null);
  };
  
  const resetVisualization = () => {
    setVisited([]);
    setCurrentNode(null);
    setCurrentEdge(null);
    setPath([]);
    setNegativeCycle([]);
    setMessage(null);
    setError(false);
    setIteration(0);
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
  
  // Determine if an edge is part of the path
  const isEdgeInPath = (edge) => {
    for (let i = 0; i < path.length - 1; i++) {
      if (path[i] === edge.from && path[i + 1] === edge.to) {
        return true;
      }
    }
    return false;
  };
  
  // Determine if an edge is in the negative cycle
  const isEdgeInNegativeCycle = (edge) => {
    for (let i = 0; i < negativeCycle.length - 1; i++) {
      if (negativeCycle[i] === edge.from && negativeCycle[i + 1] === edge.to) {
        return true;
      }
    }
    return false;
  };
  
  // Determine if a node is in the negative cycle
  const isNodeInNegativeCycle = (nodeId) => {
    return negativeCycle.includes(nodeId);
  };
  
  // Get distance to node display
  const getNodeDistance = (nodeId) => {
    if (!distances[nodeId] && distances[nodeId] !== 0) return '';
    if (distances[nodeId] === Infinity) return '∞';
    return distances[nodeId];
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Bellman-Ford Algorithm</Title>
        <Description>
          The Bellman-Ford algorithm finds shortest paths from a source vertex to all other vertices in a weighted graph,
          and can handle graphs with negative weight edges, unlike Dijkstra's algorithm.
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
                <NodeCount>Nodes: {nodeCount}</NodeCount>
                <Slider 
                  type="range" 
                  min="4" 
                  max="10" 
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
                  max="1500" 
                  step="100"
                  value={speed} 
                  onChange={(e) => setSpeed(parseInt(e.target.value))}
                  disabled={running}
                />
                <span>{speed}ms</span>
              </SpeedControl>
              
              <Button onClick={() => generateRandomGraph(false)} disabled={running}>
                Normal Graph
              </Button>
              
              <Button onClick={() => generateRandomGraph(true)} disabled={running}>
                With Negative Edges
              </Button>
              
              <Button onClick={runBellmanFord} disabled={running}>
                {running ? 'Running...' : 'Run Bellman-Ford'}
              </Button>
              
              <Button onClick={resetVisualization} disabled={running}>
                Reset
              </Button>
            </ControlsContainer>
            
            <InfoPanel>
              Click on a node to set it as the source node. The Bellman-Ford algorithm finds shortest paths from the source to all other nodes
              and can detect negative weight cycles.
            </InfoPanel>
            
            <GraphContainer 
              ref={graphContainerRef}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {edges.map((edge, index) => (
                <Edge 
                  key={`${edge.from}-${edge.to}`} 
                  style={getEdgeStyle(edge)}
                  weight={edge.weight}
                  isPath={isEdgeInPath(edge)}
                  isNegativeCycle={isEdgeInNegativeCycle(edge)}
                  isNegative={edge.weight < 0}
                  isVisited={currentEdge && currentEdge.from === edge.from && currentEdge.to === edge.to}
                />
              ))}
              
              {nodes.map((node) => (
                <Node
                  key={node.id}
                  style={{ left: `${node.x}px`, top: `${node.y}px` }}
                  isStart={node.id === startNode}
                  isNegativeCycle={isNodeInNegativeCycle(node.id)}
                  isVisited={visited.includes(node.id) && node.id !== startNode}
                  isCurrent={node.id === currentNode}
                  onMouseDown={(e) => handleNodeMouseDown(e, node.id)}
                  onClick={() => handleNodeClick(node.id)}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {node.id}
                  <div style={{ 
                    fontSize: '0.7rem', 
                    position: 'absolute', 
                    top: '-20px', 
                    backgroundColor: 'white', 
                    padding: '2px 5px', 
                    borderRadius: '3px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                  }}>
                    {getNodeDistance(node.id)}
                  </div>
                </Node>
              ))}
            </GraphContainer>
            
            {message && (
              <MessageContainer error={error}>
                {message}
              </MessageContainer>
            )}
            
            <Legend>
              <LegendItem>
                <LegendColor color="#4CAF50" />
                <span>Source Node</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#2196F3" />
                <span>Visited Node</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#FFC107" />
                <span>Current Node</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#D32F2F" />
                <span>Negative Cycle</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#4CAF50" style={{ height: '2px', width: '20px', borderRadius: '0' }} />
                <span>Shortest Path</span>
              </LegendItem>
            </Legend>
            
            <ComplexityContainer>
              <ComplexityTitle>Algorithm Complexity</ComplexityTitle>
              <p>Bellman-Ford is used to find the shortest paths from a source vertex to all other vertices in a weighted graph.</p>
              
              <ComplexityTable>
                <thead>
                  <tr>
                    <Th>Time Complexity</Th>
                    <Th>Space Complexity</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Td>O(V × E) where V is the number of vertices and E is the number of edges</Td>
                    <Td>O(V)</Td>
                  </tr>
                </tbody>
              </ComplexityTable>
            </ComplexityContainer>
          </>
        )}
        
        {activeTab === 'theory' && (
          <TheorySection>
            <h3>Bellman-Ford Algorithm</h3>
            
            <p>
              The Bellman-Ford algorithm, named after Richard Bellman and Lester Ford, calculates 
              the shortest paths from a single source vertex to all other vertices in a weighted directed graph.
              Unlike Dijkstra's algorithm, it can handle graphs with negative weight edges, making it more versatile 
              but less efficient.
            </p>
            
            <h4>Key Features</h4>
            
            <ul>
              <li><strong>Handles negative weights:</strong> One of the primary advantages of Bellman-Ford over Dijkstra's algorithm</li>
              <li><strong>Detects negative cycles:</strong> Can identify if the graph contains a negative weight cycle, which would make shortest path calculations impossible</li>
              <li><strong>Simple implementation:</strong> Has a straightforward approach with clear steps</li>
              <li><strong>Works with all graph types:</strong> Functions correctly on directed, undirected, sparse, and dense graphs</li>
            </ul>
            
            <h4>Algorithm Steps</h4>
            
            <AlgorithmSteps>
              <li>
                <strong>Initialization:</strong> Set the distance to the source vertex to 0 and all other vertices to infinity.
                Set predecessors of all vertices to null or undefined.
              </li>
              <li>
                <strong>Edge Relaxation:</strong> Perform V-1 iterations (where V is the number of vertices) in which each edge is 
                considered, and distances are updated if a shorter path is found. For each edge (u, v) with weight w, 
                if distance[u] + w is less than distance[v], update distance[v] to distance[u] + w and set predecessor[v] to u.
              </li>
              <li>
                <strong>Negative Cycle Detection:</strong> Perform one more iteration of edge relaxation. If any distance can be 
                improved, then there's a negative weight cycle in the graph, and the shortest path isn't well-defined.
              </li>
            </AlgorithmSteps>
            
            <h4>Applications</h4>
            
            <p>Bellman-Ford algorithm is used in various applications, including:</p>
            
            <ul>
              <li><strong>Network routing protocols:</strong> Used in some distance-vector routing protocols like RIP (Routing Information Protocol)</li>
              <li><strong>Currency exchange:</strong> Determining if arbitrage opportunities exist in currency exchange markets</li>
              <li><strong>Traffic management:</strong> Calculating shortest paths in transportation networks with varying conditions</li>
              <li><strong>Circuit design:</strong> Identifying timing constraints and critical paths</li>
            </ul>
            
            <h4>Advantages Over Dijkstra's Algorithm</h4>
            
            <ul>
              <li>Can handle graphs with negative weight edges</li>
              <li>Can detect negative weight cycles</li>
              <li>Has simpler implementation in some cases</li>
              <li>Doesn't require a priority queue</li>
            </ul>
            
            <h4>Limitations</h4>
            
            <ul>
              <li>Slower time complexity: O(V × E) compared to Dijkstra's O(E + V log V) with a binary heap</li>
              <li>Cannot find shortest paths if there's a negative weight cycle</li>
              <li>Less efficient for sparse graphs</li>
            </ul>
            
            <h4>The Negative Cycle Problem</h4>
            
            <p>
              A negative cycle is a cycle in the graph whose total edge weight sum is negative. When such a cycle exists, 
              you can keep traversing it to continually reduce the path length, meaning there's no true "shortest" path.
            </p>
            
            <p>
              Bellman-Ford can detect negative cycles by performing an extra iteration of edge relaxation. If any distances 
              improve during this extra iteration, a negative cycle exists.
            </p>
          </TheorySection>
        )}
        
        {activeTab === 'code' && (
          <CodeViewer title="Bellman-Ford Algorithm Implementation (Java)" code={javaCode} />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default BellmanFord; 