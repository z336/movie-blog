import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import styles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={styles.header}>
      <h1>
        <Link to="/" className={styles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link
              to="/"
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
            >
              blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
            >
              about
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
