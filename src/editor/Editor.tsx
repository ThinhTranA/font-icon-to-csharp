import { Glyph } from 'opentype.js';
import { useLocation } from 'react-router-dom';
import { generateCsharpCode } from '../code-gen/csharpCodegen';
import MonacoEditor from '@monaco-editor/react';
import { Grid, Divider, Container, Search, Input } from 'semantic-ui-react';
import './Editor.css';
import { FontIconList } from '../components/FontIconList';

interface EditorProps {
  glyphs: Glyph[];
  fileName: string;
}

export default function Editor() {
  const { glyphs, fileName } = useLocation<EditorProps>().state;

  const csharpClassName = fileName.split('.')[0];
  const csharpCode = generateCsharpCode(csharpClassName, glyphs);

  if (glyphs) {
    return (
      <Container>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column width={10}>
            <FontIconList glyphs={glyphs} />
          </Grid.Column>

          <Grid.Column width={1}>
            <Divider vertical>C#</Divider>
          </Grid.Column>

          <Grid.Column width={5}>
            <p>C# code</p>
            <MonacoEditor
              defaultLanguage="csharp"
              defaultValue={csharpCode}
              theme="vs-dark"
            />
          </Grid.Column>
        </Grid>
      </Container>
    );
  } else {
    return <div>Unable to read font glyphs</div>;
  }
}
