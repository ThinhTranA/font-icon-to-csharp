import { Glyph } from 'opentype.js';
import { useLocation } from 'react-router-dom';
import {
  generateCsharpClassCode,
  generateCsharpEnumCode,
} from '../code-gen/csharpCodegen';
import MonacoEditor from '@monaco-editor/react';
import { Grid, Container, Button, Icon, Dropdown } from 'semantic-ui-react';
import './Editor.css';
import { FontIconList } from '../components/FontIconList';
import { Fragment, useCallback, useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import debounce from 'lodash.debounce';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';

const codeTypeOptions = [
  { key: 1, text: 'C# Class ', value: 'csharpClass' },
  { key: 2, text: 'C# Enum  ', value: 'csharpEnum' },
];
interface EditorProps {
  glyphs: Glyph[];
  fileName: string;
}

export default function Editor() {
  const { glyphs, fileName } = useLocation<EditorProps>().state;
  const appContext = useContext(AppContext);
  appContext.updateFontFilename(fileName);

  const csharpClassName = fileName.split('.')[0];
  const csharpEnumName = csharpClassName;
  const [csharpCode, setCsharpCode] = useState(
    generateCsharpClassCode(csharpClassName, glyphs)
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

  const [generatedCodeType, setGeneratedCodeType] = useState(
    codeTypeOptions[0].value
  );

  const optionChange = (e: any, option: any) => {
    setGeneratedCodeType(option.value);
    switch (option.value) {
      case 'csharpClass':
        setCsharpCode(generateCsharpClassCode(csharpClassName, glyphs));
        break;
      case 'csharpEnum':
        setCsharpCode(generateCsharpEnumCode(csharpEnumName, glyphs));
        break;
    }
  };

  if (glyphs) {
    //total is 16
    const fontListWidth = 10;
    const editorWidth = 6;

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

            <Grid.Column width={editorWidth}>
              <div
                style={{
                  display: 'flex',
                  margin: '20px 30px',
                  justifyContent: 'space-around',
                }}
              >
                <ToastContainer
                  position="bottom-right"
                  hideProgressBar
                  theme="colored"
                  autoClose={1000}
                />

                <CopyToClipboard
                  text={csharpCode}
                  onCopy={handleCopyCodeChange}
                >
                  <Button inverted>
                    <Icon name="copy" />
                    Copy to clipboard
                  </Button>
                </CopyToClipboard>

                <Dropdown
                  button
                  className="icon"
                  floating
                  labeled
                  onChange={optionChange}
                  options={codeTypeOptions}
                  value={generatedCodeType}
                />
              </div>

              <MonacoEditor
                onChange={handleEditorCodeChange}
                height="99%"
                defaultLanguage="csharp"
                value={csharpCode}
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
