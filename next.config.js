const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const withSass = require("@zeit/next-sass");

module.exports = withSass()

module.exports = withSass({
  target: 'serverless',
  env: {
    JWT_SECRET: process.env.JWT_SECRET
  }
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'tsx'],
})
