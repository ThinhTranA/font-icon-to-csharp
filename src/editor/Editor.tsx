import { Glyph } from 'opentype.js';
import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import { generateCsharpCode } from '../code-gen/csharpCodegen';
import MonacoEditor from '@monaco-editor/react';

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
    <div>
      <MonacoEditor
        height="90vh"
        width="50vw"
        defaultLanguage="csharp"
        defaultValue={csharp}
        theme="vs-dark"
      />
    </div>
  );
}
