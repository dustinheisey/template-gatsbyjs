import React from 'react'
import styled from 'styled-components'
import Grid4 from '../grids/Grid4'

const StyledContainer = styled(Grid4)``
const StyledSection = styled.div``
const StyledHeading = styled.h2``
const StyledText = styled.p``

const Features6 = ({
  icon1,
  icon2,
  icon3,
  icon4,
  heading1,
  heading2,
  heading3,
  heading4,
  text1,
  text2,
  text3,
  text4
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
    <StyledSection>
      {icon4}
      <StyledHeading>{heading4}</StyledHeading>
      <StyledText>{text4}</StyledText>
    </StyledSection>
  </StyledContainer>
)

export default Features6
