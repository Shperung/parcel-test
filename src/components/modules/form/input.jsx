// @flow
import React, { useState, useEffect } from 'react';

import './form.scss';

type Props = {
  placeholder?: string
};

function Input(props: Props) {
  const { placeholder = '' } = props;
  return (
    <div className="input-wrap">
      <input placeholder={placeholder} />
    </div>
  );
}

export default Input;
