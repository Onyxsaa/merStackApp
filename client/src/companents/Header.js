import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useEffect } from 'react';


function NavScrollExample({ user, setUser }) {

  useEffect(() => {
    if(localStorage.getItem("user") && user === null) {
      setUser(JSON.parse(localStorage.getItem("user")))
    } 
  }, [user])
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand >Acm</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link >Anasayfa</Nav.Link>
          <NavDropdown title="Hakkımızda" id="basic-nav-dropdown">
            <NavDropdown.Item >Acm nedir</NavDropdown.Item>
            <NavDropdown.Item >
              Neler Yapıyoruz
            </NavDropdown.Item>
            <NavDropdown.Item>Ekibimiz</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link >Duyurular</Nav.Link>
          <Nav.Link >Blog</Nav.Link>
          <Nav.Link >İletişim</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      { user ? <Button onClick={(e) => {
        localStorage.removeItem("user")
        setUser(null)
      }}> Çıkış Yap</Button> : 
        <Button variant="primary" size="lg">
        <Link className="text-decoration-none" to="/auth">Giriş Yap</Link>
      </Button>}
    </Container>
    
  </Navbar>
  );
}

export default NavScrollExample;