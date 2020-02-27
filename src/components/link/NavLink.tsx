import React from 'react'
import styled from '@emotion/styled'
import { Link as RouterLink } from 'gatsby'
import { Link, LinkProps } from 'rebass'
import { theme } from '~/config/theme'

const StyledNav = styled(Link)`
  font-size: 14px;
  padding: 12px 16px;
  text-transform: uppercase;
  position: relative;
  vertical-align: middle;
  user-select: none;

  &::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: left;
    transition: transform 0.3s;
  }

  &::after {
    border: 1px solid ${theme.colors.gray};
    transform: scale3d(0, 1, 1);
  }

  &:hover::after {
    transform: scale3d(1, 1, 1);
  }
`

export const NavLink: React.FC<LinkProps> = ({ href = '#!', sx, children }) => (
  <StyledNav as={RouterLink} href={href} sx={sx}>
    {children}
  </StyledNav>
)
