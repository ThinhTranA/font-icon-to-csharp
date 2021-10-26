import { Glyph } from 'opentype.js';
import { useLocation } from 'react-router-dom';
import { generateCsharpCode } from '../code-gen/csharpCodegen';
import MonacoEditor from '@monaco-editor/react';
import { Grid, Divider, Container, Button, Icon } from 'semantic-ui-react';
import './Editor.css';
import { FontIconList } from '../components/FontIconList';
import { Fragment, useCallback, useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import debounce from 'lodash.debounce';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';

interface EditorProps {
  glyphs: Glyph[];
  fileName: string;
}

export default function Editor() {
  const { glyphs, fileName } = useLocation<EditorProps>().state;
  const appContext = useContext(AppContext);
  appContext.updateFontFilename(fileName);

  const csharpClassName = fileName.split('.')[0];
  const [csharpCode, setCsharpCode] = useState(
    generateCsharpCode(csharpClassName, glyphs)
  );

  const saveEditCsharpCode = useCallback(
    debounce((nextValue) => setCsharpCode(nextValue), 500),
    []
  );

  const handleEditorCodeChange = (editedCode: string | undefined) => {
    saveEditCsharpCode(editedCode);
  };

  const copyCode = useCallback(
    debounce(() => toast.success('Code copied to clipboard'), 500),
    []
  );

  const handleCopyCodeChange = () => {
    copyCode();
  };

  if (glyphs) {
    //total is 16
    const fontListWidth = 10;
    const dividerWidth = 1;
    const editorWidth = 5;

    return (
      <Fragment>
        <Container>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column width={fontListWidth}>
              <br />
              <br />
              <FontIconList
                glyphs={glyphs}
                screenPercent={fontListWidth / 16}
              />
            </Grid.Column>

            <Grid.Column width={dividerWidth}>
              <Divider vertical>C#</Divider>
            </Grid.Column>

            <Grid.Column width={editorWidth}>
              <p>C# code</p>
              <ToastContainer
                position="bottom-right"
                hideProgressBar
                theme="colored"
                autoClose={1000}
              />
              <CopyToClipboard text={csharpCode} onCopy={handleCopyCodeChange}>
                <Button inverted>
                  <Icon name="copy" />
                  Copy to clipboard
                </Button>
              </CopyToClipboard>

              <MonacoEditor
                onChange={handleEditorCodeChange}
                height="99%"
                defaultLanguage="csharp"
                defaultValue={csharpCode}
                theme="vs-dark"
              />
            </Grid.Column>
          </Grid>
        </Container>
      </Fragment>
    );
  } else {
    return <div>Unable to read font glyphs</div>;
  }
}
