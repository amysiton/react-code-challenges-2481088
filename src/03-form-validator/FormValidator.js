import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [message, setMessage] = useState('');

  const submitForm = (e) => {
    e.preventDefault();

    const validateEmail = email.match(/^\S+@\S+\.\S+$/);
    let validatePassword = false;

    console.log(validateEmail);

    if (password === passwordConfirm) {
      validatePassword = password.length > 8;
    }

    if (validateEmail && validatePassword) {
      setMessage("User created");
    } else {
      setMessage("An email must have exactly one @ sign, passwords must be 8 characters or longer");
    }
  }

  return (
    <form>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
        required={true}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
        required={true}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
        required={true}
      />
      <p>{message}</p>
      <input type='submit' value='Submit'
        onClick={ e => submitForm(e)}
      />
    </form>
  )
}
