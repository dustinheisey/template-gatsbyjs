import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section``
const StyledHeading = styled.h1``
const StyledText = styled.p``

const Contents4 = ({ icon, heading, text }) => (
  <StyledContainer>
    {icon}
    <StyledHeading>{heading}</StyledHeading>
    <StyledText>{text}</StyledText>
  </StyledContainer>
)

export default Contents4
