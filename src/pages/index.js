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
              author
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
        <Head title="nothin good" />
        <p className={styles.description}>
          My name is Coye. Imma wannabe film scholar and this is my blog to
          exercise that fantasy. This blog will also serve as a platform for my
          film school buddies to flex their film school knowledge too!
          Hopefully, they’re okay with this self-effacing introduction.
        </p>
        <ol className={styles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={styles.post}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                </Link>
                <p>
                  {edge.node.frontmatter.author} on {edge.node.frontmatter.date}
                </p>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default IndexBlogPage
