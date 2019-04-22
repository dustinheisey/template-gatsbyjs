import React from 'react'
import styled from 'styled-components'
import LinkInternal from '../../../elements/links/Internal'

const StyledContainer = styled.section``
const StyledCaption = styled.caption``
const StyledHeading = styled.h2``
const StyledText = styled.p``
const StyledList = styled.div``

const Cover4 = ({
  caption,
  heading,
  text,
  link1,
  link2,
  linkText1,
  linkText2
}) => (
  <StyledContainer>
    <StyledCaption>{caption}</StyledCaption>
    <StyledHeading>{heading}</StyledHeading>
    <StyledText>{text}</StyledText>
    <StyledList>
      <LinkInternal link={link1}>{linkText1}</LinkInternal>
      <LinkInternal link={link2}>{linkText2}</LinkInternal>
    </StyledList>
  </StyledContainer>
)

export default Cover4
