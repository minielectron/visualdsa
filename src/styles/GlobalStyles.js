import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #6200ee;
    --primary-light: #bb86fc;
    --secondary: #03dac6;
    --background: #f5f5f5;
    --surface: #ffffff;
    --error: #b00020;
    --text-primary: #121212;
    --text-secondary: #666666;
    --border-radius: 8px;
    --transition: 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Segoe UI', sans-serif;
    background-color: var(--background);
    color: var(--text-primary);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--primary);
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-light);
    }
  }

  button {
    cursor: pointer;
    background: var(--primary);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
    font-weight: 500;
    
    &:hover {
      background: var(--primary-light);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export default GlobalStyles; 