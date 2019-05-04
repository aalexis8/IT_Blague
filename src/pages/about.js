import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

export default () => (
  <Layout>
    <Title text="About Us" />
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About Us</Link>
    </div>
    <p>We've added some about us verbiage.</p>
  </Layout>
)
