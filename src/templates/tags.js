import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import styles from "./tags.module.scss"

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <Head title="Tagged Posts" />
      <div className={styles.posts}>
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter

            return (
              <li key={slug}>
                <Link to={slug}>
                  <h2>{title}</h2>
                </Link>
              </li>
            )
          })}
        </ul>
        {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
        <Link to="/tags">All tags</Link>
      </div>
    </Layout>
  )
}

export default Tags
