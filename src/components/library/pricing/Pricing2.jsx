import React from 'react'
import styled from 'styled-components'
import Grid2 from '../grids/Grid2'
import BtnPrimary from '../../elements/buttons/Primary'
import BtnOutline from '../../elements/buttons/Outline'

const StyledContainer = styled(Grid2)``
const StyledSection = styled.div``
const StyledText = styled.p``
const StyledPrice = styled.p``
const StyledCaption = styled.caption``

const Pricing2 = ({
  caption1,
  caption2,
  price1,
  price2,
  text1,
  text2,
  link1,
  link2,
  btnText1,
  btnText2
}) => (
  <StyledContainer>
    <StyledSection>
      <StyledCaption>{caption1}</StyledCaption>
      <StyledPrice>{price1}</StyledPrice>
      <StyledText>{text1}</StyledText>
      <BtnOutline link={link1} text={btnText1} />
    </StyledSection>
    <StyledSection>
      <StyledCaption>{caption2}</StyledCaption>
      <StyledPrice>{price2}</StyledPrice>
      <StyledText>{text2}</StyledText>
      <BtnPrimary link={link2} text={btnText2} />
    </StyledSection>
  </StyledContainer>
)

export default Pricing2
