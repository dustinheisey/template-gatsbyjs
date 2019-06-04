import {
  React,
  styled,
  media
} from '../../../../config/imports'

import Copywrite from './Copywrite'
import Form from './Form'
import List from './List'

const StyledFooter = styled.footer`
  ${media.down('phone')``}
`
const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--xl) var(--xxl);
  background: var(--secondary-lighter);

  ${media.down('phone')`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export default () => (
  <StyledFooter>
    <StyledContainer>
      <Form />
      <List />
    </StyledContainer>
    <Copywrite />
  </StyledFooter>
)
