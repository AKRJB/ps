import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>Pioneer Scientific Industries</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <LinkContainer to="#all-products">
                <NavDropdown.Item>All Products</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="#charts">
                <NavDropdown.Item>Charts</NavDropdown.Item>
              </LinkContainer>
              {/* Add LinkContainer to other NavDropdown items as needed */}
            </NavDropdown>
            <LinkContainer to="/contact">
              <Nav.Link>Contact us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About us</Nav.Link>
            </LinkContainer>
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
