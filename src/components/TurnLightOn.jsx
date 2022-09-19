import React from 'react'

class TurnLightOn extends React.Component{
    constructor(){
        super()
        this.state={isTheLightOn:false}
        this.state={isTheLightOn:true}
        
    }



render(){
    const lightOn = "https://media1.giphy.com/media/nrXif9YExO9EI/200.webp?cid=ecf05e47kfvnew52ajthwoo08un4tacle1tmb5f5puirgkk9&rid=200.webp&ct=g"
    
    const lightOff = "https://media1.giphy.com/media/FM0DlzawQu4DVqzvIg/200.webp?cid=ecf05e47qmcpw3ijno2maknvv5jj7v8meyia97l7kht1zddf&rid=200.webp&ct=g"
    return(
        <div>
          <img src={this.state.isTheLightOn ? lightOn : lightOff} alt="light"/> 
          <br/>
          <button onClick={()=>this.setState({isTheLightOn:!this.state.isTheLightOn})}>Turn On</button>

          <button onClick={()=>this.setState({isTheLightOn:false})}>Turn Off</button>
        </div>
    )
}
}
export default TurnLightOn