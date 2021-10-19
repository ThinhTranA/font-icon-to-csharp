import { Glyph } from 'opentype.js';
import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import { generateCsharpCode } from '../code-gen/csharpCodegen';
import MonacoEditor from '@monaco-editor/react';
import {
  Segment,
  Grid,
  Form,
  Button,
  Divider,
  Container,
} from 'semantic-ui-react';
import { FontIcon } from '../components/FontIcon';

interface EditorProps {
  glyphs: Glyph[];
  fileName: string;
}

export default function Editor() {
  const { glyphs, fileName } = useLocation<EditorProps>().state;

  const csharpClassName = fileName.split('.')[0];
  const csharpCode = generateCsharpCode(csharpClassName, glyphs);

  console.log(glyphs);
  const fontIcons = glyphs.map((gl) => {
    return <FontIcon key={gl.name} glyph={gl} />;
  });

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
    <Container style={{ innerWidth: '100vw' }}>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column width={10}>
          <p>Font icon component</p>

          <Grid columns={iconColumnsCount} style={{ innerWidth: '45vw' }}>
            {fontIconsGrid()}
          </Grid>
        </Grid.Column>

        <Grid.Column width={1}>
          <Divider vertical>C#</Divider>
        </Grid.Column>

        <Grid.Column width={5}>
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
