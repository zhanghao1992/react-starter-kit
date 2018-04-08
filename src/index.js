import { render } from 'react-dom'
import React, {Component} from 'react'
import {Provider} from 'mobx-react'
import store from './store'
import RouterConfig from './routers'

// @withRouter
class App extends Component {
    // componentDidMount(){
    //   console.log(this.props)
    // }
    render () {
        return (
            <Provider Store={store}>
                <RouterConfig />
            </Provider>
        )
    }
}

render(<App/>, document.getElementById('root'))

if (module.hot) {
    module.hot.accept()
}
