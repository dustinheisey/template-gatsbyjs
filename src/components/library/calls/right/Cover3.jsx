import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section``
const StyledHeading = styled.h2``
const StyledCall = styled.div``
const StyledText = styled.p``
const StyledList = styled.div``
const StyledInputList = styled.div``
const StyledCaption = styled.caption``

const Cover3 = ({
  heading,
  text,
  children,
  caption,
  image
}) => (
  <StyledContainer>
    <StyledCall>
      <StyledHeading>{heading}</StyledHeading>
      <StyledText>{text}</StyledText>
      <StyledList>
        <StyledInputList>{children}</StyledInputList>
        <StyledCaption>{caption}</StyledCaption>
        <StyledCaption>{caption}</StyledCaption>
      </StyledList>
    </StyledCall>
    {image}
  </StyledContainer>
)

export default Cover3
