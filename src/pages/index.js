import React from "react"

import Layout from "../components/layout"
import FeaturedRecipesList from "../components/featuredRecipesList"

const IndexPage = () => (
  <Layout>
    <h2>Our Featured Recipes:</h2>
    <FeaturedRecipesList />
  </Layout>
)

export default IndexPage
