import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Create a context for algorithm state
const AlgorithmStateContext = createContext();

// Hook to access algorithm state
export const useAlgorithmState = () => {
  const context = useContext(AlgorithmStateContext);
  if (!context) {
    throw new Error('useAlgorithmState must be used within an AlgorithmStateProvider');
  }
  return context;
};

// Provider component for algorithm state
export const AlgorithmStateProvider = ({ children, algorithmId }) => {
  // Store all algorithm states in a single object with algorithm IDs as keys
  const [allAlgorithmStates, setAllAlgorithmStates] = useLocalStorage('algorithm-states', {});
  
  // Get the state for the current algorithm
  const algorithmState = allAlgorithmStates[algorithmId] || {};
  
  // Function to update the state for the current algorithm
  const updateAlgorithmState = (newState) => {
    setAllAlgorithmStates({
      ...allAlgorithmStates,
      [algorithmId]: {
        ...algorithmState,
        ...newState
      }
    });
  };
  
  return (
    <AlgorithmStateContext.Provider value={{ 
      algorithmState, 
      updateAlgorithmState 
    }}>
      {children}
    </AlgorithmStateContext.Provider>
  );
};

// HOC to wrap algorithm components with state persistence
export const withAlgorithmState = (WrappedComponent, algorithmId) => {
  return (props) => (
    <AlgorithmStateProvider algorithmId={algorithmId}>
      <WrappedComponent {...props} />
    </AlgorithmStateProvider>
  );
}; 