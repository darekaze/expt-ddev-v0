import React from 'react'
import { Box } from 'rebass'
import { Header } from '~/components/Header'
import { SocialBar } from '~/components/SocialBar'

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <SocialBar />
    <Box
      as='main'
      width='100%'
      minHeight='100vh'
      maxWidth='1440px'
      px={['25px', '50px', '100px', '150px']}>
      {children}
    </Box>

    {/* TODO: edit footer, make component */}
    <Box as='footer'>© 2019-{new Date().getFullYear()}, Darwin++ a.k.a DaRekaze</Box>
  </>
)
