import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section``
const StyledHeading = styled.h3``
const StyledCall = styled.div``

const Contents5 = ({ heading, children, image }) => (
  <StyledContainer>
    <StyledCall>
      <StyledHeading>{heading}</StyledHeading>
      {children}
    </StyledCall>
    {image}
  </StyledContainer>
)

export default Contents5
