import React from 'react'
import { Layout } from '~/layouts/BaseLayout'
import { SEO } from '~/components/SEO'
import { Hero } from '~/components/sections/Hero'
import { About } from '~/components/sections/About'

const IndexPage: React.FC = () => (
  <Layout>
    <SEO />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
