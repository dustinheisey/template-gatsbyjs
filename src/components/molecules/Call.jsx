/* eslint-disable no-nested-ternary */
import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: ${props =>
    props.left
      ? '.55fr .45fr'
      : props.right
      ? '.45fr .55fr'
      : '1fr'};
  grid-gap: var(--md);
  align-content: center;
  justify-items: center;
  padding: var(--lg);
`

export default ({ left, right, children }) => {
  if (left) {
    return <StyledGrid left>{children}</StyledGrid>
  }

  if (right) {
    return <StyledGrid right>{children}</StyledGrid>
  }
  return <StyledGrid center>{children}</StyledGrid>
}

export { StyledGrid }
