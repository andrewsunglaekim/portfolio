import React, {Component} from 'react';
import soldierImg from '../../public/images/soldier.png'
import flagImg from '../../public/images/flag.png'

class Military extends Component {
  constructor(){
    super()
    this.state = {
      flagStyle: {
        left: "-30%"
      },
      soldierStyle: {
        left: "105%"
      }
    }
    this.orgFlagLeft = -30
    this.orgSoldierLeft = 105
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  handleScroll(evt){
    let topRef = this.refs.military.getBoundingClientRect().top
    if (topRef > 100 && topRef < 700) {
      let percentDiff = topRef / 600
      let diff = 60 - (60 * percentDiff)
      let flagStyleLeft = (this.orgFlagLeft + diff) + "%"
      let soldierStyleLeft = (this.orgSoldierLeft - diff) + "%"
      this.setState({
        flagStyle: {
          left: flagStyleLeft
        },
        soldierStyle: {
          left: soldierStyleLeft
        }
      })
    }
  }
  render(){
    return (
      <div className='military'
           ref='military'>
        <img src={flagImg}
             style={this.state.flagStyle}
             className='flag'/>
        <img src={soldierImg}
             style={this.state.soldierStyle}
             className='soldier'/>
      </div>
    )
  }
}

export default Military
