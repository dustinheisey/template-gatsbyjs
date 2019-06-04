import {
  React,
  styled,
  media,
  Link
} from '../../../../config/imports'

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: var(--xs) var(--lg) var(--md) var(--md);
  background: var(--secondary-lighter);

  ${media.down('phone')`
    justify-content: center;
  `}
`

export default () => (
  <StyledContainer>
    <small style={{ display: 'inline' }}>
      &copy; 2019&nbsp;
    </small>
    <small>
      <Link
        hover='var(--primary-light)'
        dark
        external
        to='https://dustinheisey.com'
      >
        Dustin Heisey
      </Link>
    </small>
  </StyledContainer>
)
