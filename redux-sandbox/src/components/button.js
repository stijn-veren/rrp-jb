const Button = ({ action, name }) => {
  return (
    <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-1">
      <div className="d-grid gap-2">
        <button
          onClick={action}
          className="btn btn-primary btn-lg"
          type="button"
        >
          {name}
        </button>
      </div>
    </div>
  )
}

export default Button
