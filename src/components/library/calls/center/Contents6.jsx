import React from 'react'
import styled from 'styled-components'
import External from '../../../elements/links/External'

const StyledContainer = styled.section``
const StyledHeading = styled.h1``
const StyledText = styled.p``
const StyledList = styled.ul``
const StyledItem = styled.li``

const Contents6 = ({
  icon1,
  icon2,
  icon3,
  icon4,
  heading,
  text
}) => (
  <StyledContainer>
    <StyledHeading>{heading}</StyledHeading>
    <StyledText>{text}</StyledText>
    <StyledList>
      <StyledItem>
        <External link='#'>{icon1}</External>
      </StyledItem>
      <StyledItem>
        <External link='#'>{icon2}</External>
      </StyledItem>
      <StyledItem>
        <External link='#'>{icon3}</External>
      </StyledItem>
      <StyledItem>
        <External link='#'>{icon4}</External>
      </StyledItem>
    </StyledList>
  </StyledContainer>
)

export default Contents6
