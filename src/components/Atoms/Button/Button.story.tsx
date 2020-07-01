import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, withKnobs, color, select } from '@storybook/addon-knobs'

import { withTheme } from '~/utils/withTheme'
import Button from '~/components/Atoms/Button'

export default {
  title: 'Atoms/Button',
  decorators: [withKnobs, withTheme],
}

export const normal = (): React.ReactNode => (
  <>
    <Button onPress={action('Default')}>Default</Button>
    <br />
    <Button type="solid" color="#FFF" onPress={action('Solid')}>
      Solid
    </Button>
    <br />
    <Button type="outline" onPress={action('Outline')}>
      Outline
    </Button>
  </>
)

export const size = (): React.ReactNode => (
  <>
    <Button color="#FFF" size="full" type="solid" onPress={action('Default')}>
      Full + Solid
    </Button>
    <br />
    <Button color="#FFF" size="medium" type="solid" onPress={action('Solid')}>
      Medium + Solid
    </Button>
  </>
)

export const fullProps = (): React.ReactNode => (
  <Button
    background={color('background', '#71b')}
    color={color('color', '#a9a9a9')}
    onPress={action('default')}
    disabled={boolean('disabled', false)}
    type={select(
      'type',
      {
        default: 'default',
        solid: 'solid',
        outline: 'outline',
      },
      'solid',
    )}
    size={select(
      'size',
      {
        full: 'full',
        medium: 'medium',
      },
      'full',
    )}
  >
    Full Props
  </Button>
)
