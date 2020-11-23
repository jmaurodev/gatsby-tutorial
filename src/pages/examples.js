import React from 'react'
import Header from '../components/examples/Header'
import HeaderStatic from '../components/examples/HeaderStatic'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'

const examples = () => {
  return (
    <Layout>
      <HeaderStatic />
      <Header />
      <h1>Hello from example!</h1>
    </Layout>
  )
}

export default examples
