import React from 'react'
import { Layout } from '~/layouts/BaseLayout'
import { SEO } from '~/components/SEO'

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="Page doesn't exist (404)" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Layout>
)

export default NotFoundPage
