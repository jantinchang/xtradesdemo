import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const profilePic = 'https://assets.bigcartel.com/theme_images/60755139/Logos-25.png?auto=format&fit=max&h=400&w=400';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '105ch',
            position: 'absolute',
            top: 750,



        },
    },
}));

const textBoxLabel = () => {
    return (<div style={{ display: 'flex', flexDirection: 'row' }}>
        <img style={{ width: 55, height: 55, borderRadius: 10 }} src={profilePic} alt='profile pic' />
        <p style={{ marginLeft: 30, }}>Write your message...</p>

    </div>
    )
}

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off" >


            <TextField id="filled-basic" label={textBoxLabel()} variant="filled">
            </TextField>
            <Button variant="contained" color='primary' style={{ width: 70, height: 30, right: 300, top: 850 }} > Send </Button>


        </form>
    );
}