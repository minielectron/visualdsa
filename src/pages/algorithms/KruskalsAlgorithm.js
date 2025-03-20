import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
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
  width: 100%;
  height: 500px;
  margin: 2rem 0;
  border: 1px solid #eee;
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
`;

const Node = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const Edge = styled.div`
  position: absolute;
  height: ${props => props.thickness || 3}px;
  background-color: ${props => props.color || '#999'};
  transform-origin: left center;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EdgeLabel = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 10px;
  padding: 2px 6px;
  font-size: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const ControlsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--border-radius);
  background: ${props => props.primary ? 'var(--primary)' : 'var(--surface-2)'};
  color: ${props => props.primary ? 'white' : 'var(--text-primary)'};
  cursor: pointer;
  font-weight: 500;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    background: ${props => props.primary ? 'var(--primary-dark)' : 'var(--surface-3)'};
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Slider = styled.input`
  width: 200px;
`;

const MessageContainer = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  background: var(--surface-2);
  border-radius: var(--border-radius);
  color: var(--text-primary);
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TabButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--border-radius);
  background: ${props => props.active ? 'var(--primary)' : 'var(--surface-2)'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary-dark)' : 'var(--surface-3)'};
  }
`;

const ComplexityContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: var(--surface-2);
  border-radius: var(--border-radius);
`;

const ComplexityTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const ComplexityTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const Th = styled.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 2px solid var(--surface-3);
`;

const Td = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid var(--surface-3);
`;

const KruskalsAlgorithm = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [nodeCount, setNodeCount] = useState(6);
  const [speed, setSpeed] = useState(1000);
  const [message, setMessage] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [mstEdges, setMstEdges] = useState([]);
  const [activeTab, setActiveTab] = useState('visualization');
  
  const graphRef = useRef(null);

  // DisjointSet data structure for Kruskal's Algorithm
  class DisjointSet {
    constructor(size) {
      this.parent = Array.from({ length: size }, (_, i) => i);
      this.rank = Array(size).fill(0);
    }

    find(x) {
      if (this.parent[x] !== x) {
        this.parent[x] = this.find(this.parent[x]); // Path compression
      }
      return this.parent[x];
    }

    union(x, y) {
      const rootX = this.find(x);
      const rootY = this.find(y);

      if (rootX === rootY) return false;

      if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
      return true;
    }
  }

  // Generate positions around a circle for nodes
  const generateNodePositions = (count) => {
    const positions = [];
    const radius = Math.min(graphRef.current ? graphRef.current.offsetWidth : 400, 
                           graphRef.current ? graphRef.current.offsetHeight : 300) * 0.35;
    const centerX = graphRef.current ? graphRef.current.offsetWidth / 2 : 400;
    const centerY = graphRef.current ? graphRef.current.offsetHeight / 2 : 300;
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * 2 * Math.PI;
      positions.push({
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
      });
    }
    
    return positions;
  };

  const generateRandomGraph = useCallback(() => {
    if (!graphRef.current) return;
    
    const positions = generateNodePositions(nodeCount);
    
    const newNodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      label: `${i}`,
      x: positions[i].x,
      y: positions[i].y
    }));

    const newEdges = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (Math.random() < 0.4) { // 40% chance of edge creation
          const weight = Math.floor(Math.random() * 20) + 1;
          newEdges.push({
            source: i,
            target: j,
            weight,
            id: `${i}-${j}`
          });
        }
      }
    }

    setNodes(newNodes);
    setEdges(newEdges);
    setMstEdges([]);
    setCurrentStep(0);
    setMessage('Graph generated. Click "Start Algorithm" to find the Minimum Spanning Tree.');
  }, [nodeCount]);

  useEffect(() => {
    // Generate graph once the container is mounted
    if (graphRef.current) {
      generateRandomGraph();
    }
  }, [generateRandomGraph, graphRef]);

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const runKruskalsAlgorithm = async () => {
    setIsRunning(true);
    setMstEdges([]);
    setCurrentStep(0);

    const sortedEdges = [...edges].sort((a, b) => a.weight - b.weight);
    const ds = new DisjointSet(nodeCount);
    const mst = [];

    for (let i = 0; i < sortedEdges.length; i++) {
      const edge = sortedEdges[i];
      const sourceNode = edge.source;
      const targetNode = edge.target;

      setMessage(`Considering edge ${sourceNode} - ${targetNode} with weight ${edge.weight}`);
      await sleep(speed);

      if (ds.union(sourceNode, targetNode)) {
        mst.push(edge);
        setMstEdges([...mst]);
        setMessage(`Added edge ${sourceNode} - ${targetNode} to MST`);
        await sleep(speed);
      } else {
        setMessage(`Skipped edge ${sourceNode} - ${targetNode} to avoid cycle`);
        await sleep(speed);
      }

      setCurrentStep(i + 1);
    }

    setMessage('Kruskal\'s Algorithm completed! The minimum spanning tree is highlighted in green.');
    setIsRunning(false);
  };

  // Calculate edge position and rotation
  const calculateEdgeStyle = (source, target) => {
    const sourceNode = nodes.find(n => n.id === source);
    const targetNode = nodes.find(n => n.id === target);
    
    if (!sourceNode || !targetNode) return {};
    
    const dx = targetNode.x - sourceNode.x;
    const dy = targetNode.y - sourceNode.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    
    return {
      left: `${sourceNode.x}px`,
      top: `${sourceNode.y}px`,
      width: `${length}px`,
      transform: `rotate(${angle}deg)`
    };
  };

  const javaCode = `
public class KruskalsAlgorithm {
    class Edge implements Comparable<Edge> {
        int src, dest, weight;
        
        public Edge(int src, int dest, int weight) {
            this.src = src;
            this.dest = dest;
            this.weight = weight;
        }
        
        @Override
        public int compareTo(Edge other) {
            return this.weight - other.weight;
        }
    }
    
    class DisjointSet {
        int[] parent, rank;
        
        public DisjointSet(int n) {
            parent = new int[n];
            rank = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = i;
            }
        }
        
        int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]); // Path compression
            }
            return parent[x];
        }
        
        boolean union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);
            
            if (rootX == rootY) return false;
            
            if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
            return true;
        }
    }
    
    public List<Edge> findMST(int V, List<Edge> edges) {
        // Sort edges by weight
        Collections.sort(edges);
        
        DisjointSet ds = new DisjointSet(V);
        List<Edge> mst = new ArrayList<>();
        
        for (Edge edge : edges) {
            if (ds.union(edge.src, edge.dest)) {
                mst.add(edge);
            }
            
            if (mst.size() == V - 1) break;
        }
        
        return mst;
    }
}`;

  return (
    <PageContainer>
      <Header>
        <Title>Kruskal's Algorithm</Title>
        <Description>
          Kruskal's Algorithm is a minimum spanning tree algorithm that finds an edge of the least possible weight
          that connects any two trees in the forest. It is a greedy algorithm that builds the spanning tree by adding
          edges one by one into a growing spanning tree.
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
              <SliderContainer>
                <span>Nodes: {nodeCount}</span>
                <Slider
                  type="range"
                  min="4"
                  max="10"
                  value={nodeCount}
                  onChange={(e) => setNodeCount(parseInt(e.target.value))}
                  disabled={isRunning}
                />
              </SliderContainer>

              <SliderContainer>
                <span>Speed: {speed}ms</span>
                <Slider
                  type="range"
                  min="200"
                  max="2000"
                  step="200"
                  value={speed}
                  onChange={(e) => setSpeed(parseInt(e.target.value))}
                  disabled={isRunning}
                />
              </SliderContainer>

              <Button onClick={generateRandomGraph} disabled={isRunning}>
                Generate New Graph
              </Button>

              <Button primary onClick={runKruskalsAlgorithm} disabled={isRunning}>
                {isRunning ? 'Running...' : 'Start Algorithm'}
              </Button>
            </ControlsContainer>

            <MessageContainer>
              {message}
            </MessageContainer>

            <GraphContainer ref={graphRef}>
              {nodes.map((node) => (
                <Node
                  key={`node-${node.id}`}
                  style={{ left: node.x, top: node.y }}
                >
                  {node.label}
                </Node>
              ))}
              
              {edges.map((edge) => {
                const inMST = mstEdges.some(e => e.id === edge.id);
                const edgeStyle = calculateEdgeStyle(edge.source, edge.target);
                
                return (
                  <React.Fragment key={`edge-${edge.id}`}>
                    <Edge
                      style={edgeStyle}
                      color={inMST ? '#4caf50' : '#999'}
                      thickness={inMST ? 5 : 3}
                    />
                    <EdgeLabel
                      style={{
                        left: `${(nodes[edge.source].x + nodes[edge.target].x) / 2}px`,
                        top: `${(nodes[edge.source].y + nodes[edge.target].y) / 2}px`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {edge.weight}
                    </EdgeLabel>
                  </React.Fragment>
                );
              })}
            </GraphContainer>

            <ComplexityContainer>
              <ComplexityTitle>Algorithm Complexity</ComplexityTitle>
              <p>
                Kruskal's Algorithm efficiently finds a minimum spanning tree in a connected weighted graph.
                It uses a Disjoint Set data structure for cycle detection.
              </p>
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
                      <div>O(E log E)</div>
                      <div>where E is the number of edges</div>
                    </Td>
                    <Td>O(V)</Td>
                  </tr>
                </tbody>
              </ComplexityTable>
            </ComplexityContainer>
          </>
        ) : (
          <CodeViewer title="Kruskal's Algorithm Implementation (Java)" code={javaCode} />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default KruskalsAlgorithm; 