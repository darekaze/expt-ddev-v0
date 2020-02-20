import React from 'react'
import { IconGitHub, IconLinkedin } from './social'

type IFormattedIcon = {
  name?: string
}

export const FormattedIcon: React.FC<IFormattedIcon> = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />
    case 'Linkedin':
      return <IconLinkedin />
    default:
      return <IconGitHub />
  }
}
