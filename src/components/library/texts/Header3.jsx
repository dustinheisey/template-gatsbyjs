import React from 'react'
import styled from 'styled-components'
import Grid1 from '../grids/Grid1'
import LinkInternal from '../../elements/links/Internal'

const StyledContainer = styled(Grid1)``
const StyledHeading = styled.h1``

const Header3 = ({ heading, link, linkText }) => (
  <StyledContainer>
    <StyledHeading>{heading}</StyledHeading>
    <LinkInternal link={link}>{linkText}</LinkInternal>
  </StyledContainer>
)

export default Header3
