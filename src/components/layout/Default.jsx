import { React, GlobalStyle } from '../../../config/imports'

import Header from './header/Header'
import Footer from './footer/Footer'
import Call from './footer/Call'
import SEO from './header/SEO'

export default ({ title, description, children }) => {
  return (
    <>
      <GlobalStyle />
      <SEO title={title} description={description} />
      <div style={{ padding: 'var(--md)' }}>
        <Header />
      </div>
      <main style={{ width: '100%' }}>{children}</main>
      <Call />
      <Footer />
    </>
  )
}
