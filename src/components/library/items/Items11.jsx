import React from 'react'
import styled from 'styled-components'
import Grid3 from '../grids/Grid3'
import LinkInternal from '../../elements/links/Internal'

const StyledContainer = styled(Grid3)``
const StyledSection = styled.div``
const StyledHeading = styled.h3``
const StyledCaption = styled.caption``

const Items11 = ({
  image1,
  image2,
  image3,
  caption1,
  caption2,
  caption3,
  heading1,
  heading2,
  heading3,
  link1,
  link2,
  link3,
  linkText1,
  linkText2,
  linkText3
}) => (
  <StyledContainer>
    <StyledSection>
      {image1}
      <StyledCaption>{caption1}</StyledCaption>
      <StyledHeading>{heading1}</StyledHeading>
      <LinkInternal link={link1}>{linkText1}</LinkInternal>
    </StyledSection>
    <StyledSection>
      {image2}
      <StyledCaption>{caption2}</StyledCaption>
      <StyledHeading>{heading2}</StyledHeading>
      <LinkInternal link={link2}>{linkText2}</LinkInternal>
    </StyledSection>
    <StyledSection>
      {image3}
      <StyledCaption>{caption3}</StyledCaption>
      <StyledHeading>{heading3}</StyledHeading>
      <LinkInternal link={link3}>{linkText3}</LinkInternal>
    </StyledSection>
  </StyledContainer>
)

export default Items11
