import React from 'react'
import styled from 'styled-components'
import NavMobile from './NavMobile'
import NavDesktop from './Nav'
import Placeholder from '../../images/placeholder.jpg'
import Btn from '../atoms/Button'
import { media } from '../../../config/global'

const StyledHeader = styled.header``
const StyledNav = styled.nav`
  display: none;
  height: 15vmin;

  ${media.up('tabletPortrait')`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: var(--md);`}
`
const StyledLogo = styled.img`
  height: 100%;
  margin: 0;
`

const StyledBtn = styled(Btn)`
  height: 100%;
`

export default () => (
  <StyledHeader>
    <StyledNav>
      <StyledLogo src={Placeholder} />
      <NavDesktop />
      <StyledBtn text='Contact' link='/' />
    </StyledNav>
    <NavMobile />
  </StyledHeader>
)
