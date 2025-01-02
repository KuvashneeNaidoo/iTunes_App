import React from "react";
import {
  Container,
  Row,
  Navbar,
  Nav,
  Col,
  NavItem,
  NavLink,
} from "react-bootstrap";
import "../css/styles.css";

// Navigation bar to navigate between the Home and Favourites page.
const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Row>
          <Col>
            <Nav>
              <NavItem>
                <NavLink href="/">iTUNES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/favourites">FAVOURITES</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Navigation;
