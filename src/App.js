import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppHeader from './components/AppHeader';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="bg-light" style={{minHeight: '100vh'}}>
        <Row>
          <Col md={6}>
            <AppHeader />
          </Col>
        </Row>
        <Row>
          <Col>
            MY CONTENT
          </Col>
        </Row>
      </Container>
    );
  };
}

export default App;
