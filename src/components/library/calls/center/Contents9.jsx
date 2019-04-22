import React from 'react'
import styled from 'styled-components'
import Internal from '../../../elements/links/Internal'

const StyledContainer = styled.section``
const StyledText = styled.p``

const Contents9 = ({ text, link, linkText }) => (
  <StyledContainer>
    <StyledText>{text}</StyledText>
    <Internal link={link}>{linkText}</Internal>
  </StyledContainer>
)

export default Contents9
