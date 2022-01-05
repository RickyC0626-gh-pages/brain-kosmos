import * as React from "react"

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      <div style={{ float: 'right' }}>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
          rss
        </a>
      </div>
    </footer>
  )
}

export default Footer;