import React from 'react'
import styled from 'styled-components'

const StyledGroup = styled.div`
  display: flex;
  align-items: center;

  & * {
    margin: var(--sm);
  }
`
export default ({ children }) => (
  <StyledGroup>{children}</StyledGroup>
)
