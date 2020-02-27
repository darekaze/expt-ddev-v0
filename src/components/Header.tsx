import React from 'react'
import { Box, Flex } from 'rebass'
import { NavLink } from '~/components/link'

export const Header: React.FC = () => {
  // TODO: make border color #29c5c5 and py = 2 after scroll
  return (
    <Flex as='header' variant='header'>
      <Box mx='auto' />
      <Box display={['none', 'inline']}>
        <NavLink href='#!'>Blog</NavLink>
        <NavLink href='#!'>Resources</NavLink>
      </Box>

      {/* TODO: make and change to svg logo */}
      <NavLink
        href='/'
        sx={{
          fontWeight: 'bold',
          textTransform: 'none !important',
        }}>
        DaR
      </NavLink>
      {/* TODO: add mobile menu button here */}
    </Flex>
  )
}
