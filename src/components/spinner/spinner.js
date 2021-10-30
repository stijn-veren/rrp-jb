import './spinner.css'

const Spinner = () => {
  return (
    <div className="col">
      <div className="spinner">
        <div className="double-ring-spinner">
          <div className="drs-wrapper">
            <div></div>
            <div></div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spinner
