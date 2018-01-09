import React from 'react'
import { Card, CardContent, Typography } from 'material-ui'
import BlueGrey from 'material-ui/colors/blueGrey'
import Feedback from './FeedbackMessage'

export default function FeedbackContainer() {
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
        <Typography type="title">What our users think of monPlan</Typography>
        {Feedback.map((quote, index) => {
          return (
            <div
              style={{
                float: index % 2 === 0 ? 'right' : 'left',
                maxWidth: '70%'
              }}>
              <div
                style={{
                  display: 'block',
                  margin: 10,
                  fontColor: '#2e2e2e',
                  backgroundColor: BlueGrey[100],
                  padding: '1em',
                  borderRadius: 30
                }}>
                <Typography>{quote.message}</Typography>
              </div>
              <Typography
                type="caption"
                style={{ float: index % 2 === 0 ? 'right' : 'left' }}>
                {quote.user || 'Anonymous User'}
              </Typography>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
