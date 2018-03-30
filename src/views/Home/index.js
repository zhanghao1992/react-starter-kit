import React, {Component} from 'react'
import { observer } from 'mobx-react';

@observer
class Home extends Component {
    render() {
        const {store} = this.props
        return (
            <div className='Home_'>
               {/* {store.userInfo} */}
               xx
            </div>
        )
    }
}

export default Home