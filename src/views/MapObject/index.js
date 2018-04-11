import React, {Component} from 'react'

class MapObject extends Component {
    componentDidMount (){
        const obj = {
            name: 'zh',
            age: '26'
        }
        Object.prototype.test = '23ss'

        // for (let key in obj) {
        //     if ({}.hasOwnProperty.call(obj, key)) {
        //         console.log(key)
        //     }
        // }
        Object.keys(obj).forEach((key) => {
            console.log(obj[key]);
        });
    }
    render () {
        return (
            <div className="">
               MapObject
            </div>
        )
    }
}

export default MapObject
