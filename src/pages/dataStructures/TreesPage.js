import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TreeContainer = styled.div`
  width: 100%;
  min-height: 600px;
  margin: 2rem 0;
  position: relative;
  overflow: visible;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  background: #f9f9f9;
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
  position: absolute;
  z-index: 2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: move;
  user-select: none;
  transform: translate(0, 0) !important;
`;

const EdgeContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: visible;
`;

const Edge = styled.path`
  stroke: var(--primary-light);
  stroke-width: 3px;
  fill: none;
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

const Instructions = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f9ff;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
`;

// Add a styled component for the edge direction labels
const DirectionLabel = styled.text`
  fill: ${props => props.type === 'left' ? '#2196F3' : '#FF5722'};
  font-size: 12px;
  font-weight: bold;
  pointer-events: none;
  user-select: none;
`;

// Add a styled component for the node content to hold both value and direction indicators
const NodeContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

// Add a styled component for the position indicator (L/R)
const NodePosition = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 14px;
  height: 14px;
  font-size: 9px;
  background: ${props => props.type === 'left' ? '#2196F3' : '#FF5722'};
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
`;

// Add a styled component for speed controls
const SpeedControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const SpeedButton = styled.button`
  padding: 0.5rem;
  background: var(--primary-light);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: var(--primary);
  }
`;

const SpeedLabel = styled.span`
  font-weight: 600;
  min-width: 120px;
  text-align: center;
`;

// Add a styled component for the traversal path
const TraversalPath = styled.path`
  stroke: #ff9800;
  stroke-width: 4px;
  stroke-dasharray: 8;
  fill: none;
  opacity: 0.8;
  animation: dash 1s linear infinite;
  
  @keyframes dash {
    to {
      stroke-dashoffset: -16;
    }
  }
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

class TreeNodeClass {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1; // For AVL trees
    this.balanceFactor = 0; // For AVL trees
  }
}

// Utility functions that don't depend on root
const getHeight = (node) => {
  return node ? node.height : 0;
};

const getBalanceFactor = (node) => {
  return node ? getHeight(node.left) - getHeight(node.right) : 0;
};

const updateHeight = (node) => {
  if (node) {
    node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    node.balanceFactor = getBalanceFactor(node);
  }
};

const rotateRight = (y) => {
  const x = y.left;
  const T2 = x.right;

  x.right = y;
  y.left = T2;

  updateHeight(y);
  updateHeight(x);

  return x;
};

const rotateLeft = (x) => {
  const y = x.right;
  const T2 = y.left;

  y.left = x;
  x.right = T2;

  updateHeight(x);
  updateHeight(y);

  return y;
};

// Heap helpers that don't depend on root
const getParentIndex = (index) => Math.floor((index - 1) / 2);
const getLeftChildIndex = (index) => 2 * index + 1;
const getRightChildIndex = (index) => 2 * index + 2;

const heapifyUp = (array, index) => {
  const parentIndex = getParentIndex(index);
  if (parentIndex >= 0 && array[parentIndex].value < array[index].value) {
    [array[parentIndex], array[index]] = [array[index], array[parentIndex]];
    heapifyUp(array, parentIndex);
  }
};

const heapifyDown = (array, index) => {
  const leftChildIndex = getLeftChildIndex(index);
  const rightChildIndex = getRightChildIndex(index);
  let largestIndex = index;

  if (leftChildIndex < array.length && array[leftChildIndex].value > array[largestIndex].value) {
    largestIndex = leftChildIndex;
  }

  if (rightChildIndex < array.length && array[rightChildIndex].value > array[largestIndex].value) {
    largestIndex = rightChildIndex;
  }

  if (largestIndex !== index) {
    [array[index], array[largestIndex]] = [array[largestIndex], array[index]];
    heapifyDown(array, largestIndex);
  }
};

const TreesPage = () => {
  const [root, setRoot] = useState(null);
  const [treeNodes, setTreeNodes] = useState([]);
  const [treeEdges, setTreeEdges] = useState([]);
  const [value, setValue] = useState('');
  const [message, setMessage] = useState(null);
  const [operation, setOperation] = useState(null);
  const [highlightPath, setHighlightPath] = useState([]);
  const [traversalResult, setTraversalResult] = useState(null);
  const [treeType, setTreeType] = useState('bst'); // bst, avl, heap
  const [draggedNode, setDraggedNode] = useState(null);
  const [containerBounds, setContainerBounds] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const [animationSpeed, setAnimationSpeed] = useState(700); // Default animation speed in ms
  const [traversalPath, setTraversalPath] = useState([]); // Store traversal path for visualization
  const [activeTab, setActiveTab] = useState('visualization'); // 'visualization' or 'code'

  // Helper functions for heap operations moved inside component
  const treeToArray = (node) => {
    if (!node) return [];
    const array = [node];
    const queue = [node];
    
    while (queue.length > 0) {
      const current = queue.shift();
      if (current.left) {
        array.push(current.left);
        queue.push(current.left);
      }
      if (current.right) {
        array.push(current.right);
        queue.push(current.right);
      }
    }
    return array;
  };

  const arrayToTree = (array) => {
    if (array.length === 0) return null;
    
    for (let i = 0; i < array.length; i++) {
      const leftIndex = getLeftChildIndex(i);
      const rightIndex = getRightChildIndex(i);
      
      array[i].left = leftIndex < array.length ? array[leftIndex] : null;
      array[i].right = rightIndex < array.length ? array[rightIndex] : null;
    }
    
    return array[0];
  };

  // Functions that depend on root, now defined inside component
  const findMinValue = (node) => {
    let minValue = node.value;
    while (node.left !== null) {
      minValue = node.left.value;
      node = node.left;
    }
    return minValue;
  };
  
  const insertAVL = (value, node) => {
    if (node === null) {
      return new TreeNodeClass(value);
    }

    if (value < node.value) {
      node.left = insertAVL(value, node.left);
    } else if (value > node.value) {
      node.right = insertAVL(value, node.right);
    } else {
      return node; // Duplicate values not allowed
    }

    updateHeight(node);
    const balance = getBalanceFactor(node);

    // Left Left Case
    if (balance > 1 && value < node.left.value) {
      return rotateRight(node);
    }

    // Right Right Case
    if (balance < -1 && value > node.right.value) {
      return rotateLeft(node);
    }

    // Left Right Case
    if (balance > 1 && value > node.left.value) {
      node.left = rotateLeft(node.left);
      return rotateRight(node);
    }

    // Right Left Case
    if (balance < -1 && value < node.right.value) {
      node.right = rotateRight(node.right);
      return rotateLeft(node);
    }

    return node;
  };

  const deleteAVL = (value, node) => {
    if (node === null) return null;

    if (value < node.value) {
      node.left = deleteAVL(value, node.left);
    } else if (value > node.value) {
      node.right = deleteAVL(value, node.right);
    } else {
      // Node with only one child or no child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Node with two children
      node.value = findMinValue(node.right);
      node.right = deleteAVL(node.value, node.right);
    }

    updateHeight(node);
    const balance = getBalanceFactor(node);

    // Left Left Case
    if (balance > 1 && getBalanceFactor(node.left) >= 0) {
      return rotateRight(node);
    }

    // Left Right Case
    if (balance > 1 && getBalanceFactor(node.left) < 0) {
      node.left = rotateLeft(node.left);
      return rotateRight(node);
    }

    // Right Right Case
    if (balance < -1 && getBalanceFactor(node.right) <= 0) {
      return rotateLeft(node);
    }

    // Right Left Case
    if (balance < -1 && getBalanceFactor(node.right) > 0) {
      node.right = rotateRight(node.right);
      return rotateLeft(node);
    }

    return node;
  };

  const insertHeap = (value, node) => {
    const newNode = new TreeNodeClass(value);
    const array = treeToArray(node);
    array.push(newNode);
    heapifyUp(array, array.length - 1);
    return arrayToTree(array);
  };

  const deleteHeap = (value, node) => {
    const array = treeToArray(node);
    const index = array.findIndex(n => n.value === value);
    if (index === -1) return node;

    // Swap with last element
    [array[index], array[array.length - 1]] = [array[array.length - 1], array[index]];
    array.pop();
    heapifyDown(array, index);
    return arrayToTree(array);
  };

  // Function to position nodes in a tree layout
  const positionTreeNodes = useCallback((root) => {
    if (!root) return { nodes: [], edges: [] };
    
    const nodes = [];
    const edges = [];
    
    // First determine tree depth and width
    const getTreeDepth = (node) => {
      if (!node) return 0;
      return 1 + Math.max(getTreeDepth(node.left), getTreeDepth(node.right));
    };
    
    const treeDepth = getTreeDepth(root);
    
    // Width and height of each level
    const levelHeight = 80;
    const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 800;
    const nodeSpacing = Math.min(100, containerWidth / (Math.pow(2, treeDepth - 1) + 1));
    
    // Traverse the tree to assign positions
    const assignPositions = (node, level, position, parentId = null, direction = null) => {
      if (!node) return;
      
      // Each level gets wider as we go deeper
      const width = Math.pow(2, level);
      const leftPadding = containerWidth / 2 - (width * nodeSpacing) / 2;
      
      // Calculate x position based on node's position within its level
      const x = leftPadding + position * nodeSpacing;
      const y = level * levelHeight + 30; // Add padding from top
      
      const nodeId = nodes.length;
      nodes.push({
        id: nodeId,
        value: node.value,
        x: x,
        y: y,
        level,
        position,
        direction
      });
      
      if (parentId !== null) {
        edges.push({
          from: parentId,
          to: nodeId,
          direction
        });
      }
      
      // Left children are at position 2*position
      if (node.left) {
        assignPositions(node.left, level + 1, position * 2, nodeId, 'left');
      }
      
      // Right children are at position 2*position + 1
      if (node.right) {
        assignPositions(node.right, level + 1, position * 2 + 1, nodeId, 'right');
      }
    };
    
    // Start position assignment from root
    assignPositions(root, 0, 0);
    
    return { nodes, edges };
  }, [containerRef]);

  // Update the tree layout whenever the root changes
  useEffect(() => {
    if (root && containerRef.current) {
      const { nodes, edges } = positionTreeNodes(root);
      setTreeNodes(nodes);
      setTreeEdges(edges);
    }
  }, [root, positionTreeNodes, containerRef]);

  // Update container bounds when the component mounts or window resizes
  useEffect(() => {
    const updateContainerBounds = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerBounds({ width, height });
      }
    };
    
    updateContainerBounds();
    
    // Add resize listener
    window.addEventListener('resize', updateContainerBounds);
    
    return () => {
      window.removeEventListener('resize', updateContainerBounds);
    };
  }, []);

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  // Update the insertNode function to handle different tree types
  const insertNode = (value, node = root) => {
    switch (treeType) {
      case 'avl':
        return insertAVL(value, node);
      case 'heap':
        return insertHeap(value, node);
      default:
        if (node === null) {
          return new TreeNodeClass(value);
        }
        
        if (value < node.value) {
          node.left = insertNode(value, node.left);
        } else if (value > node.value) {
          node.right = insertNode(value, node.right);
        }
        
        return node;
    }
  };

  // Update the deleteNode function to handle different tree types
  const deleteNode = (value, node = root) => {
    switch (treeType) {
      case 'avl':
        return deleteAVL(value, node);
      case 'heap':
        return deleteHeap(value, node);
      default:
        if (node === null) return null;
        
        if (value < node.value) {
          node.left = deleteNode(value, node.left);
        } else if (value > node.value) {
          node.right = deleteNode(value, node.right);
        } else {
          if (node.left === null) {
            return node.right;
          } else if (node.right === null) {
            return node.left;
          }
          
          node.value = findMinValue(node.right);
          node.right = deleteNode(node.value, node.right);
        }
        
        return node;
    }
  };

  const searchNode = (value, node = root, path = []) => {
    if (node === null) return { found: false, path };
    
    // Different search implementations based on tree type
    if (treeType === 'heap') {
      // For heap, we need to do a breadth-first search
      const array = treeToArray(node);
      const foundIndex = array.findIndex(n => n.value === value);
      
      if (foundIndex === -1) {
        return { found: false, path: [] };
      }
      
      // Construct path for heap search
      const pathNodes = [];
      let currentIndex = foundIndex;
      
      // Add the found node
      pathNodes.unshift(array[currentIndex].value);
      
      // Add all ancestors to the path
      while (currentIndex > 0) {
        currentIndex = getParentIndex(currentIndex);
        pathNodes.unshift(array[currentIndex].value);
      }
      
      return { found: true, path: pathNodes };
    } else {
      // For BST and AVL trees, use the standard binary search
      const currentPath = [...path, node.value];
      
      if (value === node.value) {
        return { found: true, path: currentPath };
      }
      
      if (value < node.value) {
        return searchNode(value, node.left, currentPath);
      } else {
        return searchNode(value, node.right, currentPath);
      }
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
        await new Promise(resolve => setTimeout(resolve, animationSpeed / 2));
      }
      
      // Create a new tree with the inserted node
      const newRoot = root ? { ...root } : null;
      const updatedRoot = insertNode(numValue, newRoot);
      setRoot(updatedRoot);
      
      // Show appropriate message based on tree type
      switch (treeType) {
        case 'avl':
          showMessage(`Inserted ${numValue} into the AVL tree. Tree is automatically balanced.`);
          break;
        case 'heap':
          showMessage(`Inserted ${numValue} into the max heap. New value bubbled up to maintain heap property.`);
          break;
        default:
          showMessage(`Inserted ${numValue} into the BST.`);
      }
      
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
        await new Promise(resolve => setTimeout(resolve, animationSpeed / 2));
      }
      
      // Create a new tree with the node deleted
      const newRoot = root ? { ...root } : null;
      const updatedRoot = deleteNode(numValue, newRoot);
      setRoot(updatedRoot);
      
      // Show appropriate message based on tree type
      switch (treeType) {
        case 'avl':
          showMessage(`Deleted ${numValue} from the AVL tree. Tree was rebalanced.`);
          break;
        case 'heap':
          showMessage(`Deleted ${numValue} from the max heap. Heap property was restored.`);
          break;
        default:
          showMessage(`Deleted ${numValue} from the BST.`);
      }
      
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
    
    // Animate the traversal
    animateTraversal(result);
  };

  const handlePreOrder = () => {
    setOperation('traversal');
    const result = preOrderTraversal();
    setTraversalResult({ type: 'Pre-Order', values: result });
    
    // Animate the traversal
    animateTraversal(result);
  };

  const handlePostOrder = () => {
    setOperation('traversal');
    const result = postOrderTraversal();
    setTraversalResult({ type: 'Post-Order', values: result });
    
    // Animate the traversal
    animateTraversal(result);
  };

  const handleClearTree = () => {
    setRoot(null);
    setTreeNodes([]);
    setTreeEdges([]);
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

  const handleNodeDrag = (e, nodeId) => {
    if (draggedNode === nodeId) {
      const newNodes = [...treeNodes];
      const node = newNodes.find(n => n.id === nodeId);
      if (node) {
        // Calculate new position with boundaries
        const newX = node.x + e.movementX;
        const newY = node.y + e.movementY;
        
        // Node radius is 25px, keep nodes fully inside container
        const nodeRadius = 25;
        const maxX = containerBounds.width - nodeRadius * 2;
        const maxY = containerBounds.height - nodeRadius * 2;
        
        // Apply constraints
        node.x = Math.max(0, Math.min(newX, maxX));
        node.y = Math.max(0, Math.min(newY, maxY));
        
        setTreeNodes(newNodes);
      }
    }
  };

  const handleNodeDragEnd = () => {
    setDraggedNode(null);
  };

  // Add touch event handlers
  const handleTouchStart = (nodeId) => {
    setDraggedNode(nodeId);
  };

  const handleTouchMove = (e, nodeId) => {
    if (draggedNode === nodeId && e.touches && e.touches[0]) {
      e.preventDefault();
      
      const newNodes = [...treeNodes];
      const node = newNodes.find(n => n.id === nodeId);
      if (node && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        
        // Get current touch position relative to container
        const touchX = e.touches[0].clientX - containerRect.left;
        const touchY = e.touches[0].clientY - containerRect.top;
        
        // Node radius is 25px, keep nodes fully inside container
        const nodeRadius = 25;
        const maxX = containerBounds.width - nodeRadius * 2;
        const maxY = containerBounds.height - nodeRadius * 2;
        
        // Apply constraints and set new position
        node.x = Math.max(0, Math.min(touchX - nodeRadius, maxX));
        node.y = Math.max(0, Math.min(touchY - nodeRadius, maxY));
        
        setTreeNodes(newNodes);
      }
    }
  };

  const handleTouchEnd = () => {
    setDraggedNode(null);
  };

  // Add function to decrease animation speed (increase delay time)
  const decreaseSpeed = () => {
    setAnimationSpeed(prev => Math.min(prev + 200, 1500));
  };

  // Add function to increase animation speed (decrease delay time)
  const increaseSpeed = () => {
    setAnimationSpeed(prev => Math.max(prev - 200, 100));
  };

  // Update traversal animation function to use animation speed and show path
  const animateTraversal = async (nodeValues) => {
    // Clear any existing highlights and path
    setHighlightPath([]);
    setTraversalPath([]);
    
    // Keep track of visited nodes for path visualization
    const visited = [];
    
    // Animate each node in sequence
    for (let i = 0; i < nodeValues.length; i++) {
      const currentNode = nodeValues[i];
      setHighlightPath([currentNode]);
      
      // Find this node in the tree nodes
      const nodeObj = treeNodes.find(n => n.value === currentNode);
      if (nodeObj) {
        visited.push(nodeObj);
        setTraversalPath([...visited]); // Update path with all visited nodes
      }
      
      await new Promise(resolve => setTimeout(resolve, animationSpeed)); // Use the animation speed
    }
    
    // Clear highlights after animation is complete
    setTimeout(() => {
      setHighlightPath([]);
      // Keep the path visible for a bit longer
      setTimeout(() => {
        setTraversalPath([]);
      }, 1000);
    }, 500);
  };

  const handleNodeDragStart = (nodeId) => {
    setDraggedNode(nodeId);
  };

  const operationInfo = getOperationDescription();

  // Add effect to reset tree when tree type changes
  useEffect(() => {
    setTreeNodes([]);
    setTreeEdges([]);
    setHighlightPath([]);
    setTraversalResult(null);
    
    // Initialize appropriate tree structure based on tree type
    let initialTree = null;
    
    if (treeType === 'bst') {
      // Create a balanced BST
      initialTree = new TreeNodeClass(50);
      initialTree.left = new TreeNodeClass(30);
      initialTree.right = new TreeNodeClass(70);
      initialTree.left.left = new TreeNodeClass(20);
      initialTree.left.right = new TreeNodeClass(40);
      initialTree.right.left = new TreeNodeClass(60);
      initialTree.right.right = new TreeNodeClass(80);
    } 
    else if (treeType === 'avl') {
      // Create an AVL tree (already balanced)
      initialTree = new TreeNodeClass(40);
      initialTree.left = new TreeNodeClass(20);
      initialTree.right = new TreeNodeClass(60);
      initialTree.left.left = new TreeNodeClass(10);
      initialTree.left.right = new TreeNodeClass(30);
      initialTree.right.left = new TreeNodeClass(50);
      initialTree.right.right = new TreeNodeClass(70);
      
      // Update heights for AVL properties
      updateHeight(initialTree.left.left);
      updateHeight(initialTree.left.right);
      updateHeight(initialTree.right.left);
      updateHeight(initialTree.right.right);
      updateHeight(initialTree.left);
      updateHeight(initialTree.right);
      updateHeight(initialTree);
    }
    else if (treeType === 'heap') {
      // Create a max-heap tree
      initialTree = new TreeNodeClass(90);
      initialTree.left = new TreeNodeClass(70);
      initialTree.right = new TreeNodeClass(80);
      initialTree.left.left = new TreeNodeClass(50);
      initialTree.left.right = new TreeNodeClass(40);
      initialTree.right.left = new TreeNodeClass(60);
      initialTree.right.right = new TreeNodeClass(30);
    }
    
    setRoot(initialTree);
  }, [treeType]);

  const bstCode = `public class BinarySearchTree {
    private Node root;
    
    private class Node {
        int value;
        Node left;
        Node right;
        
        Node(int value) {
            this.value = value;
            left = null;
            right = null;
        }
    }
    
    public void insert(int value) {
        root = insertRec(root, value);
    }
    
    private Node insertRec(Node root, int value) {
        if (root == null) {
            root = new Node(value);
            return root;
        }
        
        if (value < root.value)
            root.left = insertRec(root.left, value);
        else if (value > root.value)
            root.right = insertRec(root.right, value);
            
        return root;
    }
    
    public void delete(int value) {
        root = deleteRec(root, value);
    }
    
    private Node deleteRec(Node root, int value) {
        if (root == null) return root;
        
        if (value < root.value)
            root.left = deleteRec(root.left, value);
        else if (value > root.value)
            root.right = deleteRec(root.right, value);
        else {
            // Node with only one child or no child
            if (root.left == null)
                return root.right;
            else if (root.right == null)
                return root.left;
                
            // Node with two children
            root.value = minValue(root.right);
            root.right = deleteRec(root.right, root.value);
        }
        
        return root;
    }
    
    private int minValue(Node root) {
        int minv = root.value;
        while (root.left != null) {
            minv = root.left.value;
            root = root.left;
        }
        return minv;
    }
}`;

  const avlCode = `public class AVLTree {
    private Node root;
    
    private class Node {
        int value;
        Node left;
        Node right;
        int height;
        int balanceFactor;
        
        Node(int value) {
            this.value = value;
            left = null;
            right = null;
            height = 1;
            balanceFactor = 0;
        }
    }
    
    private int height(Node node) {
        return node == null ? 0 : node.height;
    }
    
    private int getBalanceFactor(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }
    
    private Node rotateRight(Node y) {
        Node x = y.left;
        Node T2 = x.right;
        
        x.right = y;
        y.left = T2;
        
        y.height = Math.max(height(y.left), height(y.right)) + 1;
        x.height = Math.max(height(x.left), height(x.right)) + 1;
        
        return x;
    }
    
    private Node rotateLeft(Node x) {
        Node y = x.right;
        Node T2 = y.left;
        
        y.left = x;
        x.right = T2;
        
        x.height = Math.max(height(x.left), height(x.right)) + 1;
        y.height = Math.max(height(y.left), height(y.right)) + 1;
        
        return y;
    }
    
    public void insert(int value) {
        root = insertRec(root, value);
    }
    
    private Node insertRec(Node node, int value) {
        if (node == null)
            return new Node(value);
            
        if (value < node.value)
            node.left = insertRec(node.left, value);
        else if (value > node.value)
            node.right = insertRec(node.right, value);
        else
            return node;
            
        node.height = Math.max(height(node.left), height(node.right)) + 1;
        int balance = getBalanceFactor(node);
        
        // Left Left Case
        if (balance > 1 && value < node.left.value)
            return rotateRight(node);
            
        // Right Right Case
        if (balance < -1 && value > node.right.value)
            return rotateLeft(node);
            
        // Left Right Case
        if (balance > 1 && value > node.left.value) {
            node.left = rotateLeft(node.left);
            return rotateRight(node);
        }
        
        // Right Left Case
        if (balance < -1 && value < node.right.value) {
            node.right = rotateRight(node.right);
            return rotateLeft(node);
        }
        
        return node;
    }
}`;

  const heapCode = `public class MaxHeap {
    private ArrayList<Integer> heap;
    
    public MaxHeap() {
        heap = new ArrayList<>();
    }
    
    private int parent(int i) {
        return (i - 1) / 2;
    }
    
    private int leftChild(int i) {
        return 2 * i + 1;
    }
    
    private int rightChild(int i) {
        return 2 * i + 2;
    }
    
    private void swap(int i, int j) {
        int temp = heap.get(i);
        heap.set(i, heap.get(j));
        heap.set(j, temp);
    }
    
    private void heapifyUp(int i) {
        int parent = parent(i);
        if (parent >= 0 && heap.get(parent) < heap.get(i)) {
            swap(parent, i);
            heapifyUp(parent);
        }
    }
    
    private void heapifyDown(int i) {
        int largest = i;
        int left = leftChild(i);
        int right = rightChild(i);
        
        if (left < heap.size() && heap.get(left) > heap.get(largest))
            largest = left;
            
        if (right < heap.size() && heap.get(right) > heap.get(largest))
            largest = right;
            
        if (largest != i) {
            swap(i, largest);
            heapifyDown(largest);
        }
    }
    
    public void insert(int value) {
        heap.add(value);
        heapifyUp(heap.size() - 1);
    }
    
    public int extractMax() {
        if (heap.isEmpty())
            throw new IllegalStateException("Heap is empty");
            
        int max = heap.get(0);
        int lastElement = heap.remove(heap.size() - 1);
        
        if (!heap.isEmpty()) {
            heap.set(0, lastElement);
            heapifyDown(0);
        }
        
        return max;
    }
}`;

  return (
    <PageContainer>
      <Header>
        <Title>Trees</Title>
        <Description>
          A tree is a hierarchical data structure consisting of nodes connected by edges. A binary tree has at most two children per node.
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
            Implementation
          </TabButton>
        </TabContainer>

        {activeTab === 'visualization' ? (
          <>
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
            
            <Instructions>
              <strong>Interactive Tree:</strong>
              <ul>
                <li>Drag any node to reposition it</li>
                <li>The tree edges will automatically adjust to follow the nodes</li>
                <li>Use the operations below to modify the tree structure</li>
              </ul>
              
              {treeType === 'bst' && (
                <div>
                  <strong>Binary Search Tree Properties:</strong>
                  <ul>
                    <li>Left child is less than parent</li>
                    <li>Right child is greater than parent</li>
                    <li>Search operations are O(log n) on average, O(n) worst case</li>
                  </ul>
                </div>
              )}
              
              {treeType === 'avl' && (
                <div>
                  <strong>AVL Tree Properties:</strong>
                  <ul>
                    <li>Self-balancing binary search tree</li>
                    <li>For any node, height difference between left and right subtrees is at most 1</li>
                    <li>Maintains O(log n) time complexity for all operations</li>
                    <li>Automatically rebalances after insertions and deletions</li>
                  </ul>
                </div>
              )}
              
              {treeType === 'heap' && (
                <div>
                  <strong>Max Heap Properties:</strong>
                  <ul>
                    <li>Complete binary tree where parent is always greater than children</li>
                    <li>Root contains the maximum value</li>
                    <li>Insert and delete operations maintain the heap property</li>
                    <li>Used for priority queues and heap sort</li>
                  </ul>
                </div>
              )}
            </Instructions>
            
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
            
            <SpeedControlContainer>
              <SpeedButton onClick={decreaseSpeed}>
                <span role="img" aria-label="Decrease Speed">🐢</span>
              </SpeedButton>
              <SpeedLabel>Animation Speed: {animationSpeed === 100 ? 'Very Fast' : 
                                              animationSpeed <= 300 ? 'Fast' : 
                                              animationSpeed <= 700 ? 'Normal' : 
                                              animationSpeed <= 1100 ? 'Slow' : 'Very Slow'}</SpeedLabel>
              <SpeedButton onClick={increaseSpeed}>
                <span role="img" aria-label="Increase Speed">🐇</span>
              </SpeedButton>
            </SpeedControlContainer>
            
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
            
            <TreeContainer ref={containerRef}>
              <EdgeContainer>
                {/* Render traversal path if it exists */}
                {traversalPath.length > 1 && (
                  <TraversalPath 
                    d={traversalPath.map((node, i) => {
                      // Calculate center of the node
                      const x = node.x + 25;
                      const y = node.y + 25;
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }).join(' ')}
                  />
                )}
              
                {treeEdges.map((edge, index) => {
                  const fromNode = treeNodes.find(n => n.id === edge.from);
                  const toNode = treeNodes.find(n => n.id === edge.to);
                  
                  if (!fromNode || !toNode) return null;
                  
                  // Create path from center of one node to center of another
                  // Add 25px offset to reach the center of each node (which is 50px wide)
                  const fromX = fromNode.x + 25;
                  const fromY = fromNode.y + 25;
                  const toX = toNode.x + 25;
                  const toY = toNode.y + 25;
                  
                  // Calculate midpoint for direction label
                  const midX = (fromX + toX) / 2;
                  const midY = (fromY + toY) / 2 - 5; // Offset label slightly above the line
                  
                  // Simple straight line for the edge
                  const pathData = `M ${fromX} ${fromY} L ${toX} ${toY}`;
                  
                  return (
                    <React.Fragment key={index}>
                      <Edge d={pathData} />
                      {edge.direction && (
                        <DirectionLabel 
                          type={edge.direction}
                          x={midX}
                          y={midY}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          {edge.direction === 'left' ? 'L' : 'R'}
                        </DirectionLabel>
                      )}
                    </React.Fragment>
                  );
                })}
              </EdgeContainer>
              
              {treeNodes.map((node) => (
                <TreeNode
                  key={node.id}
                  highlight={highlightPath.includes(node.value)}
                  style={{
                    left: `${node.x}px`,
                    top: `${node.y}px`,
                    borderColor: node.direction === 'left' ? '#2196F3' : 
                               node.direction === 'right' ? '#FF5722' : 'transparent'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onMouseDown={() => handleNodeDragStart(node.id)}
                  onMouseMove={(e) => handleNodeDrag(e, node.id)}
                  onMouseUp={handleNodeDragEnd}
                  onMouseLeave={handleNodeDragEnd}
                  onTouchStart={() => handleTouchStart(node.id)}
                  onTouchMove={(e) => handleTouchMove(e, node.id)}
                  onTouchEnd={handleTouchEnd}
                  data-node="true"
                  data-value={node.value}
                  data-level={node.level}
                  data-direction={node.direction || 'root'}
                >
                  <NodeContent>
                    {node.value}
                  </NodeContent>
                </TreeNode>
              ))}
            </TreeContainer>
            
            {operationInfo && (
              <OperationDescription>
                <OperationTitle>{operationInfo.title}</OperationTitle>
                <p>{operationInfo.description}</p>
              </OperationDescription>
            )}
          </>
        ) : (
          <div>
            {treeType === 'bst' && (
              <CodeViewer 
                title="Binary Search Tree Implementation" 
                code={bstCode}
              />
            )}
            {treeType === 'avl' && (
              <CodeViewer 
                title="AVL Tree Implementation" 
                code={avlCode}
              />
            )}
            {treeType === 'heap' && (
              <CodeViewer 
                title="Max Heap Implementation" 
                code={heapCode}
              />
            )}
          </div>
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default TreesPage; 