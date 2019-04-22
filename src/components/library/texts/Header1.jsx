import React from 'react'
import styled from 'styled-components'
import Grid1 from '../grids/Grid1'

const StyledContainer = styled(Grid1)``
const StyledCaption = styled.caption``
const StyledHeading = styled.h1``
const StyledText = styled.p``

const Header1 = ({ caption, heading, text }) => (
  <StyledContainer>
    <StyledCaption>{caption}</StyledCaption>
    <StyledHeading>{heading}</StyledHeading>
    <StyledText>{text}</StyledText>
  </StyledContainer>
)

export default Header1
