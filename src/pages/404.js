import React from 'react'
import { Typography, Grid, Button } from 'material-ui'
import ExploreIcon from 'mdi-material-ui/MagnifyMinus'
import { withRouter } from 'react-router-dom'

const style = {
  background:
    "linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url('https://cdn-images-1.medium.com/max/1920/1*-OtRjI8AyOMXGUmK0gv69A.jpeg')",
  backgroundSize: 'cover',
  minHeight: '100vh',
  minWidth: '99vw',
  color: 'white'
}
class NoMatch extends React.Component {
  render() {
    return (
      <div style={style}>
        <Grid container justify="center">
          <Grid item xs={6} style={{ marginTop: '4vh' }}>
            <Grid container justify="center">
              <ExploreIcon />
              <Grid item xs={12} style={{ textAlign: 'left', color: 'white' }}>
                <Typography
                  type="display3"
                  style={{ color: 'white' }}
                  gutterBottom>
                  404
                </Typography>
                <Typography
                  type="headline"
                  style={{ color: 'white' }}
                  gutterBottom>
                  How did you even get here? Got Lost?
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'left' }}>
                <Typography
                  type="subheading"
                  style={{ color: 'white' }}
                  gutterBottom>
                  We've made some huge discoveries in the past including some
                  awesome course planning software, but unfortunately this isn't
                  one of them
                </Typography>
                <ul>
                  <Typography
                    as="li"
                    type="body2"
                    style={{ color: 'white' }}
                    gutterBottom>
                    If you are visting here because a page existed here
                    previous, we may have moved it
                  </Typography>
                  <Typography
                    as="li"
                    type="body2"
                    style={{ color: 'white' }}
                    gutterBottom>
                    For monPlan Team Developers, you may be seeing this because
                    of UAM issues, please contact the Ops and Infrastructure
                    Team
                  </Typography>
                </ul>
                <Button
                  raised
                  color="accent"
                  onClick={() => this.props.history.push('/')}
                  style={{ marginTop: '10%' }}>
                  Head Back Home
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withRouter(NoMatch)
