import { Route, Switch } from 'react-router-dom'
import './app.css'
import { HomePage, CartPage } from '../../pages'

const App = ({ bookstoreService }) => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} />
    </Switch>
  )
}

export default App
