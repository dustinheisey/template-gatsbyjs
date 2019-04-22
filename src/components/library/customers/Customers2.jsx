import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section``
const StyledCaption = styled.caption``
const StyledList = styled.ul``

const Customers2 = ({ caption, children }) => (
  <StyledContainer>
    <StyledCaption>{caption}</StyledCaption>
    <StyledList>{children}</StyledList>
  </StyledContainer>
)

export default Customers2
