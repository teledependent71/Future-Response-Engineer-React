import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Future Response Engineer</title>
        <meta property="og:title" content="Future Response Engineer" />
      </Helmet>
    </div>
  )
}

export default Home
