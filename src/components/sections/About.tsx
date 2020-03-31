import React from 'react'
import { Box, Heading, Flex } from 'rebass'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { AboutMeQuery } from '@gql-types'

export const mdxQuery = graphql`
  query AboutMe {
    mdx(fileAbsolutePath: { regex: "/about/" }) {
      body
      frontmatter {
        title
        avatar {
          childImageSharp {
            fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        skills
      }
    }
  }
`

export const About: React.FC = () => {
  const { body, frontmatter } = useStaticQuery<AboutMeQuery>(mdxQuery).mdx
  const { title } = frontmatter

  return (
    <Box as='section' variant='section'>
      <Heading variant='shead'>{title}</Heading>
      <Flex alignItems='flex-start' justifyContent='space-between' flexWrap='wrap'>
        <Box width={[1, 1, 1 / 2]}>
          <MDXRenderer>{body}</MDXRenderer>
        </Box>
        <Box width={[1, 1, 1 / 2]}>
          {/* TODO: add image */}
          <Heading textAlign='center'>Image here</Heading>
        </Box>
      </Flex>
      {/* TODO: add skills comp. here */}
    </Box>
  )
}
