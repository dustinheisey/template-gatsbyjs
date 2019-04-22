import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section``
const StyledHeading = styled.h3``
const StyledText = styled.p``

const Contents13 = ({ image, heading, text }) => (
  <StyledContainer>
    {image}
    <StyledHeading>{heading}</StyledHeading>
    <StyledText>{text}</StyledText>
  </StyledContainer>
)

export default Contents13
