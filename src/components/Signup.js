import React, {useRef} from 'react'
import styled from 'styled-components'


export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef(); 
    const passwordConfirmRef = useRef();


  return (
    <Wrapper>   
        <h2>Sign Up</h2>
        <div id='email'>
            <label>Email</label>
            <input type="email" ref={emailRef} required />
        </div>
         <div id='password'>
            <label>Password</label>
            <input type="password" ref={passwordRef} required />
        </div>
         <div id='password-confirm'>
            <label>Password Confirmation</label>
            <input type="password" ref={passwordConfirmRef} required />
        </div>
        <button type="submit">Sign Up</button>
    </Wrapper>
  )
}


const Wrapper =  styled.form``