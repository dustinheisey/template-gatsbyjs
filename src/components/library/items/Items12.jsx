import React from 'react'
import styled from 'styled-components'
import Grid3 from '../grids/Grid3'

const StyledContainer = styled(Grid3)``
const StyledSection = styled.div``
const StyledHeading = styled.h3``
const StyledCaption = styled.caption``

const Items12 = ({
  image1,
  image2,
  image3,
  heading1,
  heading2,
  heading3,
  caption1,
  caption2,
  caption3
}) => (
  <StyledContainer>
    <StyledSection>
      {image1}
      <StyledHeading>{heading1}</StyledHeading>
      <StyledCaption>{caption1}</StyledCaption>
    </StyledSection>
    <StyledSection>
      {image2}
      <StyledHeading>{heading2}</StyledHeading>
      <StyledCaption>{caption2}</StyledCaption>
    </StyledSection>
    <StyledSection>
      {image3}
      <StyledHeading>{heading3}</StyledHeading>
      <StyledCaption>{caption3}</StyledCaption>
    </StyledSection>
  </StyledContainer>
)

export default Items12
