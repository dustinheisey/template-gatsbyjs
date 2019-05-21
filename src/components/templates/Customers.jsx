import React from 'react'
import Customers from '../molecules/Customers'
import Placeholder from '../../images/placeholder.jpg'

export default () => (
  <Customers
    customers={5}
    tagline='Check out our customers'
  >
    <img src={Placeholder} alt='Placeholder' />
    <img src={Placeholder} alt='Placeholder' />
    <img src={Placeholder} alt='Placeholder' />
    <img src={Placeholder} alt='Placeholder' />
    <img src={Placeholder} alt='Placeholder' />
  </Customers>
)
