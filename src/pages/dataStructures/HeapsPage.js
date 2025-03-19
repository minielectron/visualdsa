import React, { useState, useEffect } from 'react';
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

const HeapContainer = styled.div`
  width: 100%;
  min-height: 400px;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  background: #f9f9f9;
`;

const HeapNode = styled(motion.div)`
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
  width: 100%;
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

const HeapsPage = () => {
  const [heap, setHeap] = useState([]);
  const [heapNodes, setHeapNodes] = useState([]);
  const [heapEdges, setHeapEdges] = useState([]);
  const [value, setValue] = useState('');
  const [message, setMessage] = useState(null);
  const [operation, setOperation] = useState(null);
  const [highlightPath, setHighlightPath] = useState([]);
  const [heapType, setHeapType] = useState('max'); // 'max' or 'min'
  const [activeTab, setActiveTab] = useState('visualization'); // 'visualization' or 'code'

  // Helper functions for heap operations
  const getParentIndex = (index) => Math.floor((index - 1) / 2);
  const getLeftChildIndex = (index) => 2 * index + 1;
  const getRightChildIndex = (index) => 2 * index + 2;

  // Function to insert a value into the heap
  const insertValue = (value) => {
    const newHeap = [...heap, value];
    let currentIndex = newHeap.length - 1;
    let path = [currentIndex];

    while (currentIndex > 0) {
      const parentIndex = getParentIndex(currentIndex);
      
      if ((heapType === 'max' && newHeap[parentIndex] >= newHeap[currentIndex]) ||
          (heapType === 'min' && newHeap[parentIndex] <= newHeap[currentIndex])) {
        break;
      }
      
      // Swap parent and current node
      [newHeap[parentIndex], newHeap[currentIndex]] = [newHeap[currentIndex], newHeap[parentIndex]];
      currentIndex = parentIndex;
      path.push(currentIndex);
    }
    
    return { newHeap, path: path.reverse() };
  };

  // Function to remove the root value from the heap
  const removeRoot = () => {
    if (heap.length === 0) return { newHeap: [], path: [] };
    if (heap.length === 1) return { newHeap: [], path: [0] };

    const newHeap = [...heap];
    const root = newHeap[0];
    const lastValue = newHeap.pop();
    
    if (newHeap.length > 0) {
      newHeap[0] = lastValue;
      let currentIndex = 0;
      let path = [currentIndex];
      
      const heapifyDown = (index) => {
        const leftIndex = getLeftChildIndex(index);
        const rightIndex = getRightChildIndex(index);
        let largestOrSmallestIndex = index;
        
        if (heapType === 'max') {
          // Max heap
          if (leftIndex < newHeap.length && newHeap[leftIndex] > newHeap[largestOrSmallestIndex]) {
            largestOrSmallestIndex = leftIndex;
          }
          
          if (rightIndex < newHeap.length && newHeap[rightIndex] > newHeap[largestOrSmallestIndex]) {
            largestOrSmallestIndex = rightIndex;
          }
        } else {
          // Min heap
          if (leftIndex < newHeap.length && newHeap[leftIndex] < newHeap[largestOrSmallestIndex]) {
            largestOrSmallestIndex = leftIndex;
          }
          
          if (rightIndex < newHeap.length && newHeap[rightIndex] < newHeap[largestOrSmallestIndex]) {
            largestOrSmallestIndex = rightIndex;
          }
        }
        
        if (largestOrSmallestIndex !== index) {
          [newHeap[index], newHeap[largestOrSmallestIndex]] = [newHeap[largestOrSmallestIndex], newHeap[index]];
          path.push(largestOrSmallestIndex);
          heapifyDown(largestOrSmallestIndex);
        }
      };
      
      heapifyDown(0);
      return { newHeap, path };
    }
    
    return { newHeap, path: [0] };
  };

  // Position nodes in a heap layout
  const positionHeapNodes = (heapArray) => {
    if (heapArray.length === 0) return { nodes: [], edges: [] };

    const nodes = [];
    const edges = [];
    const levelHeight = 70;
    const nodeSize = 50;
    const horizontalSpacing = 60;
    
    // Calculate tree height
    const height = Math.floor(Math.log2(heapArray.length)) + 1;
    
    // Calculate container dimensions
    const containerWidth = 800;
    const containerHeight = height * levelHeight + 100;
    
    // Function to calculate node positions
    const calculatePosition = (index) => {
      const level = Math.floor(Math.log2(index + 1));
      const nodesInLevel = Math.pow(2, level);
      const positionInLevel = index - Math.pow(2, level) + 1;
      
      // Calculate horizontal position
      const levelWidth = nodesInLevel * horizontalSpacing;
      const startX = (containerWidth - levelWidth) / 2;
      const x = startX + (positionInLevel * horizontalSpacing) + (horizontalSpacing / 2) - (nodeSize / 2);
      
      // Calculate vertical position
      const y = level * levelHeight + 20;
      
      return { x, y };
    };
    
    // Create nodes
    for (let i = 0; i < heapArray.length; i++) {
      const { x, y } = calculatePosition(i);
      
      nodes.push({
        id: i,
        value: heapArray[i],
        x: Math.max(nodeSize/2, Math.min(containerWidth - nodeSize - 20, x)),
        y: Math.min(containerHeight - nodeSize - 20, y),
        highlight: highlightPath.includes(i)
      });
      
      // Add edges to children
      const leftChildIndex = getLeftChildIndex(i);
      if (leftChildIndex < heapArray.length) {
        edges.push({
          from: i,
          to: leftChildIndex
        });
      }
      
      const rightChildIndex = getRightChildIndex(i);
      if (rightChildIndex < heapArray.length) {
        edges.push({
          from: i,
          to: rightChildIndex
        });
      }
    }
    
    return { nodes, edges };
  };

  // Update the visualization whenever the heap changes
  useEffect(() => {
    const { nodes, edges } = positionHeapNodes(heap);
    setHeapNodes(nodes);
    setHeapEdges(edges);
  }, [heap, highlightPath]);

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const handleInsert = async () => {
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
    
    // Insert the value and get the heapified path
    const { newHeap, path } = insertValue(numValue);
    
    // Animate the insertion path
    for (let i = 0; i < path.length; i++) {
      setHighlightPath([path[i]]);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    setHeap(newHeap);
    showMessage(`Inserted ${numValue} into the ${heapType} heap`);
    
    setTimeout(() => {
      setHighlightPath([]);
    }, 1000);
  };

  const handleExtractRoot = async () => {
    if (heap.length === 0) {
      showMessage('Heap is empty', 'error');
      return;
    }
    
    setOperation('extractRoot');
    
    // Highlight the root
    setHighlightPath([0]);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const rootValue = heap[0];
    const { newHeap, path } = removeRoot();
    
    // Animate the heapify-down path
    for (let i = 0; i < path.length; i++) {
      setHighlightPath([path[i]]);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    setHeap(newHeap);
    showMessage(`Extracted ${rootValue} from the ${heapType} heap`);
    
    setTimeout(() => {
      setHighlightPath([]);
    }, 1000);
  };

  const handleClearHeap = () => {
    setHeap([]);
    setHighlightPath([]);
    setMessage(null);
    showMessage('Heap cleared');
  };

  const handleHeapTypeChange = (type) => {
    if (type === heapType) return;
    
    setHeapType(type);
    setHeap([]);
    setHighlightPath([]);
    showMessage(`Switched to ${type} heap`);
  };

  const getOperationDescription = () => {
    switch (operation) {
      case 'insert':
        return {
          title: 'Insert Operation',
          description: `Time Complexity: O(log n). Inserting a new element into a ${heapType} heap involves adding the element to the end and then "bubbling up" to maintain the heap property.`,
        };
      case 'extractRoot':
        return {
          title: 'Extract Root Operation',
          description: `Time Complexity: O(log n). Removing the ${heapType === 'max' ? 'maximum' : 'minimum'} element (root) from a ${heapType} heap involves replacing it with the last element and then "bubbling down" to maintain the heap property.`,
        };
      default:
        return null;
    }
  };

  const operationInfo = getOperationDescription();

  // Generate random heap data
  const generateRandomHeap = () => {
    const size = 7; // Fixed size for demo
    const randomValues = Array.from({ length: size }, () => Math.floor(Math.random() * 90) + 10); // Values between 10 and 99
    
    // Heapify the random array
    const heapify = (arr) => {
      const result = [...arr];
      
      // Build heap (rearrange array)
      for (let i = Math.floor(result.length / 2) - 1; i >= 0; i--) {
        siftDown(result, i, result.length);
      }
      
      return result;
    };
    
    const siftDown = (arr, i, n) => {
      let largest = i; // Initialize largest as root
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      
      // Compare with left child
      if (left < n && ((heapType === 'max' && arr[left] > arr[largest]) || 
                       (heapType === 'min' && arr[left] < arr[largest]))) {
        largest = left;
      }
      
      // Compare with right child
      if (right < n && ((heapType === 'max' && arr[right] > arr[largest]) || 
                        (heapType === 'min' && arr[right] < arr[largest]))) {
        largest = right;
      }
      
      // If largest is not root
      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        siftDown(arr, largest, n);
      }
    };
    
    const heapified = heapify(randomValues);
    setHeap(heapified);
    showMessage(`Generated a random ${heapType} heap`);
  };

  // Initialize with random heap data when component mounts or heapType changes
  useEffect(() => {
    generateRandomHeap();
  }, [heapType]);

  const maxHeapCode = `public class MaxHeap {
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
    
    public int peek() {
        if (heap.isEmpty())
            throw new IllegalStateException("Heap is empty");
        return heap.get(0);
    }
    
    public boolean isEmpty() {
        return heap.isEmpty();
    }
    
    public int size() {
        return heap.size();
    }
    
    // Build heap from array
    public void buildHeap(int[] array) {
        heap.clear();
        for (int value : array) {
            heap.add(value);
        }
        
        for (int i = parent(heap.size() - 1); i >= 0; i--) {
            heapifyDown(i);
        }
    }
}`;

  const minHeapCode = `public class MinHeap {
    private ArrayList<Integer> heap;
    
    public MinHeap() {
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
        if (parent >= 0 && heap.get(parent) > heap.get(i)) {
            swap(parent, i);
            heapifyUp(parent);
        }
    }
    
    private void heapifyDown(int i) {
        int smallest = i;
        int left = leftChild(i);
        int right = rightChild(i);
        
        if (left < heap.size() && heap.get(left) < heap.get(smallest))
            smallest = left;
            
        if (right < heap.size() && heap.get(right) < heap.get(smallest))
            smallest = right;
            
        if (smallest != i) {
            swap(i, smallest);
            heapifyDown(smallest);
        }
    }
    
    public void insert(int value) {
        heap.add(value);
        heapifyUp(heap.size() - 1);
    }
    
    public int extractMin() {
        if (heap.isEmpty())
            throw new IllegalStateException("Heap is empty");
            
        int min = heap.get(0);
        int lastElement = heap.remove(heap.size() - 1);
        
        if (!heap.isEmpty()) {
            heap.set(0, lastElement);
            heapifyDown(0);
        }
        
        return min;
    }
    
    public int peek() {
        if (heap.isEmpty())
            throw new IllegalStateException("Heap is empty");
        return heap.get(0);
    }
    
    public boolean isEmpty() {
        return heap.isEmpty();
    }
    
    public int size() {
        return heap.size();
    }
    
    // Build heap from array
    public void buildHeap(int[] array) {
        heap.clear();
        for (int value : array) {
            heap.add(value);
        }
        
        for (int i = parent(heap.size() - 1); i >= 0; i--) {
            heapifyDown(i);
        }
    }
}`;

  return (
    <PageContainer>
      <Header>
        <Title>Heaps</Title>
        <Description>
          A heap is a specialized tree-based data structure that satisfies the heap property. In a max heap, for any given node, the value of the node is greater than or equal to the values of its children. In a min heap, the value of the node is less than or equal to the values of its children.
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
                active={heapType === 'max'} 
                onClick={() => handleHeapTypeChange('max')}
              >
                Max Heap
              </OptionButton>
              <OptionButton 
                active={heapType === 'min'} 
                onClick={() => handleHeapTypeChange('min')}
              >
                Min Heap
              </OptionButton>
            </OptionsContainer>
            
            <Instructions>
              <strong>{heapType === 'max' ? 'Max Heap' : 'Min Heap'} Properties:</strong>
              <ul>
                <li>Complete binary tree where each node satisfies the heap property</li>
                <li>{heapType === 'max' ? 'Max Heap: Every parent node has a value greater than or equal to its children' : 'Min Heap: Every parent node has a value less than or equal to its children'}</li>
                <li>The root contains the {heapType === 'max' ? 'maximum' : 'minimum'} value in the heap</li>
                <li>Efficiently implements priority queues with O(log n) time complexity for insertions and extractions</li>
              </ul>
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
              <OperationButton onClick={handleExtractRoot} variant="secondary">
                Extract {heapType === 'max' ? 'Max' : 'Min'}
              </OperationButton>
              <OperationButton onClick={generateRandomHeap}>Generate Random Heap</OperationButton>
              <OperationButton onClick={handleClearHeap} variant="secondary">Clear Heap</OperationButton>
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
            
            <HeapContainer>
              <EdgeContainer>
                {heapEdges.map((edge, index) => {
                  const fromNode = heapNodes.find(n => n.id === edge.from);
                  const toNode = heapNodes.find(n => n.id === edge.to);
                  
                  if (!fromNode || !toNode) return null;
                  
                  // Calculate edge points from center of nodes
                  const fromX = fromNode.x + 25;
                  const fromY = fromNode.y + 25;
                  const toX = toNode.x + 25;
                  const toY = toNode.y + 25;
                  
                  // Calculate control points for curved edges
                  const midY = (fromY + toY) / 2;
                  const controlPoint1X = fromX;
                  const controlPoint1Y = midY;
                  const controlPoint2X = toX;
                  const controlPoint2Y = midY;
                  
                  // Create curved path
                  const pathData = `M ${fromX} ${fromY} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${toX} ${toY}`;
                  
                  return (
                    <Edge 
                      key={index} 
                      d={pathData}
                      strokeDasharray={highlightPath.includes(edge.from) && highlightPath.includes(edge.to) ? "none" : "none"}
                      opacity={highlightPath.includes(edge.from) && highlightPath.includes(edge.to) ? 1 : 0.6}
                    />
                  );
                })}
              </EdgeContainer>
              
              {heapNodes.map((node) => (
                <HeapNode
                  key={node.id}
                  highlight={node.highlight}
                  style={{
                    left: `${node.x}px`,
                    top: `${node.y}px`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  data-node="true"
                  data-value={node.value}
                >
                  {node.value}
                </HeapNode>
              ))}
            </HeapContainer>
            
            {operationInfo && (
              <OperationDescription>
                <OperationTitle>{operationInfo.title}</OperationTitle>
                <p>{operationInfo.description}</p>
              </OperationDescription>
            )}
          </>
        ) : (
          <div>
            {heapType === 'max' ? (
              <CodeViewer 
                title="Max Heap Implementation" 
                code={maxHeapCode}
              />
            ) : (
              <CodeViewer 
                title="Min Heap Implementation" 
                code={minHeapCode}
              />
            )}
          </div>
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default HeapsPage; 