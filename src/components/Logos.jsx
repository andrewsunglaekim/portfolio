import React, {Component} from 'react'
import images from '../helpers/imageLinks'

class Logos extends Component {
  render() {
    return (
      <div className='logos'>
        <div>
          Logos
          <img src={images.bethesda} />
        </div>
      </div>
    )
  }

}

export default Logos
