import React,{Component} from 'react';
import {ThemeContext} from '../utils/context'


class Use extends Component {
    static contextType = ThemeContext;
    render(){
        return (
            <>
            <div>{this.context}</div>
            <ThemeContext.Consumer>
                {value => (<>Consumer:{value}</>)}
            </ThemeContext.Consumer>
            </>
        )
    }
}

export default Use