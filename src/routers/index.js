import React, {Component} from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Layouts from '../views/Layouts'
import Loadable from 'react-loadable'
import DelayLoading from '../components/DelayLoading'

export const Login = Loadable({
    loader: () => import('../views/Login'),
    loading: DelayLoading,
    delay: 3000//默认200ms
})

// @withRouter
class RouterConfig extends Component {
    // componentDidMount(){
    //   console.log(this.props)
    // }
    render () {
        return (
            <HashRouter>
                <Switch>
                    {/* <Redirect to="/panel/home"/> */}
                    <Route component={Login}
                        exact
                        path="/login"
                    />
                    <Route component={Layouts}
                        path="/"
                    />
                </Switch>
            </HashRouter>
        )
    }
}
export default RouterConfig
