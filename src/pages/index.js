import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <h1>This is the index page</h1>
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About Us</Link>
    </div>
    <p>
      We've added some Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptate, quos numquam suscipit veniam modi deleniti perspiciatis
      accusantium, ipsam dolor fugit sapiente placeat enim quaerat aperiam
      nesciunt ipsa veritatis praesentium dolorum.
    </p>
  </div>
)
