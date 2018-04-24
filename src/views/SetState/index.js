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
      btn.addEventListener('click', () => {
          this.setState((nowState) => ({
              count2: nowState.count2 + 1
          }))
          console.log('count2:', this.state.count2)
      })

      //   setState同步实例2
      //   setInterval(() => {
      //       this.setState((nowState) => ({
      //           count2: nowState.count2 + 1
      //       }))
      //       console.log(this.state.count2)
      //   }, 2000)
  }

  clickHandle = () => {
      //   this.setState({
      //       count: this.state.count + 1
      //   })
      this.setState((nowState) => ({
          count: nowState.count + 1
      }))
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
              <p style={{fontSize: 30}}>count:{this.state.count}</p>
              <button
                  onClick={this.clickHandle}
              >异步+</button>
              <p style={{fontSize: 30}}>count2:{this.state.count2}</p>
              <button
                  id="btn"
              >同步+</button>
          </div>
      )
  }
}

export default SetState
