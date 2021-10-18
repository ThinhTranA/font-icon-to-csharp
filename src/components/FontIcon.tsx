import { Glyph } from 'opentype.js';
import React from 'react';

interface FontIconProps {
  glyph: Glyph;
}

export const FontIcon: React.FC<FontIconProps> = ({ glyph }) => {
  const drawIcon = (ref: any) => {
    if (ref && glyph) {
      ref.width = 33;
      ref.height = 33;
      const ctx = ref.getContext('2d');
      glyph.draw(ctx!, 0, 30, 30);

      ctx.fillStyle = 'red';
    }
  };

  return <canvas ref={drawIcon} />;
};
