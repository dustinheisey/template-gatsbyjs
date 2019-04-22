import React from 'react'
import styled from 'styled-components'
import LinkInternal from '../../../elements/links/Internal'

const StyledContainer = styled.section``
const StyledHeading = styled.h2``
const StyledCall = styled.div``
const StyledCaption = styled.caption``
const StyledList = styled.ul``
const StyledItem = styled.li``
const StyledText = styled.p``
const StyledSubtitle = styled.h3``

const Contents7 = ({
  caption,
  heading,
  link,
  linkText,
  text,
  icon1,
  icon2,
  subtitle1,
  subtitle2,
  text1,
  text2,
  video
}) => (
  <StyledContainer>
    <StyledCall>
      <StyledCaption>{caption}</StyledCaption>
      <StyledHeading>{heading}</StyledHeading>
      <StyledText>{text}</StyledText>
      <LinkInternal link={link}>{linkText}</LinkInternal>
      <StyledList>
        <StyledItem>
          {icon1}
          <StyledSubtitle>{subtitle1}</StyledSubtitle>
          <StyledText>{text1}</StyledText>
        </StyledItem>
        <StyledItem>
          {icon2}
          <StyledSubtitle>{subtitle2}</StyledSubtitle>
          <StyledText>{text2}</StyledText>
        </StyledItem>
      </StyledList>
    </StyledCall>
    {video}
  </StyledContainer>
)

export default Contents7
