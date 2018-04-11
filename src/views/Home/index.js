import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {Button} from 'antd'
import './index.scss'
// import { withRouter } from 'react-router-dom'

// @withRouter
@inject('Store')
@observer
class Home extends Component {
    componentDidMount (){
        console.log(this.props)
    }
  changeName=(e) => {
      console.log(e.target)
      const {Store} = this.props
      const val = this.refs.input.value
      console.log(val)
      Store.updateName(val)
  }
  render () {
      const {Store} = this.props
      return (
          <div className="Home_">
              <p className="username">{Store.userInfo.name}</p>
              <input placeholder="enter your name"
                  ref="input"
              />
              <Button onClick={this.changeName}
                  type="primary"
              >点击我换名字</Button>
          </div>
      )
  }
}

export default Home
