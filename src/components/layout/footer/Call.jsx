import {
  React,
  styled,
  media,
  Section,
  Btn
} from '../../../../config/imports'
import Placeholder from '../../../media/images/placeholder.jpg'

const StyledCall = styled(Section)`
  padding: var(--md);
  background: url(${Placeholder});
  background-size: cover;
  color: #fff;

  & * {
    margin: var(--xs) 0;
  }

  ${media.down('phone')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: var(--xxl);

    & * {
      margin: var(--md) 0;
    }

    & h2 {
      margin: var(--sm) 0;
    }
  `}
`

export default () => (
  <StyledCall xxl>
    <h2 style={{ color: 'var(--text-lighter)' }}>
      Placeholder Call
    </h2>
    <p style={{ color: 'var(--text-lighter)' }}>
      Placeholder Text
    </p>
    <Btn
      light
      content='Call Btn'
      link='/idk'
      color='var(--text-secondary-lighter)'
    />
  </StyledCall>
)
