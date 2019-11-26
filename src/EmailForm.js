import React, { useState, useEffect } from 'react'

const EmailForm = props => {

  const [ email, setEmail ] = useState('')
  const [ pass, setPass ] = useState('')
  const [ passConfirm, setPassConfirm ] = useState('')
  const [ passMatch, setPassMatch ] = useState(null)
  const [ warning, setWarning ] = useState(false)

  useEffect( () => {
    const emailInput = document.querySelector('#email-input')
    const submitBtn = document.querySelector('#submit-btn')
    const emailValidationSpan = document.querySelector('#email-validation-span')
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (emailRegEx.test(email)) {
      emailInput.style.borderColor = ''
      emailValidationSpan.innerText = ''
      submitBtn.disabled = false
    } else if (email === '') {
      emailInput.style.borderColor = ''
      emailValidationSpan.innerText = ''
      submitBtn.disabled = true
    } else {
      emailInput.style.borderColor = 'red'
      emailValidationSpan.innerText = 'Please enter a valid email'
      submitBtn.disabled = true
    };


    // const passInput = document.querySelector('#pass-input')
    const passConfirmInput = document.querySelector('#passConfirm-input')
    const passConfirmValidationSpan = document.querySelector('#passConfirm-validation-span')

    if( pass === passConfirm ) {
      passConfirmInput.style.borderColor = ''
      passConfirmValidationSpan.innerText = ''
    } else if ( pass === '' && passConfirm === '' ) {
      (console.log('match!'))
    } else {
      console.log('wrong!')
      passConfirmInput.style.borderColor = 'red'
      passConfirmValidationSpan.innerText = 'Passwords do not match!'
      submitBtn.disabled = true
    }

  }, [ email, pass, passConfirm ]);

  const handleFocus = e => {
    e.target.placeholder = ''
    console.log(e.target)
  }

  const handleBlur = e => {
    e.target.placeholder = 'Please enter email'
    console.log(e.target)
  }

  return(
    <>
      <h1 className={ warning ? 'main warning'  : 'main message'}>Email Validation!</h1>
      <form className='form'>
        <input id='email-input' className='email-input' placeholder='Please enter email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        onFocus={ e => handleFocus(e)}
        onBlur={ e => handleBlur(e)}
        />
        <span id='email-validation-span'></span>

        <input id='pass-input' 
        className='input' 
        type='password'
        placeholder='Please enter password'
        onChange={ e => setPass(e.target.value)}
        />

        <input id='passConfirm-input' 
        className='input' 
        type='password'
        placeholder='Please confirm password'
        onChange={ e => setPassConfirm(e.target.value)}
        />
        <span id='passConfirm-validation-span'></span>

        <button id='submit-btn'>Submit</button>
      </form>

      {/* <button className='left' onClick={() => setWarning(true)}>WARN</button>
      <button className='right' onClick={() => setWarning(false)}>CALM DOWN</button> */}
    </>

  )
};

export default EmailForm