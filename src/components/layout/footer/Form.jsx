/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  React,
  styled,
  media,
  Btn
} from '../../../../config/imports'

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  justify-content: center;
  & img {
    width: 15vmin;
  }

  ${media.down('phone')`margin-bottom: var(--xxl)`}
`
const StyledInputList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  & * {
    margin-right: var(--sm);
  }
`

export default () => (
  <StyledInfo>
    <aside>I&apos;ll get in touch instead</aside>
    <h3
      style={{
        color: 'var(--text-dark)',
        marginTop: 'var(--md)'
      }}
    >
      Not ready to send me a message?
    </h3>
    <p style={{ color: 'var(--text-dark)' }}>
      No worries. Give me your email and I&apos;ll send you
      one.
    </p>
    <form
      name='footer'
      method='POST'
      action='https://formsubmit.io/send/	4a91f29e-eb3d-4507-8b0d-ca560785b30e'
    >
      <label
        htmlFor='email'
        style={{
          display: 'flex',
          color: 'var(--primary)',
          flexDirection: 'column',
          marginBottom: 'var(--xs)'
        }}
      >
        Email
      </label>
      <input
        style={{
          border: '1px solid var(--secondary)',
          marginRight: 'var(--sm)',
          marginBottom: 'var(--md)',
          padding: 'var(--xs)',
          borderRadius: '5px'
        }}
        type='email'
        id='email'
        name='email'
        autoComplete='on'
        required
      />
      <Btn form content='Submit' />
    </form>
  </StyledInfo>
)
