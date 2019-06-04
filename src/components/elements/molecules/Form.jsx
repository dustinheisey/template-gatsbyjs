import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  margin: 0;
  padding: var(--md);
`

export default ({ name, children }) => (
  <StyledForm name={name} method='POST' data-netlify='true'>
    {children}
  </StyledForm>
)
