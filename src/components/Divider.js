import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        alignItems: "center"
    },
    border: {
        borderBottom: "1px solid lightgray",
        width: "100%",
        opacity: 0.33,
    },
    content: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        fontWeight: 500,
        fontSize: 22,
        color: "lightgray"
    }
}));

const DividerWithText = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.border} />

            <div className={classes.border} />
        </div>
    );
};
export default DividerWithText;