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

const TreeContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  position: relative;
`;

const CategoryNode = styled(motion(Link))`
  background: var(--primary);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
  text-decoration: none;
  
  &:hover {
    background: var(--primary-light);
  }
`;

const CategoryTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const CategoryCount = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  font-size: 0.85rem;
`;

const AlgorithmsPage = () => {
  // Algorithm categories and their subcategories
  const algorithmCategories = [
    {
      id: 'sorting',
      title: 'Sorting Algorithms',
      description: 'Algorithms that put elements of a list in a certain order.',
      count: 6
    },
    {
      id: 'searching',
      title: 'Searching Algorithms',
      description: 'Algorithms for finding an item with specified properties within a collection.',
      count: 5
    },
    {
      id: 'graph',
      title: 'Graph Algorithms',
      description: 'Algorithms that operate on graphs to solve problems such as finding the shortest path.',
      count: 6
    },
    {
      id: 'dynamic',
      title: 'Dynamic Programming',
      description: 'A method for solving complex problems by breaking them down into simpler subproblems.',
      count: 4
    },
    {
      id: 'string',
      title: 'String Algorithms',
      description: 'Algorithms that operate on strings, such as pattern matching and text processing.',
      count: 6
    },
    {
      id: 'number-theory',
      title: 'Number Theory',
      description: 'Algorithms related to properties and relationships of numbers.',
      count: 4
    }
  ];

  return (
    <PageContainer>
      <Header>
        <Title>Algorithms</Title>
        <Description>
          Learn about sorting, searching, graph algorithms, dynamic programming, string matching and more through interactive visualizations.
        </Description>
      </Header>
      
      <TreeContainer>
        {algorithmCategories.map((category) => (
          <CategoryNode 
            to={`/algorithms/${category.id}`}
            key={category.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CategoryTitle>{category.title}</CategoryTitle>
            <CategoryCount>{category.count} algorithms</CategoryCount>
          </CategoryNode>
        ))}
      </TreeContainer>
    </PageContainer>
  );
};

export default AlgorithmsPage; 