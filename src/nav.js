import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NaviBar() {
  const handleProfileClick = () => {
    window.location.href = '/Signup';
  };
    return (
      <div className="nav-container">
          <header>FOR ALL THE MOODS</header>
          <span className="profile material-icons" onClick={handleProfileClick}>account_circle</span>
      <Navbar expand="lg" className="nav-container">
        <Container className='me-auto'>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/Quiz">QUIZ</Nav.Link>
              <Nav.Link href="/Review">REVIEW</Nav.Link>
              <Nav.Link href="/Mood">MOOD</Nav.Link>
              <Nav.Link href="/Eg_mood">MOOD EXAMPLE</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
  }