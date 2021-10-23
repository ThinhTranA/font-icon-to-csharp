import { Glyph } from 'opentype.js';
import React, { Fragment, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { FontIcon } from './FontIcon';

interface FontIconListProps {
  glyphs: Glyph[];
}

export const FontIconList: React.FC<FontIconListProps> = ({ glyphs }) => {
  const [glyphsToDisplay, setGlyphsToDisplay] = useState<Glyph[]>(glyphs);
  const [filter, setFilter] = useState('');

  const iconColumnsCount = 6;
  const fontIconsGrid = () => {
    const glyphsCopy = [...glyphsToDisplay];
    let gridArray = [];
    let gridRow: Glyph[] = [];

    while (glyphsCopy[0]) {
      for (let i = 0; i < iconColumnsCount; i++) {
        if (glyphsCopy[0]) {
          gridRow.push(glyphsCopy.shift() as Glyph);
        }
      }

      gridArray.push(gridRow);
      gridRow = [];
    }

    return gridArray.map((row, idx) => {
      return (
        <Grid.Row key={idx}>
          {row.map((gly) => (
            <Grid.Column key={gly.name}>
              <FontIcon key={gly.name} glyph={gly} />
            </Grid.Column>
          ))}
        </Grid.Row>
      );
    });
  };
  return (
    <Fragment>
      {/* idea: https://fontawesome.com/v5.15/icons?d=gallery&p=2&c=users-people */}
      {/* idea: https://www.icofont.com/icons */}
      {/* https://semantic-ui.com/modules/search.html */}

      <div className="ui search">
        <div
          className="ui icon input"
          style={{
            fontSize: '1.6rem',
            width: '90%',
          }}
        >
          <input
            onChange={(e) => {
              setGlyphsToDisplay(
                glyphs.filter((g) => g.name.includes(e.target.value))
              );

              setFilter(e.target.value);
            }}
            className="prompt"
            type="text"
            placeholder="Search icons for..."
          />
          <i className="search icon" />
        </div>
        <div className="results"></div>
      </div>

      <h2>Font icon component</h2>

      <Grid columns={iconColumnsCount} style={{ innerWidth: '45vw' }}>
        {fontIconsGrid()}
      </Grid>
    </Fragment>
  );
};
