import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Icon, Menu } from 'semantic-ui-react';
import './NavBar.css';

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" header>
          <Icon name="home" size="large" />
        </Menu.Item>
        <Menu.Item position="right">
          <Icon name="search" size="large" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
