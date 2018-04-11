import React, {Component} from 'react'

class SetState extends Component {
  state = {
      count: 0,
      count2: 0
  }

  componentWillMount (){
      const num = 0;
      this.setState({
          a: 'a',
          c: 'c',
          num: num + 1
      })
      this.setState({
          b: 'b',
          a: 'A',
          num: num + 1
      })
  }

  componentDidMount (){
      // console.log(this.state)
      // setState同步实例1
      let btn = document.getElementById('btn')
      const _this = this
      btn.addEventListener('click', () => {
          _this.setState((now) => {
              return{
                  count2: now.count2 + 1
              }
          })
          console.log('count2:', _this.state.count2)
      })

      // setState同步实例2
      // setInterval(() => {
      //     _this.setState((now) => {
      //         return{
      //             count2: now.count2 + 1
      //         }
      //     })
      //     console.log(_this.state.count2)
      // }, 2000)
  }

  clickHandle = () => {
      this.setState((nowState) => {
          return {
              count: nowState.count + 1
          }
      })
      console.log('count:', this.state.count)

      // this.setState((nowState, props) => {
      //     console.log(props)
      //     return {
      //         count: nowState.count + 1
      //     }
      // }, () => {
      //     console.log('count:', this.state.count)
      // })
  }

  render () {
      return (
          <div className="">
              <p>count:{this.state.count}</p>
              <button
                  onClick={this.clickHandle}
              >异步+</button>
              <p>count2:{this.state.count2}</p>
              <button
                  id="btn"
              >同步+</button>
          </div>
      )
  }
}

export default SetState
