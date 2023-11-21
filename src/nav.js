import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NaviBar() {
    return (
      <Navbar expand="lg" className="nav-container">
        <Container className='me-auto'>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <Nav.Link href="/">HOME PAGE</Nav.Link>
              <Nav.Link href="/quiz">QUIZ</Nav.Link>
              <Nav.Link href="/review">REVIEW</Nav.Link>
              <Nav.Link href="/mood">MOOD</Nav.Link>
              <Nav.Link href="/eg_mood">MOOD EXAMPLE</Nav.Link>
              <Nav.Link href="/signup">SIGN-UP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  // export default naviBar;