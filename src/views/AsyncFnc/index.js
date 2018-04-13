import React, {Component} from 'react'
import fetch2 from '../../assets/js/fetch2'

class AsyncFnc extends Component {
    state = {
        name: 'zh',
        _isMounted: false
    }

    componentDidMount (){
        this.setState({
            _isMounted: true
        })
        this.changeName().then((result) => {
            if (result) {
                this.setState({
                    name: 'zhanghao'
                })
            }
        })
    }


    componentWillUnmount () {
        this.setState({
            _isMounted: false
        })
        this.changeName().then((result) => {
            if (result) {
                this.setState({
                    name: 'zhanghao'
                })
            }
        })
    }



    async changeName () {
        try {
            const json = await fetch2('https://www.easy-mock.com/mock/5acdb9809a0b0d6e994af8e6/example/test_get_user_info?name=zhanghao23')
            return json.data.code === 0
        // 等同于
        // return Promise.resolve(json.data.code === 0);
        } catch (ex) {
            console.log(ex)
        }
    }

    render () {
        console.log('00000')
        return (
            <div className="">
                {this.state.name}
            </div>
        )
    }
}

export default AsyncFnc
