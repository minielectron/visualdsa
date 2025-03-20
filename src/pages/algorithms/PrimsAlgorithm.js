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
  background: ${props => props.isInMST ? 'var(--primary)' : 'var(--surface)'};
  border: 2px solid ${props => props.isInMST ? 'var(--primary)' : 'var(--primary-light)'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.isInMST ? 'white' : 'var(--text-primary)'};
  font-weight: bold;
  cursor: pointer;
  z-index: 2;
`;

const Edge = styled(motion.div)`
  position: absolute;
  height: 2px;
  background: ${props => props.isInMST ? 'var(--primary)' : 'var(--text-secondary)'};
  transform-origin: left center;
  z-index: 1;
`;

const EdgeLabel = styled.div`
  position: absolute;
  background: white;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 0.8rem;
  color: var(--text-secondary);
  transform: translate(-50%, -50%);
  z-index: 3;
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

const PrimsAlgorithm = () => {
  const [nodeCount, setNodeCount] = useState(6);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [mstEdges, setMstEdges] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [message, setMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

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

  const generateRandomGraph = () => {
    const positions = generateNodePositions(nodeCount);
    setNodes(positions);

    const newEdges = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (Math.random() < 0.7) { // 70% chance of edge
          const weight = Math.floor(Math.random() * 10) + 1;
          newEdges.push({
            from: i,
            to: j,
            weight,
            isInMST: false
          });
        }
      }
    }
    setEdges(newEdges);
    setMstEdges([]);
    setCurrentStep(0);
    setMessage('');
  };

  useEffect(() => {
    generateRandomGraph();
  }, [nodeCount]);

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const findMST = async () => {
    setIsRunning(true);
    setMessage('Starting Prim\'s Algorithm...');
    await sleep(speed);

    const visited = new Set();
    const mst = [];
    const distances = new Array(nodeCount).fill(Infinity);
    const parent = new Array(nodeCount).fill(-1);
    distances[0] = 0;

    setMessage('Initializing distances and parent array...');
    await sleep(speed);

    while (visited.size < nodeCount) {
      let minDist = Infinity;
      let u = -1;

      // Find vertex with minimum distance
      for (let i = 0; i < nodeCount; i++) {
        if (!visited.has(i) && distances[i] < minDist) {
          minDist = distances[i];
          u = i;
        }
      }

      visited.add(u);
      setMessage(`Selected vertex ${u} with minimum distance ${minDist}`);
      await sleep(speed);

      if (parent[u] !== -1) {
        const edge = edges.find(e => 
          (e.from === parent[u] && e.to === u) || 
          (e.from === u && e.to === parent[u])
        );
        if (edge) {
          edge.isInMST = true;
          mst.push(edge);
          setMstEdges([...mst]);
        }
      }

      // Update distances
      for (let v = 0; v < nodeCount; v++) {
        if (!visited.has(v)) {
          const edge = edges.find(e => 
            (e.from === u && e.to === v) || 
            (e.from === v && e.to === u)
          );

          if (edge && edge.weight < distances[v]) {
            distances[v] = edge.weight;
            parent[v] = u;
            setMessage(`Updated distance to vertex ${v} to ${edge.weight}`);
            await sleep(speed);
          }
        }
      }
    }

    setMessage('Minimum Spanning Tree found!');
    setIsRunning(false);
  };

  const resetGraph = () => {
    generateRandomGraph();
    setIsRunning(false);
  };

  return (
    <Container>
      <Title>Prim's Algorithm</Title>
      <Description>
        Prim's Algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.
        It starts from an arbitrary vertex and grows the tree by adding the smallest edge that connects the current tree to a new vertex.
      </Description>

      <Controls>
        <Button onClick={findMST} disabled={isRunning}>
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

      {message && <Message>{message}</Message>}

      <GraphContainer>
        {edges.map((edge, index) => {
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          if (!fromNode || !toNode) return null;

          const dx = toNode.x - fromNode.x;
          const dy = toNode.y - fromNode.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) * 180 / Math.PI;

          return (
            <React.Fragment key={index}>
              <Edge
                initial={{ width: 0 }}
                animate={{ width: length }}
                style={{
                  left: fromNode.x,
                  top: fromNode.y,
                  transform: `rotate(${angle}deg)`,
                  isInMST: edge.isInMST
                }}
              />
              <EdgeLabel
                style={{
                  left: fromNode.x + dx / 2,
                  top: fromNode.y + dy / 2
                }}
              >
                {edge.weight}
              </EdgeLabel>
            </React.Fragment>
          );
        })}
        {nodes.map(node => (
          <Node
            key={node.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            isInMST={mstEdges.some(e => e.from === node.id || e.to === node.id)}
          >
            {node.id}
          </Node>
        ))}
      </GraphContainer>

      <CodeContainer>
        <Code>{`// Java implementation of Prim's Algorithm
public class PrimsAlgorithm {
    public static void primMST(int[][] graph) {
        int V = graph.length;
        int[] parent = new int[V];
        int[] key = new int[V];
        boolean[] mstSet = new boolean[V];

        // Initialize all keys as INFINITE
        for (int i = 0; i < V; i++) {
            key[i] = Integer.MAX_VALUE;
            mstSet[i] = false;
        }

        // Always include first vertex in MST
        key[0] = 0;
        parent[0] = -1;

        // The MST will have V vertices
        for (int count = 0; count < V - 1; count++) {
            // Pick the minimum key vertex from the set of vertices
            // not yet included in MST
            int u = minKey(key, mstSet);

            // Add the picked vertex to the MST Set
            mstSet[u] = true;

            // Update key value and parent index of the adjacent
            // vertices of the picked vertex. Consider only those
            // vertices which are not yet included in MST
            for (int v = 0; v < V; v++) {
                if (graph[u][v] != 0 && mstSet[v] == false && 
                    graph[u][v] < key[v]) {
                    parent[v] = u;
                    key[v] = graph[u][v];
                }
            }
        }

        // Print the constructed MST
        printMST(parent, graph);
    }

    private static int minKey(int[] key, boolean[] mstSet) {
        int min = Integer.MAX_VALUE;
        int minIndex = -1;

        for (int v = 0; v < key.length; v++) {
            if (mstSet[v] == false && key[v] < min) {
                min = key[v];
                minIndex = v;
            }
        }

        return minIndex;
    }

    private static void printMST(int[] parent, int[][] graph) {
        System.out.println("Edge \\tWeight");
        for (int i = 1; i < graph.length; i++) {
            System.out.println(parent[i] + " - " + i + "\\t" + graph[i][parent[i]]);
        }
    }
}`}</Code>
      </CodeContainer>
    </Container>
  );
};

export default PrimsAlgorithm; 