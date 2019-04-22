import React from 'react'
import styled from 'styled-components'
import Grid4 from '../grids/Grid4'

const StyledContainer = styled(Grid4)``
const StyledSection = styled.div``
const StyledHeading = styled.h3``
const StyledSubtitle = styled.h4``
const StyledPrice = styled.caption``

const Items7 = ({
  image1,
  image2,
  image3,
  image4,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
  heading1,
  heading2,
  heading3,
  heading4,
  caption1,
  caption2,
  caption3,
  caption4
}) => (
  <StyledContainer>
    <StyledSection>
      {image1}
      <StyledSubtitle>{subtitle1}</StyledSubtitle>
      <StyledHeading>{heading1}</StyledHeading>
      <StyledPrice>{caption1}</StyledPrice>
    </StyledSection>
    <StyledSection>
      {image2}
      <StyledSubtitle>{subtitle2}</StyledSubtitle>
      <StyledHeading>{heading2}</StyledHeading>
      <StyledPrice>{caption2}</StyledPrice>
    </StyledSection>
    <StyledSection>
      {image3}
      <StyledSubtitle>{subtitle3}</StyledSubtitle>
      <StyledHeading>{heading3}</StyledHeading>
      <StyledPrice>{caption3}</StyledPrice>
    </StyledSection>
    <StyledSection>
      {image4}
      <StyledSubtitle>{subtitle4}</StyledSubtitle>
      <StyledHeading>{heading4}</StyledHeading>
      <StyledPrice>{caption4}</StyledPrice>
    </StyledSection>
  </StyledContainer>
)

export default Items7
