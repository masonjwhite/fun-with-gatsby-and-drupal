import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const featuredRecipesList = () => {
  const data = useStaticQuery(graphql`
    query featuredRecipes {
      allRecipes(limit: 5) {
        edges {
          node {
            title
            createdAt(formatString: "YYYY MMM DD")
            difficulty
            totalTime
          }
        }
      }
    }
  `)

  return (
    <ul>
      {data.allRecipes.edges.map((recipe, i) => (
        <li key={i}>
          <h3>{recipe.node.title}</h3>
          <p>
            {recipe.node.difficulty} - {recipe.node.totalTime} mins
          </p>
          <p>{recipe.node.createdAt}</p>
        </li>
      ))}
    </ul>
  )
}

export default featuredRecipesList
