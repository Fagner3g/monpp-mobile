import React from 'react';

import { TextStyle } from './styles';

export interface IProps {
  size?: string;
  font?: string;
  color?: string;
}

const Text: React.FC<IProps> = ({ children, ...res }) => {
  return <TextStyle {...res}>{children}</TextStyle>;
};

export default Text;
