import styled from 'styled-components/native'
import { Form as FromBase } from '@unform/mobile'

export const Container = styled.ImageBackground`
  flex: 1;
`

export const Form = styled(FromBase)`
  flex: 1;
  justify-content: center;
  align-content: center;
  margin: 0 10px;
`

export const Title = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  margin: 64px 0 24px;
`
