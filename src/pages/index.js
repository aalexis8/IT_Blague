import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

export default ({ data }) => (
  <Layout>
    <Title text={data.site.siteMetadata.title} />
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About Us</Link>
    </div>
    <p>
      We've added some Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptate, quos numquam suscipit veniam modi deleniti perspiciatis
      accusantium, ipsam dolor fugit sapiente placeat enim quaerat aperiam
      nesciunt ipsa veritatis praesentium dolorum.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
