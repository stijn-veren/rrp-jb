import './error-indicator.css'
import icon from './death-star.png'

const ErrorIndicator = () => {
  return (
    <div className="d-flex flex-column align-items-center text-warning">
      <img src={icon} alt="error icon" className="mb-3" />
      <h2 className="text-warning">BOOM!</h2>
      <p>
        something has gone terribly wrong
        <br />
        (but we already sent droids to fix it)
      </p>
    </div>
  )
}

export default ErrorIndicator
