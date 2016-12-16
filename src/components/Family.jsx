import React, {Component} from 'react'
import husbandWifeImg from '../../public/images/husband_wife.png' 

class Family extends Component {
  constructor (){
    super()
    this.state = {
      bubbleText: "Proudly served in the US army in 2 foreign wars across 3 deployments",
      bubbleStyle: {
        top: "-95%",
        left: "-30%" 
      } 
    }
    this.orgBubbleLeft = -30
    this.orgBubbleTop = -95
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  handleScroll(evt){
    let topRef = this.refs.family.getBoundingClientRect().top
    console.log(topRef)
    if (topRef > 950 && topRef < 1250) {
      let percentDiff = (topRef - 950) / 300
      let diff = 50 - 50 * percentDiff
      let bubbleStyleLeft = (this.orgBubbleLeft + diff) + "%"
      this.setState({
        bubbleStyle: {
          left: bubbleStyleLeft,
          top: this.state.bubbleStyle.top
        }
      })
    }
    if (topRef < 950 && topRef > 100){
      let percentDiff = (topRef - 100) / 850
      let diffY = 120 - 120 * percentDiff
      let diffX = 10 - 10 * percentDiff 
      let bubbleStyleTop = (this.orgBubbleTop + diffY) + "%"
      let bubbleStyleLeft = (this.orgBubbleLeft + 50 - diffX) + "%"
      this.setState({
        bubbleStyle: {
          left: bubbleStyleLeft,
          top: bubbleStyleTop
        }
      })
    }
  }
  render() {
    return (
      <div className='family' ref='family'>
        <div className='leftSpeechBubble'
             style={this.state.bubbleStyle}>
          {this.state.bubbleText}
        </div>
        <img className='parents'
             src={husbandWifeImg}
             alt={husbandWifeImg}
             style={this.state.parentStyle}/>
      </div>
    )
  }
}

export default Family
