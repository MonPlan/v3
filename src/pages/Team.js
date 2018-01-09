import React from 'react'
import { Card, CardContent, Typography } from 'material-ui'
import TeamCard from '../components/TeamCard'
import { Team } from '../config'
const style = {
  background:
    "linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url('https://cdn-images-1.medium.com/max/1920/1*-OtRjI8AyOMXGUmK0gv69A.jpeg')",
  backgroundSize: 'cover',
  minHeight: '100vh',
  minWidth: '98vw',
  color: 'white',
  display: 'flex',
  justifyContent: 'center'
}

class TeamPage extends React.Component {
  render() {
    return (
      <div style={style}>
        <Card
          style={{
            width: '70vw',
            padding: '2.5em',
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column'
          }}>
          <Typography type="headline">Our Team</Typography>
          <CardContent style={{ display: 'flex' }}>
            {Team.map((profile, key) => {
              return <TeamCard {...profile} key={key} style={{ margin: 5 }} />
            })}
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default TeamPage
