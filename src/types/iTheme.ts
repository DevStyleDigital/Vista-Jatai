export interface iSharedThemeOptions {
  maxWidth: string;

  fonts: {
    primary: string;
    secondary: string;
  };
  mediaQueries: {
    maxMobile: string;
    maxTablet: string;
    minTablet: string;
    minMobile: string;
  };
  borderRadius: {
    sm: string;
    xl: string;
  };
}

export interface iTheme extends iSharedThemeOptions {
  name: 'default';

  colors: {
    header: string;
    darkVinho: string;
    cobreColor: string;
    textDefault: string;
    lightVinho: string;
    bege: string;
  };
}
