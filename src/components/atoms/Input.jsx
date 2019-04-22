import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
  margin: var(--sm);
`
const StyledInput = styled.input`
  outline: none;
  margin: var(--sm);
`

const StyledSubmit = styled.input`
  outline: none;
  padding: var(--sm) var(--md);
  margin: var(--sm);
  transition: all 0.5s;

  background: var(--primary);
  color: var(--secondary-lighter);

  &:hover {
    background: var(--primary-dark);
  }
`

const Input = ({ name, type }) => {
  if (type === 'search') {
    return (
      <StyledLabel htmlFor={name}>
        {name}
        <StyledInput type='search' name={name} />
      </StyledLabel>
    )
  }
  if (type === 'submit') {
    return (
      <StyledLabel htmlFor={name}>
        {name}
        <StyledSubmit type='submit' name={name} />
      </StyledLabel>
    )
  }
  return (
    <StyledLabel htmlFor={name}>
      {name}
      <StyledInput type={type} name={name} />
    </StyledLabel>
  )
}

export default Input
