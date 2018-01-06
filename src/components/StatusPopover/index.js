import React from 'react'
import { findDOMNode } from 'react-dom'
import { Button, Popover, Typography } from 'material-ui'
import Paper from 'material-ui/Paper/Paper'
import CardContent from 'material-ui/Card/CardContent'
import axios from 'axios'
import Config from '../../config/'
import CircularProgress from 'material-ui/Progress/CircularProgress'

class StatusPopover extends React.Component {
  state = {
    open: false,
    anchorEl: null,
    anchorOriginVertical: 'bottom',
    anchorOriginHorizontal: 'right',
    transformOriginVertical: 'top',
    transformOriginHorizontal: 'right',
    anchorReference: 'anchorEl',
    loading: true,
    monitors: []
  }

  componentDidMount() {
    setTimeout(this.loadInfo(), 5000)
  }

  loadInfo() {
    const { API_URL, CALL_CONFIG } = Config.UPTIME_CONFIG
    axios
      .post(API_URL, CALL_CONFIG)
      .then(resp => {
        this.setState({
          monitors: resp.data.monitors,
          loading: false
        })
        console.log(resp.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  handleClickButton = () => {
    this.setState({
      open: true,
      anchorEl: findDOMNode(this.button)
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    const {
      open,
      anchorEl,
      anchorOriginVertical,
      anchorOriginHorizontal,
      transformOriginVertical,
      transformOriginHorizontal,
      positionTop,
      positionLeft,
      anchorReference
    } = this.state
    return (
      <div>
        <Button
          ref={node => {
            this.button = node
          }}
          color="accent"
          style={{ float: 'right' }}
          onHover={this.handleClickButton}
          onClick={this.handleClickButton}>
          Check monPlan Network Status
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorReference={anchorReference}
          anchorPosition={{ top: positionTop, left: positionLeft }}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: anchorOriginVertical,
            horizontal: anchorOriginHorizontal
          }}
          transformOrigin={{
            vertical: transformOriginVertical,
            horizontal: transformOriginHorizontal
          }}
          style={{ padding: 10 }}>
          <Paper>
            <CardContent>
              <Typography type="title">Network Status</Typography>
              {this.state.loading ? <CircularProgress /> : <div>Loaded!</div>}
            </CardContent>
          </Paper>
        </Popover>
      </div>
    )
  }
}
export default StatusPopover
