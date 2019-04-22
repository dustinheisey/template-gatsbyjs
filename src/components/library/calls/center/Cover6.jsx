import React from 'react'
import styled from 'styled-components'
import LinkInternal from '../../../elements/links/Internal'

const StyledContainer = styled.section``
const StyledCaption = styled.caption``
const StyledHeading = styled.h2``
const StyledText = styled.p``

const Cover6 = ({
  caption,
  heading,
  text,
  link,
  linkText,
  image
}) => (
  <StyledContainer>
    <StyledCaption>{caption}</StyledCaption>
    <StyledHeading>{heading}</StyledHeading>
    <StyledText>{text}</StyledText>
    <LinkInternal link={link}>{linkText}</LinkInternal>
    {image}
  </StyledContainer>
)

export default Cover6
