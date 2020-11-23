/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'JMauroPro',
    author: 'Jorge Mauro',
    description: 'loren ipsum',
    data: ['a', 'b'],
    person: {name: 'Peter', age: 32}
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      },
    },
  ],
}
