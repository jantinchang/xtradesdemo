import React from 'react';
import { GrNotification } from "react-icons/gr";
import { RiQuestionnaireFill } from "react-icons/ri";
import { FcSettings } from "react-icons/fc";
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SearchBar from 'material-ui-search-bar';



const styles = {
    root: {
        background: 'linear-gradient(45deg, #00A5EA 30%, #5DD0FF 90%)',
        borderRadius: 10,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
};



function Header(props) {

    const { classes, children, className, ...other } = props;

    const [value, setValue] = React.useState();

    return (<>
        <div style={{
            padding: 10,
            display: 'flex',
            flexDirection: 'row',
            overflowY: 'auto',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 20,

        }}>
            <h1> Alerts</h1>
            <SearchBar
                style={{ width: 600 }}
                placeholder='Search for ticker, user, or other information'
                value={value}
                onChange={(newValue) => setValue(newValue)}
                onRequestSearch={() => console.log(value)}
            />
            <div style={{ padding: 10, display: 'flex', justifyContent: 'space-between', width: 400, alignItems: 'center', borderBottomWidth: 1, }}>

                <Button className={clsx(classes.root, className)} {...other}> + invite a friend </Button>

                <GrNotification size='1.5em' />
                <RiQuestionnaireFill size='1.5em' />
                <FcSettings size='1.5em' />
                <img style={{ width: 35, height: 35, borderRadius: 10 }} src='https://assets.bigcartel.com/theme_images/60755139/Logos-25.png?auto=format&fit=max&h=400&w=400' alt='profile pic' />
            </div>

        </div>

    </>
    );
}

Header.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};



export default withStyles(styles)(Header);