import * as React from "react"
import { Link, graphql } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import { BsCalendar3 } from "react-icons/bs"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ScrollToTop from "../components/scroll-to-top"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const disqusConfig = {
    url: `${location.href}`,
    identifier: post.id,
    title: post.frontmatter.title
  }
  
  React.useEffect(() => {
    document.addEventListener('themeChanged', e => {
      if(document.readyState === 'complete')
        setTimeout(
          () => window.DISQUS?.reset({ reload: true, config: disqusConfig }),
          500
        );
    })
  })

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <CommentCount config={disqusConfig} placeholder={''} />
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <p>
          <strong><BsCalendar3 className="icon" /> Last Updated: </strong><time>{post.fields.lastUpdated}</time>
        </p>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <header style={{ marginBottom: "1rem" }}>
            <Link className="header-link-home" to="/">
              {siteTitle}
            </Link>
          </header>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                &larr; {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} &rarr;
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <br /><hr /><br />
      <Disqus config={disqusConfig} />
      <ScrollToTop />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        lastUpdated
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
