import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldBean ,retrieveHelloWorldPathVariable} from '../api/HelloWorldService'

import { useAuth } from './security/AuthContext'
export default function WelcomeComponent() {

  const params = useParams()
  console.log(params.username)
  const username = params.username;
  
  const [message,setMessage]=useState(null)

  const authContext=useAuth()
  // calling backend api
  function callHelloWorldRestApi()
  {
      // axios is used to call rest api
      /*axios.get('http://localhost:8080/hello-world').then(
        (response)=> successfulResponse(response)
      ).catch((error)=> errorResponse(error))
      .finally(()=> console.log('cleanup'))*/
    
     /* retrieveHelloWorldBean().then(
        (response)=> successfulResponse(response)
      ).catch((error)=> errorResponse(error))
      .finally(()=> console.log('cleanup'))
*/
      retrieveHelloWorldPathVariable('in28minutes',authContext.token).then(
        (response)=> successfulResponse(response)
      ).catch((error)=> errorResponse(error))
      .finally(()=> console.log('cleanup'))



  }

  //callback functions for above axios
  function successfulResponse(response)
  {
    console.log(response)
    console.log("yoyo")
    setMessage(response.data.message)
  }
  function errorResponse(error)
  {
    console.log(error)

  }

  

  return (
    <div className="Welcome">
      Welcome {username}

      <div>
        Yours todos

        {/* using link dont refersh all page agin good for spa*/}
        <Link to="/todos"> Go here </Link>
      </div>
      <div>
        <button class="btn btn-success m-5" onClick={callHelloWorldRestApi}>Call Hello World Rest Api</button>
      </div>
      <div class='text-info'>
        {
          message
        }

      </div>
    </div>
  )
}
