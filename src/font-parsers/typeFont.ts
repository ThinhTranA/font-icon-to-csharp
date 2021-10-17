import opentype, { Font, Glyph } from 'opentype.js';
import { readFileAsArrayBuffer } from '../utils/asyncFileReader';

export async function getTypeFontGlyphs(file: File) {
  try {
    const fileContent = await readFileAsArrayBuffer(file);
    const font = opentype.parse(fileContent);
    const glyphs = parseGlyphs(font);

    return glyphs;
  } catch (ex) {
    console.log(ex);
  }
}

function parseGlyphs(font: Font) {
  const glyphs: Glyph[] = [];

  for (let i = 0; i < font.glyphs.length; i++) {
    var glyph = font.glyphs.get(i);
    if (glyph.unicode) glyphs.push(glyph);
  }
  return glyphs;
}
