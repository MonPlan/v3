import React, { Component } from 'react'
import './App.css'
import { Card, Typography, Grid, Divider } from 'material-ui'
import Button from 'material-ui/Button/Button'
import CardContent from 'material-ui/Card/CardContent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./images/logo_white.svg" width={200} />
        </header>
        <div className="App-intro">
          <Card
            style={{
              width: '70%',
              marginTop: '20%',
              padding: '2.5em'
            }}>
            <CardContent>
              <Typography
                type="display4"
                style={{ color: '#757575', fontSize: '2.5em' }}
                gutterBottom>
                We help build various webapps <br /> which impact other students
                uni lives.
              </Typography>
              <Button raised color="primary" style={{ margin: 10 }}>
                Explore my journey
              </Button>
              <Divider />
              <Grid container style={{ margin: 10 }} spacing={16}>
                <Grid item xs={4}>
                  <Typography type="title">
                    Explore interesting jobs to find awesome careers
                  </Typography>
                  <Typography style={{ marginTop: 10 }}>
                    FutureYou is designed to take out some of the guesswork, and
                    help guide you towards finding Monash courses that can lead
                    you towards your dream career.
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography type="title">
                    Plan your Monash Journey from beginning to end
                  </Typography>
                  <Typography style={{ marginTop: 10 }}>
                    monPlan is a course planning tool, built for students by
                    students and is aimed at improving the Monash Journey, from
                    the start and all the way to the completion of your course.
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography type="title">
                    Explore our Various Other Awesome Apps which impacts you
                  </Typography>
                  <Typography style={{ marginTop: 10 }}>
                    Some of team members occasionally build other applications
                    which also impact other students lives.
                    <ul>
                      <li>
                        <a href="https://geckodm.github.io">
                          <b>GeckoDM</b>
                        </a>: A Download Manager for Echo360
                      </li>
                      <li>RUUP</li>
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}

export default App
