import React, { useEffect, useState } from 'react';
import "./App.css"
import { connect } from "react-redux"
import {
  getImageList,
  clearImageList,
} from "./redux/imageFilter/imageFilter.actions"
import Card from "./components/card"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function App(props) {
  return (
    <div >
      <div style={{ display: 'flex', justifyContent: 'center', margin: 30 }}>
        <Button variant="contained" onClick={() => props.getImageList()}>Search Random People</Button>
        {props.people_list.length ?
          <>
            <Button variant="contained" color="primary" style={{ marginLeft: 10 }} onClick={() => props.getImageList()}>Calculate Age</Button>
            <Button variant="contained" color="secondary" style={{ marginLeft: 10 }} onClick={() => props.clearImageList()}>Clear</Button>
          </>
          :
          <></>
        }
      </div>

      <Grid container spacing={3}>
        {props.people_list.map(function (item, i) {
          console.log("############# props.people_list", props.people_list);
          console.log("############# item", item);
          let { email, picture, name, location, dob } = item;
          let { title, first, last } = name;
          let { large } = picture;
          let { city } = location;
          let { date, age } = dob;
          // console.log(")))))))))))))))))))))))))))))))))))))))))))))))))(((((((((((((((((((((",new Intl.DateTimeFormat('en-US').format(date));

          return (
            <Grid item sm={4} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                key={email}
                imageSrc={large}
                name={title + " " + first + " " + last}
                city={city}
                dob={date}
              />
            </Grid>
          )
        })}


      </Grid>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    people_list: state.peopleList.random_people_data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getImageList: () => dispatch(getImageList()),
    clearImageList: () => dispatch(clearImageList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)