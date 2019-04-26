import React from 'react'
import styled from 'styled-components'
import Call from '../molecules/Call'

import Placeholder from '../images/Placeholder'
import Btn from '../atoms/Button'

const StyledCall = styled.div`
  padding: var(--xxl);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export default () => (
  <Call right>
    <StyledCall>
      <caption>Tagline</caption>
      <h1>Heading</h1>
      <Btn primary link='/' text='Placeholder Button' />
    </StyledCall>
    <Placeholder />
  </Call>
)
