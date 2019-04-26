import React from 'react'
import styled from 'styled-components'

import Grid from '../atoms/Grid'
import Blurb from '../molecules/Blurb'

import Icon from '../../svg/icons/example-icon.svg'

const StyledGrid = styled(Grid)`
  width: 80%;
  margin: var(--md) 0;
`
export default () => (
  <StyledGrid columns={3}>
    <Blurb
      icon={<Icon />}
      heading='Blurb 1'
      text='Invidunt stet diam eos lorem justo sit sanctus et sea..'
    />
    <Blurb
      icon={<Icon />}
      heading='Blurb 2'
      text='Invidunt stet diam eos lorem justo sit sanctus et sea..'
    />
    <Blurb
      icon={<Icon />}
      heading='Blurb 3'
      text='Invidunt stet diam eos lorem justo sit sanctus et sea..'
    />
    <Blurb
      icon={<Icon />}
      heading='Blurb 4'
      text='Invidunt stet diam eos lorem justo sit sanctus et sea..'
    />
    <Blurb
      icon={<Icon />}
      heading='Blurb 5'
      text='Invidunt stet diam eos lorem justo sit sanctus et sea..'
    />
    <Blurb
      icon={<Icon />}
      heading='Blurb 6'
      text='Invidunt stet diam eos lorem justo sit sanctus et sea..'
    />
  </StyledGrid>
)
