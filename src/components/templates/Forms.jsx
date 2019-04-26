import React from 'react'
import styled from 'styled-components'

import Grid from '../atoms/Grid'
import Input from '../atoms/Input'
import Form from '../molecules/Forms'

const StyledContainer = styled(Grid)`
  padding: var(--lg);
  align-content: start;
  margin: var(--md) 0;
`
const StyledText = styled.div`
  padding: var(--md);
`

const StyledForm = styled(Form)`
  margin: 0;
  padding: var(--md);
`

const StyledList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export default () => (
  <StyledContainer columns={2}>
    <StyledForm>
      <h3>Placeholder Form Heading</h3>
      <p>
        Magna sea dolores vero dolores lorem takimata elitr.
      </p>
      <StyledList>
        <Input type='email' name='Email' />
        <Input type='submit' />
      </StyledList>
    </StyledForm>
    <StyledText>
      <h3>Placeholder form heading</h3>
      <p>
        Magna sea dolores vero dolores lorem takimata elitr.
        Lorem ut dolor elitr dolore diam aliquyam eos
        sanctus. Dolore stet aliquyam.
      </p>
    </StyledText>
  </StyledContainer>
)
