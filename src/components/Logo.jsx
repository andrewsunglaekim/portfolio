import React, {Component} from 'react'

class Logo extends Component {
  render(){
    return (
      <img 
        className='logo'
        src={this.props.imgSrc}
        alt={this.props.imgSrc}/>
    )
  }
}

export default Logo
