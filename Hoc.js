import React, { Component } from 'react';
import  SpinnerComp from './spinner'
const Hoc = (Wrappe) => {
    return  class Hoc extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                toSpinner:true,
             }
            setTimeout(()=>this.setState({
                toSpinner:false,

             }),3000)
        }
        render() { 
            return ( <div>{
                (this.state.toSpinner)?<SpinnerComp/>: <Wrappe { ...this.props}/> 
            } </div>);
        }
    }
     
}
 
export default Hoc;