/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import Link from '../atoms/Link'

import Icon from '../../svg/icons/dropdown.svg'

const DropdownAbout = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  & li {
    display: none;
    position: relative;
  }
`

const DropdownServices = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  & li {
    display: none;
    position: relative;
  }
`
const StyledLink = styled(Link)``

const MenuArea = styled.div`
  margin: 0;
  padding: 0;
  margin-right: auto;

  & ${StyledLink} {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    text-decoration: none;
  }

  & * {
    margin: 0;
    padding: 0;
  }

  & ul {
    list-style: none;
    display: flex;
  }

  & ul li {
    position: relative;
    width: 100%;
    text-align: center;
  }
  & li:hover ${DropdownAbout} li {
    top: 0;
    display: flex;
    text-align: start;
    margin: 0;
    margin-bottom: var(--xs);

    &:first-child {
      margin-top: var(--sm);
    }
  }

  & li:hover ${DropdownServices} li {
    top: 0;
    display: flex;
    text-align: start;
    margin: 0;
    margin-bottom: var(--xs);

    &:first-child {
      margin-top: var(--sm);
    }
  }

  & li {
    margin-left: var(--md);
  }
`
const StyledText = styled.p`
  display: flex;
  align-items: center;
`
const StyledIcon = styled(Icon)`
  width: 3vmin;
  height: auto;
`
export default () => (
  <MenuArea>
    <ul>
      <li>
        <StyledLink link='/'>
          <StyledText>
            About
            <StyledIcon />
          </StyledText>
        </StyledLink>
        <DropdownAbout>
          <li>
            <StyledLink link='/'>Resume</StyledLink>
          </li>
          <li>
            <StyledLink link='/'>Process</StyledLink>
          </li>
          <li>
            <StyledLink link='/'>Books List</StyledLink>
          </li>
        </DropdownAbout>
      </li>
      <li>
        <StyledLink link='/'>
          <StyledText>
            Services
            <StyledIcon />
          </StyledText>
        </StyledLink>
        <DropdownServices>
          <li>
            <StyledLink link='/'>Web Design</StyledLink>
          </li>
          <li>
            <StyledLink link='/'>PWAs</StyledLink>
          </li>
          <li>
            <StyledLink link='/'>Maintenance</StyledLink>
          </li>
        </DropdownServices>
      </li>
      <li>
        <StyledLink link='/'>Portfolio</StyledLink>
      </li>
    </ul>
  </MenuArea>
)
