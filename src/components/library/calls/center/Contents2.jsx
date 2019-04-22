import React from 'react'
import styled from 'styled-components'
import BtnPrimary from '../../../elements/buttons/Primary'

const StyledContainer = styled.section``
const StyledTagline = styled.h4``
const StyledHeading = styled.h1``

const Contents2 = ({ tagline, heading, link, btnText }) => (
  <StyledContainer>
    <StyledTagline>{tagline}</StyledTagline>
    <StyledHeading>{heading}</StyledHeading>
    <BtnPrimary link={link} text={btnText} />
  </StyledContainer>
)

export default Contents2
