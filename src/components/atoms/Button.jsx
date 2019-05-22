import React from 'react'
import styled from 'styled-components'
import Links from './Link'

const StyledButton = styled.button`
  border-radius: 5px;
  border: none;
  outline: none;
  padding: var(--sm) var(--md);
  transition: all 0.5s;
`

const StyledPrimary = styled(StyledButton)`
  background: var(--primary);
  color: var(--secondary-lighter);
  &:hover {
    background: var(--primary-dark);
  }
`

const StyledOutline = styled(StyledButton)`
  background: transparent;
  border: 2px solid var(--secondary-dark);
  color: var(--secondary-dark);

  &:hover {
    color: var(--secondary-lighter);
    background: var(--secondary-dark);
  }
`

const StyledSecondary = styled(StyledButton)`
  border: none;
  background: transparent;
  color: var(--secondary-darker);

  &:hover {
    background: var(--secondary-light);
  }
`

const Btn = ({
  text,
  link,
  external,
  secondary,
  outline
}) => {
  if (external) {
    if (secondary) {
      return (
        <Links link={link} external>
          <StyledSecondary type='button'>
            {text}
          </StyledSecondary>
        </Links>
      )
    }

    if (outline) {
      return (
        <Links link={link} external>
          <StyledOutline type='button'>
            {text}
          </StyledOutline>
        </Links>
      )
    }

    return (
      <Links link={link} external>
        <StyledPrimary type='button'>{text}</StyledPrimary>
      </Links>
    )
  }

  if (secondary) {
    return (
      <Links link={link}>
        <StyledSecondary type='button'>
          {text}
        </StyledSecondary>
      </Links>
    )
  }

  if (outline) {
    return (
      <Links link={link}>
        <StyledOutline type='button'>{text}</StyledOutline>
      </Links>
    )
  }
  return (
    <Links link={link}>
      <StyledPrimary type='button'>{text}</StyledPrimary>
    </Links>
  )
}

export default Btn
