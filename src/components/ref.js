import React,{Component} from 'react'

class RefCompoent extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: new Date().toLocaleString()
        }
    }

    // static getDerivedStateFromProps(){
    //     return 1
    // }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate',nextState)
        return true
    }

    componentDidUpdate(){
        
    }

    getSnapshotBeforeUpdate(preProps,preStates){
        console.log('getSnapshotBeforeUpdate',preStates)
        return null
    }
    setNewTime = () => {
        this.setState({
            time: new Date().toLocaleString()
        })
    }

    render(){
        return <div>
            refComponent
            {this.state.time}
        </div>
    }
}

export default RefCompoent