import React, { PropTypes } from 'react'

var floatLeft = {
    float: 'left'
};

var floatRight = {
    float: 'right'
};

var floatCenter = {
    //float: 'centre'
};

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

const Posts = ({}) => (
    <div>
        <h3>Patient Details</h3>
        <p>
            Name: John Smith
            <br/>
            Date of Birth: 03/10/1990
            <br/>
            Name of Doctor: Dr. Jones
        </p>
    </div>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
