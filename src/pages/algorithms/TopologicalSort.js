import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--primary-light);
  }

  &:disabled {
    background: var(--text-secondary);
    cursor: not-allowed;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Slider = styled.input`
  width: 150px;
`;

const GraphContainer = styled.div`
  width: 100%;
  height: 500px;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 2rem;
`;

const Node = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  background: ${props => {
    if (props.isVisited) return 'var(--primary)';
    if (props.isActive) return 'var(--secondary)';
    return 'var(--surface)';
  }};
  border: 2px solid ${props => {
    if (props.isVisited) return 'var(--primary)';
    if (props.isActive) return 'var(--secondary)';
    return 'var(--primary-light)';
  }};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.isVisited || props.isActive) ? 'white' : 'var(--text-primary)'};
  font-weight: bold;
  cursor: pointer;
  z-index: 2;
`;

const Edge = styled.div`
  position: absolute;
  height: 2px;
  background: ${props => props.isActive ? 'var(--secondary)' : props.isVisited ? 'var(--primary)' : 'var(--text-secondary)'};
  transform-origin: left center;
  z-index: 1;
  
  &:after {
    content: '';
    position: absolute;
    right: -5px;
    top: -4px;
    width: 0;
    height: 0;
    border-left: 10px solid ${props => props.isActive ? 'var(--secondary)' : props.isVisited ? 'var(--primary)' : 'var(--text-secondary)'};
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
`;

const Message = styled.div`
  background: var(--surface);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const CodeContainer = styled.div`
  background: var(--surface);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-top: 2rem;
  overflow-x: auto;
`;

const Code = styled.pre`
  margin: 0;
  color: var(--text-primary);
  font-family: 'Fira Code', monospace;
`;

const SortResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SortResult = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.5rem;
`;

const NodeItem = styled.div`
  width: 40px;
  height: 40px;
  background: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-right: 1rem;
  position: relative;
  
  &:not(:last-child):after {
    content: '→';
    position: absolute;
    right: -1.2rem;
    color: var(--text-primary);
    font-size: 1.2rem;
  }
`;

const TopologicalSort = () => {
  const [nodeCount, setNodeCount] = useState(6);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [message, setMessage] = useState('');
  const [sortedOrder, setSortedOrder] = useState([]);
  const [activeNode, setActiveNode] = useState(null);
  const [visitedNodes, setVisitedNodes] = useState(new Set());
  const [activeEdge, setActiveEdge] = useState(null);
  const [visitedEdges, setVisitedEdges] = useState(new Set());

  const generateNodePositions = (count) => {
    const positions = [];
    const radius = 200;
    const centerX = 300;
    const centerY = 250;

    for (let i = 0; i < count; i++) {
      const angle = (2 * Math.PI * i) / count;
      positions.push({
        id: i,
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
      });
    }

    return positions;
  };

  const generateRandomDAG = () => {
    const positions = generateNodePositions(nodeCount);
    setNodes(positions);

    // Generate a Directed Acyclic Graph (DAG)
    const newEdges = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = 0; j < nodeCount; j++) {
        // Only create edges from lower-indexed nodes to higher-indexed nodes
        // This ensures we have a DAG (no cycles)
        if (i < j && Math.random() < 0.5) {
          newEdges.push({
            from: i,
            to: j,
            id: `${i}-${j}`
          });
        }
      }
    }
    setEdges(newEdges);
    setSortedOrder([]);
    setActiveNode(null);
    setVisitedNodes(new Set());
    setActiveEdge(null);
    setVisitedEdges(new Set());
    setMessage('');
  };

  useEffect(() => {
    generateRandomDAG();
  }, [nodeCount]);

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const topologicalSort = async () => {
    setIsRunning(true);
    setMessage('Starting topological sort...');
    setSortedOrder([]);
    setActiveNode(null);
    setVisitedNodes(new Set());
    setActiveEdge(null);
    setVisitedEdges(new Set());
    await sleep(speed);

    // Create adjacency list from edges
    const adjacencyList = {};
    for (let i = 0; i < nodeCount; i++) {
      adjacencyList[i] = [];
    }
    
    for (const edge of edges) {
      adjacencyList[edge.from].push(edge.to);
    }

    setMessage('Created adjacency list representation of the graph.');
    await sleep(speed);

    const visited = new Set();
    const temp = new Set(); // For detecting cycles (not needed for a known DAG)
    const order = [];
    
    const dfs = async (node) => {
      if (temp.has(node)) {
        // Cycle detected, though our generation ensures this won't happen
        setMessage(`Cycle detected! This shouldn't happen with our generated DAG.`);
        return false;
      }
      
      if (visited.has(node)) return true;
      
      temp.add(node);
      setActiveNode(node);
      setMessage(`Visiting node ${node}`);
      await sleep(speed);
      
      // Process all neighbors
      for (const neighbor of adjacencyList[node]) {
        const edgeId = `${node}-${neighbor}`;
        setActiveEdge(edgeId);
        setMessage(`Checking edge from ${node} to ${neighbor}`);
        await sleep(speed);
        
        await dfs(neighbor);
        
        setVisitedEdges(prev => new Set([...prev, edgeId]));
      }
      
      // Done with this node
      temp.delete(node);
      visited.add(node);
      setVisitedNodes(prev => new Set([...prev, node]));
      setActiveNode(null);
      
      order.unshift(node); // Add to the beginning for topological order
      setSortedOrder([...order]);
      setMessage(`Added node ${node} to topological order`);
      await sleep(speed);
      
      return true;
    };
    
    // Start DFS from each unvisited node
    for (let i = 0; i < nodeCount; i++) {
      if (!visited.has(i)) {
        setMessage(`Starting DFS from node ${i}`);
        await sleep(speed);
        await dfs(i);
      }
    }
    
    setMessage('Topological sorting completed!');
    setIsRunning(false);
  };

  const resetGraph = () => {
    generateRandomDAG();
    setIsRunning(false);
  };

  return (
    <Container>
      <Title>Topological Sort</Title>
      <Description>
        Topological Sort is an algorithm for ordering the vertices of a directed acyclic graph (DAG) such that for every directed edge (u,v), 
        vertex u comes before vertex v in the ordering. Topological sorting is used in scheduling tasks, build systems, and dependency resolution.
      </Description>

      <Controls>
        <Button onClick={topologicalSort} disabled={isRunning}>
          Start Algorithm
        </Button>
        <Button onClick={resetGraph} disabled={isRunning}>
          Reset Graph
        </Button>
        <SliderContainer>
          <label>Nodes: {nodeCount}</label>
          <Slider
            type="range"
            min="4"
            max="8"
            value={nodeCount}
            onChange={(e) => setNodeCount(parseInt(e.target.value))}
            disabled={isRunning}
          />
        </SliderContainer>
        <SliderContainer>
          <label>Speed: {speed}ms</label>
          <Slider
            type="range"
            min="100"
            max="2000"
            step="100"
            value={speed}
            onChange={(e) => setSpeed(parseInt(e.target.value))}
            disabled={isRunning}
          />
        </SliderContainer>
      </Controls>

      {sortedOrder.length > 0 && (
        <SortResultContainer>
          <h3>Topological Order:</h3>
          <SortResult>
            {sortedOrder.map((node, index) => (
              <NodeItem key={index}>{node}</NodeItem>
            ))}
          </SortResult>
        </SortResultContainer>
      )}

      {message && <Message>{message}</Message>}

      <GraphContainer>
        {edges.map((edge) => {
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          if (!fromNode || !toNode) return null;

          const dx = toNode.x - fromNode.x;
          const dy = toNode.y - fromNode.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) * 180 / Math.PI;
          
          const isActive = edge.id === activeEdge;
          const isVisited = visitedEdges.has(edge.id);

          return (
            <Edge
              key={edge.id}
              style={{
                left: fromNode.x,
                top: fromNode.y,
                width: length,
                transform: `rotate(${angle}deg)`,
              }}
              isActive={isActive}
              isVisited={isVisited}
            />
          );
        })}
        {nodes.map(node => (
          <Node
            key={node.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{
              left: node.x - 20,
              top: node.y - 20,
            }}
            isActive={node.id === activeNode}
            isVisited={visitedNodes.has(node.id)}
          >
            {node.id}
          </Node>
        ))}
      </GraphContainer>

      <CodeContainer>
        <Code>{`// Java implementation of Topological Sort
public class TopologicalSort {
    private int V;
    private List<List<Integer>> adj;
    
    TopologicalSort(int v) {
        V = v;
        adj = new ArrayList<>(v);
        for (int i = 0; i < v; ++i)
            adj.add(new ArrayList<>());
    }
    
    // Add an edge to the graph
    void addEdge(int v, int w) { 
        adj.get(v).add(w); 
    }
    
    // A recursive function used by topologicalSort
    void topologicalSortUtil(int v, boolean[] visited, 
                             boolean[] recStack,
                             Stack<Integer> stack) {
        // Mark the current node as visited
        visited[v] = true;
        recStack[v] = true;
        
        // Recur for all adjacent vertices
        for (Integer neighbor : adj.get(v)) {
            if (!visited[neighbor])
                topologicalSortUtil(neighbor, visited, recStack, stack);
            else if (recStack[neighbor]) {
                System.out.println("Cycle detected!");
                return;
            }
        }
        
        // Push current vertex to stack which stores result
        recStack[v] = false;
        stack.push(v);
    }
    
    // The function to do Topological Sort
    void topologicalSort() {
        Stack<Integer> stack = new Stack<>();
        
        // Mark all the vertices as not visited
        boolean[] visited = new boolean[V];
        boolean[] recStack = new boolean[V];
        
        // Call the recursive helper function to store
        // Topological Sort starting from all vertices
        // one by one
        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                topologicalSortUtil(i, visited, recStack, stack);
            }
        }
        
        // Print contents of stack
        System.out.print("Topological Sort: ");
        while (!stack.empty()) {
            System.out.print(stack.pop() + " ");
        }
    }
}`}</Code>
      </CodeContainer>
    </Container>
  );
};

export default TopologicalSort; 