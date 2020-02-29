import React from 'react'
import { Box } from 'rebass'
import { Header } from '~/layouts/Header'
import { SocialBar } from '~/layouts/SocialBar'
import { Footer } from './Footer'

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <SocialBar />
    <Box
      as='main'
      width='100%'
      minHeight='100vh'
      maxWidth='1600px'
      margin='0px auto'
      px={['25px', '50px', '100px', '150px']}>
      {children}
    </Box>
    <Footer />
  </>
)
