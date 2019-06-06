import { React, Default } from '../../config/imports'

import Masonry from '../components/elements/molecules/layout/Masonry'

const Content = {
  title: '',
  description: ''
}

export default () => (
  <Default
    title={Content.title}
    description={Content.description}
  />
)
