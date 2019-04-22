/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import Links from '../components/atoms/Link'
import Btn from '../components/atoms/Button'
import Tag from '../components/atoms/Tags'

import Tooltip from '../components/atoms/Tooltip'
import Loading from '../components/atoms/Loading'
import Grid from '../components/atoms/Grid'

const Index = () => (
  <Layout>
    <SEO title='Placeholder' description='Placeholder' />
    <h1>Placeholder Main</h1>

    <Links link='/'>Internal Link</Links>
    <Links link='https://dustinheisey.com' external>
      External Link
    </Links>

    <Btn link='/' text='Primary Internal' />
    <Btn
      link='https://dustinheisey.com'
      text='Primary external'
      external
    />
    <Btn link='/' text='Secondary Internal' secondary />
    <Btn
      link='https://dustinheisey.com'
      text='Secondary external'
      secondary
      external
    />
    <Btn link='/' text='Outline Internal' outline />
    <Btn
      link='https://dustinheisey.com'
      text='Outline external'
      outline
      external
    />
    <Tag tag='tag' tag1 />
    <Tag tag='tag' tag2 />
    <Tag tag='tag' tag3 />
    <Tag tag='tag' tag4 />
    <Tag tag='tag' tag5 />
    <Tag tag='tag' />
    <Tooltip
      position='top center'
      trigger={
        <button type='button' className='tooltip'>
          Tootltip
        </button>
      }
    >
      Tooltip
    </Tooltip>
    <Loading
      height='var(--lg)'
      width='var(--lg)'
      color='var(--primary-darker)'
      type='bubbles'
    />

    <Grid section>
      <p>this is 1</p>
      <p>this is 1</p>
      <p>this is 1</p>
      <p>this is 1</p>
      <p>this is 1</p>
    </Grid>
  </Layout>
)

export default Index
