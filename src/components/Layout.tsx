/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'

import Header from './header'
import { SiteInfoQuery } from '../../@types/graphql-types'

export const pageQuery = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export const Layout = ({ children }) => {
  const data = useStaticQuery<SiteInfoQuery>(pageQuery)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </footer>
      </div>
    </>
  )
}
