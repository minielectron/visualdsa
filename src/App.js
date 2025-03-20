import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
import GraphsPage from './pages/dataStructures/GraphsPage';
import HeapsPage from './pages/dataStructures/HeapsPage';
import BubbleSort from './pages/algorithms/BubbleSort';
import SelectionSort from './pages/algorithms/SelectionSort';
import InsertionSort from './pages/algorithms/InsertionSort';
import MergeSort from './pages/algorithms/MergeSort';
import QuickSort from './pages/algorithms/QuickSort';
import HeapSort from './pages/algorithms/HeapSort';
import BinarySearch from './pages/algorithms/BinarySearch';
import LinearSearch from './pages/algorithms/LinearSearch';
import BreadthFirstSearch from './pages/algorithms/BreadthFirstSearch';
import DepthFirstSearch from './pages/algorithms/DepthFirstSearch';
import JumpSearch from './pages/algorithms/JumpSearch';
import InterpolationSearch from './pages/algorithms/InterpolationSearch';
import ExponentialSearch from './pages/algorithms/ExponentialSearch';
import DijkstrasAlgorithm from './pages/algorithms/DijkstrasAlgorithm';
import BellmanFord from './pages/algorithms/BellmanFord';
import FloydWarshall from './pages/algorithms/FloydWarshall';
import KruskalsAlgorithm from './pages/algorithms/KruskalsAlgorithm';
import PrimsAlgorithm from './pages/algorithms/PrimsAlgorithm';

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
            <Route path="/data-structures/graphs" element={<GraphsPage />} />
            <Route path="/data-structures/heaps" element={<HeapsPage />} />
            
            {/* Algorithm routes */}
            {/* Sorting algorithms */}
            <Route path="/algorithms/sorting/bubble" element={<BubbleSort />} />
            <Route path="/algorithms/sorting/selection" element={<SelectionSort />} />
            <Route path="/algorithms/sorting/insertion" element={<InsertionSort />} />
            <Route path="/algorithms/sorting/merge" element={<MergeSort />} />
            <Route path="/algorithms/sorting/quick" element={<QuickSort />} />
            <Route path="/algorithms/sorting/heap" element={<HeapSort />} />
            
            {/* Searching algorithms */}
            <Route path="/algorithms/searching/binary" element={<BinarySearch />} />
            <Route path="/algorithms/searching/linear" element={<LinearSearch />} />
            <Route path="/algorithms/searching/jump" element={<JumpSearch />} />
            <Route path="/algorithms/searching/interpolation" element={<InterpolationSearch />} />
            <Route path="/algorithms/searching/exponential" element={<ExponentialSearch />} />
            
            {/* Graph algorithms */}
            <Route path="/algorithms/graph/bfs" element={<BreadthFirstSearch />} />
            <Route path="/algorithms/graph/dfs" element={<DepthFirstSearch />} />
            <Route path="/algorithms/graph/dijkstra" element={<DijkstrasAlgorithm />} />
            <Route path="/algorithms/graph/bellman-ford" element={<BellmanFord />} />
            <Route path="/algorithms/graph/floyd-warshall" element={<FloydWarshall />} />
            <Route path="/algorithms/graph/kruskal" element={<KruskalsAlgorithm />} />
            <Route path="/algorithms/graph/prim" element={<PrimsAlgorithm />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
