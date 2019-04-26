import React from 'react'
import GlobalStyle from '../../config/global'
import Header from './Header'
import Footer from './Footer'

export default ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)
