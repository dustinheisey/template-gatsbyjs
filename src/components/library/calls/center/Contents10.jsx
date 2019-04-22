import React from 'react'
import styled from 'styled-components'
import Internal from '../../../elements/links/Internal'

const StyledContainer = styled.section``
const StyledHeading = styled.h2``
const StyledText = styled.p``

const Contents10 = ({
  icon,
  heading,
  text,
  link,
  linkText
}) => (
  <StyledContainer>
    {icon}
    <StyledHeading>{heading}</StyledHeading>
    <StyledText>{text}</StyledText>
    <Internal link={link}>{linkText}</Internal>
  </StyledContainer>
)

export default Contents10
