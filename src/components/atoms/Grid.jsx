import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.section`
  display: grid;
  width: 75%;
  margin: auto;
  grid-template-columns: repeat(
    ${props => props.columns},
    1fr
  );
  justify-items: center;
  align-content: center;
  grid-gap: var(--md);
  align-content: center;
  justify-items: center;
  padding: var(--md);
`

export default ({ columns, children }) => (
  <StyledGrid columns={columns}>{children}</StyledGrid>
)
