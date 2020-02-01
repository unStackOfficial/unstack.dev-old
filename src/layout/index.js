import React from 'react'
import Header from '../components/header'
import { StaticQuery, graphql } from 'gatsby'
import GlobalStyle from '../utils/global'
import Head from '../components/Head'

const query = graphql`
  query HeadingQuery {
    contentfulWebsiteData {
      seoTitle
      seoDescription
    }
  }
`
const Template = ({ children, darkMenu }) => {
  return (
    <StaticQuery
      query={query}
      render={({ contentfulWebsiteData }) => (
        <>
          <Head {...contentfulWebsiteData} />
          <Header darkMenu={darkMenu} />
          <GlobalStyle />
          {children}
        </>
      )}
    />
  )
}

export default Template
