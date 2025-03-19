import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/common/Navbar';
import HomePage from './pages/HomePage';
import DataStructuresPage from './pages/DataStructuresPage';
import AlgorithmsPage from './pages/AlgorithmsPage';
import ArraysPage from './pages/dataStructures/ArraysPage';
import LinkedListsPage from './pages/dataStructures/LinkedListsPage';
import StacksPage from './pages/dataStructures/StacksPage';
import QueuesPage from './pages/dataStructures/QueuesPage';
import TreesPage from './pages/dataStructures/TreesPage';
import HashTablesPage from './pages/dataStructures/HashTablesPage';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/data-structures" element={<DataStructuresPage />} />
            <Route path="/algorithms" element={<AlgorithmsPage />} />
            <Route path="/data-structures/arrays" element={<ArraysPage />} />
            <Route path="/data-structures/linked-lists" element={<LinkedListsPage />} />
            <Route path="/data-structures/stacks" element={<StacksPage />} />
            <Route path="/data-structures/queues" element={<QueuesPage />} />
            <Route path="/data-structures/trees" element={<TreesPage />} />
            <Route path="/data-structures/hash-tables" element={<HashTablesPage />} />
            {/* More data structure routes will be added as we implement them */}
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
