import React, {Component} from 'react'
import images from '../helpers/imageLinks'
import Logo from './Logo'

class Logos extends Component {
  render() {
    let logos = images.map((image, i)=>{
      return(
        <Logo
          key={i}
          imgSrc={image}/>
      )
    })
    return (
      <div className='logos'>
        <div>
          {logos}
        </div>
      </div>
    )
  }

}

export default Logos
