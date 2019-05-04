module.exports = {
  siteMetadata: {
    title: "The IT Blog",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "files",
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
