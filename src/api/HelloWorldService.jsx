
/*import axios from 'axios'

import { apiClient } from './ApiClient'
export function retrieveHelloWorldBean()
{

    return axios.get('http://localhost:8080/hello-world-bean')
}


//another syntax for above code
export  const retrieveHelloWorldBean2=()=> apiClient.get('/hello-world-bean')

export const retrieveHelloWorldPathVariable= (username,token)=> apiClient.get(`/hello-world/path-variable/${username}`,{
    headers:{
        Authorization: token

    }
})
*/

import { apiClient } from './ApiClient'

// Simple GET
export const retrieveHelloWorldBean = () => 
  apiClient.get('/hello-world-bean')

// (You don't need duplicate function, but keeping if you want)
export const retrieveHelloWorldBean2 = () => 
  apiClient.get('/hello-world-bean')

// Path variable API
export const retrieveHelloWorldPathVariable = (username) => 
  apiClient.get(`/hello-world/path-variable/${username}`)