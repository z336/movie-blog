import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import styles from "./index.module.scss"
import Head from "../components/head"

const IndexBlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Head title="Home" />
        <p>
          A brief description of what this page is all about. A brief
          description of what this page is all about. A brief description of
          what this page is all about. A brief description of what this page is
          all about.
        </p>
        <ol className={styles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={styles.post}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default IndexBlogPage
