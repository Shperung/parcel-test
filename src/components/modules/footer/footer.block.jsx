// @flow
import React, { useState, useEffect } from 'react';

import './footer.block.scss';

type Props = {};

const year = new Date().getFullYear();

function Footer(props: Props) {
  return (
    <footer id="footer">
      <small>© Project {year}</small>
    </footer>
  );
}

export default Footer;
