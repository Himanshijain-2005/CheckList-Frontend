import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './security/AuthContext';
import './LoginComponent.css'

export default function LoginComponent() {

  // State variable for input field
  const [username, setUsername] = useState('in28minutes');
  const [password, setPassword] = useState("");
  const [showSucessMessage, setshowSucessMessage] = useState(false);
  const [showErrorMessage, setshowErrorMessage] = useState(false);

  // Using UseNavigate hook
  const navigate = useNavigate();

  //using global cnotext
  const authContext = useAuth()

  // event handling functions for change in field of login form
  function handleusernameChange(event) {
    console.log(event)
    console.log(event.target.value)
    setUsername(event.target.value)
  }

  function handlepasswordChange(event) {
    console.log(event.target.value)
    setPassword(event.target.value)
  }

  async function handlesubmit() {
    //if (username === 'Himanshi' && password === 'dummy') { // now this logic is moved to auth context

    if (await authContext.login(username,password)) { 
      setshowSucessMessage(true)
      setshowErrorMessage(false)
      // authenticated user moved to welcome component
      navigate(`/welcome/${username}`)

      //console.log("Sucess")
      //authContext.setAuthenticated(true)   logic moved to auth context
    }
    else {
      //authContext.setAuthenticated(false)
      //console.log("failed")
      setshowSucessMessage(false)
      setshowErrorMessage(true)
    }

  }

  // component rendered when authenticated 
  function SuccessMessageComponent() {
    if (showSucessMessage) {
      return <div className='sucessMessage'> Authenticated Suceessfully</div>
    }
    return null
  }

  return (

    <div className="Login">
      Login Component


      {/* two ways to render a component */}
      <SuccessMessageComponent />
      {showErrorMessage && <div className='errorMessage'> Authenticated failed</div>}


      <div className="LoginForm">
        <div>
          <label>User Name</label>
          <input type="text" name="username" value={username} onChange={handleusernameChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={handlepasswordChange} />
        </div>
        <div>
          <button type="button" name="login" onClick={handlesubmit}> button</button>
        </div>
      </div>
    </div>
  )
}
