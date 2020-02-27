import React from 'react'
import { Box, Heading, Flex } from 'rebass'

export const Hero: React.FC = () => {
  return (
    <Flex
      as='section'
      variant='hero'
      sx={{
        alignItems: 'flex-end',
        textAlign: 'right',
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
          clean design, <br />
          accessible UX,
          <br />
          &amp; cutting-edge tech
        </Heading>
      </Box>
    </Flex>
  )
}
