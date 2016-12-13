import React, {Component} from 'react'

class Greeting extends Component {
  constructor(){
    super()
    this.state = {
      imgStyle: {
        left: "-27%"
      },
      divStyle: {
        left: "102%"          
      }
    }
    this.orgImgLeft = -27
    this.orgDivLeft = 102
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  handleScroll(evt) {
    console.log(this.state.imgStyle)
   // let imageLeftMax = "72%"
   // let divLeftMax = "0%"
    let topRef = this.refs.greeting.getBoundingClientRect().top
    if(topRef > 0 && topRef < 500){
      let percentDiff = topRef / 500
      let diff = 50 - (50 * percentDiff)
      let imgStyleLeft = (this.orgImgLeft + diff) + "%"
      let divStyleLeft = (this.orgDivLeft - diff) + "%"
      this.setState({
        imgStyle: {
          left: imgStyleLeft
        },
        divStyle: {
          left: divStyleLeft
        }
      })
    }
  }
  render() {
    return (
      <div className="greeting" ref='greeting'>
        <img
          style={this.state.imgStyle}
          alt='waving dude'
          src="http://www.clipartbest.com/cliparts/9cp/bXg/9cpbXg8Ri.gif"/>
        <div
          style={this.state.divStyle}
          className='speachBubble'>
          Hi! I'm Andy, I'm a web developer!
        </div>

      </div>
    )
  }
}

export default Greeting;
