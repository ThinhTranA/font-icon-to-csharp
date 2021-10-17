import { Glyph } from 'opentype.js';
import { toUnicodeString } from '../utils/stringUtils';

export function generateCsharpCode(className: string, glyphs: Glyph[]) {
  let s = `\nstatic class ${className}`;
  s += '\n{';

  glyphs.forEach((glyph) => {
    s += addGlyphToClass(glyph);
  });

  s += '\n}';
  return s;

  function addGlyphToClass(glyph: Glyph) {
    return `\n\tpublic const string ${glyph.name} = "${toUnicodeString(
      glyph.unicode
    )}";`;
  }
}
