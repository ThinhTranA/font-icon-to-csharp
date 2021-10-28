import _ from 'lodash';
import { Glyph } from 'opentype.js';
import { toUnicodeString } from '../utils/stringUtils';

export function generateCsharpClassCode(className: string, glyphs: Glyph[]) {
  let s = `\nstatic class ${className}`;
  s += '\n{';

  glyphs.forEach((glyph) => {
    s += addGlyphToClass(glyph);
  });

  s += '\n}';
  return s;

  function addGlyphToClass(glyph: Glyph) {
    return `\n\tpublic const string ${_.upperFirst(
      _.camelCase(glyph.name)
    )} = "${toUnicodeString(glyph.unicode)}";`;
  }
}

export function generateCsharpEnumCode(enumName: string, glyphs: Glyph[]) {
  let s = `\npublic enum ${enumName}`;
  s += '\n{';

  glyphs.forEach((glyph) => {
    s += addGlyphToEnum(glyph);
  });

  s += '\n}';
  return s;

  function addGlyphToEnum(glyph: Glyph) {
    return `\n\t${_.upperFirst(_.camelCase(glyph.name))} = "${toUnicodeString(
      glyph.unicode
    )}",`;
  }
}
