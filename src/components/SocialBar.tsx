import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex, Link } from 'rebass'
import { FormattedIcon } from '~/components/icons'
import { config } from '~/config'

const StyledLink = styled(Link)`
  padding: 10px;
  svg {
    width: 18px;
    height: 18px;
  }
`

export const SocialBar: React.FC = () => {
  const { socialMedia } = config
  return (
    <Flex variant='social'>
      <Box bg='text' alignSelf='center' width='2px' height='90px' mb='12px' />
      {socialMedia &&
        socialMedia.map(({ name, url }) => (
          <StyledLink
            key={name}
            color='text'
            href={url}
            target='_blank'
            rel='nofollow noopener noreferrer'>
            <FormattedIcon name={name} />
          </StyledLink>
        ))}
    </Flex>
  )
}
