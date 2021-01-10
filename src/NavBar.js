import {Navbar, Container} from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
          <Navbar.Brand href="#home">Yaritama</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;