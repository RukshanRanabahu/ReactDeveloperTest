import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux"
import {
    getImageList,
} from "../redux/imageFilter/imageFilter.actions"

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 230,
    },
});

function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} key={props.id}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.imageSrc}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                        Name : {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        City : {props.city} <br />
                        {/* DOB : {props.dob} */}
                        DOB : {props.dob.slice(0, 4) + "/" + props.dob.slice(5, 7) + "/" + props.dob.slice(8, 10)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary" >
                    Share
                </Button>
                <Button size="small" color="primary" >
                    Learn More
                </Button>
            </CardActions> */}
        </Card>
    );
}

const mapStateToProps = state => {
    return {
        count: state.peopleList.count,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getImageList: () => dispatch(getImageList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaCard)