import React, { useState, useEffect, useRef } from 'react';
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

const GraphContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin: 2rem 0;
  border: 1px solid #eee;
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const Node = styled(motion.div)`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => {
    if (props.start) return '#4caf50'; // Start node
    if (props.current) return 'var(--primary)'; // Current node
    if (props.visited) return 'var(--secondary)'; // Visited node
    if (props.inQueue) return '#ff9800'; // Node in queue
    return '#f0f0f0'; // Default
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: ${props => {
    if (props.start || props.current || props.visited || props.inQueue) return 'white';
    return 'var(--text-primary)';
  }};
  cursor: pointer;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

const Edge = styled.div`
  position: absolute;
  background: ${props => props.visited ? 'var(--secondary)' : '#ddd'};
  transform-origin: 0 0;
  height: 2px;
  z-index: 1;
`;

const QueueVisualization = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: var(--border-radius);
  overflow-x: auto;
`;

const QueueItem = styled.div`
  padding: 0.5rem 1rem;
  background: ${props => props.current ? 'var(--primary)' : '#ff9800'};
  color: white;
  border-radius: var(--border-radius);
  min-width: 40px;
  text-align: center;
  font-weight: 600;
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

const Slider = styled.input`
  width: 100px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 60px;
`;

const MessageContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
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

const Legend = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LegendColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.color || '#ddd'};
`;

const javaCode = `
import java.util.*;

public class BreadthFirstSearch {
  private int V; // No. of vertices
  private LinkedList<Integer>[] adj; // Adjacency Lists
  
  // Constructor
  BreadthFirstSearch(int v) {
    V = v;
    adj = new LinkedList[v];
    for (int i = 0; i < v; ++i)
      adj[i] = new LinkedList();
  }
  
  // Function to add an edge into the graph
  void addEdge(int v, int w) {
    adj[v].add(w);
  }
  
  // Prints BFS traversal from a given source s
  void BFS(int s) {
    // Mark all the vertices as not visited (By default set as false)
    boolean visited[] = new boolean[V];
    
    // Create a queue for BFS
    LinkedList<Integer> queue = new LinkedList<Integer>();
    
    // Mark the current node as visited and enqueue it
    visited[s] = true;
    queue.add(s);
    
    while (queue.size() != 0) {
      // Dequeue a vertex from queue and print it
      s = queue.poll();
      System.out.print(s + " ");
      
      // Get all adjacent vertices of the dequeued vertex s
      // If an adjacent has not been visited, then mark it visited
      // and enqueue it
      Iterator<Integer> i = adj[s].listIterator();
      while (i.hasNext()) {
        int n = i.next();
        if (!visited[n]) {
          visited[n] = true;
          queue.add(n);
        }
      }
    }
  }
  
  // Driver method to test above functions
  public static void main(String args[]) {
    BreadthFirstSearch g = new BreadthFirstSearch(4);
    
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);
    
    System.out.println("Breadth First Traversal (starting from vertex 2):");
    g.BFS(2);
  }
}
`;

const BreadthFirstSearch = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [startNode, setStartNode] = useState(null);
  const [visited, setVisited] = useState([]);
  const [queue, setQueue] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);
  const [searching, setSearching] = useState(false);
  const [traversalComplete, setTraversalComplete] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [visitedEdges, setVisitedEdges] = useState([]);
  const [speed, setSpeed] = useState(500); // milliseconds per step
  const [nodeCount, setNodeCount] = useState(8);
  const [activeTab, setActiveTab] = useState('visualization');
  const [stepDescription, setStepDescription] = useState('');
  
  const graphContainerRef = useRef(null);
  
  // Generate random graph
  useEffect(() => {
    generateRandomGraph();
  }, [nodeCount]);
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  const generateRandomGraph = () => {
    const containerWidth = graphContainerRef.current ? graphContainerRef.current.offsetWidth : 800;
    const containerHeight = graphContainerRef.current ? graphContainerRef.current.offsetHeight : 400;
    
    // Generate nodes with random positions
    const newNodes = [];
    for (let i = 0; i < nodeCount; i++) {
      // Add some padding to avoid nodes being too close to the edges
      const padding = 60;
      newNodes.push({
        id: i,
        x: Math.random() * (containerWidth - 2 * padding) + padding,
        y: Math.random() * (containerHeight - 2 * padding) + padding,
      });
    }
    
    // Generate edges randomly
    const newEdges = [];
    const maxEdgesPerNode = 3; // Limit to avoid too many connections
    
    for (let i = 0; i < nodeCount; i++) {
      // Random number of connections for this node
      const edgeCount = Math.floor(Math.random() * maxEdgesPerNode) + 1;
      
      // Create unique connections
      const connections = new Set();
      for (let j = 0; j < edgeCount; j++) {
        // Find a node to connect to that isn't ourselves
        let target;
        do {
          target = Math.floor(Math.random() * nodeCount);
        } while (target === i || connections.has(target));
        
        connections.add(target);
        
        newEdges.push({
          id: `${i}-${target}`,
          source: i,
          target: target,
        });
      }
    }
    
    setNodes(newNodes);
    setEdges(newEdges);
    setVisited([]);
    setQueue([]);
    setCurrentNode(null);
    setVisitedEdges([]);
    setStartNode(null);
    setSelectedNode(null);
    setTraversalComplete(false);
    setStepDescription('');
  };
  
  const handleNodeClick = (nodeId) => {
    if (searching) return;
    
    if (startNode === nodeId) {
      setStartNode(null);
      setSelectedNode(null);
    } else {
      setStartNode(nodeId);
      setSelectedNode(nodeId);
    }
  };
  
  const startBFS = async () => {
    if (!startNode || searching) return;
    
    setSearching(true);
    setTraversalComplete(false);
    setVisited([]);
    setQueue([]);
    setCurrentNode(null);
    setVisitedEdges([]);
    
    // Initialize BFS
    const visitedNodes = new Set();
    const bfsQueue = [startNode];
    visitedNodes.add(startNode);
    
    setQueue([startNode]);
    setStepDescription(`Starting BFS from node ${startNode}`);
    await sleep(speed);
    
    // BFS algorithm
    while (bfsQueue.length > 0) {
      const node = bfsQueue.shift();
      setCurrentNode(node);
      setQueue(bfsQueue.slice()); // Create a copy of the current queue
      setStepDescription(`Processing node ${node}`);
      await sleep(speed);
      
      // Get all adjacent vertices
      const neighbors = edges
        .filter(edge => edge.source === node)
        .map(edge => edge.target);
      
      for (const neighbor of neighbors) {
        const edgeId = `${node}-${neighbor}`;
        
        if (!visitedNodes.has(neighbor)) {
          visitedNodes.add(neighbor);
          bfsQueue.push(neighbor);
          
          // Update UI
          setQueue([...bfsQueue]);
          setVisitedEdges(prev => [...prev, edgeId]);
          setStepDescription(`Found unvisited neighbor: ${neighbor}, adding to queue`);
          await sleep(speed);
        } else {
          setStepDescription(`Neighbor ${neighbor} already visited, skipping`);
          await sleep(speed/2);
        }
      }
      
      // Mark node as visited after processing all its neighbors
      setVisited(Array.from(visitedNodes));
      setStepDescription(`Completed processing node ${node}`);
      await sleep(speed);
    }
    
    setCurrentNode(null);
    setStepDescription('BFS traversal complete!');
    setTraversalComplete(true);
    setSearching(false);
  };
  
  const resetBFS = () => {
    setVisited([]);
    setQueue([]);
    setCurrentNode(null);
    setVisitedEdges([]);
    setTraversalComplete(false);
    setStepDescription('');
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Breadth First Search (BFS)</Title>
        <Description>
          Breadth First Search is a graph traversal algorithm that explores all the vertices of a graph at the present depth
          prior to moving on to vertices at the next depth level. It uses a queue data structure for traversal.
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
              <div>
                <label>Nodes: </label>
                <Input 
                  type="number" 
                  min="4" 
                  max="15"
                  value={nodeCount} 
                  onChange={(e) => setNodeCount(parseInt(e.target.value))}
                  disabled={searching}
                />
              </div>
              
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
              
              <Button onClick={generateRandomGraph} disabled={searching}>
                Generate New Graph
              </Button>
              
              <Button 
                onClick={startBFS} 
                disabled={searching || startNode === null}
              >
                {searching ? 'Searching...' : 'Start BFS'}
              </Button>
              
              <Button onClick={resetBFS} disabled={searching || (visited.length === 0 && queue.length === 0)}>
                Reset
              </Button>
            </ControlsContainer>
            
            <Legend>
              <LegendItem>
                <LegendColor color="#4caf50" />
                <span>Start Node</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="var(--primary)" />
                <span>Current Node</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#ff9800" />
                <span>In Queue</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="var(--secondary)" />
                <span>Visited</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#f0f0f0" />
                <span>Unvisited</span>
              </LegendItem>
            </Legend>
            
            {startNode === null && !searching && (
              <MessageContainer>
                Select a starting node by clicking on it
              </MessageContainer>
            )}
            
            <StepDescription>
              {stepDescription || 'Click on a node to select it as the starting point for BFS'}
            </StepDescription>
            
            <GraphContainer ref={graphContainerRef}>
              {/* Render edges */}
              {edges.map(edge => {
                const sourceNode = nodes.find(n => n.id === edge.source);
                const targetNode = nodes.find(n => n.id === edge.target);
                
                if (!sourceNode || !targetNode) return null;
                
                const dx = targetNode.x - sourceNode.x;
                const dy = targetNode.y - sourceNode.y;
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                const length = Math.sqrt(dx * dx + dy * dy);
                
                return (
                  <Edge 
                    key={edge.id}
                    style={{
                      top: `${sourceNode.y}px`,
                      left: `${sourceNode.x}px`,
                      width: `${length}px`,
                      transform: `rotate(${angle}deg)`,
                    }}
                    visited={visitedEdges.includes(edge.id)}
                  />
                );
              })}
              
              {/* Render nodes */}
              {nodes.map(node => (
                <Node 
                  key={node.id}
                  style={{
                    top: `${node.y}px`,
                    left: `${node.x}px`,
                  }}
                  start={node.id === startNode}
                  current={node.id === currentNode}
                  visited={visited.includes(node.id)}
                  inQueue={queue.includes(node.id)}
                  onClick={() => handleNodeClick(node.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {node.id}
                </Node>
              ))}
            </GraphContainer>
            
            <div>
              <h3>Queue:</h3>
              <QueueVisualization>
                {queue.length > 0 ? (
                  queue.map((nodeId, index) => (
                    <QueueItem 
                      key={`queue-${nodeId}-${index}`}
                      current={index === 0}
                    >
                      {nodeId}
                    </QueueItem>
                  ))
                ) : (
                  <div>Queue is empty</div>
                )}
              </QueueVisualization>
            </div>
            
            {traversalComplete && (
              <MessageContainer>
                BFS traversal complete! Visited nodes: {visited.join(' → ')}
              </MessageContainer>
            )}
            
            <ComplexityContainer>
              <ComplexityTitle>Algorithm Complexity</ComplexityTitle>
              <p>Breadth First Search traverses the graph level by level, making it ideal for finding the shortest path in unweighted graphs.</p>
              
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
                      <div>O(V + E)</div>
                      <div>where V is the number of vertices and E is the number of edges</div>
                    </Td>
                    <Td>O(V)</Td>
                  </tr>
                </tbody>
              </ComplexityTable>
            </ComplexityContainer>
          </>
        ) : (
          <CodeViewer title="Breadth First Search Implementation (Java)" code={javaCode} />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default BreadthFirstSearch; 