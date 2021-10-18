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
  fontFile: File;
}

export default function Editor() {
  const location = useLocation<EditorProps>();

  const csharp = generateCsharpCode('bob', location.state.glyphs);
  const fontFile = location.state.fontFile;
  const options = {
    selectOnLineNumbers: true,
  };

  const gl = location.state.glyphs[3];

  const drawIcon = (ref: any) => {
    if (ref) {
      ref.width = 33;
      ref.height = 33;
      const ctx = ref.getContext('2d');
      gl.draw(ctx!, 0, 30, 30);

      ctx.fillStyle = 'red';
    }
  };

  return (
    <Container>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <p>Font icon component</p>
          <canvas ref={drawIcon} />
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
