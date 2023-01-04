import {createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './firebase-confi';

function Reactregister() {
    const [email,setEmail]  = useState('');
    const [password,setPassword]  = useState('');

    const signin =(event) =>{
      event.preventDefault();
      createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
        
            console.log(userCredential);
            alert("You successfully Register")
            
        }).catch((error)=>{
            console.log(error)
            alert(error);
            
        })
    }
  return (
    <>
       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>

<body>
  <div className=" flex-r container">
    <div className="flex-r login-wrapper">
      <div className="login-text">
        <div className="logo">
          <span><i className="fab fa-speakap"></i></span>
          <span>Quizzer.com</span>
        </div>
        <h1>Registration-form</h1>
        <p>It's not long before you embark on this journey! </p>

        <form className="flex-c" onSubmit={signin}>
          <div className="input-box">
            <span className="label">First-Name</span>
            <div className=" flex-r input">
              <input type="text" placeholder="first-name" required />
            
            </div>
          </div>
    
          <div className="input-box">
            <span className="label">Last-Name</span>
            <div className=" flex-r input">
              <input type="text" required placeholder="last-name" />
            </div>
          </div>
          <div className="input-box">
            <span className="label">E-mail</span>
            <div className=" flex-r input">
              <input type="email" required placeholder="name@abc.com" value={email}  onChange={(e)=>{setEmail(e.target.value)}}  />
              <i className="fas fa-at"></i>
            </div>
          </div>

          <div className="input-box">
            <span className="label">Password</span>
            <div className="flex-r input">
              <input type="password" placeholder="8+ (a, A, 1, #)" value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
              <i className="fas fa-lock"></i>
            </div>
          </div>
          <div className="input-box">
            <span className="label">Phone Number</span>
            <div className="flex-r input">
              <input type="text" placeholder="9346XXX" />
            </div>
          </div>
          <input className="btn" type="submit" value="Submit"/>
        </form>

      </div>
    </div>
  </div>

</body>

    </>
  )
}

export default Reactregister
