import {  Route, useNavigate, useParams, Link } from 'react-router-dom'
import AuthProvider from './security/AuthContext'
import { AuthContext } from './security/AuthContext'
import { useContext } from 'react'
import { useAuth } from './security/AuthContext'
import './HeaderComponent.css'
import { NavLink } from 'react-router-dom'

/*export default function HeaderComponent() {

  //  const authContext=useContext(AuthContext)
   const authContext=useAuth()
   function logout()
   {
  //  authContext.setAuthenticated(false)
  authContext.logout()
   }
   // console.log(authContext)
  return (
          <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">in28minutes</a>
                        <div className=" navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                {authContext.isAuthenticated && <Link className="nav-link" to="/welcome/in28minutes">Home</Link> }
                                    </li>
                                <li className="nav-item fs-5">
                                {authContext.isAuthenticated && <Link className="nav-link" to="/todos">Todos</Link>}
                                 </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                          {!(authContext.isAuthenticated) &&  <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>}
                           {authContext.isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link"  onClick={logout} to="/logout" >Logout</Link></li>}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

  )
}
*/




export default function HeaderComponent() {

  //  const authContext=useContext(AuthContext)
   const authContext=useAuth()
   function logout()
   {
  //  authContext.setAuthenticated(false)
  authContext.logout()
   }
   // console.log(authContext)
  return (
<header className="app-header">
  <div className="container">

    {/* Top Row */}
    <div className="header-content">
      <div className="logo">
        <Link to="/" className="brand">TodoApp</Link>
      </div>

      <div className="auth-links">
        {!authContext.isAuthenticated && (
          <Link to="/login" className="btn-outline">Login</Link>
        )}

        {authContext.isAuthenticated && (
          <Link to="/logout" onClick={logout} className="btn-danger">
            Logout
          </Link>
        )}
      </div>
    </div>

    {/* Bottom Row (NEW) */}
    {authContext.isAuthenticated && (
      <nav className="nav-links-bottom">
        <Link to="/welcome/in28minutes">Home</Link>
        <Link to="/todos">Todos</Link>
      </nav>
    )}

  </div>
</header>


  )
}