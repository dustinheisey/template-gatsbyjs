import React from 'react'
import styled from 'styled-components'
import Grid1 from '../grids/Grid1'

const StyledContainer = styled(Grid1)``
const StyledCaption = styled.caption``
const StyledHeading = styled.h1``

const Header2 = ({ caption, heading }) => (
  <StyledContainer>
    <StyledCaption>{caption}</StyledCaption>
    <StyledHeading>{heading}</StyledHeading>
  </StyledContainer>
)

export default Header2
