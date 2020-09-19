// theme.ts
import { DefaultTheme } from 'styled-components/native';
import { transparentize } from 'polished';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secundary: string;
      placeholder: string;
      danger: string;

      text: string;
      buttonText: string;

      background: string;
    };

    fonts: {
      QuicksandRegular: string;
      QuicksandSemiBold: string;
      QuicksandBold: string;
    };
  }
}

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#567DF4',
    secundary: '#7169b6',
    placeholder: '#333',
    danger: 'red',

    text: transparentize(0.3, '#000'),
    buttonText: '#FAFAFA',

    background: '#FFF',
  },

  fonts: {
    QuicksandRegular: 'Quicksand-Regular',
    QuicksandSemiBold: 'Quicksand-SemiBold',
    QuicksandBold: 'Quicksand-Bold',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#333',
    secundary: '#87b899',
    placeholder: '#f5f5f5',
    danger: 'red',

    text: '#FAFAFA',
    buttonText: '#1F1F1F',

    background: '#1F1F1F',
  },

  fonts: {
    QuicksandRegular: lightTheme.fonts.QuicksandRegular,
    QuicksandSemiBold: lightTheme.fonts.QuicksandSemiBold,
    QuicksandBold: lightTheme.fonts.QuicksandBold,
  },
};
