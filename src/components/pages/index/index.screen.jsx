// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../modules/icons/icons.jsx';
import Input from '../../modules/form/input.jsx';
import Modal from '../../modules/modal/modal.jsx';

import './index.screen.scss';

const IndexScreen = () => {
  return (
    <div>
      <h1 className="h1">IndexScreen</h1>
      <h1 className="h2">Inputs</h1>
      {/* <Icon glyph="cancel" width={40} height={40} green className="icon-close" />
      <Icon glyph="arrowRight" width={40} height={40} blue className="icon-close" />
      <Link to="/artists">artists</Link>
      <Modal />*/}
      <div className="inputs">
        <Input placeholder="Name" />
        <Input placeholder="Female" />
        <Input placeholder="Email" />
      </div>
    </div>
  );
};

export default IndexScreen;
