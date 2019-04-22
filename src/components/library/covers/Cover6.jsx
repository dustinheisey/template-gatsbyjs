import React from 'react'
import styled from 'styled-components'
import LinkInternal from '../../elements/links/Internal'

const StyledContainer = styled.section``
const StyledHeading = styled.h2``
const StyledCaption = styled.caption``

const Cover6 = ({ caption, heading, link, linkText }) => (
  <StyledContainer>
    <StyledCaption>{caption}</StyledCaption>
    <StyledHeading>{heading}</StyledHeading>
    <LinkInternal link={link}>{linkText}</LinkInternal>
  </StyledContainer>
)

export default Cover6
