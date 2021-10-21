import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" header>
          <i className="icon home" />
        </Menu.Item>
        <Menu.Item position="right">
          <i className="icon search" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
