import styled from 'styled-components/native'

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-content: center;
`

export const Container = styled.View`
  margin: 250px 10px 0 10px;
`

export const SocialContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`

export const OrContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 30px;
`

export const LineOr = styled.View`
  width: 40%;
  border-bottom-width: 1px;
  margin: 10px;
  border-color: ${props => props.theme.colors.placeholder};
`

export const Text = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.text};
`
