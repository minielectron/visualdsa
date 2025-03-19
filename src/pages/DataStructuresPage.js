import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled(motion(Link))`
  background: var(--surface);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

const CardHeader = styled.div`
  background: var(--primary);
  color: white;
  padding: 1.5rem;
  text-align: center;
`;

const CardTitle = styled.h3`
  margin: 0;
`;

const CardBody = styled.div`
  padding: 1.5rem;
  flex: 1;
`;

const CardDescription = styled.p`
  margin-bottom: 1rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const CardFooter = styled.div`
  padding: 1rem 1.5rem;
  text-align: right;
  color: var(--primary);
  font-weight: 500;
`;

const dataStructures = [
  {
    id: 'arrays',
    title: 'Arrays',
    description: 'A collection of elements stored at contiguous memory locations. Basic operations include insertion, deletion, traversal, and searching.',
    link: '/data-structures/arrays',
    complexity: 'Access: O(1), Search: O(n), Insert: O(n), Delete: O(n)'
  },
  {
    id: 'linkedLists',
    title: 'Linked Lists',
    description: 'A linear collection of data elements, where each element points to the next. Types include singly linked, doubly linked, and circular linked lists.',
    link: '/data-structures/linked-lists',
    complexity: 'Access: O(n), Search: O(n), Insert: O(1), Delete: O(1)'
  },
  {
    id: 'stacks',
    title: 'Stacks',
    description: 'A LIFO (Last In First Out) data structure where elements are added and removed from the same end.',
    link: '/data-structures/stacks',
    complexity: 'Access: O(n), Search: O(n), Insert: O(1), Delete: O(1)'
  },
  {
    id: 'queues',
    title: 'Queues',
    description: 'A FIFO (First In First Out) data structure where elements are added at one end and removed from the other.',
    link: '/data-structures/queues',
    complexity: 'Access: O(n), Search: O(n), Insert: O(1), Delete: O(1)'
  },
  {
    id: 'trees',
    title: 'Trees',
    description: 'A hierarchical structure with a root value and subtrees of children. Includes binary trees, binary search trees, AVL trees, and more.',
    link: '/data-structures/trees',
    complexity: 'Access: O(log n), Search: O(log n), Insert: O(log n), Delete: O(log n)'
  },
  {
    id: 'graphs',
    title: 'Graphs',
    description: 'A collection of nodes connected by edges. Can be directed or undirected, weighted or unweighted.',
    link: '/data-structures/graphs',
    complexity: 'Access: O(n), Search: O(n), Insert: O(1), Delete: O(1)'
  },
  {
    id: 'hashTables',
    title: 'Hash Tables',
    description: 'A data structure that implements an associative array. Uses a hash function to compute an index into an array of buckets or slots.',
    link: '/data-structures/hash-tables',
    complexity: 'Access: N/A, Search: O(1)*, Insert: O(1)*, Delete: O(1)*'
  },
  {
    id: 'heaps',
    title: 'Heaps',
    description: 'A specialized tree-based data structure that satisfies the heap property. Used in priority queues and heap sort.',
    link: '/data-structures/heaps',
    complexity: 'Access: O(1), Search: O(n), Insert: O(log n), Delete: O(log n)'
  }
];

const DataStructuresPage = () => {
  return (
    <PageContainer>
      <Header>
        <Title>Data Structures</Title>
        <Description>
          Learn about various data structures, their operations, time complexity, and use cases through interactive visualizations.
        </Description>
      </Header>
      
      <CardsGrid>
        {dataStructures.map((ds, index) => (
          <Card 
            key={ds.id}
            to={ds.link}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CardHeader>
              <CardTitle>{ds.title}</CardTitle>
            </CardHeader>
            <CardBody>
              <CardDescription>
                {ds.description}
              </CardDescription>
              <small style={{ color: 'var(--text-secondary)' }}>
                <strong>Complexity:</strong><br />
                {ds.complexity}
              </small>
            </CardBody>
            <CardFooter>
              Explore &rarr;
            </CardFooter>
          </Card>
        ))}
      </CardsGrid>
    </PageContainer>
  );
};

export default DataStructuresPage; 