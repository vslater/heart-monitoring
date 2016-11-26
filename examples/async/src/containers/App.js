import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import HeartGraph from '../components/HeartGraph'
import SecondHeartGraph from '../components/SecondHeartGraph'

class App extends Component {

  componentDidMount() {
    //const { dispatch, selectedReddit } = this.props
  }

  render() {
    var appStyle = {
        // padding: 10,
        // margin: 10,
        //backgroundColor: "#ffde00",
        //color: "#333",
        //display: "inline-block",
        fontFamily: "monospace",
        fontSize: "32",
        textAlign: "center",
        display : 'flex',
        justifyContent : 'center',
        display: 'grid'

      };

    var h1Style = {
  padding: 10,
  margin: 10,
  backgroundColor: "#ffde00",
  //color: "#333",
  //display: "inline-block",
  fontFamily: "monospace",
  fontSize: "50",
  textAlign: "center",
  display : 'flex',
  justifyContent : 'center'
};

    return (
      <div style={appStyle}>
        <div>
          <h1 style={h1Style}>Heart Graph</h1>
        </div>
        <br/>
        <SecondHeartGraph graph={this.props.graph} dispatch={this.props.dispatch}/>
        {/*<HeartGraph graph={this.props.graph} dispatch={this.props.dispatch}/>*/}
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
