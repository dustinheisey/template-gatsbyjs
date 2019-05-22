import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledInternal = styled(Link)`
  text-decoration: none;
  color: var(--link);
  transition: all 0.5s;
  display: inline-block;

  &:hover {
    color: var(--link-hover);
  }
`
const StyledExternal = styled.a`
  text-decoration: none;
  color: var(--link);
  transition: all 0.5s;
  padding-bottom: 8px;

  &:hover {
    color: var(--link-hover);
  }
`

export default ({ link, children, external }) => {
  if (external) {
    return (
      <StyledExternal
        href={link}
        target='_blank'
        rel='noreferrer noopener'
      >
        {children}
      </StyledExternal>
    )
  }
  return (
    <StyledInternal to={link}>{children}</StyledInternal>
  )
}
