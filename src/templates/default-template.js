import React from "react"
import { graphql } from "gatsby"

import App from "../containers/app"
import Page from "../containers/page"

export default ({data}) => {
  console.log({data})
  return (
    <App>
      <Page>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
      </Page>
    </App>
  )
}

export const query = graphql`
  query($slug: String!)
  {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
    }
  }
`
