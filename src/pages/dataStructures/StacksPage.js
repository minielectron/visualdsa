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

const StackContainer = styled.div`
  width: 200px;
  min-height: 300px;
  border: 2px solid var(--primary-light);
  border-radius: var(--border-radius);
  margin: 2rem auto;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 1rem;
  background: #f9f9f9;
  overflow: hidden;
`;

const StackItem = styled(motion.div)`
  width: 90%;
  height: 50px;
  background: ${props => props.highlight ? 'var(--primary)' : 'var(--primary-light)'};
  color: white;
  border-radius: var(--border-radius);
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StackLabel = styled.div`
  position: absolute;
  bottom: -40px;
  left: 0;
  width: 100%;
  text-align: center;
  color: var(--text-secondary);
  font-weight: 500;
`;

const StackTop = styled.div`
  position: absolute;
  top: -40px;
  left: 0;
  width: 100%;
  text-align: center;
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
`;

const StacksPage = () => {
  const [stack, setStack] = useState([40, 30, 20, 10]);
  const [value, setValue] = useState('');
  const [message, setMessage] = useState(null);
  const [operation, setOperation] = useState(null);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [topValue, setTopValue] = useState(null);

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const handlePush = () => {
    if (value === '') {
      showMessage('Please enter a value', 'error');
      return;
    }

    const numValue = parseInt(value);

    if (isNaN(numValue)) {
      showMessage('Value must be a number', 'error');
      return;
    }

    if (stack.length >= 8) {
      showMessage('Stack overflow! Cannot push more items.', 'error');
      return;
    }

    setOperation('push');
    setStack([...stack, numValue]);
    setHighlightIndex(stack.length);
    showMessage(`Pushed ${numValue} onto the stack`);
    
    setTimeout(() => {
      setHighlightIndex(-1);
    }, 1500);
  };

  const handlePop = () => {
    if (stack.length === 0) {
      showMessage('Stack underflow! Cannot pop from an empty stack.', 'error');
      return;
    }

    setOperation('pop');
    setHighlightIndex(stack.length - 1);
    
    setTimeout(() => {
      const poppedValue = stack[stack.length - 1];
      setStack(stack.slice(0, -1));
      showMessage(`Popped ${poppedValue} from the stack`);
      setHighlightIndex(-1);
    }, 1000);
  };

  const handlePeek = () => {
    if (stack.length === 0) {
      showMessage('Stack is empty! Cannot peek.', 'error');
      return;
    }

    setOperation('peek');
    setHighlightIndex(stack.length - 1);
    setTopValue(stack[stack.length - 1]);
    
    setTimeout(() => {
      setHighlightIndex(-1);
      setTimeout(() => {
        setTopValue(null);
      }, 2000);
    }, 1500);
  };

  const handleClear = () => {
    if (stack.length === 0) {
      showMessage('Stack is already empty!', 'error');
      return;
    }

    setOperation('clear');
    setStack([]);
    showMessage('Stack cleared');
  };

  const getOperationDescription = () => {
    switch (operation) {
      case 'push':
        return {
          title: 'Push Operation',
          description: 'Time Complexity: O(1). The push operation adds an element to the top of the stack, which is a constant time operation.',
        };
      case 'pop':
        return {
          title: 'Pop Operation',
          description: 'Time Complexity: O(1). The pop operation removes the top element from the stack, which is a constant time operation.',
        };
      case 'peek':
        return {
          title: 'Peek Operation',
          description: 'Time Complexity: O(1). The peek operation looks at the top element without removing it, which is a constant time operation.',
        };
      case 'clear':
        return {
          title: 'Clear Operation',
          description: 'Time Complexity: O(1). The clear operation removes all elements from the stack at once.',
        };
      default:
        return null;
    }
  };

  const operationInfo = getOperationDescription();

  return (
    <PageContainer>
      <Header>
        <Title>Stacks</Title>
        <Description>
          A stack is a linear data structure that follows the Last In First Out (LIFO) principle. The insertion and deletion operations are performed at one end called the top of the stack.
        </Description>
      </Header>
      
      <VisualizationContainer>
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
        
        {topValue !== null && (
          <StatusPanel>
            <strong>Top Value:</strong> {topValue}
          </StatusPanel>
        )}
        
        <StackContainer>
          <StackTop>TOP</StackTop>
          <StackLabel>BOTTOM</StackLabel>
          
          <AnimatePresence>
            {stack.length === 0 ? (
              <EmptyMessage>Stack is empty</EmptyMessage>
            ) : (
              stack.map((item, index) => (
                <StackItem 
                  key={index}
                  highlight={index === highlightIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -100, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  {item}
                </StackItem>
              ))
            )}
          </AnimatePresence>
        </StackContainer>
        
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

export default StacksPage; 