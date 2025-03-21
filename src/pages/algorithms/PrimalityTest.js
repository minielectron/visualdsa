import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  color: var(--primary);
  margin: 2rem 0 1rem;
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 0.5rem;
`;

const InputSection = styled.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`;

const MethodSelector = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const MethodButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.active ? 'var(--primary)' : 'var(--surface-variant)'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: 1px solid ${props => props.active ? 'var(--primary)' : 'var(--border)'};
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary)' : 'rgba(var(--primary-rgb), 0.1)'};
  }
`;

const Button = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 1rem;
  
  &:hover {
    background: var(--primary-light);
  }
  
  &:disabled {
    background: var(--disabled);
    cursor: not-allowed;
  }
`;

const VisualizationContainer = styled.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  overflow-x: auto;
`;

const StepsContainer = styled.div`
  margin: 1.5rem 0;
`;

const Step = styled(motion.div)`
  padding: 1rem;
  background-color: var(--surface-variant);
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  border-left: 4px solid ${props => props.type === 'success' ? 'var(--success)' : props.type === 'error' ? 'var(--error)' : 'var(--primary)'};
`;

const StepTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.div`
  color: var(--text-secondary);
`;

const Result = styled.div`
  background: ${props => props.isPrime ? 'rgba(var(--success-rgb), 0.1)' : 'rgba(var(--error-rgb), 0.1)'};
  border: 2px solid ${props => props.isPrime ? 'var(--success)' : 'var(--error)'};
  color: ${props => props.isPrime ? 'var(--success)' : 'var(--error)'};
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
`;

const ExplanationCard = styled.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin-bottom: 1rem;
`;

const CodeBlock = styled.pre`
  background: var(--code-bg);
  color: var(--code-text);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
`;

const TableHeader = styled.th`
  background-color: var(--primary-light);
  color: white;
  padding: 0.75rem;
  text-align: left;
  border: 1px solid var(--border);
`;

const TableCell = styled.td`
  padding: 0.75rem;
  border: 1px solid var(--border);
`;

const Note = styled.div`
  background: rgba(var(--info-rgb), 0.1);
  border-left: 4px solid var(--info);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
`;

// Helper functions
const isPrimeTrialDivision = (n, setSteps) => {
  const steps = [];
  steps.push({
    title: "Initialize",
    description: `Testing if ${n} is prime using trial division.`,
    type: "info"
  });
  
  if (n <= 1) {
    steps.push({
      title: "Check for edge cases",
      description: `${n} is less than or equal to 1. By definition, prime numbers are greater than 1.`,
      type: "error"
    });
    setSteps(steps);
    return { isPrime: false, steps };
  }
  
  if (n <= 3) {
    steps.push({
      title: "Check for edge cases",
      description: `${n} is 2 or 3, which are prime numbers.`,
      type: "success"
    });
    setSteps(steps);
    return { isPrime: true, steps };
  }
  
  if (n % 2 === 0 || n % 3 === 0) {
    steps.push({
      title: "Check divisibility by 2 and 3",
      description: `${n} is divisible by ${n % 2 === 0 ? '2' : '3'}, so it's not prime.`,
      type: "error"
    });
    setSteps(steps);
    return { isPrime: false, steps };
  }
  
  steps.push({
    title: "Begin trial division",
    description: `We'll check if ${n} is divisible by any number from 5 to sqrt(${n}).`,
    type: "info"
  });
  
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      steps.push({
        title: "Found a divisor",
        description: `${n} is divisible by ${n % i === 0 ? i : i + 2}, so it's not prime.`,
        type: "error"
      });
      setSteps(steps);
      return { isPrime: false, steps };
    }
    
    steps.push({
      title: "Check divisibility",
      description: `${n} is not divisible by ${i} or ${i + 2}.`,
      type: "info"
    });
    
    i += 6;
  }
  
  steps.push({
    title: "Conclusion",
    description: `${n} is not divisible by any number from 2 to sqrt(${n}), so it's prime.`,
    type: "success"
  });
  
  setSteps(steps);
  return { isPrime: true, steps };
};

// Modular exponentiation for large numbers
const modPow = (base, exponent, modulus) => {
  if (modulus === 1) return 0;
  let result = 1;
  base = base % modulus;
  
  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result = (result * base) % modulus;
    }
    exponent = Math.floor(exponent / 2);
    base = (base * base) % modulus;
  }
  
  return result;
};

const fermatPrimalityTest = (n, k = 5, setSteps) => {
  const steps = [];
  steps.push({
    title: "Initialize",
    description: `Testing if ${n} is prime using the Fermat Primality Test with ${k} iterations.`,
    type: "info"
  });
  
  if (n <= 1) {
    steps.push({
      title: "Check for edge cases",
      description: `${n} is less than or equal to 1. By definition, prime numbers are greater than 1.`,
      type: "error"
    });
    setSteps(steps);
    return { isPrime: false, steps };
  }
  
  if (n <= 3) {
    steps.push({
      title: "Check for edge cases",
      description: `${n} is 2 or 3, which are prime numbers.`,
      type: "success"
    });
    setSteps(steps);
    return { isPrime: true, steps };
  }
  
  if (n % 2 === 0) {
    steps.push({
      title: "Check if even",
      description: `${n} is divisible by 2, so it's not prime.`,
      type: "error"
    });
    setSteps(steps);
    return { isPrime: false, steps };
  }
  
  steps.push({
    title: "Fermat's Little Theorem",
    description: `Fermat's Little Theorem states that if p is prime and a is not divisible by p, then a^(p-1) ≡ 1 (mod p). We'll test this property with ${k} random values of a.`,
    type: "info"
  });
  
  // Perform the Fermat test
  for (let i = 0; i < k; i++) {
    // Choose a random integer a in the range [2, n-2]
    const a = 2 + Math.floor(Math.random() * (n - 3));
    
    steps.push({
      title: `Iteration ${i + 1}`,
      description: `Randomly selected a = ${a}. Checking if a^(n-1) ≡ 1 (mod n).`,
      type: "info"
    });
    
    const result = modPow(a, n - 1, n);
    
    if (result !== 1) {
      steps.push({
        title: `Failed at iteration ${i + 1}`,
        description: `${a}^(${n}-1) ≡ ${result} (mod ${n}), which is not 1. ${n} is definitely composite.`,
        type: "error"
      });
      setSteps(steps);
      return { isPrime: false, steps };
    }
    
    steps.push({
      title: `Passed iteration ${i + 1}`,
      description: `${a}^(${n}-1) ≡ 1 (mod ${n}). This is consistent with ${n} being prime.`,
      type: "info"
    });
  }
  
  steps.push({
    title: "Conclusion",
    description: `${n} passed ${k} Fermat tests. It is probably prime with a high degree of confidence. Note that the Fermat test can have false positives for certain numbers called Carmichael numbers.`,
    type: "success"
  });
  
  setSteps(steps);
  return { isPrime: true, steps };
};

const millerRabinTest = (n, k = 5, setSteps) => {
  const steps = [];
  steps.push({
    title: "Initialize",
    description: `Testing if ${n} is prime using the Miller-Rabin Primality Test with ${k} iterations.`,
    type: "info"
  });
  
  if (n <= 1) {
    steps.push({
      title: "Check for edge cases",
      description: `${n} is less than or equal to 1. By definition, prime numbers are greater than 1.`,
      type: "error"
    });
    setSteps(steps);
    return { isPrime: false, steps };
  }
  
  if (n <= 3) {
    steps.push({
      title: "Check for edge cases",
      description: `${n} is 2 or 3, which are prime numbers.`,
      type: "success"
    });
    setSteps(steps);
    return { isPrime: true, steps };
  }
  
  if (n % 2 === 0) {
    steps.push({
      title: "Check if even",
      description: `${n} is divisible by 2, so it's not prime.`,
      type: "error"
    });
    setSteps(steps);
    return { isPrime: false, steps };
  }
  
  // Write n-1 as 2^r * d where d is odd
  let r = 0;
  let d = n - 1;
  while (d % 2 === 0) {
    d /= 2;
    r++;
  }
  
  steps.push({
    title: "Decompose n-1",
    description: `Expressed n-1 = ${n-1} as 2^${r} * ${d} where ${d} is odd.`,
    type: "info"
  });
  
  // Witness loop
  for (let i = 0; i < k; i++) {
    // Choose a random integer a in the range [2, n-2]
    const a = 2 + Math.floor(Math.random() * (n - 3));
    
    steps.push({
      title: `Iteration ${i + 1}`,
      description: `Randomly selected a = ${a}. Checking if ${n} passes the Miller-Rabin test with this witness.`,
      type: "info"
    });
    
    let x = modPow(a, d, n);
    
    if (x === 1 || x === n - 1) {
      steps.push({
        title: `First test passed`,
        description: `a^d ≡ ${x} (mod ${n}), which is either 1 or -1. Continuing to next iteration.`,
        type: "info"
      });
      continue;
    }
    
    let isProbablyPrime = false;
    
    for (let j = 0; j < r - 1; j++) {
      x = modPow(x, 2, n);
      
      steps.push({
        title: `Square test ${j + 1}`,
        description: `a^(d*2^${j+1}) ≡ ${x} (mod ${n})`,
        type: "info"
      });
      
      if (x === n - 1) {
        isProbablyPrime = true;
        steps.push({
          title: `Found -1 remainder`,
          description: `a^(d*2^${j+1}) ≡ -1 (mod ${n}). This is consistent with ${n} being prime.`,
          type: "info"
        });
        break;
      }
    }
    
    if (!isProbablyPrime) {
      steps.push({
        title: `Failed at iteration ${i + 1}`,
        description: `${n} failed the Miller-Rabin test with witness ${a}. It is definitely composite.`,
        type: "error"
      });
      setSteps(steps);
      return { isPrime: false, steps };
    }
  }
  
  steps.push({
    title: "Conclusion",
    description: `${n} passed ${k} Miller-Rabin tests. It is probably prime with a very high degree of confidence.`,
    type: "success"
  });
  
  setSteps(steps);
  return { isPrime: true, steps };
};

const PrimalityTest = () => {
  const [number, setNumber] = useState(97);
  const [method, setMethod] = useState('trial');
  const [iterations, setIterations] = useState(5);
  const [steps, setSteps] = useState([]);
  const [result, setResult] = useState(null);
  const [isComputing, setIsComputing] = useState(false);
  
  const testPrimality = () => {
    setIsComputing(true);
    setSteps([]);
    setResult(null);
    
    // Use setTimeout to allow UI to update before computation
    setTimeout(() => {
      let testResult;
      
      switch (method) {
        case 'fermat':
          testResult = fermatPrimalityTest(number, iterations, setSteps);
          break;
        case 'miller-rabin':
          testResult = millerRabinTest(number, iterations, setSteps);
          break;
        case 'trial':
        default:
          testResult = isPrimeTrialDivision(number, setSteps);
          break;
      }
      
      setResult(testResult.isPrime);
      setIsComputing(false);
    }, 100);
  };
  
  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) <= 1000000)) {
      setNumber(value === '' ? '' : parseInt(value));
    }
  };
  
  const handleIterationsChange = (e) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) <= 100)) {
      setIterations(value === '' ? 5 : parseInt(value));
    }
  };
  
  return (
    <PageContainer>
      <Header>
        <Title>Primality Test</Title>
        <Description>
          Algorithms for determining whether a given number is prime.
        </Description>
      </Header>
      
      <InputSection>
        <SectionTitle>Input</SectionTitle>
        <InputGroup>
          <Label htmlFor="number">Number to test (1-1,000,000):</Label>
          <Input 
            id="number"
            type="number"
            min="1"
            max="1000000"
            value={number}
            onChange={handleNumberChange}
            disabled={isComputing}
          />
        </InputGroup>
        
        <Label>Test Method:</Label>
        <MethodSelector>
          <MethodButton 
            active={method === 'trial'} 
            onClick={() => setMethod('trial')}
            disabled={isComputing}
          >
            Trial Division
          </MethodButton>
          <MethodButton 
            active={method === 'fermat'} 
            onClick={() => setMethod('fermat')}
            disabled={isComputing}
          >
            Fermat Test
          </MethodButton>
          <MethodButton 
            active={method === 'miller-rabin'} 
            onClick={() => setMethod('miller-rabin')}
            disabled={isComputing}
          >
            Miller-Rabin Test
          </MethodButton>
        </MethodSelector>
        
        {(method === 'fermat' || method === 'miller-rabin') && (
          <InputGroup>
            <Label htmlFor="iterations">Number of iterations (1-100):</Label>
            <Input 
              id="iterations"
              type="number"
              min="1"
              max="100"
              value={iterations}
              onChange={handleIterationsChange}
              disabled={isComputing}
            />
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              More iterations increase accuracy for probabilistic tests.
            </p>
          </InputGroup>
        )}
        
        <Button onClick={testPrimality} disabled={isComputing || number === '' || number < 1}>
          {isComputing ? 'Computing...' : 'Test Primality'}
        </Button>
      </InputSection>
      
      <VisualizationContainer>
        <SectionTitle>Results</SectionTitle>
        
        {result !== null && (
          <Result isPrime={result}>
            {number} is {result ? 'PRIME' : 'NOT PRIME'}
          </Result>
        )}
        
        <StepsContainer>
          {steps.map((step, index) => (
            <Step 
              key={index}
              type={step.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Step>
          ))}
        </StepsContainer>
      </VisualizationContainer>
      
      <SectionTitle>How It Works</SectionTitle>
      <ExplanationCard>
        <p>
          A primality test is an algorithm for determining whether a given number is prime. 
          This implementation offers three different approaches to primality testing:
        </p>
        
        <h3>1. Trial Division</h3>
        <p>
          The most straightforward method is to test whether a number is divisible by any smaller number other than 1.
        </p>
        <ul>
          <li>Check if the number is less than or equal to 1 (not prime by definition).</li>
          <li>Check if the number is 2 or 3 (prime by definition).</li>
          <li>Check if the number is divisible by 2 or 3 (not prime).</li>
          <li>Check divisibility by numbers of the form 6k ± 1 up to the square root of the number.</li>
        </ul>
        
        <CodeBlock>
{`function isPrimeTrialDivision(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  
  // Check if n is divisible by 2 or 3
  if (n % 2 === 0 || n % 3 === 0) return false;
  
  // Check divisibility by numbers of form 6k ± 1
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  
  return true;
}`}
        </CodeBlock>
        
        <h3>2. Fermat Primality Test</h3>
        <p>
          Based on Fermat's Little Theorem, which states that if p is prime and a is not divisible by p, 
          then a<sup>p-1</sup> ≡ 1 (mod p).
        </p>
        <ul>
          <li>For a given number n, choose several random numbers a (2 ≤ a ≤ n-2).</li>
          <li>Compute a<sup>n-1</sup> mod n for each chosen a.</li>
          <li>If any result is not 1, then n is definitely composite.</li>
          <li>If all results are 1, then n is probably prime (but could still be a Carmichael number).</li>
        </ul>
        
        <p>
          The Fermat test is probabilistic—it can determine with certainty if a number is composite, 
          but can only state that a number is "probably prime" with some confidence.
        </p>
        
        <h3>3. Miller-Rabin Primality Test</h3>
        <p>
          An advanced probabilistic primality test that addresses the limitations of the Fermat test.
        </p>
        <ul>
          <li>Express n-1 as 2<sup>r</sup> × d, where d is odd.</li>
          <li>For several random numbers a (2 ≤ a ≤ n-2):</li>
          <li>Compute x = a<sup>d</sup> mod n.</li>
          <li>If x equals 1 or n-1, continue to the next iteration.</li>
          <li>Repeatedly square x up to r-1 times. If any result equals n-1, continue to the next iteration.</li>
          <li>If no result equals n-1, declare n composite.</li>
          <li>If all iterations pass, declare n probably prime.</li>
        </ul>
        
        <p>
          The Miller-Rabin test has a provably low probability of false positives, 
          making it one of the most reliable probabilistic primality tests.
        </p>
        
        <h3>Time Complexity Comparison</h3>
        
        <Table>
          <thead>
            <tr>
              <TableHeader>Algorithm</TableHeader>
              <TableHeader>Time Complexity</TableHeader>
              <TableHeader>Type</TableHeader>
              <TableHeader>Accuracy</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Trial Division</TableCell>
              <TableCell>O(√n)</TableCell>
              <TableCell>Deterministic</TableCell>
              <TableCell>100% accurate</TableCell>
            </tr>
            <tr>
              <TableCell>Fermat Test</TableCell>
              <TableCell>O(k log n)</TableCell>
              <TableCell>Probabilistic</TableCell>
              <TableCell>Can have false positives</TableCell>
            </tr>
            <tr>
              <TableCell>Miller-Rabin</TableCell>
              <TableCell>O(k log³ n)</TableCell>
              <TableCell>Probabilistic</TableCell>
              <TableCell>Error probability ≤ 4<sup>-k</sup></TableCell>
            </tr>
          </tbody>
        </Table>
        
        <Note>
          <p>
            For practical applications:
          </p>
          <ul>
            <li>Trial division is suitable for small numbers (up to ~10⁶).</li>
            <li>Fermat's test is quick but has issues with Carmichael numbers.</li>
            <li>Miller-Rabin is the preferred method for large numbers in cryptography and other applications.</li>
            <li>For extremely large numbers (hundreds of digits), more specialized algorithms like AKS (a deterministic polynomial-time algorithm) might be considered.</li>
          </ul>
        </Note>
      </ExplanationCard>
    </PageContainer>
  );
};

export default PrimalityTest; 