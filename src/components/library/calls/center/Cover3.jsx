import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section``
const StyledHeading = styled.h2``
const StyledText = styled.p``
const StyledCaption = styled.caption``
const StyledList = styled.div``

const Cover3 = ({ heading, text, children, caption }) => (
  <StyledContainer>
    <StyledHeading>{heading}</StyledHeading>
    <StyledText>{text}</StyledText>
    <StyledList>{children}</StyledList>
    <StyledCaption>{caption}</StyledCaption>
  </StyledContainer>
)

export default Cover3
