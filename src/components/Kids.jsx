import React, {Component} from 'react'
import toddler from '../../public/images/girlToddler.jpg'
import baby from '../../public/images/baby.jpg'

class Kids extends Component {
  constructor (){
    super()
    this.state = {
      toddlerStyle: {
        top: "-35%",
        left: "90%"
      },
      babyStyle: {
        top: "-22%",
        left: "105%"
      }
    }
    this.orgToddlerLeft = 90
    this.orgBabyLeft = 105
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  handleScroll(evt){
    let topRef = this.refs.kids.getBoundingClientRect().top
    console.log(topRef)
    if (topRef < 1100 && topRef > 100){
      let percentDiff = (topRef - 100) / 1000
      let diffToddler = 130 - 130 * percentDiff
      let diffBaby = 120 - 120 * percentDiff
      let toddlerStyleLeft = (this.orgToddlerLeft - diffToddler) + "%"
      let babyStyleLeft = (this.orgBabyLeft - diffBaby) + "%"
      this.setState({
        toddlerStyle: {
          top: this.state.toddlerStyle.top,
          left: toddlerStyleLeft
        },
        babyStyle: {
          top: this.state.babyStyle.top,
          left: babyStyleLeft
        }
      })
    }
  }
  render(){
    return(
      <div className='kids' ref='kids'>
        <img className='toddler'
             src={toddler}
             alt={toddler}
             style={this.state.toddlerStyle}/>
        <img className='baby'
             src={baby}
             alt={baby} 
             style={this.state.babyStyle}/>
      </div>
    )
  }
}

export default Kids
