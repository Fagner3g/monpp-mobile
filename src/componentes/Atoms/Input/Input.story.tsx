import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { BoxStorybook } from '~/componentes/Atoms/BoxStorybook'
import Input from '.'

/**
 * inputs without icons
 */
storiesOf('Atoms/Input', module)
  .add('Underline', () => (
    <BoxStorybook>
      <Input name="Default" label="Default" type="underline" />
      <Input name="Error" label="isErrored" type="underline" isErrored />
    </BoxStorybook>
  ))
  .add('Rounded', () => (
    <BoxStorybook>
      <Input
        name="username"
        label="UserName"
        placeholder="Input default"
        type="rounded"
      />

      <Input
        name="username"
        label="UserName"
        placeholder="Input com erro"
        type="rounded"
        isErrored
      />
    </BoxStorybook>
  ))
