import React, { useState, useEffect } from 'react'

const EmailForm = props => {

  const [ email, setEmail ] = useState('')
  const [ warning, setWarning ] = useState(false)

  useEffect( () => {
    const emailInput = document.querySelector('#email-input')
    const emailSubmitBtn = document.querySelector('#email-submit-btn')
    const emailValidationSpan = document.querySelector('#email-validation-span')
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (emailRegEx.test(email)) {
      emailInput.style.borderColor = ''
      emailValidationSpan.innerText = ''
      emailSubmitBtn.disabled = false
    } else if (email === '') {
      emailInput.style.borderColor = ''
      emailValidationSpan.innerText = ''
      emailSubmitBtn.disabled = true
    } else {
      emailInput.style.borderColor = 'red'
      emailValidationSpan.innerText = 'Please enter a valid email'
      emailSubmitBtn.disabled = true
    };

  }, [ email ]);

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
        <label id='email-label' for='email-input'>Email</label>
        <button id='email-submit-btn'>Submit</button>
      </form>
      <span id='email-validation-span'></span>


      {/* <button className='left' onClick={() => setWarning(true)}>WARN</button>
      <button className='right' onClick={() => setWarning(false)}>CALM DOWN</button> */}
    </>

  )
};

export default EmailForm