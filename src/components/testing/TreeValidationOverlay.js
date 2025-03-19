import React, { useState } from 'react';
import styled from 'styled-components';

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
`;

const ExpectedNodePosition = styled.div`
  position: absolute;
  width: 54px;
  height: 54px;
  border: 2px dashed ${props => props.matched ? 'green' : 'red'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: 0.7;
`;

const ConnectionLine = styled.div`
  position: absolute;
  height: 2px;
  background-color: ${props => props.matched ? 'green' : 'red'};
  transform-origin: 0 50%;
  opacity: 0.5;
  pointer-events: none;
`;

const Controls = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 200;
  background: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  pointer-events: all;
`;

/**
 * Expected tree structure for validation
 * Each level is an array of nodes
 * Each node has a value and relative position (-1 for left, 0 for center, 1 for right, etc.)
 */
const expectedTreeStructure = {
  bst: [
    [{ value: 50, position: 0 }], // Root level
    [{ value: 30, position: -1 }, { value: 70, position: 1 }], // Level 1
    [{ value: 20, position: -1.5 }, { value: 40, position: -0.5 }, { value: 60, position: 0.5 }, { value: 80, position: 1.5 }], // Level 2
  ]
};

/**
 * Component to overlay expected node positions for visual testing
 */
const TreeValidationOverlay = ({ containerRef, treeType = 'bst' }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [activeNodes, setActiveNodes] = useState([]);
  
  // Get container dimensions and calculate node positions
  const calculatePositions = () => {
    if (!containerRef.current) return { nodes: [], connections: [] };
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    
    // Get actual nodes in the container
    const actualNodes = Array.from(containerRef.current.querySelectorAll('[data-node="true"]')).map(node => {
      const rect = node.getBoundingClientRect();
      return {
        value: node.textContent.replace(/[LR]/g, '').trim(), // Remove L/R indicators
        x: rect.left - containerRect.left + rect.width/2,
        y: rect.top - containerRect.top + rect.height/2
      };
    });
    
    // Calculate expected positions based on tree structure
    const positions = [];
    const treeStructure = expectedTreeStructure[treeType] || expectedTreeStructure.bst;
    
    treeStructure.forEach((level, levelIndex) => {
      const y = (levelIndex + 1) * (containerRect.height / (treeStructure.length + 1));
      
      level.forEach(node => {
        // Convert relative position to absolute x position
        const x = containerWidth/2 + (node.position * containerWidth/4);
        
        // Find matching actual node
        const actualNode = actualNodes.find(n => n.value === node.value.toString());
        const matched = actualNode && 
          Math.abs(actualNode.x - x) < 75 && // Allow 75px tolerance in x
          Math.abs(actualNode.y - y) < 75;   // Allow 75px tolerance in y
        
        positions.push({
          value: node.value,
          x,
          y,
          matched,
          actualX: actualNode?.x,
          actualY: actualNode?.y
        });
      });
    });
    
    // Calculate connections between nodes
    const connections = [];
    positions.forEach(node => {
      // Find all child nodes in the BST
      const childNodes = positions.filter(pos => {
        if (pos.value < node.value && treeStructure[positions.indexOf(node) + 1]?.some(n => n.value === pos.value)) {
          return true; // Left child
        }
        if (pos.value > node.value && treeStructure[positions.indexOf(node) + 1]?.some(n => n.value === pos.value)) {
          return true; // Right child
        }
        return false;
      });
      
      childNodes.forEach(child => {
        connections.push({
          from: { x: node.x, y: node.y },
          to: { x: child.x, y: child.y },
          matched: node.matched && child.matched
        });
      });
    });
    
    return { nodes: positions, connections };
  };
  
  const toggleOverlay = () => {
    if (!showOverlay) {
      const { nodes, connections } = calculatePositions();
      setActiveNodes(nodes);
      setActiveConnections(connections);
    }
    setShowOverlay(!showOverlay);
  };
  
  const [activeConnections, setActiveConnections] = useState([]);
  
  if (!containerRef.current) return null;
  
  return (
    <>
      <Controls>
        <button onClick={toggleOverlay}>
          {showOverlay ? 'Hide Validation Overlay' : 'Show Validation Overlay'}
        </button>
        {showOverlay && (
          <div style={{ marginTop: '10px' }}>
            <div style={{ color: 'green' }}>✓ Correct: {activeNodes.filter(n => n.matched).length}</div>
            <div style={{ color: 'red' }}>✗ Misaligned: {activeNodes.filter(n => !n.matched).length}</div>
          </div>
        )}
      </Controls>
      
      {showOverlay && (
        <OverlayContainer>
          {activeConnections.map((connection, i) => {
            const dx = connection.to.x - connection.from.x;
            const dy = connection.to.y - connection.from.y;
            const length = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx) * 180 / Math.PI;
            
            return (
              <ConnectionLine
                key={`connection-${i}`}
                matched={connection.matched}
                style={{
                  width: length,
                  left: connection.from.x,
                  top: connection.from.y,
                  transform: `rotate(${angle}deg)`
                }}
              />
            );
          })}
          
          {activeNodes.map((node, i) => (
            <ExpectedNodePosition
              key={`expected-node-${i}`}
              matched={node.matched}
              style={{
                left: node.x - 27, // Half width plus border
                top: node.y - 27   // Half height plus border
              }}
            >
              {node.value}
            </ExpectedNodePosition>
          ))}
        </OverlayContainer>
      )}
    </>
  );
};

export default TreeValidationOverlay; 