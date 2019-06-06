import {
  React,
  styled,
  media
} from '../../../../../config/imports'

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.column ? 'column' : 'row'};
  align-items: ${props =>
    props.column
      ? props.left
        ? 'flex-start'
        : props.right
        ? 'flex-end'
        : 'center'
      : 'center'};
  justify-content: ${props =>
    props.column
      ? 'center'
      : props.left
      ? 'flex-start'
      : props.right
      ? 'flex-end'
      : 'center'};

  ${media.down('phone')`
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `};
`

export default ({ column, left, right, children }) => (
  <StyledFlex column={column} left={left} right={right}>
    {children}
  </StyledFlex>
)
