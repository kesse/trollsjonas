import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  clear: both;
`

const StugImg = styled(Img)`
  float: right;
  margin-left: 10px;
  margin-bottom: 10px;
`

const StugSection = ({ data, title, description, imageLink }) => {
  const picLink = `/bilder/${imageLink}`
  const picSrc = data[imageLink].childImageSharp.fixed

  return (
    <Container>
      <h3>{title}</h3>
      <StugImg alt={title} fixed={picSrc} />
      <p>{description}</p>
      <p>
        <Link to={picLink}>Fler bilder på stugan</Link>
      </p>
    </Container>
  )
}

export default StugSection;
