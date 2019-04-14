import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const featuredRecipesList = () => {
  const data = useStaticQuery(graphql`
    query featuredRecipes {
      allRecipes(limit: 5) {
        edges {
          node {
            id
            title
            createdAt(formatString: "YYYY MMM DD")
            difficulty
            totalTime
            relationships {
              image {
                relationships {
                  imageFile {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ul>
      {data.allRecipes.edges.map((recipe, i) => (
        <>
          <img
            style={{ height: "400px", width: "400px" }}
            alt={recipe.node.title}
            src={recipe.node.relationships.image.relationships.imageFile.url}
          />
          <li key={i}>
            <h3>
              <Link to={`recipes/${recipe.node.id}`}>{recipe.node.title}</Link>
            </h3>
            <p>
              {recipe.node.difficulty} - {recipe.node.totalTime} mins
            </p>
            <p>{recipe.node.createdAt}</p>
          </li>
        </>
      ))}
    </ul>
  )
}

export default featuredRecipesList
