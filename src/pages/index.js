import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

export default ({ data }) => (
  <Layout>
    <Title text="Welcome" />
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About Us</Link>
    </div>
    <p>
      We've added some Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptate, quos numquam suscipit veniam modi deleniti perspiciatis
      accusantium, ipsam dolor fugit sapiente placeat enim quaerat aperiam
      nesciunt ipsa veritatis praesentium dolorum.
    </p>
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article>
          <div>
            <strong>{node.frontmatter.title}</strong>
          </div>
          <div>{node.excerpt}</div>
        </article>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image
            date(formatString: "MMMM YYYY")
          }
          excerpt
        }
      }
    }
  }
`
