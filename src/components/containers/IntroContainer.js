import React from 'react'
import { Card, Typography, Grid, Divider } from 'material-ui'
import Button from 'material-ui/Button/Button'
import CardContent from 'material-ui/Card/CardContent'

const styles = {
  descriptionContainers: {
    flex: 1,
    padding: 10
  }
}
export default function IntroContainer() {
  return (
    <Card
      style={{
        width: '70%',
        marginTop: 150,
        paddingLeft: '2.5em',
        paddingRight: '2.5em',
        paddingTop: '1em',
        paddingBottom: '1em',
        justifySelf: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}>
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
        <Typography
          type="display4"
          style={{ color: '#757575', fontSize: '2.5em' }}
          gutterBottom>
          We build various webapps which <br /> impact other students uni lives.
        </Typography>
        <Button raised color="primary" style={{ margin: 10 }}>
          Explore my journey
        </Button>
        <Divider />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={styles.descriptionContainers}>
            <Typography type="title">
              Explore interesting jobs to find awesome careers
            </Typography>
            <Typography style={{ marginTop: 10 }}>
              FutureYou is designed to take out some of the guesswork, and help
              guide you towards finding Monash courses that can lead you towards
              your dream career.
            </Typography>
            <Button
              raised
              color="primary"
              style={{ margin: 10 }}
              href="https://myfuture-prod.appspot.com/">
              Explore my journey
            </Button>
          </div>
          <div style={styles.descriptionContainers}>
            <Typography type="title">
              Plan your Monash Journey from beginning to end
            </Typography>
            <Typography style={{ marginTop: 10 }}>
              monPlan is a course planning tool, built for students by students
              and is aimed at improving the Monash Journey, from the start and
              all the way to the completion of your course.
            </Typography>
            <Button
              raised
              color="primary"
              style={{ margin: 10 }}
              href="https://monplan-prod.appspot.com/">
              Plan my course
            </Button>
          </div>
          <div style={styles.descriptionContainers}>
            <Typography type="title">
              Explore our Various Other Awesome Apps which impacts you
            </Typography>
            <Typography style={{ marginTop: 10 }}>
              Some of team members occasionally build other applications which
              also impact other students lives.
              <ul>
                <li>
                  <a href="https://geckodm.github.io">
                    <b>GeckoDM</b>
                  </a>: A Download Manager for Echo360
                </li>
                <li>RUUP</li>
              </ul>
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
