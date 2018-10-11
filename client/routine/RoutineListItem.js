import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import DeleteRoutine from './DeleteRoutine';
import ExerciseMuscles from '../exercise/ExerciseMuscles';
import {selectRoutine} from '../../redux/actions/routines'
import { connect } from 'react-redux'

const styles = theme => ({
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
        
      },
      cardMedia: {
        backgroundSize:75,
        width:'25%'
    },
      cardContent: {
        flexGrow: 1,
        padding: `0px ${theme.spacing.unit}px`
      },
      cardHeader:{
        padding: `${theme.spacing.unit}px`,
      },
      cardActions:{
        display: 'flex',
        padding: 0,
      },
      button:{
          width: '100%',
          backgroundColor:'rgb(234, 234, 234)', 
          color:'rgb(130, 124, 124)',
          padding: 0,
          borderRadius: 0,
          margin:0,
          boxShadow:'none'
      },
      icon:{
        height: '1.2em',
        width: '1.2em'
      },
      gridItem:{
        width: '100%'
      },
      justify:{
        justifyContent: 'center'
      },
      imageContainer:{
        maxWidth: '100%',
        display:'flex',
        justifyContent:'center',
        height: '200px'
    },
    bodyMusclesContainer:{
        maxWidth: '50%',
        minWidth: '50%',
    },
    subtitle:{
        color:'grey'
    }
  });
class WorkoutListItem extends React.Component {

    onEditClick = () =>{
        this.props.dispatch(selectRoutine(this.props.routine._id));
    }
    render() {
        const {classes} = this.props;
        return (
            <Grid item sm={6} md={4} lg={3} className={classes.gridItem}>
                <Card className={classes.card}>
                    <CardHeader
                    title={this.props.routine.name}
                    className={classes.cardHeader}
                    onClick={this.onEditClick}
                    />
                    
                    <div className={classes.imageContainer} onClick={this.onEditClick}>
                    {/*
                        this.props.workout.exercises.map((exercise,index)=>{
                            if(index==2) return;
                            return(
                            <div
                                key={index}
                                className={classes.bodyMusclesContainer}>
                                <ExerciseMuscles
                                    exercise={exercise}
                                    title="workout title"
                                />
                            </div>
                            )
                         })    */      
                    }
                    </div>
                    <CardContent 
                        className={classes.cardContent}
                        onClick={this.onEditClick}>
                        <Typography gutterBottom variant="headline" component="h2" className={classes.subtitle}>
                        {this.props.routine.workouts ? this.props.routine.workouts.length : 0} Workouts
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button variant="contained" className={classes.button} 
                                onClick={this.onEditClick}>
                            <EditOutlinedIcon className={classes.icon}/>
                        </Button>
                        <DeleteRoutine RoutineId={this.props.routine._id}
                                        handleReturn = {this.props.handleReturn}/>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

export default connect()(withStyles(styles)(WorkoutListItem));