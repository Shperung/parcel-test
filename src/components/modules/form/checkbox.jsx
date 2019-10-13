// @flow
import React, { useState, useEffect } from 'react';

import './form.scss';

type Props = {
  id: string,
  name: string,
  label?: React.Node | string,
  className?: string,
  checked: boolean,
  value: string
};

function Checkbox(props: Props) {
  const { label = '', id, className, checked } = props;
  return (
    <label htmlFor={id} className={`checkbox-input-label ${className}`}>
      <div>
        <input type="checkbox" id={id} className="checkbox-input" checked={checked} />
        <div className="checkbox-box" />
      </div>
      <div className="checkbox-input-label-text">{label}</div>
    </label>
  );
}

export default Checkbox;
