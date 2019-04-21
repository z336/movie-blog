import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <Helmet
      title={`${title} | ${data.site.siteMetadata.title}`}
      description={data.site.siteMetadata.description}
    />
  )
}

export default Head
