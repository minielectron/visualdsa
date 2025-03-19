import React, { useState } from 'react';
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
`;

const LinkedListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
  overflow-x: auto;
  max-width: 100%;
  padding: 1rem 0;
`;

const ListNode = styled(motion.div)`
  position: relative;
  display: flex;
  margin-right: 10px;
  min-width: 120px;
`;

const NodeContent = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.highlight ? 'var(--primary)' : 'var(--primary-light)'};
  color: white;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NodePointer = styled.div`
  height: 2px;
  background-color: var(--primary);
  flex-grow: 1;
  margin: auto 5px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: -4px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid var(--primary);
  }
`;

const NullPointer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
  color: var(--text-secondary);
  margin: auto 0;
  font-weight: 600;
  font-size: 0.8rem;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
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

const LinkedListsPage = () => {
  const [linkedList, setLinkedList] = useState([10, 20, 30, 40]);
  const [value, setValue] = useState('');
  const [position, setPosition] = useState('');
  const [message, setMessage] = useState(null);
  const [operation, setOperation] = useState(null);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [listType, setListType] = useState('singly'); // singly or doubly
  const [activeTab, setActiveTab] = useState('visualization'); // 'visualization' or 'code'

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const handleInsertAtHead = () => {
    if (value === '') {
      showMessage('Please enter a value', 'error');
      return;
    }

    const numValue = parseInt(value);

    if (isNaN(numValue)) {
      showMessage('Value must be a number', 'error');
      return;
    }

    setOperation('insertHead');
    setHighlightIndex(0);
    
    setTimeout(() => {
      setLinkedList([numValue, ...linkedList]);
      showMessage(`Inserted ${numValue} at head`);
      setHighlightIndex(-1);
    }, 800);
  };

  const handleInsertAtTail = () => {
    if (value === '') {
      showMessage('Please enter a value', 'error');
      return;
    }

    const numValue = parseInt(value);

    if (isNaN(numValue)) {
      showMessage('Value must be a number', 'error');
      return;
    }

    setOperation('insertTail');
    setHighlightIndex(linkedList.length - 1);
    
    setTimeout(() => {
      setLinkedList([...linkedList, numValue]);
      showMessage(`Inserted ${numValue} at tail`);
      setHighlightIndex(-1);
    }, 800);
  };

  const handleInsertAt = () => {
    if (value === '' || position === '') {
      showMessage('Please enter both value and position', 'error');
      return;
    }

    const numValue = parseInt(value);
    const numPosition = parseInt(position);

    if (isNaN(numValue)) {
      showMessage('Value must be a number', 'error');
      return;
    }

    if (isNaN(numPosition) || numPosition < 0 || numPosition > linkedList.length) {
      showMessage('Invalid position', 'error');
      return;
    }

    setOperation('insertAt');
    
    // Animated insertion
    const insertAnimation = async () => {
      // Highlight nodes we traverse
      for (let i = 0; i < numPosition; i++) {
        setHighlightIndex(i);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      // Insert the new node
      const newList = [...linkedList];
      newList.splice(numPosition, 0, numValue);
      setLinkedList(newList);
      showMessage(`Inserted ${numValue} at position ${numPosition}`);
      
      setTimeout(() => {
        setHighlightIndex(-1);
      }, 800);
    };
    
    insertAnimation();
  };

  const handleRemoveHead = () => {
    if (linkedList.length === 0) {
      showMessage('List is empty', 'error');
      return;
    }

    setOperation('removeHead');
    setHighlightIndex(0);
    
    setTimeout(() => {
      const removedValue = linkedList[0];
      setLinkedList(linkedList.slice(1));
      showMessage(`Removed ${removedValue} from head`);
      setHighlightIndex(-1);
    }, 800);
  };

  const handleRemoveTail = () => {
    if (linkedList.length === 0) {
      showMessage('List is empty', 'error');
      return;
    }

    setOperation('removeTail');
    setHighlightIndex(linkedList.length - 1);
    
    setTimeout(() => {
      const removedValue = linkedList[linkedList.length - 1];
      setLinkedList(linkedList.slice(0, -1));
      showMessage(`Removed ${removedValue} from tail`);
      setHighlightIndex(-1);
    }, 800);
  };

  const handleRemoveAt = () => {
    if (position === '') {
      showMessage('Please enter a position', 'error');
      return;
    }

    const numPosition = parseInt(position);

    if (isNaN(numPosition) || numPosition < 0 || numPosition >= linkedList.length) {
      showMessage('Invalid position', 'error');
      return;
    }

    setOperation('removeAt');
    
    // Animated removal
    const removeAnimation = async () => {
      // Highlight nodes we traverse
      for (let i = 0; i <= numPosition; i++) {
        setHighlightIndex(i);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      // Remove the node
      const removedValue = linkedList[numPosition];
      const newList = [...linkedList];
      newList.splice(numPosition, 1);
      setLinkedList(newList);
      showMessage(`Removed ${removedValue} from position ${numPosition}`);
      
      setTimeout(() => {
        setHighlightIndex(-1);
      }, 800);
    };
    
    removeAnimation();
  };

  const handleSearch = () => {
    if (value === '') {
      showMessage('Please enter a value to search', 'error');
      return;
    }

    const numValue = parseInt(value);

    if (isNaN(numValue)) {
      showMessage('Value must be a number', 'error');
      return;
    }

    setOperation('search');
    
    // Animated search
    const searchAnimation = async () => {
      for (let i = 0; i < linkedList.length; i++) {
        setHighlightIndex(i);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (linkedList[i] === numValue) {
          showMessage(`Found ${numValue} at position ${i}`);
          setTimeout(() => {
            setHighlightIndex(-1);
          }, 1500);
          return;
        }
      }
      
      setHighlightIndex(-1);
      showMessage(`Value ${numValue} not found in the list`, 'error');
    };
    
    searchAnimation();
  };

  const getOperationDescription = () => {
    switch (operation) {
      case 'insertHead':
        return {
          title: 'Insert at Head',
          description: 'Time Complexity: O(1). In a linked list, inserting at the head only requires updating the head pointer, making it a constant time operation.',
        };
      case 'insertTail':
        return {
          title: 'Insert at Tail',
          description: listType === 'singly' 
            ? 'Time Complexity: O(n) for singly linked list. We need to traverse to the end of the list to add an element there.' 
            : 'Time Complexity: O(1) for doubly linked list. With a tail pointer, we can directly access and update the tail.',
        };
      case 'insertAt':
        return {
          title: 'Insert at Position',
          description: 'Time Complexity: O(n). We need to traverse the list to find the insertion point, taking linear time in the worst case.',
        };
      case 'removeHead':
        return {
          title: 'Remove from Head',
          description: 'Time Complexity: O(1). Removing from the head only requires updating the head pointer, making it a constant time operation.',
        };
      case 'removeTail':
        return {
          title: 'Remove from Tail',
          description: listType === 'singly' 
            ? 'Time Complexity: O(n) for singly linked list. We need to traverse to find the node before the tail.' 
            : 'Time Complexity: O(1) for doubly linked list. With a tail pointer, we can directly update the previous node.',
        };
      case 'removeAt':
        return {
          title: 'Remove at Position',
          description: 'Time Complexity: O(n). We need to traverse the list to find the node, taking linear time in the worst case.',
        };
      case 'search':
        return {
          title: 'Search Operation',
          description: 'Time Complexity: O(n). In the worst case, we may need to search through the entire list to find an element.',
        };
      default:
        return null;
    }
  };

  const operationInfo = getOperationDescription();

  const singlyLinkedListCode = `public class SinglyLinkedList {
    private Node head;
    private int size;
    
    private class Node {
        int value;
        Node next;
        
        Node(int value) {
            this.value = value;
            this.next = null;
        }
    }
    
    public SinglyLinkedList() {
        head = null;
        size = 0;
    }
    
    public void insert(int value, int position) {
        if (position < 0 || position > size)
            throw new IndexOutOfBoundsException("Invalid position");
            
        Node newNode = new Node(value);
        
        if (position == 0) {
            newNode.next = head;
            head = newNode;
        } else {
            Node current = head;
            for (int i = 0; i < position - 1; i++)
                current = current.next;
            newNode.next = current.next;
            current.next = newNode;
        }
        
        size++;
    }
    
    public void delete(int position) {
        if (position < 0 || position >= size)
            throw new IndexOutOfBoundsException("Invalid position");
            
        if (position == 0) {
            head = head.next;
        } else {
            Node current = head;
            for (int i = 0; i < position - 1; i++)
                current = current.next;
            current.next = current.next.next;
        }
        
        size--;
    }
    
    public int search(int value) {
        Node current = head;
        int position = 0;
        
        while (current != null) {
            if (current.value == value)
                return position;
            current = current.next;
            position++;
        }
        
        return -1;
    }
}`;

  const doublyLinkedListCode = `public class DoublyLinkedList {
    private Node head;
    private Node tail;
    private int size;
    
    private class Node {
        int value;
        Node prev;
        Node next;
        
        Node(int value) {
            this.value = value;
            this.prev = null;
            this.next = null;
        }
    }
    
    public DoublyLinkedList() {
        head = null;
        tail = null;
        size = 0;
    }
    
    public void insert(int value, int position) {
        if (position < 0 || position > size)
            throw new IndexOutOfBoundsException("Invalid position");
            
        Node newNode = new Node(value);
        
        if (size == 0) {
            head = tail = newNode;
        } else if (position == 0) {
            newNode.next = head;
            head.prev = newNode;
            head = newNode;
        } else if (position == size) {
            newNode.prev = tail;
            tail.next = newNode;
            tail = newNode;
        } else {
            Node current = head;
            for (int i = 0; i < position - 1; i++)
                current = current.next;
            newNode.next = current.next;
            newNode.prev = current;
            current.next.prev = newNode;
            current.next = newNode;
        }
        
        size++;
    }
    
    public void delete(int position) {
        if (position < 0 || position >= size)
            throw new IndexOutOfBoundsException("Invalid position");
            
        if (size == 1) {
            head = tail = null;
        } else if (position == 0) {
            head = head.next;
            head.prev = null;
        } else if (position == size - 1) {
            tail = tail.prev;
            tail.next = null;
        } else {
            Node current = head;
            for (int i = 0; i < position - 1; i++)
                current = current.next;
            current.next = current.next.next;
            current.next.prev = current;
        }
        
        size--;
    }
}`;

  return (
    <PageContainer>
      <Header>
        <Title>Linked Lists</Title>
        <Description>
          A linked list is a linear data structure where each element is a separate object containing a data item and a reference to the next node in the sequence.
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
                active={listType === 'singly'} 
                onClick={() => setListType('singly')}
              >
                Singly Linked List
              </OptionButton>
              <OptionButton 
                active={listType === 'doubly'} 
                onClick={() => setListType('doubly')}
              >
                Doubly Linked List
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
              <div>
                <label>Position: </label>
                <Input 
                  type="text" 
                  value={position} 
                  onChange={e => setPosition(e.target.value)} 
                  placeholder="Position" 
                />
              </div>
            </ControlsContainer>
            
            <ControlsContainer>
              <OperationButton onClick={handleInsertAtHead}>Insert at Head</OperationButton>
              <OperationButton onClick={handleInsertAtTail}>Insert at Tail</OperationButton>
              <OperationButton onClick={handleInsertAt} variant="secondary">Insert at Position</OperationButton>
              <OperationButton onClick={handleRemoveHead}>Remove Head</OperationButton>
              <OperationButton onClick={handleRemoveTail}>Remove Tail</OperationButton>
              <OperationButton onClick={handleRemoveAt} variant="secondary">Remove at Position</OperationButton>
              <OperationButton onClick={handleSearch}>Search</OperationButton>
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
            
            <LinkedListContainer>
              {linkedList.length === 0 ? (
                <NullPointer>NULL</NullPointer>
              ) : (
                <>
                  {linkedList.map((node, index) => (
                    <ListNode key={index}>
                      {listType === 'doubly' && index > 0 && (
                        <NodePointer 
                          style={{ 
                            transform: 'rotate(180deg)',
                            position: 'absolute',
                            left: '-15px',
                            top: '30px',
                            width: '15px'
                          }}
                        />
                      )}
                      <NodeContent highlight={index === highlightIndex}>
                        {node}
                      </NodeContent>
                      {index < linkedList.length - 1 && <NodePointer />}
                      {index === linkedList.length - 1 && <NullPointer>NULL</NullPointer>}
                    </ListNode>
                  ))}
                </>
              )}
            </LinkedListContainer>
            
            {operationInfo && (
              <OperationDescription>
                <OperationTitle>{operationInfo.title}</OperationTitle>
                <p>{operationInfo.description}</p>
              </OperationDescription>
            )}
          </>
        ) : (
          <div>
            {listType === 'singly' && (
              <CodeViewer 
                title="Singly Linked List Implementation" 
                code={singlyLinkedListCode}
              />
            )}
            {listType === 'doubly' && (
              <CodeViewer 
                title="Doubly Linked List Implementation" 
                code={doublyLinkedListCode}
              />
            )}
          </div>
        )}
      </VisualizationContainer>
    </PageContainer>
  );
};

export default LinkedListsPage; 