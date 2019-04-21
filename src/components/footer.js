import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={styles.footer}>
      <p>
        {data.site.siteMetadata.author} © {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
