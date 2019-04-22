import React from 'react'
import styled from 'styled-components'
import Grid1 from '../grids/Grid1'
import BtnPrimary from '../../elements/buttons/Primary'

const StyledContainer = styled(Grid1)``
const StyledSection = styled.div``
const StyledPrice = styled.p``
const StyledText = styled.p``

const Pricing1 = ({ price, text, link, btnText }) => (
  <StyledContainer>
    <StyledSection>
      <StyledPrice>{price}</StyledPrice>
      <StyledText>{text}</StyledText>
      <BtnPrimary link={link} text={btnText} />
    </StyledSection>
  </StyledContainer>
)

export default Pricing1
