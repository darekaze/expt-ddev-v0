import React from 'react'
import { Link as RouterLink } from 'gatsby'
import { Box, Flex, Link } from 'rebass'

export const Header: React.FC = () => {
  return (
    <Flex as='header' variant='header'>
      {/* TODO: 'scroll jump' here */}

      <Box mx='auto' />
      <Link as={RouterLink} variant='nav' href='#!'>
        Blog
      </Link>
      <Link as={RouterLink} variant='nav' href='#!'>
        Resources
      </Link>

      {/* TODO: change to svg logo */}
      <Link
        as={RouterLink}
        variant='nav'
        href='/'
        sx={{
          fontWeight: 'bold',
          textTransform: 'none',
          userSelect: 'none',
        }}>
        DaR
      </Link>
    </Flex>
  )
}
