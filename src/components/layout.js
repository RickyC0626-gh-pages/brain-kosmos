import * as React from "react"
import { Link } from "gatsby"
import Toggle from "react-toggle"

import sun from '../images/sun.png'
import moon from '../images/moon.png'

const Layout = ({ location, title, children }) => {
  const [theme, setTheme] = React.useState(null);

  React.useEffect(() => {
    setTheme(window.__theme);
  
    window.__onThemeChange = () => {
      setTheme(window.__theme);
      document?.dispatchEvent(new Event('themeChanged'));
    };
  }, [theme]);

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
        {theme !== null ? (
          <Toggle
            icons={{
              checked: (
                <img
                  src={moon}
                  width="16"
                  height="16"
                  alt="Moon for dark mode"
                  style={{ pointerEvents: 'none' }}
                />
              ),
              unchecked: (
                <img
                  src={sun}
                  width="16"
                  height="16"
                  alt="Sun for light mode"
                  style={{ pointerEvents: 'none' }}
                />
              )
            }}
            checked={theme === 'dark'}
            onChange={e => {
              window.__setPreferredTheme(e.target.checked ? 'dark' : 'light');
            }}
          />
        ) : (
          <div style={{ height: '24px' }}/>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
