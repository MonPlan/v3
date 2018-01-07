import React from 'react'
import IntroCard from '../components/containers/IntroContainer'
import Feedback from '../components/containers/Feedback'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            flexDirection: 'column'
          }}>
          <IntroCard />
          <Feedback />
        </div>
      </div>
    )
  }
}

export default HomePage
