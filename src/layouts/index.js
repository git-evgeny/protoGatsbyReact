import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children }) => (
  <div>
    <Helmet
      title={'data.site.siteMetadata.title'}
      meta={[
        { name: 'description', content: 'data.site.siteMetadata.description' },
        { name: 'keywords', content: 'data.site.siteMetadata.keywords' },
      ]}
    />
    <Header />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
