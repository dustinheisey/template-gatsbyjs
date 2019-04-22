import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section``
const StyledCaption = styled.caption``
const StyledHeading = styled.h2``
const StyledText = styled.p``
const StyledList = styled.div``

const Cover10 = ({ caption, heading, text, children }) => (
  <StyledContainer>
    <StyledCaption>{caption}</StyledCaption>
    <StyledHeading>{heading}</StyledHeading>
    <StyledText>{text}</StyledText>
    <StyledList>{children}</StyledList>
  </StyledContainer>
)

export default Cover10
