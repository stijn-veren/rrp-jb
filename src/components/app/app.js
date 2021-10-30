import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from '../item-list'
import PersonDetails from '../person-details'

import './app.css'

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="card border-secondary">
        <div className="card-body">
          <RandomPlanet />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 mt-4">
          <ItemList />
        </div>
        <div className="col-12 col-md-7 my-4">
          <PersonDetails />
        </div>
      </div>
    </div>
  )
}

export default App
