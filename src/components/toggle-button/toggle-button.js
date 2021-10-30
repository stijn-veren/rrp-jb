import './toggle-button.css'

const ToggleButton = ({ showPlanet, toggleRandomPlanet }) => {
  const buttonColor = showPlanet ? 'btn-outline-secondary' : 'btn-secondary'
  const buttonText = showPlanet ? ' off' : ' on'

  return (
    <button
      type="button"
      className={`btn ${buttonColor}`}
      onClick={() => toggleRandomPlanet()}
    >
      Toggle Random Planet
      <span className="text-danger">{buttonText}</span>
    </button>
  )
}

export default ToggleButton
