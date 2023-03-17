import type { iTheme } from 'types/iTheme';
import { sharedTheme } from './shared';

export const defaultTheme: iTheme = {
  name: 'default',

  colors: {
    header: 'linear-gradient(217.09deg, #3B2E38 21.53%, #594855 78.47%)',
    darkVinho: '#3B2E38',
    textDefault: '#F3ECE2',
    lightVinho: '#594855',
    bege: '#F3ECE2',
    cobreColor:
      'linear-gradient(292.95deg, #B37C67 21.49%, #D59C85 53.8%, #B37C67 85.43%);',
  },
  ...sharedTheme,
};
