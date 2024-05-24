import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import { useState } from "react";
import heroes from "../Constants/constants";
import { filterNameHero } from "../Constants/functions";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [searchHero, setSearchHero] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    
    const heroe = filterNameHero(searchHero)

    navigate(`/${heroe[0]?.superhero}`)
  }

  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Superheroe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Marvel">Marvel</Nav.Link>
            <Nav.Link href="DC">DC</Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearchHero(e.target.value)}
              />
              <Button variant="outline-primary" onClick={handleSearch}>Buscar</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Menu;
