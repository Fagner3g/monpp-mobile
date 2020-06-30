import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Monpp',
    brandImage:
      'http://www.cosemsrj.org.br/wp-content/uploads/2018/01/1486564172-finance-loan-money_81492.png',
    colorPrimary: '#FFF',
    colorSecondary: '#7169b6',
  }),
})
