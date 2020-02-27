import React from 'react'
import { Layout } from '~/layouts/BaseLayout'
import { SEO } from '~/components/SEO'
import { Hero } from '~/components/sections/Hero'

const IndexPage: React.FC = () => (
  <Layout>
    <SEO />
    <Hero />
  </Layout>
)

export default IndexPage
