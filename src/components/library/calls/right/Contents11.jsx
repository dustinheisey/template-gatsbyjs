import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section``
const StyledHeading = styled.h4``
const StyledCall = styled.div``
const StyledText = styled.p``

const Contents11 = ({ icon, heading, text, image }) => (
  <StyledContainer>
    <StyledCall>
      {icon}
      <StyledHeading>{heading}</StyledHeading>
      <StyledText>{text}</StyledText>
    </StyledCall>
    {image}
  </StyledContainer>
)

export default Contents11
