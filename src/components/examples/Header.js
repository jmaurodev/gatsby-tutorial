import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'


const getData = graphql`
  {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`

const Header = () => {
  const {site:{info:{title, person:{name}}}} = useStaticQuery(getData);
  return (
    <div>
      <h1>Title: {title}</h1>
      <h1>Name: {name}</h1>
    </div>
  )
}

export default Header
