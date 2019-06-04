import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  margin: var(--sm);
`
const StyledPerson = styled.div`
  margin-left: var(--md);
`
const StyledHeading = styled.h3`
  margin-bottom: var(--xs);
  color: var(--secondary-darker);
`
const StyledDescription = styled.caption`
  color: var(--secondary);
`
export default ({ image, heading, description }) => (
  <StyledContainer>
    {image}
    <StyledPerson>
      <StyledHeading>{heading}</StyledHeading>
      <StyledDescription>{description}</StyledDescription>
    </StyledPerson>
  </StyledContainer>
)
