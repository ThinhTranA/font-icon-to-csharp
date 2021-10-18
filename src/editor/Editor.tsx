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

  return (
    <Container>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <p>Font icon component</p>

          {fontIcons}
        </Grid.Column>

        <Grid.Column>
          <MonacoEditor
            height="90vh"
            width="45vw"
            defaultLanguage="csharp"
            defaultValue={csharpCode}
            theme="vs-dark"
          />
        </Grid.Column>
      </Grid>

      <Divider vertical>C#</Divider>
    </Container>
  );
}
