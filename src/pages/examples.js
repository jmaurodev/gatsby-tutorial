import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'


const examples = ({data}) => {
  const {site:{info:{author}}} = data;
  return (
    <Layout>
      <h1>Hello from Examples!</h1>
      <h5>{author}</h5>
    </Layout>
  )
}

export const data = graphql`
{
  site {
    info: siteMetadata {
      person {
        name
        age
      }
      author
      data
      description
      title
    }
  }
}
`

export default examples