import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark">
      <Container fluid>
        <Navbar.Brand href="/">Pioneer Scientific Industries</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='/'>Home</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#all-products">All Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#charts">Charts</NavDropdown.Item>
                <NavDropdown.Item href="#microscopic-slides">Microscopic Slides</NavDropdown.Item>
                <NavDropdown.Item href="#medical-charts">Medical Charts-Models</NavDropdown.Item>
                <NavDropdown.Item href="#technical-institutes">Technical Institutes</NavDropdown.Item>
                <NavDropdown.Item href="#nursing">Nursing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/contact'>Contact us</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>

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