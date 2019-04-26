import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

// import Customers from '../components/templates/Customers'
// import Placeholder from '../components/images/Placeholder'
import Cover from '../components/templates/Covers'
import Form from '../components/templates/Forms'
import Tabs from '../components/templates/Tabs'
import Grid from '../components/templates/Grids'
import {
  CallFirst,
  CallSecond,
  CallThird,
  CallFourth
} from '../components/templates/Call'

export default () => (
  <Layout>
    <SEO title='Placeholder' description='Placeholder' />
    <Cover />
    {/* <Customers /> */}
    <CallFirst />
    <CallSecond />
    <CallThird />
    <CallFourth />
    <Grid />
    <Tabs />
    <Form />
  </Layout>
)
