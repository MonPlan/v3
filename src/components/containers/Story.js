import React from 'react'
import { Card, CardContent, Divider, Typography } from 'material-ui'
import BlueGrey from 'material-ui/colors/blueGrey'
import QuoteSymbol from 'material-ui-icons/FormatQuote'
export default function OurStory() {
  return (
    <Card
      style={{
        width: '70vw',
        padding: '2.5em',
        marginTop: 20,
        justifySelf: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}>
      <CardContent style={{ display: 'block' }}>
        <Typography type="title">Our Story</Typography>
        <Divider style={{ margin: 5 }} />
        <div style={{ display: 'flex', padding: 10 }}>
          <QuoteSymbol
            style={{
              color: BlueGrey[300],
              transform: 'rotate(180deg)',
              flex: 1
            }}
          />
          <Typography type="body1" style={{ flex: 10, color: BlueGrey[700] }}>
            In the beginning, we like most students found planning our course
            extremely hard, so we decided to start up an Open-Source Project
            with the intention to make the course planning process more easy.
            This was done over a poll over Monash StalkerSpace, with a huge
            support of the project.
          </Typography>
        </div>
        <div style={{ display: 'flex', padding: 10 }}>
          <Typography type="body1" style={{ flex: 10, color: BlueGrey[700] }}>
            A few weeks later, eSolutions approached us to work alongside them
            on this project. Now already a couple of months in, we on around
            3000 users and almost 6000 pageviews. The monPlan team would love to
            say thanks to everyone who have and are still supporting us by
            providing valuable feedback. You have made the Monash Experience
            more better, for both future and current students.
          </Typography>
          <QuoteSymbol style={{ color: 'BlueGrey[300]', flex: 1 }} />
        </div>
        <Typography type="title" style={{ color: '#006cab' }}>
          Our Mission
        </Typography>
        <Divider style={{ margin: 5 }} />
        <div style={{ display: 'flex', padding: 10 }}>
          <Typography type="body1" style={{ flex: 10, color: '#006cab' }}>
            We want to improve the Monash Journey, Period.No matter where you
            are: from Secondary School all the way to the completion of your
            course, we want to make that joruney better. Such as making the
            transition from Secondary Education to University more smoother and
            much more easily, by inspiring you What courses you can do and
            helping you discover how university functions.
          </Typography>
          <QuoteSymbol style={{ color: '#006cab', flex: 1 }} />
        </div>
      </CardContent>
    </Card>
  )
}
