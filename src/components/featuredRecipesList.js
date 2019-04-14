import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"

const FeaturedRecipeListItem = styled.li`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  list-style: none;
  background-color: #eae8dc;
  margin: 30px 0;
  padding: 20px;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.3);

  @media (max-width: 767px) {
    align-items: center;
    grid-template-columns: 0 1fr;
    grid-row-gap: 20px;
  }
`

const CardLink = styled(Link)`
  text-decoration: none;
  color: #0e3746;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0e3746;
  margin: 20px 0;

  &:hover {
    color: #285160;
  }
`

const RecipeImage = styled.img`
  margin: 0;
  width: 400px;
  height: 350px;
  grid-column: 1 / 1;
  grid-row: 1 / -1;

  @media (max-width: 767px) {
    grid-column: 2 / 3;
    grid-row: 1 / 1;
  }
`

const RecipeInfo = styled.div`
  grid-column: 2 / -1;
  grid-row: 1 / -1;

  @media (max-width: 767px) {
    grid-row: 2 / 3;
  }
`

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
        <CardLink to={`recipes/${recipe.node.id}`}>
          <FeaturedRecipeListItem key={i}>
            <RecipeImage
              alt={recipe.node.title}
              src={recipe.node.relationships.image.relationships.imageFile.url}
            />
            <RecipeInfo>
              <h2>
                <StyledLink to={`recipes/${recipe.node.id}`}>
                  {recipe.node.title}
                </StyledLink>
              </h2>
              <h5>Created At:</h5>
              <p>{recipe.node.createdAt}</p>
              <h5>Difficulty:</h5>
              <p>{recipe.node.difficulty}</p>
              <h5>Total Time:</h5>
              <p>{recipe.node.totalTime} mins</p>
            </RecipeInfo>
          </FeaturedRecipeListItem>
        </CardLink>
      ))}
    </ul>
  )
}

export default featuredRecipesList
