import React, { useState, useEffect, useCallback } from 'react';
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
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TreeContainer = styled.div`
  width: 100%;
  min-height: 500px;
  margin: 2rem 0;
  position: relative;
  overflow-x: auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TreeLevel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
  width: 100%;
`;

const TreeNode = styled(motion.div)`
  width: 50px;
  height: 50px;
  background: ${props => props.highlight ? 'var(--primary)' : 'var(--primary-light)'};
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin: 0 1rem;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const EdgeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Edge = styled.div`
  position: absolute;
  background-color: var(--primary-light);
  height: 3px;
  transform-origin: top left;
  z-index: 1;
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

const GraphContainer = styled.div`
  width: 100%;
  min-height: 500px;
  margin: 2rem 0;
  position: relative;
  overflow-x: auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class TreeNodeClass {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const TreesPage = () => {
  const [root, setRoot] = useState(null);
  const [flattenedTree, setFlattenedTree] = useState([]);
  const [edges, setEdges] = useState([]);
  const [value, setValue] = useState('');
  const [message, setMessage] = useState(null);
  const [operation, setOperation] = useState(null);
  const [highlightPath, setHighlightPath] = useState([]);
  const [traversalResult, setTraversalResult] = useState(null);
  const [treeType, setTreeType] = useState('bst'); // bst, avl, heap
  const [viewMode, setViewMode] = useState('tree'); // tree, graph
  const [selectedNode, setSelectedNode] = useState(null);
  const [customEdges, setCustomEdges] = useState([]);

  // Define flattenTree with useCallback before it's used
  const flattenTree = useCallback((node, level = 0, position = 0, result = { nodes: [], connections: [] }) => {
    if (!node) return result;
    
    // Add node to the correct level
    if (!result.nodes[level]) {
      result.nodes[level] = [];
    }
    
    // Calculate horizontal spacing based on level
    const spacing = Math.max(150, 300 / (level + 1));
    
    // Calculate node position for balanced appearance
    const currentNode = {
      value: node.value,
      level,
      position,
      x: position * spacing,
    };
    
    result.nodes[level].push(currentNode);
    
    // Process left child
    if (node.left) {
      // Add connection to left child
      result.connections.push({
        from: { level, position, value: node.value },
        to: { level: level + 1, position: position * 2, value: node.left.value },
        direction: 'left'
      });
      
      flattenTree(node.left, level + 1, position * 2, result);
    }
    
    // Process right child
    if (node.right) {
      // Add connection to right child
      result.connections.push({
        from: { level, position, value: node.value },
        to: { level: level + 1, position: position * 2 + 1, value: node.right.value },
        direction: 'right'
      });
      
      flattenTree(node.right, level + 1, position * 2 + 1, result);
    }
    
    return result;
  }, []);

  // Initialize a sample tree when the component mounts
  useEffect(() => {
    const initialTree = new TreeNodeClass(50);
    initialTree.left = new TreeNodeClass(30);
    initialTree.right = new TreeNodeClass(70);
    initialTree.left.left = new TreeNodeClass(20);
    initialTree.left.right = new TreeNodeClass(40);
    initialTree.right.left = new TreeNodeClass(60);
    initialTree.right.right = new TreeNodeClass(80);
    
    setRoot(initialTree);
  }, []);

  // Update the flattened tree representation whenever the root changes
  useEffect(() => {
    if (root) {
      const { nodes, connections } = flattenTree(root);
      setFlattenedTree(nodes);
      setEdges(connections);
    }
  }, [root, flattenTree]);

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const insertNode = (value, node = root) => {
    if (node === null) {
      return new TreeNodeClass(value);
    }
    
    if (value < node.value) {
      node.left = insertNode(value, node.left);
    } else if (value > node.value) {
      node.right = insertNode(value, node.right);
    }
    
    return node;
  };

  const deleteNode = (value, node = root) => {
    if (node === null) return null;
    
    if (value < node.value) {
      node.left = deleteNode(value, node.left);
    } else if (value > node.value) {
      node.right = deleteNode(value, node.right);
    } else {
      // Node with only one child or no child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      
      // Node with two children: Get the inorder successor (smallest in the right subtree)
      node.value = findMinValue(node.right);
      
      // Delete the inorder successor
      node.right = deleteNode(node.value, node.right);
    }
    
    return node;
  };

  const findMinValue = (node) => {
    let minValue = node.value;
    while (node.left !== null) {
      minValue = node.left.value;
      node = node.left;
    }
    return minValue;
  };

  const searchNode = (value, node = root, path = []) => {
    if (node === null) return { found: false, path };
    
    const currentPath = [...path, node.value];
    
    if (value === node.value) {
      return { found: true, path: currentPath };
    }
    
    if (value < node.value) {
      return searchNode(value, node.left, currentPath);
    } else {
      return searchNode(value, node.right, currentPath);
    }
  };

  const handleInsert = () => {
    if (value === '') {
      showMessage('Please enter a value', 'error');
      return;
    }
    
    const numValue = parseInt(value);
    
    if (isNaN(numValue)) {
      showMessage('Value must be a number', 'error');
      return;
    }
    
    setOperation('insert');
    
    // Check if the value already exists
    const { found, path } = searchNode(numValue);
    
    if (found) {
      showMessage('Value already exists in the tree', 'error');
      return;
    }
    
    // Animate the insertion path
    const animateInsertion = async () => {
      for (let i = 0; i < path.length; i++) {
        setHighlightPath([path[i]]);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      // Create a new tree with the inserted node
      const newRoot = root ? { ...root } : null;
      const updatedRoot = insertNode(numValue, newRoot);
      setRoot(updatedRoot);
      showMessage(`Inserted ${numValue} into the tree`);
      
      setTimeout(() => {
        setHighlightPath([]);
      }, 1000);
    };
    
    animateInsertion();
  };

  const handleDelete = () => {
    if (value === '') {
      showMessage('Please enter a value', 'error');
      return;
    }
    
    const numValue = parseInt(value);
    
    if (isNaN(numValue)) {
      showMessage('Value must be a number', 'error');
      return;
    }
    
    setOperation('delete');
    
    // Check if the value exists
    const { found, path } = searchNode(numValue);
    
    if (!found) {
      showMessage('Value not found in the tree', 'error');
      return;
    }
    
    // Animate the deletion path
    const animateDeletion = async () => {
      for (let i = 0; i < path.length; i++) {
        setHighlightPath([path[i]]);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      // Create a new tree with the node deleted
      const newRoot = root ? { ...root } : null;
      const updatedRoot = deleteNode(numValue, newRoot);
      setRoot(updatedRoot);
      showMessage(`Deleted ${numValue} from the tree`);
      
      setTimeout(() => {
        setHighlightPath([]);
      }, 1000);
    };
    
    animateDeletion();
  };

  const handleSearch = () => {
    if (value === '') {
      showMessage('Please enter a value', 'error');
      return;
    }
    
    const numValue = parseInt(value);
    
    if (isNaN(numValue)) {
      showMessage('Value must be a number', 'error');
      return;
    }
    
    setOperation('search');
    
    // Perform the search
    const { found, path } = searchNode(numValue);
    
    // Animate the search path
    const animateSearch = async () => {
      for (let i = 0; i < path.length; i++) {
        setHighlightPath([path[i]]);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      if (found) {
        showMessage(`Found ${numValue} in the tree`);
      } else {
        showMessage(`Value ${numValue} not found in the tree`, 'error');
      }
      
      setTimeout(() => {
        setHighlightPath([]);
      }, 1000);
    };
    
    animateSearch();
  };

  const inOrderTraversal = (node = root, result = []) => {
    if (node !== null) {
      inOrderTraversal(node.left, result);
      result.push(node.value);
      inOrderTraversal(node.right, result);
    }
    return result;
  };

  const preOrderTraversal = (node = root, result = []) => {
    if (node !== null) {
      result.push(node.value);
      preOrderTraversal(node.left, result);
      preOrderTraversal(node.right, result);
    }
    return result;
  };

  const postOrderTraversal = (node = root, result = []) => {
    if (node !== null) {
      postOrderTraversal(node.left, result);
      postOrderTraversal(node.right, result);
      result.push(node.value);
    }
    return result;
  };

  const handleInOrder = () => {
    setOperation('traversal');
    const result = inOrderTraversal();
    setTraversalResult({ type: 'In-Order', values: result });
  };

  const handlePreOrder = () => {
    setOperation('traversal');
    const result = preOrderTraversal();
    setTraversalResult({ type: 'Pre-Order', values: result });
  };

  const handlePostOrder = () => {
    setOperation('traversal');
    const result = postOrderTraversal();
    setTraversalResult({ type: 'Post-Order', values: result });
  };

  const handleClearTree = () => {
    setRoot(null);
    setFlattenedTree([]);
    setEdges([]);
    setHighlightPath([]);
    setTraversalResult(null);
    showMessage('Tree cleared');
  };

  const getOperationDescription = () => {
    switch (operation) {
      case 'insert':
        return {
          title: 'Insert Operation',
          description: treeType === 'bst' 
            ? 'Time Complexity: O(log n) average case, O(n) worst case. The insert operation adds a new node to the binary search tree, maintaining the BST property.' 
            : treeType === 'avl'
              ? 'Time Complexity: O(log n). In an AVL tree, insertion includes rebalancing, which ensures the tree remains balanced.'
              : 'Time Complexity: O(log n). In a heap, insertion requires maintaining the heap property by "bubbling up" the new element.',
        };
      case 'delete':
        return {
          title: 'Delete Operation',
          description: treeType === 'bst' 
            ? 'Time Complexity: O(log n) average case, O(n) worst case. The delete operation removes a node while maintaining the BST property.' 
            : treeType === 'avl'
              ? 'Time Complexity: O(log n). In an AVL tree, deletion includes rebalancing, which ensures the tree remains balanced.'
              : 'Time Complexity: O(log n). In a heap, deletion requires maintaining the heap property by "bubbling down" the replacement element.',
        };
      case 'search':
        return {
          title: 'Search Operation',
          description: treeType === 'bst' || treeType === 'avl'
            ? 'Time Complexity: O(log n) average case, O(n) worst case for BST; O(log n) for AVL. The search operation finds a node with a given value.' 
            : 'Time Complexity: O(n). In a heap, searching for an arbitrary element requires checking all nodes.',
        };
      case 'traversal':
        return {
          title: 'Traversal Operation',
          description: 'Time Complexity: O(n). Tree traversal visits all nodes in a specific order. In-order: left-root-right, Pre-order: root-left-right, Post-order: left-right-root.',
        };
      default:
        return null;
    }
  };

  const operationInfo = getOperationDescription();

  // Function to convert tree to graph structure
  const convertTreeToGraph = useCallback((treeRoot) => {
    if (!treeRoot) return { nodes: [], edges: [] };
    
    const nodes = [];
    const graphEdges = [];
    
    // BFS to visit all nodes
    const queue = [{ node: treeRoot, id: 0 }];
    let counter = 0;
    
    while (queue.length > 0) {
      const { node, id } = queue.shift();
      
      // Random position for graph view
      const angle = Math.random() * Math.PI * 2;
      const distance = 120 + Math.random() * 80;
      const x = 400 + Math.cos(angle) * distance;
      const y = 250 + Math.sin(angle) * distance;
      
      nodes.push({
        id,
        value: node.value,
        x,
        y
      });
      
      if (node.left) {
        counter++;
        queue.push({ node: node.left, id: counter });
        graphEdges.push({ from: id, to: counter });
      }
      
      if (node.right) {
        counter++;
        queue.push({ node: node.right, id: counter });
        graphEdges.push({ from: id, to: counter });
      }
    }
    
    return { nodes, edges: graphEdges };
  }, []);
  
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] });
  
  // Update graph data whenever root changes
  useEffect(() => {
    if (root && viewMode === 'graph') {
      setGraphData(convertTreeToGraph(root));
    }
  }, [root, viewMode, convertTreeToGraph]);

  // Function to add a custom edge
  const handleAddCustomEdge = (fromId, toId) => {
    const newEdge = { from: fromId, to: toId };
    
    // Check if edge already exists
    const edgeExists = customEdges.some(
      edge => (edge.from === fromId && edge.to === toId) || 
              (edge.from === toId && edge.to === fromId)
    );
    
    if (!edgeExists) {
      setCustomEdges([...customEdges, newEdge]);
      showMessage(`Added custom edge from ${fromId} to ${toId}`);
    } else {
      showMessage('Edge already exists', 'error');
    }
    
    setSelectedNode(null);
  };

  // Function to remove a custom edge
  const handleRemoveCustomEdge = (fromId, toId) => {
    setCustomEdges(
      customEdges.filter(
        edge => !(edge.from === fromId && edge.to === toId) && 
               !(edge.from === toId && edge.to === fromId)
      )
    );
    showMessage(`Removed edge between ${fromId} and ${toId}`);
  };

  // Function to clear all custom edges
  const handleClearCustomEdges = () => {
    setCustomEdges([]);
    showMessage('Cleared all custom edges');
  };

  // Function to handle node click in graph view
  const handleNodeClick = (nodeId) => {
    if (selectedNode === null) {
      setSelectedNode(nodeId);
    } else if (selectedNode !== nodeId) {
      handleAddCustomEdge(selectedNode, nodeId);
    } else {
      setSelectedNode(null);
    }
  };

  return (
    <PageContainer>
      <Header>
        <Title>Trees</Title>
        <Description>
          A tree is a hierarchical data structure consisting of nodes connected by edges. A binary tree has at most two children per node.
        </Description>
      </Header>
      
      <VisualizationContainer>
        <OptionsContainer>
          <OptionButton 
            active={treeType === 'bst'} 
            onClick={() => setTreeType('bst')}
          >
            Binary Search Tree
          </OptionButton>
          <OptionButton 
            active={treeType === 'avl'} 
            onClick={() => setTreeType('avl')}
          >
            AVL Tree (Balanced)
          </OptionButton>
          <OptionButton 
            active={treeType === 'heap'} 
            onClick={() => setTreeType('heap')}
          >
            Heap
          </OptionButton>
        </OptionsContainer>
        
        <OptionsContainer>
          <OptionButton 
            active={viewMode === 'tree'} 
            onClick={() => setViewMode('tree')}
          >
            Tree View
          </OptionButton>
          <OptionButton 
            active={viewMode === 'graph'} 
            onClick={() => setViewMode('graph')}
          >
            Graph View
          </OptionButton>
        </OptionsContainer>
        
        <ControlsContainer>
          <div>
            <label>Value: </label>
            <Input 
              type="text" 
              value={value} 
              onChange={e => setValue(e.target.value)} 
              placeholder="Value" 
            />
          </div>
          <OperationButton onClick={handleInsert}>Insert</OperationButton>
          <OperationButton onClick={handleDelete} variant="secondary">Delete</OperationButton>
          <OperationButton onClick={handleSearch}>Search</OperationButton>
          <OperationButton onClick={handleClearTree} variant="secondary">Clear Tree</OperationButton>
        </ControlsContainer>
        
        <ControlsContainer>
          <OperationButton onClick={handleInOrder}>In-Order</OperationButton>
          <OperationButton onClick={handlePreOrder}>Pre-Order</OperationButton>
          <OperationButton onClick={handlePostOrder}>Post-Order</OperationButton>
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
        
        {viewMode === 'tree' ? (
          <TreeContainer>
            <EdgeContainer>
              {edges.map((edge, index) => {
                // Find the actual nodes in the flattened tree
                const fromLevel = flattenedTree[edge.from.level];
                const toLevel = flattenedTree[edge.to.level];
                
                if (!fromLevel || !toLevel) return null;
                
                const fromNode = fromLevel.find(n => n.value === edge.from.value);
                const toNode = toLevel.find(n => n.value === edge.to.value);
                
                if (!fromNode || !toNode) return null;
                
                // Get the center position of each node in the DOM
                const fromX = fromNode.x + 25; // center of node (50px/2)
                const fromY = edge.from.level * 100 + 25; // center of node
                
                const toX = toNode.x + 25; // center of node (50px/2)
                const toY = edge.to.level * 100 + 25; // center of node
                
                // Calculate the length and angle of the line
                const dx = toX - fromX;
                const dy = toY - fromY;
                const length = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                
                return (
                  <Edge
                    key={index}
                    style={{
                      width: length,
                      transform: `translate(${fromX}px, ${fromY}px) rotate(${angle}deg)`,
                      height: '3px', // thicker lines
                    }}
                  />
                );
              })}
            </EdgeContainer>
            
            {flattenedTree.map((level, levelIndex) => (
              <TreeLevel key={levelIndex} style={{ marginTop: levelIndex === 0 ? '0' : '2rem' }}>
                {level.map((node, nodeIndex) => (
                  <TreeNode
                    key={nodeIndex}
                    highlight={highlightPath.includes(node.value)}
                    style={{
                      position: 'absolute',
                      left: `${node.x}px`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {node.value}
                  </TreeNode>
                ))}
              </TreeLevel>
            ))}
          </TreeContainer>
        ) : (
          <GraphContainer>
            {/* Render standard tree edges */}
            {graphData.edges.map((edge, index) => {
              const fromNode = graphData.nodes.find(n => n.id === edge.from);
              const toNode = graphData.nodes.find(n => n.id === edge.to);
              
              if (!fromNode || !toNode) return null;
              
              const dx = toNode.x - fromNode.x;
              const dy = toNode.y - fromNode.y;
              const length = Math.sqrt(dx * dx + dy * dy);
              const angle = Math.atan2(dy, dx) * 180 / Math.PI;
              
              return (
                <Edge
                  key={`tree-edge-${index}`}
                  style={{
                    width: length - 40, // Adjust for node radius
                    transform: `translate(${fromNode.x + 20}px, ${fromNode.y + 20}px) rotate(${angle}deg)`,
                    backgroundColor: 'var(--primary-light)',
                  }}
                />
              );
            })}
            
            {/* Render custom edges */}
            {customEdges.map((edge, index) => {
              const fromNode = graphData.nodes.find(n => n.id === edge.from);
              const toNode = graphData.nodes.find(n => n.id === edge.to);
              
              if (!fromNode || !toNode) return null;
              
              const dx = toNode.x - fromNode.x;
              const dy = toNode.y - fromNode.y;
              const length = Math.sqrt(dx * dx + dy * dy);
              const angle = Math.atan2(dy, dx) * 180 / Math.PI;
              
              return (
                <Edge
                  key={`custom-edge-${index}`}
                  style={{
                    width: length - 40, // Adjust for node radius
                    transform: `translate(${fromNode.x + 20}px, ${fromNode.y + 20}px) rotate(${angle}deg)`,
                    backgroundColor: 'var(--secondary)',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleRemoveCustomEdge(edge.from, edge.to);
                  }}
                />
              );
            })}
            
            {/* Render graph nodes */}
            {graphData.nodes.map((node) => (
              <TreeNode
                key={node.id}
                highlight={selectedNode === node.id || highlightPath.includes(node.value)}
                style={{
                  position: 'absolute',
                  left: `${node.x - 25}px`,
                  top: `${node.y - 25}px`,
                  cursor: 'pointer',
                  boxShadow: selectedNode === node.id ? '0 0 0 3px var(--secondary)' : undefined
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNodeClick(node.id);
                }}
              >
                {node.value}
              </TreeNode>
            ))}
          </GraphContainer>
        )}
        
        {viewMode === 'graph' && (
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Graph Interaction:</strong> 
              Click on a node to select it, then click another node to create a custom edge between them.
              Right-click on an edge to remove it.
            </p>
            <OperationButton 
              onClick={handleClearCustomEdges} 
              variant="secondary"
            >
              Clear Custom Edges
            </OperationButton>
          </div>
        )}
        
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

export default TreesPage; 