import { render } from 'react-dom'
import React,{Component} from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'mobx-react'
import Layouts from './views/Layouts'
import store from './store'
import {Login} from './routers'

// @withRouter
class App extends Component {
  // componentDidMount(){
  //   console.log(this.props)
  // }
  render () {
    return (
      <Provider Store={store}>
        <HashRouter>
          <Switch>
            {/* <Redirect to="/home"/> */}
            <Route component={Login}
                exact
                path="/login"
            />
            <Route component={Layouts}
                path="/panel"
            />
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

render(<App/>, document.getElementById('root'))

if (module.hot) {
    module.hot.accept();
}