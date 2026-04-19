import { createContext, useContext } from "react"
import { useState } from "react"
import { apiClient } from "../../api/ApiClient"
import { executeBasicAuthenticationService } from "../../api/AuthenticationApiService"

import { executeJwtAuthenticationService } from "../../api/AuthenticationApiService"
//create a context
export const AuthContext = createContext()


export const useAuth = () => useContext(AuthContext)


// put some state in context 


// share the created context with other components

export default function AuthProvider({ children }) {
    const [number, setNumber] = useState(0);
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)
    // Authentication Logic When to show Some component or not


    /* 
    //Hard Coded Authentication logic
     function login(username, password) {
         if (username === 'in28minutes' && password === 'dummy') {
             setAuthenticated(true)
             setUsername(username)
             return true
         }
         else {
             setAuthenticated(false)
             setUsername(null)
             return false
         }
 
     }
     */


    /*
   // generating a token for authentication and authorizing that token
   // Basic Authentication
   async function login(username, password) {

       const baToken = 'Basic ' + window.btoa(username + ":" + password);

       try {
          const response = await executeBasicAuthenticationService(baToken)
        // const response= await ex
           if (response.status === 200) {
               setAuthenticated(true)
               setUsername(username)
               setToken(baToken)
               apiClient.interceptors.request.use(
                   (config)=>{
                       console.log('intercepting ')
                       config.headers.Authorization=baToken
                       return config
                   }
               )
               return true
           }
           else {
               logout()
               return false
           }
       }
       catch (error) {
               logout()
               return false
       }
   }

*/

    //Authentication and login using Jwt Token
    async function login(username, password) {


        try {
            const response = await executeJwtAuthenticationService(username,password)
            // const response= await ex
            if (response.status === 200) {
                const jwtToken= 'Bearer ' + response.data.token
                setAuthenticated(true)
                setUsername(username)
                setToken( jwtToken)
                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting ')
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )
                return true
            }
            else {
                logout()
                return false
            }
        }
        catch (error) {
            logout()
            return false
        }
    }


    function logout() {
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
    }
    /*For sharing value in provider as a single object
      cont valueTobeShared={number,isAuthenticated,setAuthenticated}
      <AuthContext.Provider value={valueTobeShared}>*/

    return (

        <AuthContext.Provider value={{ number, isAuthenticated, login, logout, username, token }}>
            {children}
        </AuthContext.Provider>

    )
}



// in todo.jsx we put all components inside auth provider and here we access them throuhh 
// childerm and provide a context to all childern components
