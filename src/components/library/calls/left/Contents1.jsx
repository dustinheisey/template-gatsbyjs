import React from 'react'
import styled from 'styled-components'
import BtnPrimary from '../../../elements/buttons/Primary'

const StyledContainer = styled.section``
const StyledHeading = styled.h2``
const StyledCall = styled.div``
const StyledText = styled.p``

const Contents1 = ({
  heading,
  text,
  link,
  btnText,
  image
}) => (
  <StyledContainer>
    <StyledCall>
      <StyledHeading>{heading}</StyledHeading>
      <StyledText>{text}</StyledText>
      <BtnPrimary link={link} text={btnText} />
    </StyledCall>
    {image}
  </StyledContainer>
)

export default Contents1
