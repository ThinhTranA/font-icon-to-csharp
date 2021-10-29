import React, { Fragment, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown, Icon, Menu } from 'semantic-ui-react';
import AppContext from '../../context/AppContext';
import './NavBar.css';
import font2csharp from '../../assets/images/font2csharp.svg';

interface NavBarProps {
  uploadFileName?: string;
  isEditing?: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ uploadFileName }) => {
  const appContext = useContext(AppContext);
  uploadFileName = appContext.fontFilename;

  const [infoValue, setInfoValue] = useState('');
  const options = [
    { key: 1, text: 'Submit an Issue', value: 'issue' },
    { key: 2, text: 'Support this Project', value: 'support' },
  ];

  const optionChange = (e: any, option: any) => {
    if (option.value === 'issue') {
      setInfoValue('');
      window.open('https://github.com/ThinhTranA/font-icon-to-csharp/issues');
    } else if (option.value === 'support') {
      setInfoValue('');
      window.open('https://github.com/ThinhTranA/font-icon-to-csharp');
    }
  };

  return (
    <Menu inverted fixed="top" secondary>
      <Menu.Item header as={NavLink} to="/">
        <div>
          <img src={font2csharp} alt="font 2 csharp" height="32" />
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
