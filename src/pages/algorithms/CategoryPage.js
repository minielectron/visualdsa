import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

const AlgorithmGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const AlgorithmCard = styled(Link)`
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  padding: 1.5rem;
  text-decoration: none;
  color: var(--text-primary);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }
`;

const AlgorithmTitle = styled.h3`
  color: var(--primary);
  margin-top: 0;
  margin-bottom: 1rem;
`;

const AlgorithmDescription = styled.p`
  color: var(--text-secondary);
  margin: 0;
`;

const ComingSoonBadge = styled.span`
  font-size: 0.8rem;
  background: var(--secondary);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  margin-left: 0.5rem;
  vertical-align: middle;
`;

const NoAlgorithmsMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--text-secondary);
  background: var(--surface);
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
`;

const CategoryPage = () => {
  const { categoryId } = useParams();
  
  // Categories and their descriptions
  const categories = {
    'sorting': {
      title: 'Sorting Algorithms',
      description: 'Algorithms that put elements of a list in a certain order.'
    },
    'searching': {
      title: 'Searching Algorithms',
      description: 'Algorithms for finding an item with specified properties within a collection.'
    },
    'graph': {
      title: 'Graph Algorithms',
      description: 'Algorithms that operate on graphs to solve problems such as finding the shortest path.'
    },
    'dynamic': {
      title: 'Dynamic Programming',
      description: 'A method for solving complex problems by breaking them down into simpler subproblems.'
    },
    'string': {
      title: 'String Algorithms',
      description: 'Algorithms that operate on strings, such as pattern matching and text processing.'
    },
    'number-theory': {
      title: 'Number Theory',
      description: 'Algorithms related to properties and relationships of numbers.'
    }
  };
  
  // Get algorithms for the current category
  const getAlgorithmsForCategory = () => {
    const algorithmsByCategory = {
      'sorting': [
        { id: 'bubble', title: 'Bubble Sort', description: 'A simple comparison-based sorting algorithm.', comingSoon: false },
        { id: 'selection', title: 'Selection Sort', description: 'An in-place comparison sorting algorithm.', comingSoon: false },
        { id: 'insertion', title: 'Insertion Sort', description: 'A simple sorting algorithm that builds the sorted array one item at a time.', comingSoon: false },
        { id: 'merge', title: 'Merge Sort', description: 'An efficient, stable, comparison-based, divide and conquer sorting algorithm.', comingSoon: false },
        { id: 'quick', title: 'Quick Sort', description: 'An efficient sorting algorithm that uses divide-and-conquer.', comingSoon: false },
        { id: 'heap', title: 'Heap Sort', description: 'A comparison-based sorting algorithm that uses a binary heap data structure.', comingSoon: false }
      ],
      'searching': [
        { id: 'linear', title: 'Linear Search', description: 'A simple search algorithm that finds an element in a list by checking each element.', comingSoon: false },
        { id: 'binary', title: 'Binary Search', description: 'A fast search algorithm that works on sorted arrays.', comingSoon: false },
        { id: 'jump', title: 'Jump Search', description: 'A search algorithm that works on sorted arrays by jumping ahead by fixed steps.', comingSoon: false },
        { id: 'interpolation', title: 'Interpolation Search', description: 'An improved variant of binary search for uniformly distributed sorted arrays.', comingSoon: false },
        { id: 'exponential', title: 'Exponential Search', description: 'A search algorithm that works on sorted arrays and finds a range where the element may be present.', comingSoon: false }
      ],
      'graph': [
        { id: 'bfs', title: 'Breadth-First Search', description: 'An algorithm for traversing tree or graph data structures starting from the root.', comingSoon: false },
        { id: 'dfs', title: 'Depth-First Search', description: 'An algorithm for traversing tree or graph data structures starting at the root.', comingSoon: false },
        { id: 'dijkstra', title: 'Dijkstra\'s Algorithm', description: 'An algorithm for finding the shortest paths between nodes in a graph.', comingSoon: false },
        { id: 'bellman-ford', title: 'Bellman-Ford Algorithm', description: 'An algorithm for computing shortest paths from a source vertex to all other vertices.', comingSoon: false },
        { id: 'floyd-warshall', title: 'Floyd-Warshall Algorithm', description: 'An algorithm for finding shortest paths in a weighted graph.', comingSoon: false },
        { id: 'kruskal', title: 'Kruskal\'s Algorithm', description: 'A minimum spanning tree algorithm that finds an edge of the least weight.', comingSoon: false },
        { id: 'prim', title: 'Prim\'s Algorithm', description: 'A greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.', comingSoon: false },
        { id: 'topological-sort', title: 'Topological Sort', description: 'A linear ordering of vertices such that for every directed edge, the starting vertex comes before the ending vertex.', comingSoon: false }
      ],
      'dynamic': [
        { id: 'fibonacci', title: 'Fibonacci Sequence', description: 'A sequence where each number is the sum of the two preceding ones.', comingSoon: false },
        { id: 'knapsack', title: '0/1 Knapsack', description: 'A problem in combinatorial optimization where items must be selected to maximize value.', comingSoon: false },
        { id: 'lcs', title: 'Longest Common Subsequence', description: 'Finding the longest subsequence common to all sequences in a set of sequences.', comingSoon: false },
        { id: 'lis', title: 'Longest Increasing Subsequence', description: 'Finding a subsequence in which the elements are in sorted order from lowest to highest.', comingSoon: false }
      ],
      'string': [
        { id: 'naive', title: 'Naive Pattern Matching', description: 'A simple algorithm for finding occurrences of a pattern in a text.', comingSoon: false },
        { id: 'kmp', title: 'Knuth-Morris-Pratt', description: 'An efficient pattern searching algorithm that uses a prefix function.', comingSoon: false },
        { id: 'rabin-karp', title: 'Rabin-Karp', description: 'A string-searching algorithm that uses hashing.', comingSoon: false },
        { id: 'boyer-moore', title: 'Boyer-Moore', description: 'An efficient string search algorithm that skips sections of the text.', comingSoon: false },
        { id: 'levenshtein', title: 'Levenshtein Distance', description: 'A measure of the difference between two strings.', comingSoon: false },
        { id: 'manacher', title: 'Manacher\'s Algorithm', description: 'Finding the longest palindromic substring in linear time.', comingSoon: false }
      ],
      'number-theory': [
        { id: 'fibonacci', title: 'Fibonacci Sequence', description: 'A sequence where each number is the sum of the two preceding ones.', comingSoon: false },
        { id: 'zeckendorf', title: 'Zeckendorf\'s Representation', description: 'Representing numbers as sums of Fibonacci numbers.', comingSoon: false },
        { id: 'primality', title: 'Primality Test', description: 'Determining whether a given number is prime.', comingSoon: false },
        { id: 'sieve', title: 'Sieve of Eratosthenes', description: 'Finding all prime numbers up to a given limit.', comingSoon: false }
      ]
    };
    
    return algorithmsByCategory[categoryId] || [];
  };
  
  const category = categories[categoryId] || { title: 'Unknown Category', description: '' };
  const algorithms = getAlgorithmsForCategory();
  
  return (
    <PageContainer>
      <Header>
        <Title>{category.title}</Title>
        <Description>{category.description}</Description>
      </Header>
      
      {algorithms.length > 0 ? (
        <AlgorithmGrid>
          {algorithms.map(algorithm => (
            <AlgorithmCard 
              key={algorithm.id} 
              to={algorithm.comingSoon ? '#' : `/algorithms/${categoryId}/${algorithm.id}`}
              onClick={e => algorithm.comingSoon && e.preventDefault()}
            >
              <AlgorithmTitle>
                {algorithm.title}
                {algorithm.comingSoon && <ComingSoonBadge>Coming Soon</ComingSoonBadge>}
              </AlgorithmTitle>
              <AlgorithmDescription>{algorithm.description}</AlgorithmDescription>
            </AlgorithmCard>
          ))}
        </AlgorithmGrid>
      ) : (
        <NoAlgorithmsMessage>
          <h2>No algorithms found for this category</h2>
          <p>Please check the category ID or add algorithms to this category.</p>
        </NoAlgorithmsMessage>
      )}
    </PageContainer>
  );
};

export default CategoryPage; 