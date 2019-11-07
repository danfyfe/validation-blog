import React, { useState, useEffect } from 'react'

const EmailForm = props => {

  const [ email, setEmail ] = useState('')

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

  return(
    <>
      <h1>Email Validation!</h1>
      <div>
        <input id='email-input' placeholder='Please enter email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <button id='email-submit-btn'>Submit</button>
      </div>
      <span id='email-validation-span'></span>
    </>
  )
};

export default EmailForm