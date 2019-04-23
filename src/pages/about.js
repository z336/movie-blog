import React from "react"

import Layout from "../components/layout"
import styles from "./about.module.scss"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About</h1>
        <p className={styles.about}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex unde id
          voluptatum, laudantium eaque deleniti dolore nam numquam itaque
          reiciendis impedit pariatur, ad minus. Est laborum distinctio corporis
          consectetur architecto.
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
