import React from 'react'
import styled from 'styled-components'
import BtnPrimary from '../../../elements/buttons/Primary'
import BtnOutline from '../../../elements/buttons/Outline'

const StyledContainer = styled.section``
const StyledHeading = styled.h2``
const StyledText = styled.p``
const StyledList = styled.div``

const Cover2 = ({
  heading,
  text,
  link1,
  link2,
  linkText1,
  linkText2
}) => (
  <StyledContainer>
    <StyledHeading>{heading}</StyledHeading>
    <StyledText>{text}</StyledText>
    <StyledList>
      <BtnOutline link={link1} text={linkText1} />
      <BtnPrimary link={link2} text={linkText2} />
    </StyledList>
  </StyledContainer>
)

export default Cover2
