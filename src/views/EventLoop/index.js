import React, {Component} from 'react'
import './style.scss'

class EventLoop extends Component {
  clickHandle = (ev) => {
      ev.persist()
      console.log(ev.target)
      setTimeout(() => {
          console.log(ev.target.className)
          ev.target.className = 'active'
      }, 0)

  }
  render () {
      return (
          <div>
              <button
                  onClick={this.clickHandle}
              >上架</button>
          </div>
      )
  }
}

export default EventLoop
