import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

export default function recipeLayout(props) {
  const { recipes } = props.data
  return (
    <Layout>
      <h1>{recipes.title}</h1>
      <p>Created at: {recipes.createdAt}</p>
      <p>Difficulty: {recipes.difficulty || "Not provided"}</p>
      <p>Total time: {recipes.totalTime} mins</p>
      <p>Preparation time: {recipes.preparationTime} mins</p>
      <img
        alt={recipes.title}
        src={recipes.relationships.image.relationships.imageFile.url}
      />
      <h2>Ingredients:</h2>
      <ul>
        {recipes.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipes.instructions}</p>
    </Layout>
  )
}

export const query = graphql`
  query RecipesQuery($id: String!) {
    recipes(id: { eq: $id }) {
      title
      createdAt
      difficulty
      preparationTime
      totalTime
      instructions
      ingredients
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
`
