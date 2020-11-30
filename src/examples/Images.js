import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import img from '../images/image1.jpg'
import Image from 'gatsby-image'


const getImages = graphql`
{
  fixed: file(relativePath: {eq: "image1.jpg"}) {
    childImageSharp {
      fixed(width: 300, height: 400) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath: {eq: "image2.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`


const Images = () => {
  const data = useStaticQuery(getImages)

  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} width="100%"/>
      </article>
      <article className="single-image">
        <h3>Fixed Image/Blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed}/>
      </article>
      <article className="single-image">
        <h3>Fluid Image/SVG</h3>
        <Image fluid={data.fluid.childImageSharp.fluid}/>
      </article>
    </section>
  )
}

export default Images
