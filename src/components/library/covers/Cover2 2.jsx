import React from 'react'
import styled from 'styled-components'
import BtnPrimary from '../../elements/buttons/Primary'

const StyledContainer = styled.section``
const StyledHeading = styled.h2``
const StyledCall = styled.div``
const StyledText = styled.p``
const StyledList = styled.div``
const StyledCaption = styled.caption``

const Cover2 = ({
  heading,
  text,
  link,
  btnText,
  caption,
  image
}) => (
  <StyledContainer>
    <StyledCall>
      <StyledHeading>{heading}</StyledHeading>
      <StyledText>{text}</StyledText>
      <StyledList>
        <BtnPrimary link={link} text={btnText} />
        <StyledCaption>{caption}</StyledCaption>
      </StyledList>
    </StyledCall>
    {image}
  </StyledContainer>
)

export default Cover2
