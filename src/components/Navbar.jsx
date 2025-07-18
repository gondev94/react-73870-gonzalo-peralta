import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetIcon from './CartWidgetRIcons';
import '../App.css'

function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> <img className='logo' src="../logo.jpg" alt="logo de marca de cafeteria de especialidad" width="270px" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Procesos de café</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Más Vendidos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ofertas</NavDropdown.Item>

            </NavDropdown>
          </Nav>
          <CartWidgetIcon/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;