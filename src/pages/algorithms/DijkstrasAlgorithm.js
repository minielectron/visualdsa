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
    if (props.isEnd) return '#F44336';
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
    color: var(--text-secondary);
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
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
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  ul {
    padding-left: 2rem;
    margin-bottom: 1rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const javaCode = `
import java.util.*;

public class DijkstrasAlgorithm {
    // A utility class to represent a vertex with its distance value
    static class Node implements Comparable<Node> {
        int vertex;
        int distance;

        Node(int vertex, int distance) {
            this.vertex = vertex;
            this.distance = distance;
        }

        @Override
        public int compareTo(Node other) {
            return Integer.compare(this.distance, other.distance);
        }
    }

    // Main implementation of Dijkstra's algorithm
    public static int[] dijkstra(int[][] graph, int source) {
        int V = graph.length;
        
        // Distance array to store shortest distances from source
        int[] distance = new int[V];
        
        // Boolean array to track processed vertices
        boolean[] processed = new boolean[V];
        
        // Initialize distances to max value and processed to false
        for (int i = 0; i < V; i++) {
            distance[i] = Integer.MAX_VALUE;
            processed[i] = false;
        }
        
        // Distance of source vertex from itself is 0
        distance[source] = 0;
        
        // Priority queue to get the minimum distance vertex
        PriorityQueue<Node> pq = new PriorityQueue<>();
        pq.add(new Node(source, 0));
        
        // Process all vertices
        while (!pq.isEmpty()) {
            // Extract the minimum distance vertex
            Node current = pq.poll();
            int u = current.vertex;
            
            // Skip if already processed
            if (processed[u]) continue;
            
            // Mark as processed
            processed[u] = true;
            
            // Update distances of adjacent vertices
            for (int v = 0; v < V; v++) {
                // Process only if there's an edge
                if (graph[u][v] != 0 && !processed[v]) {
                    // Update distance if there's a shorter path
                    int newDistance = distance[u] + graph[u][v];
                    if (newDistance < distance[v]) {
                        distance[v] = newDistance;
                        pq.add(new Node(v, distance[v]));
                    }
                }
            }
        }
        
        return distance;
    }
    
    // Driver code to test the algorithm
    public static void main(String[] args) {
        int V = 6;
        int[][] graph = new int[V][V];
        
        // Example graph represented as adjacency matrix
        // 0 means no edge, positive number is edge weight
        graph[0][1] = 4;
        graph[0][2] = 2;
        graph[1][2] = 5;
        graph[1][3] = 10;
        graph[2][3] = 3;
        graph[2][4] = 2;
        graph[3][5] = 7;
        graph[4][3] = 4;
        graph[4][5] = 6;
        
        int source = 0;
        int[] distances = dijkstra(graph, source);
        
        System.out.println("Shortest distances from source vertex " + source + ":");
        for (int i = 0; i < V; i++) {
            System.out.println("Vertex " + i + ": " + distances[i]);
        }
    }
}
`;

const DijkstrasAlgorithm = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [nodeCount, setNodeCount] = useState(6);
  const [speed, setSpeed] = useState(500);
  const [startNode, setStartNode] = useState(0);
  const [endNode, setEndNode] = useState(null);
  const [running, setRunning] = useState(false);
  const [visited, setVisited] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);
  const [distances, setDistances] = useState([]);
  const [path, setPath] = useState([]);
  const [message, setMessage] = useState(null);
  const [activeTab, setActiveTab] = useState('visualization');
  const [isDragging, setIsDragging] = useState(false);
  const [draggedNode, setDraggedNode] = useState(null);
  
  const graphContainerRef = useRef(null);
  
  // Initialize graph with random nodes and edges
  useEffect(() => {
    generateRandomGraph();
  }, [nodeCount]);
  
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  const generateRandomGraph = () => {
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
    for (let i = 0; i < nodeCount; i++) {
      // Each node connected to 1-3 other nodes
      const connections = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connections; j++) {
        const target = Math.floor(Math.random() * nodeCount);
        if (i !== target && !newEdges.some(e => (e.from === i && e.to === target) || (e.from === target && e.to === i))) {
          newEdges.push({
            from: i,
            to: target,
            weight: Math.floor(Math.random() * 9) + 1
          });
        }
      }
    }
    
    setNodes(newNodes);
    setEdges(newEdges);
    setStartNode(0);
    setEndNode(nodeCount - 1);
    setVisited([]);
    setCurrentNode(null);
    setDistances([]);
    setPath([]);
    setMessage(null);
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
    
    if (startNode === nodeId) {
      setStartNode(null);
    } else if (endNode === nodeId) {
      setEndNode(null);
    } else if (startNode === null) {
      setStartNode(nodeId);
    } else if (endNode === null) {
      setEndNode(nodeId);
    }
  };
  
  const runDijkstra = async () => {
    if (running) return;
    if (startNode === null) {
      setMessage("Please select a start node");
      return;
    }
    if (endNode === null) {
      setMessage("Please select an end node");
      return;
    }
    
    setRunning(true);
    setVisited([]);
    setCurrentNode(startNode);
    setPath([]);
    setMessage("Running Dijkstra's algorithm...");
    
    // Create an adjacency matrix representation for the graph
    const graph = Array(nodeCount).fill().map(() => Array(nodeCount).fill(0));
    edges.forEach(edge => {
      graph[edge.from][edge.to] = edge.weight;
      // For undirected graph
      graph[edge.to][edge.from] = edge.weight;
    });
    
    // Initialize distances and previous nodes
    const dist = Array(nodeCount).fill(Infinity);
    const prev = Array(nodeCount).fill(null);
    const unvisited = new Set(Array.from({ length: nodeCount }, (_, i) => i));
    
    dist[startNode] = 0;
    setDistances([...dist]);
    
    // Main Dijkstra algorithm
    while (unvisited.size > 0) {
      // Find the unvisited node with the minimum distance
      let minDist = Infinity;
      let u = null;
      
      for (const node of unvisited) {
        if (dist[node] < minDist) {
          minDist = dist[node];
          u = node;
        }
      }
      
      // If we can't find a node or if we've reached the end node
      if (u === null || u === endNode) break;
      
      // Remove u from unvisited set
      unvisited.delete(u);
      
      // Set current node for visualization
      setCurrentNode(u);
      // Add to visited
      setVisited(prev => [...prev, u]);
      
      await sleep(speed);
      
      // For each neighbor of u
      for (let v = 0; v < nodeCount; v++) {
        if (graph[u][v] > 0 && unvisited.has(v)) {
          // Calculate new distance
          const alt = dist[u] + graph[u][v];
          
          // If we found a shorter path
          if (alt < dist[v]) {
            dist[v] = alt;
            prev[v] = u;
            setDistances([...dist]);
          }
        }
      }
    }
    
    // Reconstruct the path if end node is reachable
    if (dist[endNode] < Infinity) {
      const path = [];
      let current = endNode;
      
      while (current !== null) {
        path.unshift(current);
        current = prev[current];
      }
      
      // Animate path
      for (let i = 0; i < path.length - 1; i++) {
        await sleep(speed);
        setPath(path.slice(0, i + 2));
      }
      
      setMessage(`Shortest path found with distance ${dist[endNode]}`);
    } else {
      setMessage("No path found to the end node");
    }
    
    setRunning(false);
    setCurrentNode(null);
  };
  
  const resetVisualization = () => {
    setVisited([]);
    setCurrentNode(null);
    setPath([]);
    setMessage(null);
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
      if ((path[i] === edge.from && path[i + 1] === edge.to) || 
          (path[i] === edge.to && path[i + 1] === edge.from)) {
        return true;
      }
    }
    return false;
  };
  
  // Determine if an edge is visited
  const isEdgeVisited = (edge) => {
    return visited.includes(edge.from) && visited.includes(edge.to);
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Dijkstra's Algorithm</Title>
        <Description>
          Dijkstra's algorithm is a graph search algorithm that finds the shortest path between nodes in a graph, 
          which may represent, for example, road networks.
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
                  max="12" 
                  value={nodeCount} 
                  onChange={(e) => setNodeCount(parseInt(e.target.value))}
                  disabled={running}
                />
              </SliderContainer>
              
              <SpeedControl>
                <span>Speed:</span>
                <Slider 
                  type="range" 
                  min="100" 
                  max="1000" 
                  step="100"
                  value={speed} 
                  onChange={(e) => setSpeed(parseInt(e.target.value))}
                  disabled={running}
                />
                <span>{speed}ms</span>
              </SpeedControl>
              
              <Button onClick={generateRandomGraph} disabled={running}>
                New Graph
              </Button>
              
              <Button onClick={runDijkstra} disabled={running || startNode === null || endNode === null}>
                {running ? 'Running...' : 'Run Dijkstra'}
              </Button>
              
              <Button onClick={resetVisualization} disabled={running}>
                Reset
              </Button>
            </ControlsContainer>
            
            <InfoPanel>
              Click on a node to set it as the start node (green), then click another node to set it as the end node (red).
              You can drag nodes to rearrange the graph.
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
                  isVisited={isEdgeVisited(edge)}
                />
              ))}
              
              {nodes.map((node) => (
                <Node
                  key={node.id}
                  style={{ left: `${node.x}px`, top: `${node.y}px` }}
                  isStart={node.id === startNode}
                  isEnd={node.id === endNode}
                  isVisited={visited.includes(node.id) && node.id !== startNode && node.id !== endNode}
                  isCurrent={node.id === currentNode}
                  onMouseDown={(e) => handleNodeMouseDown(e, node.id)}
                  onClick={() => handleNodeClick(node.id)}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {node.id}
                </Node>
              ))}
            </GraphContainer>
            
            {message && (
              <MessageContainer>
                {message}
              </MessageContainer>
            )}
            
            <Legend>
              <LegendItem>
                <LegendColor color="#4CAF50" />
                <span>Start Node</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#F44336" />
                <span>End Node</span>
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
                <LegendColor color="#4CAF50" style={{ height: '2px', width: '20px', borderRadius: '0' }} />
                <span>Shortest Path</span>
              </LegendItem>
            </Legend>
            
            <ComplexityContainer>
              <ComplexityTitle>Algorithm Complexity</ComplexityTitle>
              <p>Dijkstra's algorithm efficiently finds the shortest path in a weighted graph with non-negative weights.</p>
              
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
                      <div>O((V + E) log V) with a priority queue implementation</div>
                      <div>O(V²) with an array implementation</div>
                    </Td>
                    <Td>O(V)</Td>
                  </tr>
                </tbody>
              </ComplexityTable>
            </ComplexityContainer>
          </>
        )}
        
        {activeTab === 'theory' && (
          <TheorySection>
            <h3>Dijkstra's Algorithm</h3>
            
            <p>
              Dijkstra's algorithm, conceived by computer scientist Edsger W. Dijkstra in 1956 and published in 1959, is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks.
            </p>
            
            <h3>How It Works</h3>
            
            <p>The algorithm works by maintaining a set of nodes whose shortest distance from the source node has been calculated. It repeatedly selects the node with the minimum distance, updates the distances to its adjacent nodes, and adds it to the set of processed nodes.</p>
            
            <p>Here is the step-by-step process:</p>
            
            <ol>
              <li>Initialize distances of all vertices as infinite and the source vertex as 0.</li>
              <li>Create an empty priority queue (min-heap) and push the source vertex with its distance (0).</li>
              <li>While the priority queue is not empty:
                <ul>
                  <li>Extract the vertex with the minimum distance from the priority queue.</li>
                  <li>For each adjacent vertex, if the distance through the current vertex is less than the previously known distance, update the distance and push the vertex with its updated distance into the priority queue.</li>
                </ul>
              </li>
            </ol>
            
            <h3>Applications</h3>
            
            <p>Dijkstra's algorithm is widely used in various applications including:</p>
            
            <ul>
              <li>GPS navigation systems and routing applications</li>
              <li>Telecommunications networks to find the shortest path for data packets</li>
              <li>Transportation planning for finding optimal routes</li>
              <li>Robotics for path planning</li>
              <li>Network routing protocols (like OSPF)</li>
            </ul>
            
            <h3>Limitations</h3>
            
            <p>Dijkstra's algorithm has some limitations:</p>
            
            <ul>
              <li>It doesn't work with negative edge weights (for that, Bellman-Ford is preferred)</li>
              <li>It may be slower on very large graphs compared to other algorithms like A*</li>
              <li>It computes all paths from a single source, which may be inefficient if only a single path is needed</li>
            </ul>
            
            <h3>Algorithm Variations</h3>
            
            <p>Several variations and optimizations of Dijkstra's algorithm exist:</p>
            
            <ul>
              <li>Bidirectional Dijkstra - searches forward from the source and backward from the target to speed up finding a specific path</li>
              <li>A* search algorithm - an extension that uses heuristics to guide the search</li>
              <li>Delta-stepping - a parallel implementation for better performance on multi-core processors</li>
            </ul>
          </TheorySection>
        )}
        
        {activeTab === 'code' && (
          <CodeViewer title="Dijkstra's Algorithm Implementation (Java)" code={javaCode} />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default DijkstrasAlgorithm; 