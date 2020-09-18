import React from 'react';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

interface Props extends TouchableOpacityProps {
  text: string;
  textColor?: string;
  color?: string;
  iconLeft?: string;
  iconRight?: string;
  iconColor?: string;
}

const Button: React.FC<Props> = ({
  text,
  textColor,
  color,
  iconLeft,
  iconRight,
  iconColor,
  ...res
}) => {
  return (
    <Container {...res} color={color}>
      {iconLeft && <IconMaterial name={iconLeft} size={24} color={iconColor} />}
      <Text color={textColor}>{text}</Text>
      {iconRight && (
        <IconMaterial name={iconRight} size={24} color={iconColor} />
      )}
    </Container>
  );
};

export default Button;
