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

const QueueContainer = styled.div`
  width: 90%;
  min-height: 150px;
  margin: 2rem auto;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  background: #f9f9f9;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: flex-start;
`;

const EmptyMessage = styled.div`
  color: var(--text-secondary);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: italic;
`;

const FrontIndicator = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: var(--primary);
  color: white;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  z-index: 2;
`;

const RearIndicator = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--secondary);
  color: white;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  z-index: 2;
`;

const QueueItem = styled(motion.div)`
  min-width: 80px;
  height: 80px;
  background: ${props => props.highlight ? 'var(--primary)' : 'var(--primary-light)'};
  color: white;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  font-weight: 600;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  flex-shrink: 0;
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
  width: 100px;
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

const QueuesPage = () => {
  const [queue, setQueue] = useState([]);
  const [value, setValue] = useState('');
  const [message, setMessage] = useState(null);
  const [operation, setOperation] = useState(null);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [activeTab, setActiveTab] = useState('visualization'); // 'visualization' or 'code'
  const [queueType, setQueueType] = useState('regular'); // 'regular', 'circular', 'priority'

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const handleEnqueue = async () => {
    if (value === '') {
      showMessage('Please enter a value', 'error');
      return;
    }
    
    setOperation('enqueue');
    
    const newQueue = [...queue, value];
    setQueue(newQueue);
    
    // Highlight the enqueued item
    setHighlightIndex(newQueue.length - 1);
    
    showMessage(`Enqueued "${value}" to the queue`);
    setValue('');
    
    // Clear highlight after a moment
    setTimeout(() => {
      setHighlightIndex(-1);
    }, 2000);
  };

  const handleDequeue = async () => {
    if (queue.length === 0) {
      showMessage('Queue is empty', 'error');
      return;
    }
    
    setOperation('dequeue');
    
    // Highlight the item to be dequeued
    setHighlightIndex(0);
    
    // Wait a moment to show the highlight
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const dequeuedValue = queue[0];
    const newQueue = queue.slice(1);
    setQueue(newQueue);
    
    showMessage(`Dequeued "${dequeuedValue}" from the queue`);
    
    // Clear highlight
    setHighlightIndex(-1);
  };

  const handlePeek = () => {
    if (queue.length === 0) {
      showMessage('Queue is empty', 'error');
      return;
    }
    
    setOperation('peek');
    
    // Highlight the front item
    setHighlightIndex(0);
    
    showMessage(`Front of queue: "${queue[0]}"`);
    
    // Clear highlight after a moment
    setTimeout(() => {
      setHighlightIndex(-1);
    }, 2000);
  };

  const handleClear = () => {
    setQueue([]);
    setHighlightIndex(-1);
    showMessage('Queue cleared');
  };

  const handleQueueTypeChange = (type) => {
    setQueueType(type);
    setQueue([]);
    setHighlightIndex(-1);
    setValue('');
    setMessage(null);
    showMessage(`Switched to ${type} queue`);
  };

  const getOperationDescription = () => {
    switch (operation) {
      case 'enqueue':
        return {
          title: 'Enqueue Operation',
          description: 'Time Complexity: O(1). The enqueue operation adds an element to the rear of the queue.',
        };
      case 'dequeue':
        return {
          title: 'Dequeue Operation',
          description: 'Time Complexity: O(1). The dequeue operation removes and returns the front element from the queue.',
        };
      case 'peek':
        return {
          title: 'Peek Operation',
          description: 'Time Complexity: O(1). The peek operation returns the front element of the queue without removing it.',
        };
      default:
        return null;
    }
  };

  const operationInfo = getOperationDescription();
  
  // Initialize queue with some example values
  useEffect(() => {
    const initialQueue = ['Apple', 'Banana', 'Cherry'];
    setQueue(initialQueue);
  }, []);

  const queueCode = `public class Queue<T> {
    private static class Node<T> {
        private T data;
        private Node<T> next;
        
        public Node(T data) {
            this.data = data;
            this.next = null;
        }
    }
    
    private Node<T> front;
    private Node<T> rear;
    private int size;
    
    public Queue() {
        front = null;
        rear = null;
        size = 0;
    }
    
    public void enqueue(T item) {
        Node<T> newNode = new Node<>(item);
        
        if (isEmpty()) {
            front = newNode;
            rear = newNode;
        } else {
            rear.next = newNode;
            rear = newNode;
        }
        
        size++;
    }
    
    public T dequeue() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        T data = front.data;
        front = front.next;
        
        if (front == null) {
            rear = null;
        }
        
        size--;
        return data;
    }
    
    public T peek() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        return front.data;
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    public int size() {
        return size;
    }
    
    public void clear() {
        front = null;
        rear = null;
        size = 0;
    }
    
    @Override
    public String toString() {
        if (isEmpty()) {
            return "[]";
        }
        
        StringBuilder sb = new StringBuilder("[");
        Node<T> current = front;
        
        while (current != null) {
            sb.append(current.data);
            if (current.next != null) {
                sb.append(", ");
            }
            current = current.next;
        }
        
        sb.append("]");
        return sb.toString();
    }
}`;

  const circularQueueCode = `public class CircularQueue<T> {
    private T[] array;
    private int front;
    private int rear;
    private int size;
    private int capacity;
    
    @SuppressWarnings("unchecked")
    public CircularQueue(int capacity) {
        this.capacity = capacity;
        this.array = (T[]) new Object[capacity];
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }
    
    public boolean isFull() {
        return size == capacity;
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    public void enqueue(T item) {
        if (isFull()) {
            throw new IllegalStateException("Queue is full");
        }
        
        rear = (rear + 1) % capacity;
        array[rear] = item;
        size++;
    }
    
    public T dequeue() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        T item = array[front];
        array[front] = null;
        front = (front + 1) % capacity;
        size--;
        return item;
    }
    
    public T peek() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        return array[front];
    }
    
    public int size() {
        return size;
    }
    
    public void clear() {
        for (int i = 0; i < capacity; i++) {
            array[i] = null;
        }
        front = 0;
        rear = -1;
        size = 0;
    }
    
    @Override
    public String toString() {
        if (isEmpty()) {
            return "[]";
        }
        
        StringBuilder sb = new StringBuilder("[");
        int count = 0;
        int index = front;
        
        while (count < size) {
            sb.append(array[index]);
            if (count < size - 1) {
                sb.append(", ");
            }
            index = (index + 1) % capacity;
            count++;
        }
        
        sb.append("]");
        return sb.toString();
    }
}`;

  const priorityQueueCode = `public class PriorityQueue<T extends Comparable<T>> {
    private static class Node<T> {
        private T data;
        private int priority;
        private Node<T> next;
        
        public Node(T data, int priority) {
            this.data = data;
            this.priority = priority;
            this.next = null;
        }
    }
    
    private Node<T> head;
    private int size;
    
    public PriorityQueue() {
        head = null;
        size = 0;
    }
    
    public void enqueue(T item, int priority) {
        Node<T> newNode = new Node<>(item, priority);
        
        // If queue is empty or new node has higher priority than head
        if (head == null || priority > head.priority) {
            newNode.next = head;
            head = newNode;
        } else {
            Node<T> temp = head;
            
            // Find position to insert based on priority
            while (temp.next != null && temp.next.priority >= priority) {
                temp = temp.next;
            }
            
            // Insert after temp
            newNode.next = temp.next;
            temp.next = newNode;
        }
        
        size++;
    }
    
    public T dequeue() {
        if (isEmpty()) {
            throw new NoSuchElementException("Priority queue is empty");
        }
        
        T data = head.data;
        head = head.next;
        size--;
        return data;
    }
    
    public T peek() {
        if (isEmpty()) {
            throw new NoSuchElementException("Priority queue is empty");
        }
        
        return head.data;
    }
    
    public boolean isEmpty() {
        return head == null;
    }
    
    public int size() {
        return size;
    }
    
    public void clear() {
        head = null;
        size = 0;
    }
    
    @Override
    public String toString() {
        if (isEmpty()) {
            return "[]";
        }
        
        StringBuilder sb = new StringBuilder("[");
        Node<T> current = head;
        
        while (current != null) {
            sb.append(current.data).append("(").append(current.priority).append(")");
            if (current.next != null) {
                sb.append(", ");
            }
            current = current.next;
        }
        
        sb.append("]");
        return sb.toString();
    }
}`;

  const getQueueCode = () => {
    switch (queueType) {
      case 'circular':
        return circularQueueCode;
      case 'priority':
        return priorityQueueCode;
      default:
        return queueCode;
    }
  };

  const getQueueTitle = () => {
    switch (queueType) {
      case 'circular':
        return 'Circular Queue Implementation';
      case 'priority':
        return 'Priority Queue Implementation';
      default:
        return 'Queue Implementation';
    }
  };

  return (
    <PageContainer>
      <Header>
        <Title>Queues</Title>
        <Description>
          A queue is a linear data structure that follows the First In First Out (FIFO) principle. Elements are added at the rear and removed from the front of the queue.
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
                active={queueType === 'regular'} 
                onClick={() => handleQueueTypeChange('regular')}
              >
                Regular Queue
              </OptionButton>
              <OptionButton 
                active={queueType === 'circular'} 
                onClick={() => handleQueueTypeChange('circular')}
              >
                Circular Queue
              </OptionButton>
              <OptionButton 
                active={queueType === 'priority'} 
                onClick={() => handleQueueTypeChange('priority')}
              >
                Priority Queue
              </OptionButton>
            </OptionsContainer>
            
            <Instructions>
              <strong>{queueType.charAt(0).toUpperCase() + queueType.slice(1)} Queue Properties:</strong>
              <ul>
                <li>First In First Out (FIFO) data structure</li>
                <li>Elements are added at the rear and removed from the front</li>
                <li>Common operations include enqueue, dequeue, and peek</li>
                <li>All operations have O(1) time complexity</li>
                {queueType === 'circular' && (
                  <li>Circular queue efficiently uses fixed-size array by wrapping around</li>
                )}
                {queueType === 'priority' && (
                  <li>Priority queue serves elements based on their priority, not insertion order</li>
                )}
                <li>Used in BFS, job scheduling, printer queue, and process management</li>
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
              <OperationButton onClick={handleEnqueue}>Enqueue</OperationButton>
              <OperationButton onClick={handleDequeue} variant="secondary">Dequeue</OperationButton>
              <OperationButton onClick={handlePeek}>Peek</OperationButton>
              <OperationButton onClick={handleClear} variant="secondary">Clear</OperationButton>
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
            
            <QueueContainer>
              {queue.length > 0 ? (
                <>
                  <FrontIndicator>Front</FrontIndicator>
                  <RearIndicator>Rear</RearIndicator>
                </>
              ) : (
                <EmptyMessage>Queue is empty</EmptyMessage>
              )}
              
              <AnimatePresence>
                {queue.map((item, index) => (
                  <QueueItem 
                    key={`${item}-${index}`}
                    highlight={index === highlightIndex}
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.8 }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 300, 
                      damping: 20 
                    }}
                  >
                    {item}
                  </QueueItem>
                ))}
              </AnimatePresence>
            </QueueContainer>
            
            {operationInfo && (
              <OperationDescription>
                <OperationTitle>{operationInfo.title}</OperationTitle>
                <p>{operationInfo.description}</p>
              </OperationDescription>
            )}
          </>
        ) : (
          <CodeViewer 
            title={getQueueTitle()} 
            code={getQueueCode()}
          />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default QueuesPage;