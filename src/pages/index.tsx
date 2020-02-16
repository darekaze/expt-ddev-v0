import React from 'react'
import { Button } from 'rebass'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title='Home' />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button variant='primary' mr={2}>
      Outline
    </Button>
  </Layout>
)

export default IndexPage
