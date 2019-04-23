import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.scss"
import styles from "./layout.module.scss"
import "typeface-merriweather"
import "typeface-heebo"

const Layout = props => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
