import React from 'react';
import { PStyle } from './styles';


export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
