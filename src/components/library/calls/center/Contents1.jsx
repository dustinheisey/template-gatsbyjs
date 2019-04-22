import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section``
const StyledTagline = styled.h4``
const StyledHeading = styled.h1``
const StyledText = styled.p``

const Contents1 = ({ tagline, heading, text }) => (
  <StyledContainer>
    <StyledTagline>{tagline}</StyledTagline>
    <StyledHeading>{heading}</StyledHeading>
    <StyledText>{text}</StyledText>
  </StyledContainer>
)

export default Contents1
