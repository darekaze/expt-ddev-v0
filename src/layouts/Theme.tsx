/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'
import * as rebass from 'rebass'
import { theme } from '~/config/theme'

const gcss = css`
  html {
    box-sizing: border-box;
    overflow-x: hidden;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0px;
    overflow-x: hidden;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  div[role='group'][tabindex] {
    display: flex;
    flex-direction: column;
    min-height: -webkit-fill-available;
    min-height: 100vh;
    max-width: 100%;
    position: relative;
  }

  svg {
    fill: currentcolor;
    vertical-align: middle;
  }
`

export const UIComponents = {
  h1: props => <rebass.Heading variant='heading' {...props} />,
  h2: props => <rebass.Heading variant='subheader' {...props} />,
  h3: props => <rebass.Heading variant='h3' {...props} />,
  h4: props => <rebass.Heading variant='h4' {...props} />,
  p: props => <rebass.Text as='p' variant='paragraph' {...props} />,
  hr: props => <rebass.Box as='hr' variant='hr' {...props} />,
  // ul: List,
  // li: ListItem,
  pre: props => <div {...props} />,
  // code: CodeBlock,
  // table: Table,
  flex: rebass.Flex,
  box: rebass.Box,
  heading: rebass.Heading,
  ...rebass,
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={gcss} />
      {children}
    </>
  </ThemeProvider>
)
