import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DiagramContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 70vh;
  position: relative;
`;

const CenterNode = styled(motion.div)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(98, 0, 238, 0.3);
  cursor: pointer;
  z-index: 3;
  position: relative;
`;

const DataStructureNode = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--surface);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--primary-light);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 2;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(98, 0, 238, 0.2);
  }
`;

const ConnectionLine = styled(motion.div)`
  position: absolute;
  height: 2px;
  background: var(--primary-light);
  transform-origin: center left;
  z-index: 1;
  left: 50%;
  top: 50%;
`;

const InfoPanel = styled(motion.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 300px;
  background: var(--surface);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 10;
`;

const InfoTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: var(--primary);
`;

const InfoDescription = styled.p`
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const ExploreButton = styled(Link)`
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background: var(--primary-light);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const dataStructures = [
  {
    id: 'arrays',
    title: 'Arrays',
    angle: 0,
    distance: 200,
    description: 'A collection of elements stored at contiguous memory locations. Basic operations include insertion, deletion, traversal, and searching.',
    link: '/data-structures/arrays'
  },
  {
    id: 'linkedLists',
    title: 'Linked Lists',
    angle: 45,
    distance: 200,
    description: 'A linear collection of data elements, where each element points to the next. Types include singly linked, doubly linked, and circular linked lists.',
    link: '/data-structures/linked-lists'
  },
  {
    id: 'stacks',
    title: 'Stacks',
    angle: 90,
    distance: 200,
    description: 'A LIFO (Last In First Out) data structure where elements are added and removed from the same end.',
    link: '/data-structures/stacks'
  },
  {
    id: 'queues',
    title: 'Queues',
    angle: 135,
    distance: 200,
    description: 'A FIFO (First In First Out) data structure where elements are added at one end and removed from the other.',
    link: '/data-structures/queues'
  },
  {
    id: 'trees',
    title: 'Trees',
    angle: 180,
    distance: 200,
    description: 'A hierarchical structure with a root value and subtrees of children. Includes binary trees, binary search trees, AVL trees, and more.',
    link: '/data-structures/trees'
  },
  {
    id: 'graphs',
    title: 'Graphs',
    angle: 225,
    distance: 200,
    description: 'A collection of nodes connected by edges. Can be directed or undirected, weighted or unweighted.',
    link: '/data-structures/graphs'
  },
  {
    id: 'hashTables',
    title: 'Hash Tables',
    angle: 270,
    distance: 200,
    description: 'A data structure that implements an associative array. Uses a hash function to compute an index into an array of buckets or slots.',
    link: '/data-structures/hash-tables'
  },
  {
    id: 'heaps',
    title: 'Heaps',
    angle: 315,
    distance: 200,
    description: 'A specialized tree-based data structure that satisfies the heap property. Used in priority queues and heap sort.',
    link: '/data-structures/heaps'
  }
];

const DataStructureDiagram = () => {
  const [activeDS, setActiveDS] = useState(null);
  const [isPulsingCenter, setIsPulsingCenter] = useState(true);

  const handleClick = (ds) => {
    setActiveDS(activeDS === ds.id ? null : ds);
    setIsPulsingCenter(false);
  };

  const getPosition = (angle, distance) => {
    const angleInRadians = (angle * Math.PI) / 180;
    return {
      x: Math.cos(angleInRadians) * distance,
      y: Math.sin(angleInRadians) * distance
    };
  };

  const resetView = () => {
    setActiveDS(null);
    setIsPulsingCenter(true);
  };

  return (
    <DiagramContainer>
      <CenterNode 
        onClick={resetView}
        animate={{ 
          scale: isPulsingCenter ? [1, 1.05, 1] : 1 
        }}
        transition={{ 
          repeat: isPulsingCenter ? Infinity : 0, 
          duration: 2 
        }}
      >
        Data<br />Structures
      </CenterNode>
      
      {dataStructures.map((ds) => {
        const position = getPosition(ds.angle, ds.distance);
        return (
          <React.Fragment key={ds.id}>
            <DataStructureNode
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{
                opacity: 1,
                x: position.x,
                y: position.y,
                scale: activeDS === ds.id ? 1.2 : 1,
                boxShadow: activeDS === ds.id 
                  ? '0 8px 25px rgba(98, 0, 238, 0.3)'
                  : '0 4px 10px rgba(0, 0, 0, 0.1)'
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 12 }}
              onClick={() => handleClick(ds)}
              whileHover={{ scale: activeDS === ds.id ? 1.25 : 1.1 }}
            >
              {ds.title}
            </DataStructureNode>
            
            <ConnectionLine
              initial={{ opacity: 0, width: 0 }}
              animate={{ 
                opacity: 1, 
                width: ds.distance,
                rotate: ds.angle,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </React.Fragment>
        );
      })}
      
      {activeDS && (
        <InfoPanel
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <InfoTitle>{activeDS.title}</InfoTitle>
          <InfoDescription>{activeDS.description}</InfoDescription>
          <ExploreButton to={activeDS.link}>Explore {activeDS.title}</ExploreButton>
        </InfoPanel>
      )}
    </DiagramContainer>
  );
};

export default DataStructureDiagram; 