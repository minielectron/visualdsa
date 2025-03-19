import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

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
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GraphContainer = styled.div`
  width: 100%;
  height: 500px;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  margin: 2rem 0;
  position: relative;
  background: #f9f9f9;
  overflow: hidden;
`;

const EdgeContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const Edge = styled.path`
  stroke: ${props => props.highlight ? 'var(--primary)' : 'var(--primary-light)'};
  stroke-width: 3px;
  fill: none;
  pointer-events: all;
  cursor: pointer;
`;

const ArrowMarker = styled.marker`
  fill: var(--primary-light);
`;

const Vertex = styled(motion.div)`
  width: 40px;
  height: 40px;
  background: ${props => props.highlight ? 'var(--primary)' : props.selected ? 'var(--secondary)' : 'var(--primary-light)'};
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  position: absolute;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  user-select: none;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Instructions = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const InputLabel = styled.label`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 80px;
`;

const OperationButton = styled.button`
  background: ${props => props.variant === 'secondary' ? 'var(--secondary)' : 'var(--primary)'};
  
  &:hover {
    background: ${props => props.variant === 'secondary' ? '#02c4b0' : 'var(--primary-light)'};
  }
`;

const MessageContainer = styled(motion.div)`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  background: ${props => props.type === 'error' ? '#ffebee' : '#e8f5e9'};
  color: ${props => props.type === 'error' ? 'var(--error)' : '#2e7d32'};
  border-radius: var(--border-radius);
  text-align: center;
`;

const OperationDescription = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: var(--border-radius);
  width: 100%;
`;

const OperationTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`;

const TraversalResult = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: var(--border-radius);
  width: 100%;
  text-align: center;
`;

const TraversalNode = styled.span`
  display: inline-block;
  background: var(--primary-light);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  margin: 0 0.25rem;
  font-weight: 600;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
`;

const OptionButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  background: ${props => props.active ? 'var(--primary)' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary)' : '#e0e0e0'};
  }
`;

class Graph {
  constructor() {
    this.vertices = new Map();
    this.edges = new Map();
  }

  addVertex(id, x, y) {
    this.vertices.set(id, { id, x, y });
    this.edges.set(id, new Set());
  }

  removeVertex(id) {
    // Remove all edges connected to this vertex
    for (const [vertexId, edges] of this.edges) {
      if (edges.has(id)) {
        edges.delete(id);
        console.debug(`Removed connection from ${vertexId} to ${id}`);
      }
    }
    this.edges.delete(id);
    this.vertices.delete(id);
  }

  addEdge(from, to) {
    if (this.edges.has(from) && this.edges.has(to)) {
      this.edges.get(from).add(to);
      this.edges.get(to).add(from); // For undirected graph
    }
  }

  removeEdge(from, to) {
    if (this.edges.has(from) && this.edges.has(to)) {
      this.edges.get(from).delete(to);
      this.edges.get(to).delete(from); // For undirected graph
    }
  }

  hasEdge(from, to) {
    return this.edges.has(from) && this.edges.get(from).has(to);
  }

  getNeighbors(id) {
    return this.edges.get(id) || new Set();
  }

  bfs(startId) {
    const visited = new Set();
    const queue = [startId];
    const result = [];
    
    while (queue.length > 0) {
      const currentId = queue.shift();
      if (!visited.has(currentId)) {
        visited.add(currentId);
        result.push(currentId);
        
        const neighbors = this.getNeighbors(currentId);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
    
    return result;
  }

  dfs(startId) {
    const visited = new Set();
    const result = [];
    
    const dfsHelper = (id) => {
      if (!visited.has(id)) {
        visited.add(id);
        result.push(id);
        
        const neighbors = this.getNeighbors(id);
        for (const neighbor of neighbors) {
          dfsHelper(neighbor);
        }
      }
    };
    
    dfsHelper(startId);
    return result;
  }
}

const GraphsPage = () => {
  const [graph, setGraph] = useState(new Graph());
  const [selectedVertex, setSelectedVertex] = useState(null);
  const [message, setMessage] = useState(null);
  const [operation, setOperation] = useState(null);
  const [highlightedVertices, setHighlightedVertices] = useState([]);
  const [highlightedEdges, setHighlightedEdges] = useState([]);
  const [traversalResult, setTraversalResult] = useState(null);
  const [graphType, setGraphType] = useState('undirected'); // undirected, directed
  const [vertexInput, setVertexInput] = useState('');
  const [startVertex, setStartVertex] = useState('');

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const handleAddVertex = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newId = vertexInput || `V${graph.vertices.size + 1}`;
    
    if (graph.vertices.has(newId)) {
      showMessage(`Vertex ${newId} already exists`, 'error');
      return;
    }
    
    setOperation('addVertex');
    const newGraph = new Graph();
    graph.vertices.forEach((v, id) => {
      newGraph.addVertex(id, v.x, v.y);
      graph.edges.get(id).forEach(edge => {
        newGraph.addEdge(id, edge);
      });
    });
    
    // Add vertex at the clicked position (this will be the center of the vertex)
    newGraph.addVertex(newId, x, y);
    setGraph(newGraph);
    showMessage(`Added vertex ${newId}`);
    setVertexInput('');
  };

  const handleRemoveVertex = (vertexId) => {
    setOperation('removeVertex');
    const newGraph = new Graph();
    graph.vertices.forEach((v, id) => {
      if (id !== vertexId) {
        newGraph.addVertex(id, v.x, v.y);
        graph.edges.get(id).forEach(edge => {
          if (edge !== vertexId) {
            newGraph.addEdge(id, edge);
          }
        });
      }
    });
    setGraph(newGraph);
    showMessage(`Removed vertex ${vertexId}`);
  };

  const handleAddEdge = (fromId, toId) => {
    if (graph.hasEdge(fromId, toId)) {
      showMessage('Edge already exists', 'error');
      return;
    }
    
    setOperation('addEdge');
    const newGraph = new Graph();
    graph.vertices.forEach((v, id) => {
      newGraph.addVertex(id, v.x, v.y);
      graph.edges.get(id).forEach(edge => {
        newGraph.addEdge(id, edge);
      });
    });
    newGraph.addEdge(fromId, toId);
    setGraph(newGraph);
    showMessage(`Added edge between ${fromId} and ${toId}`);
  };

  const handleRemoveEdge = (fromId, toId) => {
    if (!graph.hasEdge(fromId, toId)) {
      showMessage('Edge does not exist', 'error');
      return;
    }
    
    setOperation('removeEdge');
    const newGraph = new Graph();
    graph.vertices.forEach((v, id) => {
      newGraph.addVertex(id, v.x, v.y);
      graph.edges.get(id).forEach(edge => {
        if (!(id === fromId && edge === toId) && !(id === toId && edge === fromId)) {
          newGraph.addEdge(id, edge);
        }
      });
    });
    setGraph(newGraph);
    showMessage(`Removed edge between ${fromId} and ${toId}`);
  };

  const handleBFS = () => {
    if (!startVertex) {
      showMessage('Please enter a start vertex', 'error');
      return;
    }
    
    if (!graph.vertices.has(startVertex)) {
      showMessage('Start vertex does not exist', 'error');
      return;
    }
    
    setOperation('bfs');
    const result = graph.bfs(startVertex);
    setTraversalResult({ type: 'BFS', values: result });
    
    // Animate the traversal
    const animateTraversal = async () => {
      for (let i = 0; i < result.length; i++) {
        setHighlightedVertices([result[i]]);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      setTimeout(() => {
        setHighlightedVertices([]);
      }, 1000);
    };
    
    animateTraversal();
  };

  const handleDFS = () => {
    if (!startVertex) {
      showMessage('Please enter a start vertex', 'error');
      return;
    }
    
    if (!graph.vertices.has(startVertex)) {
      showMessage('Start vertex does not exist', 'error');
      return;
    }
    
    setOperation('dfs');
    const result = graph.dfs(startVertex);
    setTraversalResult({ type: 'DFS', values: result });
    
    // Animate the traversal
    const animateTraversal = async () => {
      for (let i = 0; i < result.length; i++) {
        setHighlightedVertices([result[i]]);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      setTimeout(() => {
        setHighlightedVertices([]);
      }, 1000);
    };
    
    animateTraversal();
  };

  const handleClear = () => {
    setGraph(new Graph());
    setSelectedVertex(null);
    setHighlightedVertices([]);
    setHighlightedEdges([]);
    setTraversalResult(null);
    showMessage('Graph cleared');
  };

  const getOperationDescription = () => {
    switch (operation) {
      case 'addVertex':
        return {
          title: 'Add Vertex Operation',
          description: 'Time Complexity: O(1). Adding a vertex to the graph is a constant time operation.',
        };
      case 'removeVertex':
        return {
          title: 'Remove Vertex Operation',
          description: 'Time Complexity: O(V + E). Removing a vertex requires removing all its edges and updating the adjacency lists.',
        };
      case 'addEdge':
        return {
          title: 'Add Edge Operation',
          description: 'Time Complexity: O(1). Adding an edge to the graph is a constant time operation.',
        };
      case 'removeEdge':
        return {
          title: 'Remove Edge Operation',
          description: 'Time Complexity: O(1). Removing an edge from the graph is a constant time operation.',
        };
      case 'bfs':
        return {
          title: 'Breadth-First Search',
          description: 'Time Complexity: O(V + E). BFS visits all vertices and edges in the graph exactly once.',
        };
      case 'dfs':
        return {
          title: 'Depth-First Search',
          description: 'Time Complexity: O(V + E). DFS visits all vertices and edges in the graph exactly once.',
        };
      default:
        return null;
    }
  };

  const operationInfo = getOperationDescription();

  return (
    <PageContainer>
      <Header>
        <Title>Graphs</Title>
        <Description>
          A graph is a non-linear data structure consisting of vertices (nodes) and edges that connect these vertices. Graphs can be directed or undirected.
        </Description>
      </Header>
      
      <VisualizationContainer>
        <OptionsContainer>
          <OptionButton 
            active={graphType === 'undirected'} 
            onClick={() => setGraphType('undirected')}
          >
            Undirected Graph
          </OptionButton>
          <OptionButton 
            active={graphType === 'directed'} 
            onClick={() => setGraphType('directed')}
          >
            Directed Graph
          </OptionButton>
        </OptionsContainer>
        
        <Instructions>
          <strong>How to use:</strong>
          <ul>
            <li>Click on the canvas to add a vertex</li>
            <li>Click a vertex once to select it, then click another vertex to create an edge between them</li>
            <li>Right-click on a vertex to delete it</li>
            <li>Right-click on an edge to delete it</li>
          </ul>
          <p><strong>Vertex ID:</strong> Each node in the graph needs a unique identifier. You can provide a custom ID in the input field before adding a vertex, or leave it blank to get an automatically generated ID (e.g., V1, V2, etc.).</p>
        </Instructions>
        
        <ControlsContainer>
          <InputGroup>
            <InputLabel>Vertex ID:</InputLabel>
            <Input 
              type="text" 
              value={vertexInput} 
              onChange={e => setVertexInput(e.target.value)} 
              placeholder="Vertex ID" 
            />
          </InputGroup>
          <InputGroup>
            <InputLabel>Start Vertex:</InputLabel>
            <Input 
              type="text" 
              value={startVertex} 
              onChange={e => setStartVertex(e.target.value)} 
              placeholder="Start Vertex" 
            />
          </InputGroup>
          <OperationButton onClick={handleBFS}>BFS</OperationButton>
          <OperationButton onClick={handleDFS}>DFS</OperationButton>
          <OperationButton onClick={handleClear} variant="secondary">Clear Graph</OperationButton>
        </ControlsContainer>
        
        <AnimatePresence>
          {message && (
            <MessageContainer 
              type={message.type}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {message.text}
            </MessageContainer>
          )}
        </AnimatePresence>
        
        {traversalResult && (
          <TraversalResult>
            <strong>{traversalResult.type} Traversal:</strong>
            <div style={{ marginTop: '0.5rem' }}>
              {traversalResult.values.map((value, index) => (
                <TraversalNode key={index}>{value}</TraversalNode>
              ))}
            </div>
          </TraversalResult>
        )}
        
        <GraphContainer onClick={handleAddVertex}>
          <EdgeContainer>
            <defs>
              <ArrowMarker 
                id="arrowhead" 
                markerWidth="10" 
                markerHeight="7" 
                refX="9" 
                refY="3.5" 
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" />
              </ArrowMarker>
            </defs>
            
            {/* Render edges */}
            {Array.from(graph.vertices.entries()).flatMap(([fromId, from]) => {
              const edges = graph.edges.get(fromId);
              if (!edges) return [];
              
              return Array.from(edges).map(toId => {
                // For undirected graphs, only render each edge once
                if (graphType === 'undirected' && fromId > toId) return null;
                
                const to = graph.vertices.get(toId);
                if (!to) return null;
                
                const isHighlighted = highlightedEdges.includes(`${fromId}-${toId}`);
                
                // Create an SVG path for the edge
                const pathData = `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
                
                return (
                  <Edge
                    key={`${fromId}-${toId}`}
                    d={pathData}
                    highlight={isHighlighted}
                    markerEnd={graphType === 'directed' ? 'url(#arrowhead)' : ''}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleRemoveEdge(fromId, toId);
                    }}
                  />
                );
              }).filter(Boolean);
            })}
          </EdgeContainer>
          
          {/* Render vertices */}
          {Array.from(graph.vertices.values()).map(vertex => (
            <Vertex
              key={vertex.id}
              highlight={highlightedVertices.includes(vertex.id)}
              selected={selectedVertex === vertex.id}
              style={{
                left: `${vertex.x - 20}px`,
                top: `${vertex.y - 20}px`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                if (selectedVertex) {
                  if (selectedVertex !== vertex.id) {
                    handleAddEdge(selectedVertex, vertex.id);
                  }
                  setSelectedVertex(null);
                } else {
                  setSelectedVertex(vertex.id);
                }
              }}
              onContextMenu={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleRemoveVertex(vertex.id);
              }}
            >
              {vertex.id}
            </Vertex>
          ))}
        </GraphContainer>
        
        {operationInfo && (
          <OperationDescription>
            <OperationTitle>{operationInfo.title}</OperationTitle>
            <p>{operationInfo.description}</p>
          </OperationDescription>
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default GraphsPage; 