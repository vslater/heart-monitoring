import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import HeartGraph from '../components/HeartGraph'

class App extends Component {

  componentDidMount() {
    //const { dispatch, selectedReddit } = this.props
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

    return (
      <div style={letterStyle}>
        <HeartGraph graph={this.props.graph} dispatch={this.props.dispatch}/>
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    graph : state.GraphReducer
  }
}

export default connect(mapStateToProps)(App)
