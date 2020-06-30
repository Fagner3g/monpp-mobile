import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import { withTheme } from '~/utils/withTheme'
import Button from '~/components/Atoms/Button'

export default {
  title: 'Atoms/Button',
  decorators: [withKnobs, withTheme],
}

export const normal = () => <Button onPress={action('default')}>enviar</Button>
