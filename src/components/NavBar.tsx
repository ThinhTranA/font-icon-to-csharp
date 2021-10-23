import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Divider, Icon, Menu } from 'semantic-ui-react';
import './NavBar.css';

interface NavBarProps {
  uploadFileName?: string;
  isEditing?: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ uploadFileName }) => {
  console.log('navvvvvvvvvvvvbarrr');

  return (
    <Menu inverted fixed="top" secondary>
      <Menu.Item header>
        <div style={{ display: 'flex' }}>
          <h3>Font Icon</h3>
          <Icon name="angle right" size="large" />
          <h3>C#</h3>
        </div>
      </Menu.Item>

      {uploadFileName && (
        <Fragment>
          <Menu.Item>
            <div className="vertical-line" />
          </Menu.Item>
          <Menu.Item>
            <h2>{uploadFileName}</h2>
          </Menu.Item>
          <Menu.Item position="right" as={NavLink} to="/" header>
            <Button inverted>
              <Icon name="upload" />
              UPLOAD ANOTHER FONT
            </Button>
          </Menu.Item>
          <Menu.Item as={NavLink} to="/" header>
            <Button>
              <Icon name="download" />
              DOWNLOAD FILE
            </Button>
          </Menu.Item>
        </Fragment>
      )}
    </Menu>
  );
};
