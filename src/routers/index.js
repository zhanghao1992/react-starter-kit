import React, {Component} from 'react'
import {HashRouter,Route, Switch, withRouter,Redirect} from 'react-router-dom'
import {Provider} from 'mobx-react'
import Layouts from '../views/Layouts'
import store from '../store'


import Loadable from 'react-loadable'
import DelayLoading from '../components/DelayLoading'

const Login = Loadable({
    loader: () => import('../views/Login'), 
    loading : DelayLoading,delay:3000
})

@withRouter
class Routers extends Component {
    render(){
        return (
            <Provider Store={store}>
                <HashRouter>
                    <Switch>
                        {/* <Redirect to='/home'/> */}
                        <Route path='/login' exact component={Login}/>
                        <Route path='/' component={Layouts}/>
                    </Switch>
                </HashRouter>
            </Provider>
        )
    }
}

export default Routers