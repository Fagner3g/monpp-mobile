import { lighten, shade } from 'polished'
import { IStyledTheme } from '~/theme'

export const lightTheme: IStyledTheme = {
  colors: {
    primary: '#68D3C4',
    secundary: '#7169b6',

    text: shade(0.8, '#68D3C4'),
    placeholder: lighten(0.3, '#68D3C4'),

    warning: '#F77F00',
    danger: '#D62828',

    border: lighten(0.6, '#313131'),

    background: '#FAFBFA',
  },
}
