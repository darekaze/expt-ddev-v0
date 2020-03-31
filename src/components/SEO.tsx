import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { SeoMetaQuery } from '@gql-types'
import { config } from '~/config'

type ISEOProps = {
  title?: string
  description?: string
  lang?: string
  meta?: any[]
}

export const queryStr = graphql`
  query SEOMeta {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`

export const SEO: React.FC<ISEOProps> = ({ title, description, lang = 'en', meta = [] }) => {
  const { site } = useStaticQuery<SeoMetaQuery>(queryStr)

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
        prefix: 'og: http://ogp.me/ns#',
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.author}`}
      defaultTitle={site.siteMetadata.title}
      meta={[
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: metaTitle },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { property: `og:url`, content: site.siteMetadata.siteUrl },
        { property: `og:site_name`, content: site.siteMetadata.title },
        { property: `og:locale`, content: config.siteLanguage },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: config.twitterHandler },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: metaDescription },
      ].concat(meta)}
      link={[]}
    />
  )
}
