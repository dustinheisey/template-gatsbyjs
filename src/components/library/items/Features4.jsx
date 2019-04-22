import React from 'react'
import styled from 'styled-components'
import Grid3 from '../grids/Grid3'

const StyledContainer = styled(Grid3)``
const StyledSection = styled.div``
const StyledHeading = styled.h2``
const StyledText = styled.p``

const Features4 = ({
  icon1,
  icon2,
  icon3,
  heading1,
  heading2,
  heading3,
  text1,
  text2,
  text3
}) => (
  <StyledContainer>
    <StyledSection>
      {icon1}
      <StyledHeading>{heading1}</StyledHeading>
      <StyledText>{text1}</StyledText>
    </StyledSection>
    <StyledSection>
      {icon2}
      <StyledHeading>{heading2}</StyledHeading>
      <StyledText>{text2}</StyledText>
    </StyledSection>
    <StyledSection>
      {icon3}
      <StyledHeading>{heading3}</StyledHeading>
      <StyledText>{text3}</StyledText>
    </StyledSection>
  </StyledContainer>
)

export default Features4
