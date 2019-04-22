import React from 'react'
import styled from 'styled-components'
import Grid3 from '../grids/Grid3'
import BtnPrimary from '../../elements/buttons/Primary'

const StyledContainer = styled(Grid3)``
const StyledSection = styled.div``
const StyledText = styled.p``
const StyledPrice = styled.p``
const StyledCaption = styled.caption``
const StyledSubtext = styled.caption``

const Pricing6 = ({
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
      <StyledPrice>{price1}</StyledPrice>
      <StyledText>{text1}</StyledText>
      <BtnPrimary link={link1} text={btnText1} />
      <StyledSubtext>{subText1}</StyledSubtext>
    </StyledSection>
    <StyledSection>
      <StyledCaption>{caption2}</StyledCaption>
      <StyledPrice>{price2}</StyledPrice>
      <StyledText>{text2}</StyledText>
      <BtnPrimary link={link2} text={btnText2} />
      <StyledSubtext>{subText2}</StyledSubtext>
    </StyledSection>
  </StyledContainer>
)

export default Pricing6
