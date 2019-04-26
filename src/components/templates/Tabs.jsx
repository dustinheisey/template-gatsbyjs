import React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import 'react-tabs/style/react-tabs.css'
import Plan from '../molecules/Plan'

const StyledTabs = styled(Tabs)`
  padding: var(--md);
  margin: var(--md) 0;
`
const StyledTab = styled(Tab)`
  margin: 0;
  display: inline-block;
  position: relative;
  list-style: none;
  outline: none;
  padding: var(--xs) var(--md);
  cursor: pointer;

  & p {
    padding: var(--sm);
    border-bottom: 1.5px solid var(--secondary-light);
  }

  &[aria-selected='true'] p {
    color: var(--primary);
    border-color: var(--primary);
  }
`
const StyledTabList = styled(TabList)`
  margin: 0 0 10px;
  padding: var(--sm);
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledTabPanel = styled(TabPanel)`
  display: flex;
  width: 85%;
  margin: auto;
`

export default () => (
  <StyledTabs>
    <StyledTabList>
      <StyledTab>
        <p>Monthly</p>
      </StyledTab>
      <StyledTab>
        <p>Yearly</p>
      </StyledTab>
    </StyledTabList>

    <StyledTabPanel>
      <Plan
        caption='Begginer'
        price='$20'
        frequency='/ Month'
        btnLink='/'
        btnText='Plan'
      >
        <p>
          Sed accusam sanctus ea amet dolor et, at eos clita
          sed dolores ipsum dolor diam est at, sea dolores
          sea aliquyam invidunt lorem invidunt stet et,
          dolores et rebum erat.
        </p>
      </Plan>
      <Plan
        caption='Personal'
        price='$29'
        frequency='/ Month'
        btnLink='/'
        btnText='Plan'
      >
        <p>
          Sed accusam sanctus ea amet dolor et, at eos clita
          sed dolores ipsum dolor diam est at, sea dolores
          sea aliquyam invidunt lorem invidunt stet et,
          dolores et rebum erat.
        </p>
      </Plan>
      <Plan
        caption='Unlimited'
        price='$79'
        frequency='/ Month'
        btnLink='/'
        btnText='Plan'
      >
        <p>
          Sed accusam sanctus ea amet dolor et, at eos clita
          sed dolores ipsum dolor diam est at, sea dolores
          sea aliquyam invidunt lorem invidunt stet et,
          dolores et rebum erat.
        </p>
      </Plan>
    </StyledTabPanel>
    <StyledTabPanel>
      <Plan
        caption='Begginer'
        price='$200'
        frequency='/ Year'
        btnLink='/'
        btnText='Plan'
      >
        <p>
          Sed accusam sanctus ea amet dolor et, at eos clita
          sed dolores ipsum dolor diam est at, sea dolores
          sea aliquyam invidunt lorem invidunt stet et,
          dolores et rebum erat.
        </p>
      </Plan>
      <Plan
        caption='Personal'
        price='$290'
        frequency='/ Year'
        btnLink='/'
        btnText='Plan'
      >
        <p>
          Sed accusam sanctus ea amet dolor et, at eos clita
          sed dolores ipsum dolor diam est at, sea dolores
          sea aliquyam invidunt lorem invidunt stet et,
          dolores et rebum erat.
        </p>
      </Plan>
      <Plan
        caption='Unlimited'
        price='$790'
        frequency='/ Year'
        btnLink='/'
        btnText='Plan'
      >
        <p>
          Sed accusam sanctus ea amet dolor et, at eos clita
          sed dolores ipsum dolor diam est at, sea dolores
          sea aliquyam invidunt lorem invidunt stet et,
          dolores et rebum erat.
        </p>
      </Plan>
    </StyledTabPanel>
  </StyledTabs>
)
