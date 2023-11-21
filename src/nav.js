import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function naviBar() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">HOME PAGE</Nav.Link>
              <Nav.Link href="/quiz">QUIZ</Nav.Link>
              <Nav.Link href="/review">REVIEW</Nav.Link>
              <Nav.Link href="/mood">MOOD</Nav.Link>
              <Nav.Link href="/eg_mood">MOOD EXAMPLE (Nostalgic Drake)</Nav.Link>
              <Nav.Link href="/signup">SIGN-UP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default naviBar;