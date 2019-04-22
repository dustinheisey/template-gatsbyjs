import React from 'react'
import styled from 'styled-components'
import Grid4 from '../grids/Grid4'

const StyledContainer = styled(Grid4)``
const StyledSection = styled.div``
const StyledText = styled.p``
const StyledCaption = styled.caption``

const Items6 = ({
  image1,
  image2,
  image3,
  image4,
  caption1,
  caption2,
  caption3,
  caption4,
  text1,
  text2,
  text3,
  text4
}) => (
  <StyledContainer>
    <StyledSection>
      {image1}
      <StyledText>{text1}</StyledText>
      <StyledCaption>{caption1}</StyledCaption>
    </StyledSection>
    <StyledSection>
      {image2}
      <StyledText>{text2}</StyledText>
      <StyledCaption>{caption2}</StyledCaption>
    </StyledSection>
    <StyledSection>
      {image3}
      <StyledText>{text3}</StyledText>
      <StyledCaption>{caption3}</StyledCaption>
    </StyledSection>
    <StyledSection>
      {image4}
      <StyledText>{text4}</StyledText>
      <StyledCaption>{caption4}</StyledCaption>
    </StyledSection>
  </StyledContainer>
)

export default Items6
