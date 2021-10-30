import './header.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand fixed-top navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">
          Star DB
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#people">
                People
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#planets">
                Planets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#starships">
                Starships
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
