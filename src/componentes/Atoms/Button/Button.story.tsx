import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { BoxStorybook } from '~/componentes/Atoms/BoxStorybook'

import Button from './index'

storiesOf('Atoms/Button', module).add('Default', () => (
  <BoxStorybook>
    <Button onPress={() => console.log('Default')}>Default</Button>
    <Button onPress={() => console.log('Medium')} medium>
      Medium
    </Button>
  </BoxStorybook>
))
