/*export default function ErrorComponent() {
  return (
    <div className="ErrorComponent">
      <h1>Ooops !! Something went wrong </h1>
    </div>
  )
}

*/

import './ErrorComponent.css'
import { Link } from 'react-router-dom'

export default function ErrorComponent() {
  return (
    <div className="error-container">
      
      <div className="error-card">
        <h1 className="error-code">404</h1>
        
        <h2 className="error-title">
          Oops! Something went wrong
        </h2>

        <p className="error-message">
          The page you are looking for doesn’t exist or an unexpected error has occurred.
        </p>

        <Link to="/" className="error-btn">
          Go Back Home
        </Link>
      </div>

    </div>
  )
}