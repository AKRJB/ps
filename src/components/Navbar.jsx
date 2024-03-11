import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark">
      <Container fluid>
        <Navbar.Brand to ="/">Pioneer Scientific Industries</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className="text-white" to ='/'>Home</NavLink>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item to ="#all-products">All Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to ="#charts">Charts</NavDropdown.Item>
                <NavDropdown.Item to ="#microscopic-slides">Microscopic Slides</NavDropdown.Item>
                <NavDropdown.Item to ="#medical-charts">Medical Charts-Models</NavDropdown.Item>
                <NavDropdown.Item to ="#technical-institutes">Technical Institutes</NavDropdown.Item>
                <NavDropdown.Item to ="#nursing">Nursing</NavDropdown.Item>
            </NavDropdown>
            <NavLink className="text-white" to ='/contact'>Contact us</NavLink>
            <NavLink className="text-white" to ="/about">About us</NavLink>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;