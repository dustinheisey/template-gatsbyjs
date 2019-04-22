import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section``
const StyledHeading = styled.h4``
const StyledCall = styled.div``

const Contents9 = ({ heading, children, image }) => (
  <StyledContainer>
    <StyledCall>
      <StyledHeading>{heading}</StyledHeading>
      {children}
    </StyledCall>
    {image}
  </StyledContainer>
)

export default Contents9
