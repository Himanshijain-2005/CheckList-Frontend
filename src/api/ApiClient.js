 
 import axios from 'axios'

 export const apiClient =axios.create(
    {
      //  baseURL: 'http://localhost:8080'
          baseURL: process.env.REACT_APP_API_URL
    }
)