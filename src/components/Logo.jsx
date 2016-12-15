import React, {Component} from 'react'

class Logo extends Component {
  constructor(props){
    super(props)
    this.centerX = parseFloat(props.style.left.split("%")[0])
    this.centerY = parseFloat(props.style.top.split("em")[0]) - 10
    this.top = parseFloat(props.style.top.split("em")[0])
    this.radX = 3
    this.radY = 1.5
    this.state = {
      style: props.style,
      angle: 0
    }
    if (!this.intervalID) {
      this.intervalID = setInterval(() => {
        this.incrementAngle(0.04)
      }, 30)
    }
  }
  incrementAngle(angle){
    let newAngle = this.props.clockwise ? this.state.angle + angle : this.state.angle - angle
    this.setState({
      angle: newAngle,
      style: {
        left: this.getXonCircumference(newAngle), 
        top: this.getYonCircumference(newAngle)
      }
    })
  }
  getXonCircumference(angle){
    let currentX = this.centerX + this.radX * Math.cos(angle)
    return currentX + "%"
  }
  getYonCircumference(angle){
    let relCurrentY = this.centerY + this.radY * Math.sin(angle)
    let currentY = this.top + this.radY - (relCurrentY - this.centerY)
    return currentY + "em"
  }
  render(){
    return (
      <img 
        className='logo'
        src={this.props.imgSrc}
        style={this.state.style}
        alt={this.props.imgSrc}/>
    )
  }
}

export default Logo
