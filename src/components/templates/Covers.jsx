import React from 'react'
import styled from 'styled-components'
import { StyledGrid } from '../molecules/Call'

import Placeholder from '../../images/placeholder.jpg'
import Btn from '../atoms/Button'

const StyledContainer = styled(StyledGrid)``
const StyledCall = styled.div`
  padding: var(--xxl);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export default () => (
  <StyledContainer right background={Placeholder}>
    <StyledCall>
      <caption>Tagline</caption>
      <h1>Heading</h1>
      <Btn primary link='/' text='Placeholder Button' />
    </StyledCall>
    <img src={Placeholder} alt='Placeholder' />
  </StyledContainer>
)
