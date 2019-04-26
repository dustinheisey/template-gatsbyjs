import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & * {
    margin: var(--sm) 0;
  }
`
const StyledHeading = styled.h3``
const StyledText = styled.p``
export default ({ icon, person, heading, text }) => (
  <StyledContainer>
    {icon && icon}
    {person && person}
    {heading && <StyledHeading>{heading}</StyledHeading>}
    <StyledText>{text}</StyledText>
  </StyledContainer>
)
