import { Glyph } from 'opentype.js';
import React from 'react';
import './FontIcon.css';

interface FontIconProps {
  glyph: Glyph;
}

export const FontIcon: React.FC<FontIconProps> = ({ glyph }: FontIconProps) => {
  const drawIcon = (ref: any) => {
    if (ref && glyph) {
      ref.width = 32;
      ref.height = 32;
      const ctx = ref.getContext('2d');

      var path = glyph.getPath(0, 28, 28);
      path.fill = '#00ffff';

      //glyph.draw(ctx!, 0, 30, 30);
      path.draw(ctx);
    }
  };

  return (
    <div className="Font-Icon-Container">
      <canvas ref={drawIcon} />
      <h4 className="Font-Icon-Name">{glyph.name}</h4>
    </div>
  );
};
