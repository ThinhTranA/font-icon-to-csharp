import { Fragment, useCallback, useContext, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './UploadFile.css';
import dragDropFilesImage from '../assets/images/dragdropfiles.svg';
import iconslogo from '../assets/images/iconslogo.svg';
import { getTypeFontGlyphs } from '../font-parsers/typeFont';
import { useHistory } from 'react-router-dom';
import { Button, Divider, Grid } from 'semantic-ui-react';
import AppContext from '../context/AppContext';
import LoadingComponent from './layout/LoadingComponent';

export const UploadFile = () => {
  let history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const appContext = useContext(AppContext);
  appContext.updateFontFilename('');

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0] as File;
    if (
      file.name.endsWith('.ttf') ||
      file.name.endsWith('.otf') ||
      file.name.endsWith('.woff')
    ) {
      if (!file) return;

      setIsLoading(true);

      const glyphs = await getTypeFontGlyphs(file);

      setIsLoading(false);

      if (glyphs && glyphs.length > 0) {
        history.push('/editor', { glyphs: glyphs, fileName: file.name });
      }
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.ttf,.otf,.woff',
  });

  if (isLoading) return <LoadingComponent />;

  return (
    <Fragment>
      <div className="Upload-container">
        <Grid columns={3} stackable>
          <Grid.Column width={7}>
            <div {...getRootProps()}>
              <img src={dragDropFilesImage} alt="drag drop files" />
              <input {...getInputProps()} />
              <h2>Drag & Drop Files</h2>
              <p>Drop any TTF/OTF/WOFF file</p>

              <Button
                style={{ backgroundColor: 'rgb(67, 39, 181)', color: 'white' }}
              >
                BROWSE YOUR COMPUTER FILES
              </Button>
            </div>
          </Grid.Column>

          <Grid.Column width={1}>
            <Divider vertical inverted>
              OR
            </Divider>
          </Grid.Column>

          <Grid.Column width={7}>
            <div>
              <img src={iconslogo} alt="drag drop files" />

              <h2>Looking for font icon?</h2>
              <p>Check out popular font icon</p>

              <Button inverted>BROWSE POPULAR ICON FONTS</Button>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </Fragment>
  );
};
