import React from 'react'
import styled from 'styled-components'
import Grid1 from '../grids/Grid1'

const StyledContainer = styled(Grid1)``
const StyledHeading = styled.h2``
const StyledText = styled.p``

const Text2 = ({ heading, text }) => (
  <StyledContainer>
    <StyledHeading>{heading}</StyledHeading>
    <StyledText>{text}</StyledText>
  </StyledContainer>
)

export default Text2
