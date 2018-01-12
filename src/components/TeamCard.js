import React from 'react'
import { Avatar, Card, CardContent, Typography } from 'material-ui'
import { GithubCircle, LinkedinBox, Twitter } from 'mdi-material-ui'

const styles = {
  centerAlign: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  icon: { width: 30, height: 30, flex: 1 }
}

export default function TeamCard({
  name,
  role,
  github,
  linkedin,
  twitter,
  img,
  degree,
  style
}) {
  return (
    <Card style={style}>
      <CardContent
        style={{
          ...styles.centerAlign,
          flexDirection: 'row'
        }}>
        {img ? (
          <Avatar
            style={{ width: 75, height: 75, backgroundColor: '#006CAB' }}
            src={img}
          />
        ) : (
          <Avatar
            style={{ width: 75, height: 75, backgroundColor: '#006CAB' }}
            src={img}>
            {name.split(' ')[0][0] + name.split(' ')[1][0]}
          </Avatar>
        )}
      </CardContent>
      <CardContent
        style={{
          ...styles.centerAlign,
          flexDirection: 'column',
          textAlign: 'center'
        }}>
        <Typography type="body2">{name}</Typography>
        <Typography type="caption">{role}</Typography>
        {degree && (
          <Typography type="caption">Current Degree: {degree}</Typography>
        )}
      </CardContent>
      <CardContent style={styles.centerAlign}>
        <div style={{ display: 'flex' }}>
          {github && (
            <a href={'https://github.com/' + github}>
              <GithubCircle style={{ color: '#333', ...styles.icon }} />
            </a>
          )}
          {linkedin && (
            <a href={'https://linkedin.com/in/' + linkedin}>
              <LinkedinBox style={{ color: '#0077B5', ...styles.icon }} />
            </a>
          )}
          {twitter && (
            <a href={'https://twitter.com/' + twitter}>
              <Twitter style={{ color: '#1DA1F2', ...styles.icon }} />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
