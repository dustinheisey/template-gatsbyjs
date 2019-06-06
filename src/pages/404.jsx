import { React, Default } from '../../config/imports'
import Error from '../components/modules/404/error'

const Content = {
  title: '404: Not found | Dustin Heisey'
}
export default () => (
  <Default title={Content.title}>
    <Error />
  </Default>
)
