import React from 'react'
import Use from './use'
import {Button} from 'antd'
import RefButton from '../components/refButton'

const ref = React.createRef()
function About(params) {
    const showRef = () => {
        console.log(ref.current.handleClick())
    }
    return (<div>
        About
        <Use></Use>
        <Button type="primary" onClick={showRef}>ref</Button>
        <RefButton name="ref" ref={ref}/>
    </div>)
}

export default About