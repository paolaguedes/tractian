import { Switch, Route } from 'react-router-dom'
import Companies from './pages/Companies'

import Home from './pages/Home'
import Users from './pages/Users'
import Units from './pages/Units'
import Dashboard from './pages/Dashboard'
import UserForm from './pages/UserForm'

const Routes = (): JSX.Element => {
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/assets/:id" exact component={Dashboard}/>
      <Route path="/users/:id" exact component={UserForm}/>
      <Route path="/users" component={Users}/>
      <Route path="/units" component={Units}/>
      <Route path="/companies" component={Companies}/>
      <Route>
        {/* page 404 */}
      </Route>
    </Switch>
  )
}


export default Routes