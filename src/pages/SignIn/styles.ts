import styled from 'styled-components/native'
import { Form as FromBase } from '@unform/mobile'
import { Animated } from 'react-native'

import InputBase from '~/components/Atoms/Input'

import bgRocket from '~/assets/image/bgRocket.png'
import bgLogo from '~/assets/image/bgLogo.png'
import bg from '~/assets/image/Background.png'
import Button from '~/components/Atoms/Button'

export const Form = styled(FromBase)`
  flex: 1;
  justify-content: center;
  margin: 0 10px;
`

export const Input = styled(InputBase)`
  margin-bottom: 20px;
`

export const Rocket = styled(Animated.Image).attrs({
  source: bgRocket,
})`
  position: absolute;
  right: 0;
`

export const Logo = styled(Animated.Image).attrs({
  source: bgLogo,
})`
  position: absolute;
  left: 0;
`

export const Background = styled.ImageBackground.attrs({
  source: bg,
})`
  flex: 1;
`

export const ContainerSocial = styled.View`
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
`

export const ContainerHelp = styled.View`
  align-content: center;
`
