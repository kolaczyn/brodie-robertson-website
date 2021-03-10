import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  color: red !important;
`

export default function Chip({ label, number, onClick }) {
  return (
    <Btn>
      {label} {number}
    </Btn>
  );
}
