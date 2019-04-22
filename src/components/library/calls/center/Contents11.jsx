import React from 'react'
import styled from 'styled-components'
import PrimaryBtn from '../../../elements/buttons/Primary'

const StyledContainer = styled.section``
const StyledHeading = styled.h2``
const StyledText = styled.p``

const Contents11 = ({
  image,
  heading,
  text,
  link,
  btnText
}) => (
  <StyledContainer>
    <StyledHeading>{heading}</StyledHeading>
    <StyledText>{text}</StyledText>
    <PrimaryBtn link={link} text={btnText} />
    {image}
  </StyledContainer>
)

export default Contents11
