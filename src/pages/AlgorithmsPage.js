import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: calc(100vh - 70px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
  text-align: center;
`;

const ComingSoonBadge = styled.div`
  margin-top: 2rem;
  padding: 0.5rem 1.5rem;
  background: var(--primary-light);
  color: white;
  border-radius: 50px;
  font-weight: 500;
`;

const AlgorithmsPage = () => {
  return (
    <PageContainer>
      <Title>Algorithms</Title>
      <Description>
        Learn about sorting, searching, graph algorithms, dynamic programming, and more through interactive visualizations.
      </Description>
      <ComingSoonBadge>Coming Soon</ComingSoonBadge>
    </PageContainer>
  );
};

export default AlgorithmsPage; 