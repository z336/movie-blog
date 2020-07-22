import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";
import styles from "./404.module.scss";

const ErrorPage = () => {
  return (
    <div>
      <Layout>
        <Head title="404" />
        <h1>That page doesn't exist</h1>
        <p>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </p>
      </Layout>
    </div>
  );
};

export default ErrorPage;
