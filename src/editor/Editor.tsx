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

interface EditorProps {
  glyphs: Glyph[];
}

export default function Editor() {
  const location = useLocation<EditorProps>();

  const csharp = generateCsharpCode('bob', location.state.glyphs);
  const code = csharp;
  const options = {
    selectOnLineNumbers: true,
  };

  return (
    <Container>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <p>Font icon component</p>
        </Grid.Column>

        <Grid.Column>
          <MonacoEditor
            height="90vh"
            width="45vw"
            defaultLanguage="csharp"
            defaultValue={csharp}
            theme="vs-dark"
          />
        </Grid.Column>
      </Grid>

      <Divider vertical>C#</Divider>
    </Container>
  );
}
