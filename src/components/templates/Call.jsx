/* eslint-disable no-nested-ternary */
import React from 'react'
import styled from 'styled-components'
import Call from '../molecules/Call'
import Link from '../atoms/Link'
import Placeholder from '../../images/placeholder.jpg'

const StyledCall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--md);
`
const StyledCallCenter = styled(StyledCall)`
  align-items: center;
  padding: var(--lg);

  & * {
    margin-bottom: var(--md);
    max-width: 70%;
    text-align: center;
  }

  & a {
    margin-bottom: 0;
  }
`
const CallFirst = () => (
  <Call left>
    <img src={Placeholder} alt='Placeholder' />
    <StyledCall>
      <h2>Heading</h2>
      <p>
        Et lorem amet diam voluptua invidunt duo. Amet
        invidunt eos sed labore diam eirmod lorem. Dolores
        et sit tempor kasd.
      </p>
      <Link link='/' href='/'>
        Link
      </Link>
    </StyledCall>
  </Call>
)

const CallSecond = () => (
  <Call right>
    <StyledCall>
      <h2>Heading</h2>
      <p>
        Et lorem amet diam voluptua invidunt duo. Amet
        invidunt eos sed labore diam eirmod lorem. Dolores
        et sit tempor kasd.
      </p>
      <Link link='/' href='/'>
        Link
      </Link>
    </StyledCall>
    <img src={Placeholder} alt='Placeholder' />
  </Call>
)

const CallThird = () => (
  <Call left>
    <img src={Placeholder} alt='Placeholder' />
    <StyledCall>
      <h2>Heading</h2>
      <p>
        Et lorem amet diam voluptua invidunt duo. Amet
        invidunt eos sed labore diam eirmod lorem. Dolores
        et sit tempor kasd.
      </p>
      <Link link='/' href='/'>
        Link
      </Link>
    </StyledCall>
  </Call>
)

const CallFourth = () => (
  <Call>
    <StyledCallCenter>
      <caption>Tagline</caption>
      <h2>
        Long Headline to turn your visiters into users
      </h2>
      <Link link='/' href='/'>
        Link
      </Link>
    </StyledCallCenter>
  </Call>
)

export { CallFirst, CallSecond, CallThird, CallFourth }
