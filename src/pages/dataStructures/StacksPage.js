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

const StackContainer = styled.div`
  width: 300px;
  margin: 2rem auto;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  overflow: hidden;
  min-height: 400px;
  position: relative;
  background: #f9f9f9;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 10px;
`;

const EmptyMessage = styled.div`
  color: var(--text-secondary);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: italic;
`;

const TopIndicator = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--primary);
  color: white;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  z-index: 2;
`;

const StackItem = styled(motion.div)`
  width: 90%;
  height: 60px;
  background: ${props => props.highlight ? 'var(--primary)' : 'var(--primary-light)'};
  color: white;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  font-weight: 600;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
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

const StacksPage = () => {
  const [stack, setStack] = useState([]);
  const [value, setValue] = useState('');
  const [message, setMessage] = useState(null);
  const [operation, setOperation] = useState(null);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [activeTab, setActiveTab] = useState('visualization'); // 'visualization' or 'code'

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const handlePush = async () => {
    if (value === '') {
      showMessage('Please enter a value', 'error');
      return;
    }
    
    setOperation('push');
    
    const newStack = [...stack, value];
    setStack(newStack);
    
    // Highlight the pushed item
    setHighlightIndex(newStack.length - 1);
    
    showMessage(`Pushed "${value}" onto the stack`);
    setValue('');
    
    // Clear highlight after a moment
    setTimeout(() => {
      setHighlightIndex(-1);
    }, 2000);
  };

  const handlePop = async () => {
    if (stack.length === 0) {
      showMessage('Stack is empty', 'error');
      return;
    }
    
    setOperation('pop');
    
    // Highlight the item to be popped
    setHighlightIndex(stack.length - 1);
    
    // Wait a moment to show the highlight
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const poppedValue = stack[stack.length - 1];
    const newStack = stack.slice(0, -1);
    setStack(newStack);
    
    showMessage(`Popped "${poppedValue}" from the stack`);
    
    // Clear highlight
    setHighlightIndex(-1);
  };

  const handlePeek = () => {
    if (stack.length === 0) {
      showMessage('Stack is empty', 'error');
      return;
    }
    
    setOperation('peek');
    
    // Highlight the top item
    setHighlightIndex(stack.length - 1);
    
    showMessage(`Top of stack: "${stack[stack.length - 1]}"`);
    
    // Clear highlight after a moment
    setTimeout(() => {
      setHighlightIndex(-1);
    }, 2000);
  };

  const handleClear = () => {
    setStack([]);
    setHighlightIndex(-1);
    showMessage('Stack cleared');
  };

  const getOperationDescription = () => {
    switch (operation) {
      case 'push':
        return {
          title: 'Push Operation',
          description: 'Time Complexity: O(1). The push operation adds an element to the top of the stack.',
        };
      case 'pop':
        return {
          title: 'Pop Operation',
          description: 'Time Complexity: O(1). The pop operation removes the top element from the stack and returns it.',
        };
      case 'peek':
        return {
          title: 'Peek Operation',
          description: 'Time Complexity: O(1). The peek operation returns the top element of the stack without removing it.',
        };
      default:
        return null;
    }
  };

  const operationInfo = getOperationDescription();
  
  // Initialize stack with some example values
  useEffect(() => {
    const initialStack = ['Java', 'Python', 'JavaScript'];
    setStack(initialStack);
  }, []);

  const stackCode = `public class Stack<T> {
    private static class Node<T> {
        private T data;
        private Node<T> next;
        
        public Node(T data) {
            this.data = data;
        }
    }
    
    private Node<T> top;
    private int size;
    
    public Stack() {
        top = null;
        size = 0;
    }
    
    public void push(T item) {
        Node<T> newNode = new Node<>(item);
        newNode.next = top;
        top = newNode;
        size++;
    }
    
    public T pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        
        T item = top.data;
        top = top.next;
        size--;
        return item;
    }
    
    public T peek() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        
        return top.data;
    }
    
    public boolean isEmpty() {
        return top == null;
    }
    
    public int size() {
        return size;
    }
    
    public void clear() {
        top = null;
        size = 0;
    }
    
    public String toString() {
        StringBuilder sb = new StringBuilder("[");
        Node<T> current = top;
        
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

  return (
    <PageContainer>
      <Header>
        <Title>Stacks</Title>
        <Description>
          A stack is a linear data structure that follows the Last In First Out (LIFO) principle. Elements are added to and removed from the same end, called the top.
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
            <Instructions>
              <strong>Stack Properties:</strong>
              <ul>
                <li>Last In First Out (LIFO) data structure</li>
                <li>Elements are added to and removed from the top</li>
                <li>Common operations include push, pop, and peek</li>
                <li>All operations have O(1) time complexity</li>
                <li>Used in function calls, undo mechanisms, expression evaluation, and backtracking algorithms</li>
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
              <OperationButton onClick={handlePush}>Push</OperationButton>
              <OperationButton onClick={handlePop} variant="secondary">Pop</OperationButton>
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
            
            <StackContainer>
              {stack.length > 0 ? (
                <TopIndicator>Top</TopIndicator>
              ) : (
                <EmptyMessage>Stack is empty</EmptyMessage>
              )}
              
              <AnimatePresence>
                {stack.map((item, index) => (
                  <StackItem 
                    key={`${item}-${index}`}
                    highlight={index === highlightIndex}
                    initial={{ opacity: 0, y: -50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.8 }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 300, 
                      damping: 20
                    }}
                  >
                    {item}
                  </StackItem>
                ))}
              </AnimatePresence>
            </StackContainer>
            
            {operationInfo && (
              <OperationDescription>
                <OperationTitle>{operationInfo.title}</OperationTitle>
                <p>{operationInfo.description}</p>
              </OperationDescription>
            )}
          </>
        ) : (
          <CodeViewer 
            title="Stack Implementation" 
            code={stackCode}
          />
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default StacksPage; 