import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import HeartGraph from '../components/HeartGraph'

class App extends Component {

  componentDidMount() {
    const { dispatch, selectedReddit } = this.props
  }

  render() {
    var letterStyle = {
        padding: 10,
        margin: 10,
        //backgroundColor: "#ffde00",
        //color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        //fontSize: "32",
        textAlign: "center"
      };

    const {tooltip } = this.props
    return (
      <div style={letterStyle}>
        <HeartGraph tooltip={tooltip} dispatch={this.props.dispatch}/>
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    tooltip : state.GraphReducer.tooltip
  }
}

export default connect(mapStateToProps)(App)
