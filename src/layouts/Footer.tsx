import React from 'react'
import { Box } from 'rebass'

export const Footer: React.FC = () => (
  <Box as='footer'>© 2019-{new Date().getFullYear()}, Darwin++ a.k.a DaRekaze</Box>
)
