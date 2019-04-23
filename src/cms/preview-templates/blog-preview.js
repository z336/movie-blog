import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

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
        tags
      }
      html
    }
  }
`

const BlogPreview = props => {
  const data = props.data.markdownRemark.frontmatter
  return (
    <Layout>
      <Head
        title={data.title}
        author={data.author}
        meta
        name="description"
        content={data.description}
      />
      <div className={styles.post}>
        <h1>{data.title}</h1>
        <p className={styles.author}>
          Posted by <Link to="/about">{data.author}</Link> on {data.date}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
        {data.tags && data.tags.length ? (
          <div>
            <h2>Tags</h2>
            <ul className={styles.tags}>
              {data.tags.map(tag => (
                <li key={tag + `tag`} className={styles.tag}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <Link to="/">
          <h3 className={styles.back}>Back</h3>
        </Link>
      </div>
    </Layout>
  )
}

export default BlogPreview
