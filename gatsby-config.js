// @ts-check

module.exports = {
  siteMetadata: {
    title: 'Darwin Jahja | Full Stack Software Engineer',
    siteUrl: 'https://darekaze.dev',
    description:
      'Darwin Jahja (a.k.a @darekaze) is a Full Stack Software Engineer based in HK & Macao who specializes in creating and developing exceptional, high-quality websites and applications.',
    author: '@darekaze',
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'DarwinJahja',
        short_name: 'DarwinJahja',
        start_url: '/',
        background_color: '#020c1b',
        theme_color: '#0a192f',
        display: 'minimal-ui',
        icon: 'src/assets/img/gatsby-icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
              tracedSVG: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `@types/graphql-types.d.ts`,
        documentPaths: ['./src/**/*.{ts,tsx}', './node_modules/gatsby-*/**/*.js'],
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/img`,
      },
    },
  ],
}
