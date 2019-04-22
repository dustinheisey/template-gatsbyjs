import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section``
const StyledHeading = styled.h4``
const StyledCall = styled.div``
const StyledText = styled.p``
const StyledList = styled.div``

const Contents8 = ({
  heading,
  text,
  icon1,
  icon2,
  icon3,
  icon4,
  video
}) => (
  <StyledContainer>
    <StyledCall>
      <StyledHeading>{heading}</StyledHeading>
      <StyledText>{text}</StyledText>
      <StyledList>
        {icon1}
        {icon2}
        {icon3}
        {icon4}
      </StyledList>
    </StyledCall>
    {video}
  </StyledContainer>
)

export default Contents8
