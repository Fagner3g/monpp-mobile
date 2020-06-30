import { withKnobs } from '@storybook/addon-knobs'
import { setOptions } from '@storybook/addon-options'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator, addParameters } from '@storybook/react'

setOptions({
  goFullScreen: false,
  addonPanelInRight: false,
  showSearchBox: true,
  showAddonPanel: true,
  showStoriesPanel: true,
})

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphonex',
  },
  options: {
    addonPanelInRight: true,
  },
})

addDecorator(withKnobs({ escapeHTML: false }))
