import React,{Component} from 'react'
import {inject} from 'mobx-react'
import {Button} from 'antd'
import './index.scss'
// import { withRouter } from 'react-router-dom'

// @withRouter
@inject('Store')
// @observer
class Home extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  changeName=(e)=>{
    console.log(e.target)
  }
  render () {
    const {Store} = this.props
    return (
      <div className="Home_">
        <p className="username">{Store.userInfo.name}</p>
       <Button onClick={this.changeName}
           type="primary"
       >点击我换名字</Button>
      </div>
    )
  }
}

export default Home
