const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allRecipes {
          edges {
            node {
              id
            }
          }
        }
      }
    `).then(results => {
      results.data.allRecipes.edges.forEach(edge => {
        createPage({
          path: `/recipes/${edge.node.id}`,
          component: path.resolve("./src/components/recipeLayout.js"),
          context: {
            id: edge.node.id, // This will be passed to our GraphQL query in the layout
          },
        })
      })
      resolve()
    })
  })
}
