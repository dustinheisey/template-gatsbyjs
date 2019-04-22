import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section``
const StyledCall = styled.div``
const StyledList = styled.ul``
const StyledItem = styled.li``
const StyledText = styled.p``
const StyledSubtitle = styled.h3``

const Contents13 = ({
  icon1,
  icon2,
  icon3,
  icon4,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
  text1,
  text2,
  text3,
  text4,
  image
}) => (
  <StyledContainer>
    <StyledCall>
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
        <StyledItem>
          {icon3}
          <StyledSubtitle>{subtitle3}</StyledSubtitle>
          <StyledText>{text3}</StyledText>
        </StyledItem>
        <StyledItem>
          {icon4}
          <StyledSubtitle>{subtitle4}</StyledSubtitle>
          <StyledText>{text4}</StyledText>
        </StyledItem>
      </StyledList>
    </StyledCall>
    {image}
  </StyledContainer>
)

export default Contents13
