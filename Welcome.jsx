import React from 'react';
import { Alert, Container } from 'react-bootstrap';


function Welcome() {
  return (
    <Container className="d-flex justify-content-center align-items-center"> 
      {['My App'].map((variant) => (
        <Alert key={variant} variant={variant} style={{ color: 'white'}}>
          Welcome to {variant}!
        </Alert>
      ))}
    </Container>
  );
}

export default Welcome;