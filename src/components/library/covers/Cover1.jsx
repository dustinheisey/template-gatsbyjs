import React from 'react'
import styled from 'styled-components'
import LinkInternal from '../../elements/links/Internal'

const StyledContainer = styled.section``
const StyledHeading = styled.h2``
const StyledCall = styled.div``
const StyledText = styled.p``

const Cover1 = ({
  heading,
  text,
  link,
  linkText,
  image
}) => (
  <StyledContainer>
    <StyledCall>
      <StyledHeading>{heading}</StyledHeading>
      <StyledText>{text}</StyledText>
      <LinkInternal link={link}>{linkText}</LinkInternal>
    </StyledCall>
    {image}
  </StyledContainer>
)

export default Cover1
