const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/our-menu/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/dish-template.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
