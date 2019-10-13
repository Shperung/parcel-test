// @flow
import React, { useState, useEffect } from 'react';
import Icon from '../../modules/icons/icons.jsx';

import './header.block.scss';

type Props = {};

function Header(props: Props) {
  return (
    <header id="header">
      <span className="header-uppercase">Dashboard</span>
      <div className="header-auth">
        <Icon glyph="user" width={20} height={20} />
        <span>admin</span>
      </div>
    </header>
  );
}

export default Header;
