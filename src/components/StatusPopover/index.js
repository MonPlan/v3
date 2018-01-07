import React from 'react'
import { findDOMNode } from 'react-dom'
import {
  Button,
  IconButton,
  Paper,
  CardContent,
  Popover,
  Typography
} from 'material-ui'
import axios from 'axios'
import Config from '../../config/'
import CircularProgress from 'material-ui/Progress/CircularProgress'
import RefreshIcon from 'material-ui-icons/Refresh'
import { blueGrey, green, orange, red } from 'material-ui/colors'

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

  loadInfo = () => {
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

  handleReload = () => {
    this.setState({ loading: true, monitors: [] })
    window.setTimeout(this.loadInfo(), 2000)
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

  determineColor = statusCode => {
    switch (statusCode) {
      case 0:
        return blueGrey[100]
      case 1:
        return blueGrey[200]
      case 2:
        return green[700]
      case 8:
        return orange[200]
      case 9:
        return red[300]
      default:
        return red[300]
    }
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
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                  style={{
                    flex: 3,
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                  <Typography type="title">Network Status</Typography>
                </div>
                <div
                  style={{ flex: 1, justifySelf: 'flex-end', float: 'right' }}>
                  <IconButton onClick={this.handleReload}>
                    <RefreshIcon />
                  </IconButton>
                </div>
              </div>
              {this.state.loading ? (
                <CircularProgress />
              ) : (
                <div>
                  {this.state.monitors.map((item, key) => {
                    console.log(item)
                    return (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          padding: 10
                        }}>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              width: 35,
                              height: 35,
                              backgroundColor: this.determineColor(item.status),
                              borderRadius: '100%'
                            }}
                          />
                        </div>
                        <div style={{ flex: 2 }}>
                          <Typography>{item.friendly_name}</Typography>
                        </div>
                      </div>
                    )
                  }) || <div>No Data is Currently Available</div>}
                </div>
              )}
            </CardContent>
          </Paper>
        </Popover>
      </div>
    )
  }
}
export default StatusPopover
