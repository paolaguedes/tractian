import { Switch, Route } from 'react-router-dom'
import Companies from './pages/Companies'

import Home from './pages/Home'
import Users from './pages/Users'
import Units from './pages/Units'
import Dashboard from './pages/Dashboard'

const Routes = (): JSX.Element => {
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/assets/:id" exact component={Dashboard}/>
      <Route path="/users" exact component={Users}/>
      <Route path="/units" exact component={Units}/>
      <Route path="/companies" exact component={Companies}/>
      <Route>
        {/* page 404 */}
      </Route>
    </Switch>
  )
}


export default Routes