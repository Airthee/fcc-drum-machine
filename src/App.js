import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppHeader from './components/AppHeader';
import DrumMachine from './components/DrumMachine';

class App extends React.Component {
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
            <DrumMachine id="drum-machine" />
          </Col>
        </Row>
      </Container>
    );
  };
}

export default App;
