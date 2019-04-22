import React from 'react'
import styled from 'styled-components'
import LinkInternal from '../../../elements/links/Internal'

const StyledContainer = styled.section``
const StyledHeading = styled.h2``
const StyledCall = styled.div``
const StyledCaption = styled.caption``

const Cover4 = ({
  caption,
  heading,
  link,
  linkText,
  image
}) => (
  <StyledContainer>
    <StyledCall>
      <StyledCaption>{caption}</StyledCaption>
      <StyledHeading>{heading}</StyledHeading>
      <LinkInternal link={link}>{linkText}</LinkInternal>
    </StyledCall>
    {image}
  </StyledContainer>
)

export default Cover4
