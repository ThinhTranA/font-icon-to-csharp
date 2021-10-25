import { Glyph } from 'opentype.js';
import { useLocation } from 'react-router-dom';
import { generateCsharpCode } from '../code-gen/csharpCodegen';
import MonacoEditor from '@monaco-editor/react';
import { Grid, Divider, Container, Search, Input } from 'semantic-ui-react';
import './Editor.css';
import { FontIconList } from '../components/FontIconList';
import { NavBar } from '../components/NavBar';
import { Fragment, useContext } from 'react';
import AppContext from '../context/AppContext';

interface EditorProps {
  glyphs: Glyph[];
  fileName: string;
}

export default function Editor() {
  const { glyphs, fileName } = useLocation<EditorProps>().state;
  const appContext = useContext(AppContext);
  appContext.updateFontFilename(fileName);

  const csharpClassName = fileName.split('.')[0];
  const csharpCode = generateCsharpCode(csharpClassName, glyphs);

  if (glyphs) {
    //total is 16
    const fontListWidth = 10;
    const dividerWidth = 1;
    const editorWidth = 5;

    console.log('aaa');

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
              <MonacoEditor
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
