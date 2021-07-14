import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux"

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
        <Card className={classes.root}>
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
                        DOB : {props.dob.slice(0, 4) + "/" + props.dob.slice(5, 7) + "/" + props.dob.slice(8, 10)} <br />
                        {props.age_list.length ?
                            <>
                                Age : {JSON.stringify(props.age_list[props.index].age)}
                            </>
                            :
                            <></>
                        }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

const mapStateToProps = state => {
    return {
        age_list: state.randomPeopleData.random_age_data,
    }
}

export default connect(mapStateToProps)(MediaCard)