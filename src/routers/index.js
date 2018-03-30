import React,{Component} from 'react'
import {HashRouter, Route, Switch, withRouter} from 'react-router-dom'
import {Provider} from 'mobx-react'
import Layouts from '../views/Layouts'
import store from '../store'

import Loadable from 'react-loadable'
import DelayLoading from '../components/DelayLoading'

const Login = Loadable({
  loader: () => import('../views/Login'),
  loading: DelayLoading,
  delay: 3000
})

@withRouter
class Routers extends Component {
  // componentDidMount(){
  //   console.log(this.props)
  // }
  render () {
    return (
      <Provider Store={store}>
        <HashRouter>
          <Switch>
            {/* <Redirect to='/home'/> */}
            <Route component={Login}
                exact
                path="/login"
            />
            <Route component={Layouts}
                path="/"
            />
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

export default Routers
