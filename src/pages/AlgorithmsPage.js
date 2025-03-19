import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
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

const CategoryNode = styled(motion.div)`
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
  
  &:hover {
    background: var(--primary-light);
  }
`;

const CategoryTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const ExpandIcon = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const SubcategoriesContainer = styled(motion.div)`
  margin-left: 2rem;
  position: relative;
  padding: 0.5rem 0 0.5rem 2rem;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0.75rem;
    height: 100%;
    width: 2px;
    background: var(--primary-light);
  }
`;

const SubcategoryNode = styled(motion.div)`
  background: var(--surface);
  color: var(--text-primary);
  padding: 0.75rem 1.25rem;
  border-radius: var(--border-radius);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  position: relative;
  cursor: pointer;
  
  &:hover {
    background: #f5f5f5;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -2rem;
    width: 2rem;
    height: 2px;
    background: var(--primary-light);
  }
`;

const AlgorithmItem = styled(motion(Link))`
  display: block;
  margin-left: 2rem;
  position: relative;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: var(--border-radius);
  color: var(--text-secondary);
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  
  &:hover {
    background: #f0f0f0;
    color: var(--primary);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -1.5rem;
    width: 1.5rem;
    height: 2px;
    background: var(--primary-light);
  }
`;

const ComingSoonBadge = styled.span`
  font-size: 0.7rem;
  background: var(--secondary);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  margin-left: 0.5rem;
  vertical-align: middle;
`;

const AlgorithmsPage = () => {
  // State to track expanded categories and subcategories
  const [expandedCategories, setExpandedCategories] = useState({
    sorting: true,
    searching: false,
    graph: false,
    dynamic: false,
    string: false
  });
  
  const [expandedSubcategories, setExpandedSubcategories] = useState({});
  
  // Toggle category expansion
  const toggleCategory = (category) => {
    setExpandedCategories({
      ...expandedCategories,
      [category]: !expandedCategories[category]
    });
  };
  
  // Toggle subcategory expansion
  const toggleSubcategory = (subcategory) => {
    setExpandedSubcategories({
      ...expandedSubcategories,
      [subcategory]: !expandedSubcategories[subcategory]
    });
  };
  
  // Algorithm categories and their subcategories
  const algorithmCategories = [
    {
      id: 'sorting',
      title: 'Sorting Algorithms',
      description: 'Algorithms that put elements of a list in a certain order.',
      algorithms: [
        { id: 'bubble', title: 'Bubble Sort', comingSoon: false },
        { id: 'selection', title: 'Selection Sort', comingSoon: false },
        { id: 'insertion', title: 'Insertion Sort', comingSoon: false },
        { id: 'merge', title: 'Merge Sort', comingSoon: false },
        { id: 'quick', title: 'Quick Sort', comingSoon: false },
        { id: 'heap', title: 'Heap Sort', comingSoon: false },
      ]
    },
    {
      id: 'searching',
      title: 'Searching Algorithms',
      description: 'Algorithms for finding an item with specified properties within a collection.',
      algorithms: [
        { id: 'linear', title: 'Linear Search', comingSoon: false },
        { id: 'binary', title: 'Binary Search', comingSoon: false },
        { id: 'jump', title: 'Jump Search', comingSoon: false },
        { id: 'interpolation', title: 'Interpolation Search', comingSoon: false },
        { id: 'exponential', title: 'Exponential Search', comingSoon: false },
      ]
    },
    {
      id: 'graph',
      title: 'Graph Algorithms',
      subcategories: [
        {
          id: 'traversal',
          title: 'Graph Traversal',
          algorithms: [
            { id: 'bfs', title: 'Breadth-First Search', comingSoon: false },
            { id: 'dfs', title: 'Depth-First Search', comingSoon: false },
          ]
        },
        {
          id: 'shortest',
          title: 'Shortest Path',
          algorithms: [
            { id: 'dijkstra', title: 'Dijkstra\'s Algorithm', comingSoon: true },
            { id: 'bellman-ford', title: 'Bellman-Ford', comingSoon: true },
            { id: 'floyd-warshall', title: 'Floyd-Warshall', comingSoon: true },
          ]
        },
        {
          id: 'mst',
          title: 'Minimum Spanning Tree',
          algorithms: [
            { id: 'kruskal', title: 'Kruskal\'s Algorithm', comingSoon: true },
            { id: 'prim', title: 'Prim\'s Algorithm', comingSoon: true },
          ]
        }
      ]
    },
    {
      id: 'dynamic',
      title: 'Dynamic Programming',
      subcategories: [
        {
          id: 'classic',
          title: 'Classic Problems',
          algorithms: [
            { id: 'fibonacci', title: 'Fibonacci Sequence', comingSoon: true },
            { id: 'knapsack', title: '0/1 Knapsack', comingSoon: true },
            { id: 'lcs', title: 'Longest Common Subsequence', comingSoon: true },
            { id: 'lis', title: 'Longest Increasing Subsequence', comingSoon: true },
          ]
        }
      ]
    },
    {
      id: 'string',
      title: 'String Algorithms',
      subcategories: [
        {
          id: 'pattern',
          title: 'Pattern Matching',
          algorithms: [
            { id: 'naive', title: 'Naive Pattern Matching', comingSoon: true },
            { id: 'kmp', title: 'Knuth-Morris-Pratt', comingSoon: true },
            { id: 'rabin-karp', title: 'Rabin-Karp', comingSoon: true },
          ]
        },
        {
          id: 'other',
          title: 'Other String Operations',
          algorithms: [
            { id: 'levenshtein', title: 'Levenshtein Distance', comingSoon: true },
            { id: 'manacher', title: 'Manacher\'s Algorithm', comingSoon: true },
          ]
        }
      ]
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
        <AnimatePresence>
          {algorithmCategories.map((category) => (
            <React.Fragment key={category.id}>
              <CategoryNode 
                onClick={() => toggleCategory(category.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CategoryTitle>{category.title}</CategoryTitle>
                <ExpandIcon expanded={expandedCategories[category.id]}>▼</ExpandIcon>
              </CategoryNode>
              
              {expandedCategories[category.id] && (
                <SubcategoriesContainer
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.subcategories ? (
                    // If the category has subcategories, render them
                    category.subcategories.map((subcategory) => (
                      <React.Fragment key={subcategory.id}>
                        <SubcategoryNode 
                          onClick={() => toggleSubcategory(`${category.id}-${subcategory.id}`)}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {subcategory.title}
                          <ExpandIcon 
                            expanded={expandedSubcategories[`${category.id}-${subcategory.id}`]} 
                            style={{ fontSize: '0.9rem' }}
                          >
                            ▼
                          </ExpandIcon>
                        </SubcategoryNode>
                        
                        <AnimatePresence>
                          {expandedSubcategories[`${category.id}-${subcategory.id}`] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {subcategory.algorithms.map((algorithm) => (
                                <AlgorithmItem 
                                  key={algorithm.id}
                                  to={algorithm.comingSoon ? '#' : `/algorithms/${category.id}/${algorithm.id}`}
                                  onClick={(e) => algorithm.comingSoon && e.preventDefault()}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {algorithm.title}
                                  {algorithm.comingSoon && <ComingSoonBadge>Coming Soon</ComingSoonBadge>}
                                </AlgorithmItem>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </React.Fragment>
                    ))
                  ) : (
                    // If the category doesn't have subcategories, render algorithms directly
                    category.algorithms && category.algorithms.map((algorithm) => (
                      <AlgorithmItem 
                        key={algorithm.id}
                        to={algorithm.comingSoon ? '#' : `/algorithms/${category.id}/${algorithm.id}`}
                        onClick={(e) => algorithm.comingSoon && e.preventDefault()}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {algorithm.title}
                        {algorithm.comingSoon && <ComingSoonBadge>Coming Soon</ComingSoonBadge>}
                      </AlgorithmItem>
                    ))
                  )}
                </SubcategoriesContainer>
              )}
            </React.Fragment>
          ))}
        </AnimatePresence>
      </TreeContainer>
    </PageContainer>
  );
};

export default AlgorithmsPage; 