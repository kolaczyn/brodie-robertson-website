import React from 'react';
import { action } from '@storybook/addon-actions';
import Chip from './Chip';

import '../../styles/globals.css';

export default {
  title: 'Chip',
  component: Chip,
};

export const Default = () => (
  <Chip label='hello' number={69} active onClick={() => alert('hello')} />
);
