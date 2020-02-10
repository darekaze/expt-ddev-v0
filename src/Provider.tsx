import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { theme } from './config/theme'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
