import React, {Component} from 'react';
import soldierImg from '../../public/images/soldier.png'
import flagImg from '../../public/images/flag.png'

class Military extends Component {
  constructor(){
    super()
    this.state = {
      flagStyle: {
        left: "-40%"
      },
      soldierStyle: {
        left: "115%"
      }
    }
    this.orgFlagLeft = -40
    this.orgSoldierLeft = 115
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  handleScroll(evt){
    let topRef = this.refs.military.getBoundingClientRect().top
    if (topRef > 100 && topRef < 700) {
      let percentDiff = (topRef - 100) / 600
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
             alt={flagImg}
             style={this.state.flagStyle}
             className='flag'/>
        <img src={soldierImg}
             alt={soldierImg}
             style={this.state.soldierStyle}
             className='soldier'/>
      </div>
    )
  }
}

export default Military
