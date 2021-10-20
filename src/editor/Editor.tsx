import { Glyph } from 'opentype.js';
import { useLocation } from 'react-router-dom';
import { generateCsharpCode } from '../code-gen/csharpCodegen';
import MonacoEditor from '@monaco-editor/react';
import { Grid, Divider, Container, Search, Input } from 'semantic-ui-react';
import { FontIcon } from '../components/FontIcon';
import './Editor.css';

interface EditorProps {
  glyphs: Glyph[];
  fileName: string;
}

export default function Editor() {
  const { glyphs, fileName } = useLocation<EditorProps>().state;

  const csharpClassName = fileName.split('.')[0];
  const csharpCode = generateCsharpCode(csharpClassName, glyphs);

  const iconColumnsCount = 5;
  const fontIconsGrid = () => {
    const glyphsCopy = [...glyphs];
    let gridArray = [];
    let gridRow = [];

    while (glyphsCopy[0]) {
      for (let i = 0; i < iconColumnsCount; i++) {
        if (glyphsCopy[0]) {
          gridRow.push(glyphsCopy.shift());
        }
      }

      gridArray.push(gridRow);
      gridRow = [];
    }

    console.log(glyphs);
    console.log(glyphsCopy === glyphs);
    return gridArray.map((row, idx) => {
      return (
        <Grid.Row key={idx}>
          {row.map((gly) => (
            <Grid.Column key={gly?.name}>
              <FontIcon key={gly?.name} glyph={gly!} />
            </Grid.Column>
          ))}
        </Grid.Row>
      );
    });
  };

  return (
    <Container>
      <Search className="search-bar" />

      {/* https://semantic-ui.com/modules/search.html */}
      <div className="ui search">
        <input
          className="prompt"
          type="text"
          placeholder="Common passwords..."
        />
        <div className="results"></div>
      </div>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column width={10}>
          <h2>Font icon component</h2>

          <Grid columns={iconColumnsCount} style={{ innerWidth: '45vw' }}>
            {fontIconsGrid()}
          </Grid>
        </Grid.Column>

        <Grid.Column width={1}>
          <Divider vertical>C#</Divider>
        </Grid.Column>

        <Grid.Column width={5}>
          <p>C# code</p>
          <MonacoEditor
            width="32vw"
            defaultLanguage="csharp"
            defaultValue={csharpCode}
            theme="vs-dark"
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
