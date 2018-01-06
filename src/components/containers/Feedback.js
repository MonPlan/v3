import React from 'react'
import { Card, CardContent, Typography } from 'material-ui'
import BlueGrey from 'material-ui/colors/blueGrey'

const Feedback = [
  'Really really really good app! Has saved me heaps of time course planning.',
  "monPlan is so much nicer to use now. Last time I gave up making my course plan after 3 semesters and thought it was easier to do in Excel. Now it's pretty gosh darn good - did my whole course in like two minutes. Would use it instead of Excel and that's like the highest of all honours",
  'Great new improvements with being able to load unit information and upload course maps!',
  "I really like the user interface you've created. It's beautiful! Looks awesome, isn't oversaturated with information and is easy to use",
  "This is a great site, I wish I'd had it when I was first an undergrad! ",
  "I loved that you guys are working on this. A team I was in showcased something like this mid-year 2016, but we didn't have the technically know-how to make it. Please make it awesome! :)",
  "THIS APP HONESTLY SAVED MY LIFE. THIS IS THE BEST THING FOR PLANNING YOUR DEGREE, IT HAS SAVED ME HOURS AND HOURS. I CAN'T THANK YOU ALL ENOUGH. ",
  'Absolutely brilliant app. Not only was it interactive to add and remove units, but suited the course specifications very well for my course. It also gave detailed feedback about the course itself and active links to the course handbook and was very useful as a look up tool!'
]
export default function FeedbackContainer() {
  return (
    <Card
      style={{
        width: '70%',
        marginTop: 20,
        paddingLeft: '2.5em',
        paddingRight: '2.5em',
        paddingTop: '1em',
        justifySelf: 'center'
        // display: 'flex',
        // flexDirection: 'column'
      }}>
      <CardContent style={{ display: 'block' }}>
        <Typography type="title">What our users thought</Typography>
        {Feedback.map((quote, index) => {
          return (
            <div
              style={{
                display: 'block',
                margin: 10,
                fontColor: '#2e2e2e',
                backgroundColor: BlueGrey[100],
                padding: '1em',
                borderRadius: 30,
                maxWidth: '55%',
                float: index % 2 === 0 ? 'right' : 'left'
              }}>
              <Typography>{quote}</Typography>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
