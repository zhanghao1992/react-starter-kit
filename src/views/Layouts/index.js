import React, {Component} from 'react'
import Left from './components/Left'
import Right from './components/Right'
import './index.less'

class Layouts extends Component {
    render() {
        return (
            <div className='Layouts_wrap clear clearFix'>
                <Left />
                <Right logout={this.logout}/>
            </div>
        )
    }
}

export default Layouts