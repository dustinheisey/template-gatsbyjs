import React from 'react'
import Customers from '../molecules/Customers'

export default ({ children }) => (
  <Customers customers={5} tagline='tagline'>
    {children}
  </Customers>
)
