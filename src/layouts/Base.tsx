import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { UIComponents, Theme } from './Theme'

export const wrapRootElement: React.FC<{ element: any }> = ({ element }) => (
  <MDXProvider components={UIComponents}>
    <Theme>{element}</Theme>
  </MDXProvider>
)
