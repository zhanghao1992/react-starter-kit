import React, {Component} from 'react'
import menuConfig from './menu'
import {withRouter} from 'react-router-dom'
import { Menu } from 'antd'
import './index.less'
const SubMenu = Menu.SubMenu

@withRouter
class SideMenu extends Component {
    state={
        keys: []
    }
    componentWillMount () {
        this.selectKey()
    }
    componentWillReceiveProps (nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.selectKey()
        }
    }
    selectKey = () => {
        let keys = []
        keys.push(this.props.history.location.pathname)
        this.setState({keys: keys})
    }
      onSelect = ({key}) => {
          this.props.history.push(key)
      }
      render () {
          return (
              <div className="SideMenu_wrap">
                  <Menu mode="inline"
                      onSelect={this.onSelect}
                      selectedKeys={this.state.keys}
                      theme="dark"
                  >
                      {menuConfig.map((item) =>
                          item.list && item.list.length > 0 ?
                              <SubMenu key={item.key}
                                  title={<span><span className={'font icon-' + item.icon}></span><span>{item.title}</span></span>}
                              >
                                  {item.list.map((listItem) =>
                                      <Menu.Item key={item.key + listItem.key}>
                                          <span>{listItem.title}</span>
                                      </Menu.Item>
                                  )}
                              </SubMenu>:
                              <Menu.Item key={item.key}>
                                  <span className={'font icon-' + item.icon}></span>
                                  <span>{item.title}</span>
                              </Menu.Item>
                      )}
                  </Menu>
              </div>
          )
      }
}

export default SideMenu
