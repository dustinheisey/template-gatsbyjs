import React from 'react'
import styled from 'styled-components'
import Grid3 from '../grids/Grid3'
import LinkInternal from '../../elements/links/Internal'

const StyledContainer = styled(Grid3)``
const StyledSection = styled.div``
const StyledHeading = styled.h3``
const StyledText = styled.p``

const Items1 = ({
  image1,
  image2,
  image3,
  heading1,
  heading2,
  heading3,
  text1,
  text2,
  text3,
  link1,
  link2,
  link3,
  linkText1,
  linkText2,
  linkText3
}) => (
  <StyledContainer>
    <StyledSection>
      {image1}
      <StyledHeading>{heading1}</StyledHeading>
      <StyledText>{text1}</StyledText>
      <LinkInternal link={link1}>{linkText1}</LinkInternal>
    </StyledSection>
    <StyledSection>
      {image2}
      <StyledHeading>{heading2}</StyledHeading>
      <StyledText>{text2}</StyledText>
      <LinkInternal link={link2}>{linkText2}</LinkInternal>
    </StyledSection>
    <StyledSection>
      {image3}
      <StyledHeading>{heading3}</StyledHeading>
      <StyledText>{text3}</StyledText>
      <LinkInternal link={link3}>{linkText3}</LinkInternal>
    </StyledSection>
  </StyledContainer>
)

export default Items1
