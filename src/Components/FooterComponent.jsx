import { useContext } from 'react'
import { AuthContext } from './security/AuthContext'
import './FooterComponent.css'

export default function FooterComponent() {
  const authContext=useContext(AuthContext)
  
  return (
    <footer className='footer'>
      <div className='container'>
        Your footer
      </div>
    </footer>
  )
}

