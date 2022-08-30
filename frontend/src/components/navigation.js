import React from 'react';
import {
  Container,
  Row,
  Navbar,
  Nav,
  Col,
  NavItem,
  NavLink,
} from 'react-bootstrap';
import '../css/navigation.css';

// Created a simple navigation component using React Bootstrap where the user can navigate between the Home and Favourites page.
const Navigation = () => {
  return (
    <Navbar>
      <Container>
        <Row>
          <Col>
            <Nav>
              <NavItem>
                <NavLink href="/">iTUNES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">HOME</NavLink>
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

/*We export the 'Navigation' component in order to display this code in App.js.*/
export default Navigation;
