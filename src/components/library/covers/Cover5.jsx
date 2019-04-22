import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section``
const StyledHeading = styled.h2``
const StyledCall = styled.div``
const StyledCaption = styled.caption``
const StyledList = styled.ul``
const StyledItem = styled.li``
const StyledText = styled.p``

const Cover5 = ({
  caption,
  heading,
  icon1,
  icon2,
  text1,
  text2,
  video
}) => (
  <StyledContainer>
    <StyledCall>
      <StyledCaption>{caption}</StyledCaption>
      <StyledHeading>{heading}</StyledHeading>
      <StyledList>
        <StyledItem>
          {icon1}
          <StyledText>{text1}</StyledText>
        </StyledItem>
        <StyledItem>
          {icon2}
          <StyledText>{text2}</StyledText>
        </StyledItem>
      </StyledList>
    </StyledCall>
    {video}
  </StyledContainer>
)

export default Cover5
