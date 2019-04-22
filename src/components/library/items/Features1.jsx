import React from 'react'
import styled from 'styled-components'
import Grid2 from '../grids/Grid2'

const StyledContainer = styled(Grid2)``
const StyledSection = styled.div``
const StyledHeading = styled.h2``
const StyledText = styled.p``

const Features1 = ({
  icon1,
  icon2,
  heading1,
  heading2,
  text1,
  text2
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
  </StyledContainer>
)

export default Features1
