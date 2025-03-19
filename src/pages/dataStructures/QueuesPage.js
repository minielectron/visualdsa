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
  min-height: 200px;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  margin: 2rem auto;
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #f9f9f9;
  overflow-x: auto;
`;

const QueueItem = styled(motion.div)`
  min-width: 60px;
  height: 60px;
  background: ${props => props.highlight ? 'var(--primary)' : 'var(--primary-light)'};
  color: white;
  border-radius: var(--border-radius);
  margin: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const QueueFront = styled.div`
  position: absolute;
  bottom: -40px;
  left: 15px;
  color: var(--text-secondary);
  font-weight: 500;
`;

const QueueRear = styled.div`
  position: absolute;
  bottom: -40px;
  right: 15px;
  color: var(--text-secondary);
  font-weight: 500;
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

const StatusPanel = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: var(--border-radius);
  text-align: center;
  width: 100%;
`;

const EmptyMessage = styled.div`
  color: var(--text-secondary);
  text-align: center;
  margin: 2rem 0;
  font-style: italic;
  width: 100%;
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
  const [queue, setQueue] = useState([10, 20, 30, 40]);
  const [value, setValue] = useState('');
  const [message, setMessage] = useState(null);
  const [operation, setOperation] = useState(null);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [frontValue, setFrontValue] = useState(null);
  const [queueType, setQueueType] = useState('regular'); // regular, circular, priority

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const handleEnqueue = () => {
    if (value === '') {
      showMessage('Please enter a value', 'error');
      return;
    }

    const numValue = parseInt(value);

    if (isNaN(numValue)) {
      showMessage('Value must be a number', 'error');
      return;
    }

    if (queue.length >= 10) {
      showMessage('Queue is full! Cannot enqueue more items.', 'error');
      return;
    }

    setOperation('enqueue');
    
    if (queueType === 'priority') {
      // For priority queue, insert based on priority (assuming lower number = higher priority)
      const newQueue = [...queue];
      let inserted = false;
      
      for (let i = 0; i < newQueue.length; i++) {
        if (numValue < newQueue[i]) {
          newQueue.splice(i, 0, numValue);
          inserted = true;
          break;
        }
      }
      
      if (!inserted) {
        newQueue.push(numValue);
      }
      
      setQueue(newQueue);
      showMessage(`Enqueued ${numValue} with priority`);
    } else {
      // Regular and circular queues enqueue at the end
      setQueue([...queue, numValue]);
      setHighlightIndex(queue.length);
      showMessage(`Enqueued ${numValue}`);
    }
    
    setTimeout(() => {
      setHighlightIndex(-1);
    }, 1500);
  };

  const handleDequeue = () => {
    if (queue.length === 0) {
      showMessage('Queue is empty! Cannot dequeue.', 'error');
      return;
    }

    setOperation('dequeue');
    setHighlightIndex(0);
    
    setTimeout(() => {
      const dequeuedValue = queue[0];
      setQueue(queue.slice(1));
      showMessage(`Dequeued ${dequeuedValue}`);
      setHighlightIndex(-1);
    }, 1000);
  };

  const handlePeek = () => {
    if (queue.length === 0) {
      showMessage('Queue is empty! Cannot peek.', 'error');
      return;
    }

    setOperation('peek');
    setHighlightIndex(0);
    setFrontValue(queue[0]);
    
    setTimeout(() => {
      setHighlightIndex(-1);
      setTimeout(() => {
        setFrontValue(null);
      }, 2000);
    }, 1500);
  };

  const handleClear = () => {
    if (queue.length === 0) {
      showMessage('Queue is already empty!', 'error');
      return;
    }

    setOperation('clear');
    setQueue([]);
    showMessage('Queue cleared');
  };

  const getOperationDescription = () => {
    switch (operation) {
      case 'enqueue':
        return {
          title: 'Enqueue Operation',
          description: queueType === 'priority' 
            ? 'Time Complexity: O(n). In a priority queue, insertion requires finding the correct position based on priority.'
            : 'Time Complexity: O(1). The enqueue operation adds an element to the rear of the queue, which is a constant time operation.',
        };
      case 'dequeue':
        return {
          title: 'Dequeue Operation',
          description: 'Time Complexity: O(1). The dequeue operation removes the front element from the queue, which is a constant time operation.',
        };
      case 'peek':
        return {
          title: 'Peek Operation',
          description: 'Time Complexity: O(1). The peek operation looks at the front element without removing it, which is a constant time operation.',
        };
      case 'clear':
        return {
          title: 'Clear Operation',
          description: 'Time Complexity: O(1). The clear operation removes all elements from the queue at once.',
        };
      default:
        return null;
    }
  };

  const operationInfo = getOperationDescription();

  return (
    <PageContainer>
      <Header>
        <Title>Queues</Title>
        <Description>
          A queue is a linear data structure that follows the First In First Out (FIFO) principle. Elements are added at the rear (enqueue) and removed from the front (dequeue).
        </Description>
      </Header>
      
      <VisualizationContainer>
        <OptionsContainer>
          <OptionButton 
            active={queueType === 'regular'} 
            onClick={() => setQueueType('regular')}
          >
            Regular Queue
          </OptionButton>
          <OptionButton 
            active={queueType === 'circular'} 
            onClick={() => setQueueType('circular')}
          >
            Circular Queue
          </OptionButton>
          <OptionButton 
            active={queueType === 'priority'} 
            onClick={() => setQueueType('priority')}
          >
            Priority Queue
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
        
        {frontValue !== null && (
          <StatusPanel>
            <strong>Front Value:</strong> {frontValue}
          </StatusPanel>
        )}
        
        <div style={{ width: '100%', position: 'relative', marginBottom: '2rem' }}>
          <QueueContainer>
            {queue.length === 0 ? (
              <EmptyMessage>Queue is empty</EmptyMessage>
            ) : (
              <AnimatePresence>
                {queue.map((item, index) => (
                  <QueueItem 
                    key={index}
                    highlight={index === highlightIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, x: -100, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    {item}
                  </QueueItem>
                ))}
              </AnimatePresence>
            )}
          </QueueContainer>
          
          {queue.length > 0 && (
            <>
              <QueueFront>FRONT</QueueFront>
              <QueueRear>REAR</QueueRear>
            </>
          )}
        </div>
        
        {queueType === 'circular' && queue.length > 0 && (
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)', margin: '1rem 0' }}>
            In a circular queue, after reaching the end, the next element would be placed at the beginning if spaces are available.
          </div>
        )}
        
        {queueType === 'priority' && queue.length > 0 && (
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)', margin: '1rem 0' }}>
            In a priority queue, elements are dequeued based on priority (lower number = higher priority).
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

export default QueuesPage; 