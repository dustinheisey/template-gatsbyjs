import React from 'react'
import styled from 'styled-components'
import Grid2 from '../grids/Grid2'

const StyledContainer = styled(Grid2)``
const StyledSection = styled.div``
const StyledHeading = styled.h2``
const StyledText = styled.p``
const StyledCaption = styled.caption``

const Items14 = ({
  image1,
  image2,
  heading1,
  heading2,
  caption1,
  caption2,
  text1,
  text2
}) => (
  <StyledContainer>
    <StyledSection>
      {image1}
      <StyledCaption>{caption1}</StyledCaption>
      <StyledHeading>{heading1}</StyledHeading>
      <StyledText>{text1}</StyledText>
    </StyledSection>
    <StyledSection>
      {image2}
      <StyledCaption>{caption2}</StyledCaption>
      <StyledHeading>{heading2}</StyledHeading>
      <StyledText>{text2}</StyledText>
    </StyledSection>
  </StyledContainer>
)

export default Items14
