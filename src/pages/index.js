import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import FeaturedRecipesList from "../components/featuredRecipesList"

const Headline = styled.h1`
  margin: 40px 0;
`

const IndexPage = () => (
  <Layout>
    <Headline>Our Featured Recipes:</Headline>
    <FeaturedRecipesList />
  </Layout>
)

export default IndexPage
