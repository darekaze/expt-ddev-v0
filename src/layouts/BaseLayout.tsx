import React from 'react'
import { Box } from 'rebass'

import Header from '~/components/Header'

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Box
      sx={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}>
      <Box as='main'>{children}</Box>

      {/* TODO: edit footer, make component */}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </footer>
      {/* --- */}
    </Box>
  </>
)
