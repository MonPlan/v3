import React from 'react'
import IntroCard from '../components/containers/IntroContainer'
import Feedback from '../components/containers/Feedback'
import Story from '../components/containers/Story'
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            flexDirection: 'column'
          }}>
          <IntroCard />
          <Story />
          <Feedback />
        </div>
      </div>
    )
  }
}

export default HomePage
