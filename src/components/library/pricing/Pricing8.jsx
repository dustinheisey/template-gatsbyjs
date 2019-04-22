import React from 'react'
import styled from 'styled-components'
import Grid4 from '../grids/Grid4'
import BtnPrimary from '../../elements/buttons/Primary'

const StyledContainer = styled(Grid4)``
const StyledSection = styled.div``
const StyledText = styled.p``
const StyledPrice = styled.p``
const StyledCaption = styled.caption``
const StyledSubtext = styled.caption``

const Pricing8 = ({
  caption1,
  caption2,
  price1,
  price2,
  text1,
  text2,
  link1,
  link2,
  btnText1,
  btnText2,
  subText1,
  subText2
}) => (
  <StyledContainer>
    <StyledSection>
      <StyledCaption>{caption1}</StyledCaption>
      <StyledText>{text1}</StyledText>
      <StyledPrice>{price1}</StyledPrice>
      <StyledSubtext>{subText1}</StyledSubtext>
      <BtnPrimary link={link1} text={btnText1} />
    </StyledSection>
    <StyledSection>
      <StyledCaption>{caption2}</StyledCaption>
      <StyledText>{text2}</StyledText>
      <StyledPrice>{price2}</StyledPrice>
      <StyledSubtext>{subText2}</StyledSubtext>
      <BtnPrimary link={link2} text={btnText2} />
    </StyledSection>
  </StyledContainer>
)

export default Pricing8
