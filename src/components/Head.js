import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ seoTitle, seoDescription }) => (
  <Helmet>
    <html lang="en" />
    <title>{seoTitle}</title>
    <meta name="description" content={seoDescription} />
    <meta charset="utf-8" />
    <meta name="image" content="https://i.imgur.com/snwQ653.png" />
    <meta itemProp="name" content={seoTitle} />
    <meta itemProp="description" content={seoDescription} />
    <meta itemProp="image" content="https://i.imgur.com/snwQ653.png" />
    <meta name="og:title" content={seoTitle} />
    <meta name="og:description" content={seoDescription} />
    <meta name="og:image" content="https://i.imgur.com/snwQ653.png" />
    <meta name="og:url" content="https://reactjsgirls.com" />
    <meta name="og:site_name" content={seoTitle} />
    <script src="https://js.tito.io/v1" async />
    <link rel="stylesheet" type="text/css" href="https://css.tito.io/v1.1" />
    <meta name="og:type" content="website" />
  </Helmet>
)

export default Head
