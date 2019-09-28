import React from 'react';

import './icons.scss';
import cancel from '../../../svg/assets/cancel.svg';
import arrowRight from '../../../svg/assets/arrow-point-to-right.svg';

const glyphs = {
  cancel,
  arrowRight,
};

function Icon(props) {
  const {
    className = '',
    glyph,
    width,
    height,
    white,
    blue,
    red,
    green,
  } = props;

  let computedClassName = `icon ${className}`;
  if (white) computedClassName += ' icon--white';
  if (blue) computedClassName += ' icon--blue';
  if (red) computedClassName += ' icon--red';
  if (green) computedClassName += ' icon--green';

  return (
   <svg className={computedClassName} width={width} height={height}>
     <use xlinkHref={glyphs[glyph]} />
   </svg>
  );
}

export default Icon;