import React from 'react'
import styled from 'styled-components'
import Grid3 from '../grids/Grid3'
import BtnPrimary from '../../elements/buttons/Primary'
import BtnOutline from '../../elements/buttons/Outline'

const StyledContainer = styled(Grid3)``
const StyledSection = styled.div``
const StyledText = styled.p``
const StyledPrice = styled.p``
const StyledCaption = styled.caption``

const Pricing3 = ({
  icon1,
  icon2,
  icon3,
  caption1,
  caption2,
  caption3,
  price1,
  price2,
  price3,
  text1,
  text2,
  text3,
  link1,
  link2,
  link3,
  btnText1,
  btnText2,
  btnText3
}) => (
  <StyledContainer>
    <StyledSection>
      {icon1}
      <StyledCaption>{caption1}</StyledCaption>
      <StyledText>{text1}</StyledText>
      <StyledPrice>{price1}</StyledPrice>
      <BtnOutline link={link1} text={btnText1} />
    </StyledSection>
    <StyledSection>
      {icon2}
      <StyledCaption>{caption2}</StyledCaption>
      <StyledText>{text2}</StyledText>
      <StyledPrice>{price2}</StyledPrice>
      <BtnPrimary link={link2} text={btnText2} />
    </StyledSection>
    <StyledSection>
      {icon3}
      <StyledCaption>{caption3}</StyledCaption>
      <StyledText>{text3}</StyledText>
      <StyledPrice>{price3}</StyledPrice>
      <BtnOutline link={link3} text={btnText3} />
    </StyledSection>
  </StyledContainer>
)

export default Pricing3
