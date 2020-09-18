import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{ color?: string }>`
  flex-direction: row;
  background: ${({ color, theme }) => (color ? color : theme.colors.primary)};
  height: 50px;
  width: 150px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<{ color?: string }>`
  font-size: 17px;
  color: ${({ color, theme }) => (color ? color : theme.colors.buttonText)};
  margin: 10px;
`;
