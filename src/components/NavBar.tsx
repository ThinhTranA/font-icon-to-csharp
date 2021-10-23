import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Icon,
  Menu,
} from 'semantic-ui-react';
import './NavBar.css';

interface NavBarProps {
  uploadFileName?: string;
  isEditing?: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ uploadFileName }) => {
  const [infoValue, setInfoValue] = useState('');
  const options = [
    { key: 1, text: 'Submit an Issue', value: 'issue' },
    { key: 2, text: 'Support this Project', value: 'support' },
  ];

  const optionChange = (e: any, option: any) => {
    if (option.value === 'issue') {
      setInfoValue('');
      window.open('https://www.google.com');
    }
  };

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

      <Menu.Item position={uploadFileName ? undefined : 'right'}>
        <Button.Group inverted>
          <Dropdown
            className="button icon"
            icon="info"
            floating
            onChange={optionChange}
            options={options}
            value={infoValue}
          />
        </Button.Group>
      </Menu.Item>
    </Menu>
  );
};
