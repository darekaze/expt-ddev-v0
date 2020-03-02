import React from 'react'
import { keyframes } from '@emotion/core'
import { Box, Heading, Flex } from 'rebass'
import HeroSVG from '~/assets/svg/hero.svg'

// TODO: change logo to style-system hex

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Hero: React.FC = () => {
  return (
    <Flex
      as='section'
      variant='hero'
      sx={{
        textAlign: 'end',
        alignItems: 'flex-end',
        ':before': {
          alignSelf: 'center',
          content: "''",
          position: 'absolute',
          ml: [0, 0, 3, 6],
          width: ['300px', '500px', '640px', '780px'],
          height: ['300px', '500px', '640px', '780px'],
          zIndex: -1,
          backgroundColor: 'primary',
          maskImage: `url(${HeroSVG})`,
          opacity: 0.54,
          animation: `${spin} infinite 64s linear`,
        },
      }}>
      <Box mb={4}>
        <Heading variant='label'>Hello there, I&#39;m</Heading>
        <Heading fontSize={[5, 6, 7]}>Darwin Jahja.</Heading>
      </Box>
      <Box mb={4}>
        <Heading variant='label'>我係一位</Heading>
        <Heading fontSize={[4, 5]}>full stack engineer</Heading>
      </Box>
      <Box mb={4}>
        <Heading variant='label'>活動於 // based in</Heading>
        <Heading fontSize={[3, 4, 5]}>
          Hong Kong <br />
          &amp; Macao
        </Heading>
      </Box>
      <Box mb={4}>
        <Heading variant='label'>Live for</Heading>
        <Heading fontSize={[1, 2]}>
          clean code, <br />
          neat UI/UX,
          <br />
          &amp; cutting-edge tech
        </Heading>
      </Box>
    </Flex>
  )
}
