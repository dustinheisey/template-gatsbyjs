import React from 'react'
import styled from 'styled-components'
import Internal from '../../../elements/links/Internal'

const StyledContainer = styled.section``
const StyledText = styled.p``
const StyledCaption = styled.caption``

const Contents12 = ({
  video,
  text,
  link,
  linkText,
  caption
}) => (
  <StyledContainer>
    <StyledText>{text}</StyledText>
    <Internal link={link}>{linkText}</Internal>
    {video}
    <StyledCaption>{caption}</StyledCaption>
  </StyledContainer>
)

export default Contents12
