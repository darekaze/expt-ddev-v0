// @ts-check

module.exports = {
  siteMetadata: {
    title: 'Darwin Jahja | Full Stack Software Engineer',
    // siteUrl: 'https://darekaze.dev',
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
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site. Change this
      },
    },
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
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
