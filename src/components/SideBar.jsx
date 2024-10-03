import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Book, House } from "react-bootstrap-icons";
import logo from "../logo/logo.png";

const SideBar = (props) => {
  return (
    <>
      <aside className="col col-2 d-md-none d-lg-block">
        <Navbar expand="md" className="flex-column align-items-start" fixed="left">
          <Container className="flex-column align-items-start">
            <Navbar.Brand href="index.html">
              <img src={logo} alt="Spotify Logo" width="131" height="40" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="sidebar-nav" />
            <Navbar.Collapse id="sidebar-nav">
              <Nav className="flex-column">
                <Nav.Link href="#" className="d-flex align-items-center">
                  <House className="me-2" /> Home
                </Nav.Link>
                <Nav.Link href="#" className="d-flex align-items-center">
                  <Book className="me-2" /> Your Library
                </Nav.Link>
                <Form className="d-flex mt-3">
                  <FormControl type="text" placeholder="Search" className="me-2" />
                  <Button variant="outline-secondary">GO</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <div className="nav-btn mt-auto mx-auto">
            <button class="btn signup-btn" type="button">
              Sign Up
            </button>
            <button class="btn login-btn  d-block" type="button">
              Login
            </button>
            <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
          </div>
        </Navbar>
      </aside>
    </>
  );
};

export default SideBar;
