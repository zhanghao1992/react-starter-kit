import React,{Component} from 'react'
import { withRouter } from 'react-router-dom'
import {inject, observer} from 'mobx-react'
import { Spin } from 'antd'
import './index.less'

@withRouter
@inject('Store')
@observer
class Loading extends Component {
  componentWillReceiveProps () {
    this.props.Store.updateLoading(true)
  }
  shouldComponentUpdate (nextProps) {
    if (this.props.location.pathname != nextProps.location.pathname) {
        return true
    }
    return true
  }
  componentDidUpdate () {
    if (this.props.Store.loading) {
      setTimeout(() => {
        this.props.Store.updateLoading(false)
      }, 500)
    }
  }
  render () {
    return (
      <Spin spinning={this.props.Store.loading}
          tip="LOADING"
          wrapperClassName="Loading_wrap"
      >
        {this.props.children}
      </Spin>
    )
  }
}

export default Loading
