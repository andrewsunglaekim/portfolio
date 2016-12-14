import React, {Component} from 'react'
import images from '../helpers/imageLinks'
import Logo from './Logo'

class Logos extends Component {
  constructor(){
    super()
    this.state = {
      bubbleStyle: {
        left: "102%",
        transform: "translateY(-20em)"
      }
    }
    this.orgBubbleLeft = 102
    this.orgBubbleTop = -20
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  handleScroll(evt){
    console.log(this.refs.logos.getBoundingClientRect())
    let topRef = this.refs.logos.getBoundingClientRect().top
    if (topRef > 600 && topRef < 1000){
      let percentDiff = (1000 - topRef) / 400
      let diff = 50 * percentDiff
      let bubbleStyleLeft = (this.orgBubbleLeft - diff) + "%"
      this.setState({
        bubbleStyle: {
          left: bubbleStyleLeft,
          transform: this.state.bubbleStyle.transform
        } 
      })
    }
      if (topRef < 600 && topRef > 200) {
      let percentDiff =  (600 - topRef) / 400
      let diff = 20 * percentDiff
      let bubbleStyleTop = (this.orgBubbleTop + diff) + "em"
      this.setState({
        bubbleStyle: {
          left: this.state.bubbleStyle.left,
          transform: `translateY(${bubbleStyleTop})`
        }
      })
    }
  }
  render() {
    let logos = images.map((image, i)=>{
      return(
        <Logo
          key={i}
          imgSrc={image}/>
      )
    })
    return (
      <div className='logos' ref='logos'>
        <div className='topSpeechBubble'
             style={this.state.bubbleStyle}>
          I love Video Games!
        </div>
        <div>
          {logos}
        </div>
      </div>
    )
  }

}

export default Logos
