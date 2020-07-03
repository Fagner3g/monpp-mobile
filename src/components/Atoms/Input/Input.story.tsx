import * as React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { Form } from '@unform/mobile'

import { withTheme } from '~/utils/withTheme'
import Input from '.'

export default {
  title: 'Atoms/Input',
  decorators: [withKnobs, withTheme],
}
export const normal = (): React.ReactNode => (
  <Form>
    <Input name="teste" placeholder="Default" />
  </Form>
)

export const Rounded = (): React.ReactNode => (
  <Form>
    <Input name="teste" placeholder="Rounded" type="rounded" />
  </Form>
)

export const Underline = (): React.ReactNode => (
  <Form>
    <Input name="teste" label="Underline" type="underline" />
  </Form>
)
