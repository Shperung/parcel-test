// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../modules/icons/icons.jsx';
import Input from '../../modules/form/input.jsx';
import Checkbox from '../../modules/form/checkbox.jsx';
import Modal from '../../modules/modal/modal.jsx';

import './index.screen.scss';

const IndexScreen = () => {
  return (
    <div>
      <h1 className="h1">IndexScreen</h1>
      <br />
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
      <br />
      <h1 className="h2">Checkboxes</h1>
      <div className="inputs">
        <Checkbox checked label="Checkbox 1" />
        <Checkbox checked label="Checkbox 2" />
        <Checkbox checked label="Checkbox 3" />
        <Checkbox checked label="Checkbox 4" />
        <Checkbox checked label="Checkbox 5" />
        <Checkbox label="Checkbox 6" />
        <Checkbox label="Checkbox 7" />
      </div>
    </div>
  );
};

export default IndexScreen;
