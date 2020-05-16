import React from "react"
import { graphql } from "gatsby"
import Layout from "@/components/layout"
import SEO from "@/components/seo"

export default ({ data }) => {
  const post = data.post

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <article className="container">
        <h1 className="m-0">{post.frontmatter.title}</h1>
        <small>{post.frontmatter.date}</small>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "D MMMM YYYY")
      }
    }
  }
`
