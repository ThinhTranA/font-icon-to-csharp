import { Glyph } from 'opentype.js';
import { useLocation } from 'react-router-dom';
import { generateCsharpCode } from '../code-gen/csharpCodegen';
import MonacoEditor from '@monaco-editor/react';
import { Grid, Divider, Container, Search, Input } from 'semantic-ui-react';
import { FontIcon } from '../components/FontIcon';
import './Editor.css';
import { useState } from 'react';

interface EditorProps {
  glyphs: Glyph[];
  fileName: string;
}

export default function Editor() {
  const { glyphs, fileName } = useLocation<EditorProps>().state;

  const [filter, setFilter] = useState('');
  const [glyphsToDisplay, setGlyphsToDisplay] = useState<Glyph[]>(glyphs);

  const csharpClassName = fileName.split('.')[0];
  const csharpCode = generateCsharpCode(csharpClassName, glyphs);

  const iconColumnsCount = 5;
  const fontIconsGrid = () => {
    const glyphsCopy = [...glyphsToDisplay];
    let gridArray = [];
    let gridRow: Glyph[] = [];

    while (glyphsCopy[0]) {
      for (let i = 0; i < iconColumnsCount; i++) {
        if (glyphsCopy[0]) {
          gridRow.push(glyphsCopy.shift() as Glyph);
        }
      }

      gridArray.push(gridRow);
      gridRow = [];
    }

    return gridArray.map((row, idx) => {
      return (
        <Grid.Row key={idx}>
          {row.map((gly) => (
            <Grid.Column key={gly.name}>
              <FontIcon key={gly.name} glyph={gly} />
            </Grid.Column>
          ))}
        </Grid.Row>
      );
    });
  };

  if (glyphs) {
    return (
      <Container>
        {/* idea: https://fontawesome.com/v5.15/icons?d=gallery&p=2&c=users-people */}
        {/* idea: https://www.icofont.com/icons */}
        {/* https://semantic-ui.com/modules/search.html */}

        <div className="ui search">
          <div
            className="ui icon input"
            style={{
              fontSize: '1.6rem',
              width: '90%',
            }}
          >
            <input
              onChange={(e) => {
                setGlyphsToDisplay(
                  glyphs.filter((g) => g.name.includes(e.target.value))
                );

                setFilter(e.target.value);
              }}
              className="prompt"
              type="text"
              placeholder="Search icons for..."
            />
            <i className="search icon" />
          </div>
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
  } else {
    return <div>Unable to read font glyphs</div>;
  }
}
