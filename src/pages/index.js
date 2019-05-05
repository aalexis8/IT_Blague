import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import ArticleList from "../components/article-list"

export default () => (
  <Layout>
    <Title text="Welcome" />
    <p>
      We've added some Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptate, quos numquam suscipit veniam modi deleniti perspiciatis
      accusantium, ipsam dolor fugit sapiente placeat enim quaerat aperiam
      nesciunt ipsa veritatis praesentium dolorum.
    </p>
    <ArticleList />
  </Layout>
)
