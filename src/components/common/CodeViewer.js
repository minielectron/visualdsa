import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CodeViewerContainer = styled.div`
  background: #1e1e1e;
  border-radius: var(--border-radius);
  overflow: hidden;
  margin: 2rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const CodeHeader = styled.div`
  background: #2d2d2d;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #3d3d3d;
`;

const CodeTitle = styled.h3`
  color: #fff;
  margin: 0;
  font-size: 1rem;
`;

const CodeContent = styled.pre`
  margin: 0;
  padding: 1rem;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #d4d4d4;
  white-space: pre;
  tab-size: 4;
`;

const CodeViewer = ({ title, code }) => {
  return (
    <CodeViewerContainer>
      <CodeHeader>
        <CodeTitle>{title}</CodeTitle>
      </CodeHeader>
      <CodeContent>
        <code>{code}</code>
      </CodeContent>
    </CodeViewerContainer>
  );
};

export default CodeViewer; 