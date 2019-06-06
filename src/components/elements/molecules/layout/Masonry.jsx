import { styled } from '../../../../../config/imports'

export default styled.section`
  padding: var(--xl);
  columns: ${props => props.columns};
  column-gap: 1rem;

  & * {
    width: 100%;
    & div {
      margin: 0 1rem 1rem 0;
      display: inline-block;
      width: 100%;
      text-align: center;
      border-radius: 5px;
      color: var(--secondary-darker);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      transition: 0.3s;

      &:hover {
        box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2);
      }
    }
  }
`
