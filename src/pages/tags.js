import React from "react";
import { Link, graphql } from "gatsby";
import kebabCase from "lodash/kebabCase";

import Layout from "../components/layout";
import styles from "./tags.module.scss";
import Head from "../components/head";

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <div>
      <Head title="All Tags" />
      <div className={styles.posts}>
        <h1>Tags</h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
);

export default TagsPage;
