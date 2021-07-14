import "./App.css"
import { connect } from "react-redux"
import {
  getImageList,
  clearImageList,
  calculateAge,
} from "./redux/randomPeople/randomPeople.actions"
import Card from "./components/card"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function App(props) {
  const nameArray = [];
  return (
    <div >
      {/* button section */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: 30 }}>
        <Button variant="contained" onClick={() => props.getImageList()}>Search Random People</Button>
        {props.people_list.length ?
          <>
            <Button variant="contained" color="primary" style={{ marginLeft: 10 }} onClick={() => props.calculateAge(nameArray)}>Calculate Age</Button>
            <Button variant="contained" color="secondary" style={{ marginLeft: 10 }} onClick={() => props.clearImageList()}>Clear</Button>
          </>
          :
          <></>
        }
      </div>
      {/* card view section */}
      <Grid container spacing={3}>
        {props.people_list.map(function (item, index) {
          let { picture, name, location, dob } = item;
          let { title, first, last } = name;
          let { large } = picture;
          let { city } = location;
          let { date } = dob;
          nameArray.push(first);
          console.log("nameArray &&&", nameArray);

          return (
            <Grid item sm={4} xs={12} style={{ display: 'flex', justifyContent: 'center' }} key={index}>
              <Card
                index={index}
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
    people_list: state.randomPeopleData.random_people_data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getImageList: () => dispatch(getImageList()),
    clearImageList: () => dispatch(clearImageList()),
    calculateAge: (nameArray) => dispatch(calculateAge(nameArray)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)