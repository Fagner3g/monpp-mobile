import styled from 'styled-components/native';
import { IProps } from '.';

export const TextStyle = styled.Text<IProps>`
  color: ${({ theme, color }) => (color ? color : theme.colors.text)};
  font-size: ${({ size }) => (size ? size : '15px')};
  font-family: ${({ theme, font }) =>
    font ? font : theme.fonts.QuicksandRegular};
`;
