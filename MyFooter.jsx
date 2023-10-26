import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MyFooter() {
  const footerStyle = {
    color: 'white',
  };
  return (
    <Container>
      <Row>
        <Col style={{...footerStyle, textAlign: 'center'}}>EPIBOOKS - All Rights Reserved - 2023</Col>
      </Row>
    </Container>
  );
}

export default MyFooter;