import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { BoxStorybook } from '~/componentes/Atoms/BoxStorybook'

import Button from './index'

storiesOf('Atoms/Button', module)
  .add('Default', () => (
    <BoxStorybook>
      <Button onPress={() => console.log('un-favorited!')}>Enviar</Button>
    </BoxStorybook>
  ))
  .add('Disabled', () => (
    <BoxStorybook>
      <Button enabled={false} onPress={() => console.log('favorited!')}>
        Enviar
      </Button>
    </BoxStorybook>
  ))
