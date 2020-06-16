import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Button from './index'

storiesOf('Atoms', module)
  .add('Default', () => (
    <Button onPress={() => console.log('un-favorited!')}>Enviar</Button>
  ))
  .add('Disabled', () => (
    <Button enabled={false} onPress={() => console.log('favorited!')}>
      Enviar
    </Button>
  ))
