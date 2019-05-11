import React from "react"

import Layout from "../components/layout"
import styles from "./about.module.scss"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="about" />
        <h2>Coye</h2>
        <p className={styles.about}>
          My name is Coye. Imma wannabe film scholar and this is my blog to
          exercise that fantasy. This blog will also serve as a platform for my
          film school buddies to flex their film school knowledge too!
          Hopefully, they’re okay with this self-effacing introduction.
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
