import React, {Component} from 'react'

class Greeting extends Component {
  render() {
    return (
      <div className="greeting">
        <img
          alt='waving dude'
          src="http://www.clipartbest.com/cliparts/9cp/bXg/9cpbXg8Ri.gif"/>
        <div>
          Hi! I'm Andy, I'm a web developer!
        </div>

      </div>
    )
  }
}

export default Greeting;
