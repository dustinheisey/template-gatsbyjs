import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  display: grid;
  padding: var(--md);
  grid-auto-columns: 250px;
`

const StyledMain = styled.main`
  display: grid;
  padding: var(--md);
  grid-auto-columns: 250px;
`

const Grid = ({ section, children }) => {
  if (section) {
    return <StyledSection>{children}</StyledSection>
  }
  return <StyledMain>{children}</StyledMain>
}

export default Grid
