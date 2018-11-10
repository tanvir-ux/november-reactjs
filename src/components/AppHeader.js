import React, { Component } from 'react'
import '../styles/AppHeader.css'

export default class AppHeader extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return false
    }

    render(){
        return (
            <div className="titleBanner">
                <span className='titleText'>
                
                    <span className='modelName'>
                        <b>Mehvozsoft</b>                     
                    <p>A Software Company</p>
                    </span>
                    
                </span>
            
            
            </div>
        )
    }
}


