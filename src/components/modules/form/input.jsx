// @flow
import React, { useState, useEffect } from 'react';

import './form.scss';

type Props = {
  placeholder?: string,
  id: string
};

function Input(props: Props) {
  const { placeholder = '', id } = props;
  return (
    <label htmlFor={id} className="input-wrap">
      <input id={id} placeholder={placeholder} />
    </label>
  );
}

export default Input;
