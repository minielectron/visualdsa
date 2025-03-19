import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import DataStructureDiagram from '../components/dataStructures/DataStructureDiagram';

const HomePageContainer = styled.div`
  min-height: calc(100vh - 70px);
`;

const Hero = styled.div`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--primary) 0%, #7c4dff 100%);
  color: white;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  opacity: 0.9;
`;

const DiagramSection = styled.section`
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: var(--primary);
`;

const SectionDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: var(--text-secondary);
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Hero>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          DSA Visualizer
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Interactive visualizations of data structures and algorithms to help you learn and understand core computer science concepts
        </Subtitle>
      </Hero>
      
      <DiagramSection>
        <SectionTitle>Explore Data Structures</SectionTitle>
        <SectionDescription>
          Click on any data structure below to learn more about it, or click on the center to reset the view.
        </SectionDescription>
        <DataStructureDiagram />
      </DiagramSection>
    </HomePageContainer>
  );
};

export default HomePage; 