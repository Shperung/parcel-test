// @flow
import React, { useState, useEffect } from 'react';

import Footer from '../footer/footer.block.jsx';
import Icon from '../icons/icons.jsx';

import './aside.block.scss';

type Props = {};

function Aside(props: Props) {
  return (
    <aside id="aside">
      <a href="/" className="aside-logo">
        <Icon glyph="wind" width={180} height={80} white />
      </a>
      <a href="/" className="aside-link">
        <Icon glyph="check" width={20} height={20} white />
        <span>Link first</span>
      </a>
      <a href="/" className="aside-link">
        <Icon glyph="check" width={20} height={20} white />
        <span>Link second</span>
      </a>
      <a href="/" className="aside-link">
        <Icon glyph="check" width={20} height={20} white />
        <span>Link next</span>
      </a>
      <a href="/" className="aside-link">
        <Icon glyph="check" width={20} height={20} white />
        <span>Link next</span>
      </a>
      <a href="/" className="aside-link">
        <Icon glyph="check" width={20} height={20} white />
        <span>Link next</span>
      </a>
      <a href="/" className="aside-link">
        <Icon glyph="check" width={20} height={20} white />
        <span>Link next</span>
      </a>
      <a href="/" className="aside-link">
        <Icon glyph="check" width={20} height={20} white />
        <span>Link next</span>
      </a>
      <a href="/" className="aside-link">
        <Icon glyph="check" width={20} height={20} white />
        <span>Link next</span>
      </a>
      <a href="/" className="aside-link">
        <Icon glyph="check" width={20} height={20} white />
        <span>Link next</span>
      </a>

      <Footer />
    </aside>
  );
}

export default Aside;
