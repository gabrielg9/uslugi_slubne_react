import React, {Component} from 'react';
import pdf from './Intro.pdf'

//
export default class openFile extends Component{
    render(){
        return(
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <a href={pdf}>Click here to open file</a>
            </div>
        )
    }

}
