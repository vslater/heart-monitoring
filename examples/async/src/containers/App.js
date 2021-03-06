import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import DailyHeartGraph from '../components/DailyHeartGraph'
import SecondHeartGraph from '../components/SecondHeartGraph'
import PatientDetails from '../components/PatientDetails'

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
        fontSize: "17",
        textAlign: "center",
        display : 'flex',
        justifyContent : 'center',
        display: 'grid'

      };

    var h1Style = {
  padding: 10,
  margin: 10,
  //backgroundColor: "#111100",
  //color: "#333",
  //display: "inline-block",
  fontFamily: "monospace",
  fontSize: "50",
  textAlign: "center",
  display : 'flex',
  justifyContent : 'center',
  clear: 'left'
};

    return (
      <div style={appStyle}>
        <img src={require("./LOGO.png")} width="800" height="228"/>
        <PatientDetails/>
        <div>
          <h1 style={h1Style}>Heart Rates</h1>
        </div>
        <br/>
        <SecondHeartGraph graph={this.props.graph} dispatch={this.props.dispatch}/>
        <br/>
        <div style={h1Style} width="800" height="200">
          <button>Share With Doctor</button>
          <button>Share With Family Member</button>
        </div>
        <img src={require("./LOGO.png")} width="800" height="228"/>
        <div>
          <h1 style={h1Style}>Daily Heart Rates</h1>
        </div>
        <DailyHeartGraph graph={this.props.graph} dispatch={this.props.dispatch}/>
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
