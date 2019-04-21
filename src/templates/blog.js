import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import styles from "./blog.module.scss"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        description
        author
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <div className={styles.post}>
        <h2>{props.data.markdownRemark.frontmatter.title}</h2>
        <p className={styles.author}>
          Posted by{" "}
          <Link to="/about">
            {props.data.markdownRemark.frontmatter.author}
          </Link>{" "}
          on {props.data.markdownRemark.frontmatter.date}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
        <Link to="/">
          <p className={styles.back}>Back</p>
        </Link>
      </div>
    </Layout>
  )
}

export default Blog
