import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// <nav>
// <ul>
// <li><Link to="/">HOME PAGE</Link></li>
// <li><Link to="/quiz">QUIZ</Link></li>
// <li><Link to="/review">REVIEW</Link></li>
// <li><Link to="/mood">MOOD</Link></li>
// <li><Link to="/eg_mood">MOOD EXAMPLE</Link></li>
// <li><Link to="/signup">SIGN-UP</Link></li>
// </ul>
// </nav>

function naviBar() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default BasicExample;