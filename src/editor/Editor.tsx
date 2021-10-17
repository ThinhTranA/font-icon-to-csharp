import { Glyph } from 'opentype.js';
import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import { generateCsharpCode } from '../code-gen/csharpCodegen';

interface EditorProps {
  glyphs: Glyph[];
}

export default function Editor() {
  const location = useLocation<EditorProps>();

  const csharp = generateCsharpCode('bob', location.state.glyphs);

  return (
    <div>
      <h1>Editor</h1>
      <p>{csharp}</p>
    </div>
  );
}
