import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"

import Hero from "../components/hero"
import Slider from "../components/slider"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero car={data.carHero.childImageSharp.fluid} />

    <Slider />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    carHero: file(relativePath: { eq: "car-hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
