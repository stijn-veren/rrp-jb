import { connect } from 'react-redux'
import * as actions from '../actions'

const Counter = ({ counter, dec, inc, rnd }) => {
  return (
    <main>
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <span className="fs-4">React Sandbox</span>
        </header>

        <div className="px-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <div className="row justify-content-center">
              <div className="col col-sm-12 col-md-9 col-lg-6 col-xl-6 col-xxl-3">
                <h1 id="counter" className="display-5 fw-bold">
                  {counter}
                </h1>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-1">
                <div className="d-grid gap-2">
                  <button
                    onClick={dec}
                    className="btn btn-primary btn-lg"
                    type="button"
                  >
                    DEC
                  </button>
                </div>
              </div>
              <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-1">
                <div className="d-grid gap-2">
                  <button
                    onClick={inc}
                    className="btn btn-primary btn-lg"
                    type="button"
                  >
                    INC
                  </button>
                </div>
              </div>
              <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-1">
                <div className="d-grid gap-2">
                  <button
                    onClick={rnd}
                    className="btn btn-primary btn-lg"
                    type="button"
                  >
                    RND
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">© 2021</footer>
      </div>
    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state,
  }
}

export default connect(mapStateToProps, actions)(Counter)
