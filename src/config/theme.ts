// For spec details, see:
// https://rebassjs.org/reflexbox#theming

export const theme = {
  breakpoints: ['600px', '960px', '1264px'],
  colors: {
    text: '#8BADC1',
    background: '#001122',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f9',
    gray: '#dddddf',
    highlight: 'hsla(205, 100%, 40%, 0.125)',
    cyan: '#29c5c5',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)',
  },
  // rebass variants
  text: {
    header: {
      fontFamily: 'heading',
      lineHeight: '1.25',
      fontSize: [4, 4, 5, 6],
      marginBottom: 3,
      color: 'text',
    },
    subheader: {
      fontFamily: 'heading',
      lineHeight: '1.25',
      fontSize: [3, 3, 4, 4],
      marginBottom: 3,
      color: 'text',
    },
    h2: {
      fontFamily: 'heading',
      lineHeight: '1.25',
      fontSize: [2, 3, 4, 5],
      marginBottom: 3,
      color: 'text',
    },
    h3: {
      fontFamily: 'heading',
      lineHeight: '1.25',
      fontSize: [2, 2, 3, 3],
      marginBottom: 3,
      color: 'text',
    },
    h4: {
      fontFamily: 'heading',
      lineHeight: '1.25',
      fontSize: [1],
      marginBottom: 3,
      color: 'text',
    },
    label: {
      fontFamily: 'heading',
      lineHeight: '1.25',
      fontSize: [0],
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      marginBottom: 2,
    },
    paragraph: {
      fontFamily: 'body',
      lineHeight: '1.75',
      fontSize: [1, 2],
      marginBottom: 4,
      color: 'text',
    },
    list: {
      fontFamily: 'body',
      lineHeight: '1.75',
      fontSize: [1, 2],
      marginBottom: 3,
    },
    display: {
      fontFamily: 'body',
      lineHeight: '1.5',
      fontSize: [5, 6, 7],
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card',
    },
    hero: {
      m: '0px auto',
      p: '150px 0px',
      minHeight: '100vh',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    header: {
      bg: 'background',
      position: 'fixed',
      width: '100%',
      p: 3,
      zIndex: 51,
      alignItem: 'center',
    },
    social: {
      position: 'fixed',
      top: 0,
      left: '40px',
      zIndex: 52,
      flexDirection: 'column',
      alignItem: 'center',
    },
    link: {
      display: 'inline-block',
      outline: 'none',
      textDecoration: 'none',
      textDecorationSkipInk: 'auto',
      color: 'inherit',
      transition: 'all 100ms linear',
      ':hover,:focus': {
        color: 'primary',
      },
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
  },
  // theme-ui variants
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
  },
}
