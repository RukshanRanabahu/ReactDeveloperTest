import React, { useEffect, useState } from 'react';
import "./App.css"
import { connect } from "react-redux"
import {
  getImageList,
} from "./redux/imageFilter/imageFilter.actions"
import Card from "./components/card"

function App(props) {

  const people = props.people_list;
  console.log("****************************",people);

  return (
    <div >
            {/* <div>Count: {props.count}</div>
      <button onClick={() => props.increaseCounter()}>Increase Count</button> */}
      <button onClick={() => props.getImageList()}>Search Random People</button>

      {props.people_list.map( function(item,i) {
      console.log("############# props.people_list",props.people_list);
      console.log("############# item",item);
        return (
          <Card
          key={item.email}
          />
        )
      })}


      {/* <div>Count: {props.count}</div>
      <button onClick={() => props.increaseCounter()}>Increase Count</button>
      <button onClick={() => props.decreaseCounter()}>Decrease Count</button> */}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    people_list: state.peopleList.random_people_data_list,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getImageList: () => dispatch(getImageList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)