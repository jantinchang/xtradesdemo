import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { FiMoreHorizontal } from "react-icons/fi";
import Path from '../assets/Path.svg';
import PathB from '../assets/path2.svg';
import Apple from '../assets/apple.svg';
import Tesla from '../assets/tesla.svg';
import Spy from '../assets/spy.svg';
import amzn from '../assets/amzn.svg';
import spypath from '../assets/spyPath.svg';
import teslapath from '../assets/teslachart.svg';
import amznpath from '../assets/amznPath.svg';
import teslapathB from '../assets/teslaB.svg';
import spypathB from '../assets/spyB.svg';

import { Card } from '@material-ui/core';
import AppContext from '../context/AppContext';



const tileData = [
    {
        img: Apple,
        alerts: '15 alerts',
        ticker: 'AAPL',
        company: 'Apple Inc.',
        direction: '64%',
        bullBear: 'bullish',
        pathA: amznpath,
        pathB: PathB,
        idx: 1
    },
    {
        img: Tesla,
        alerts: '12 alerts',
        ticker: 'TSLA',
        company: 'Telsa Inc.',
        direction: '55%',
        bullBear: 'bullish',
        pathA: teslapath,
        pathB: teslapathB,
        idx: 2
    },
    {
        img: Spy,
        alerts: '7 alerts',
        ticker: 'SPY',
        company: 'S&P 500 Index',
        direction: '64%',
        bullBear: 'bearish',
        pathA: spypath,
        pathB: spypathB,
        idx: 3
    },
    {
        img: amzn,
        alerts: '17 alerts',
        ticker: 'AMZN',
        company: 'Amazon.com',
        direction: '56%',
        bullBear: 'bullish',
        pathA: amznpath,
        pathB: PathB,
        idx: 4
    },
    {
        img: Apple,
        alerts: '15 alerts',
        ticker: 'AAPL',
        company: 'Apple Inc.',
        direction: '56%',
        bullBear: 'bullish',
        pathA: Path,
        pathB: PathB,
        idx: 5
    },

]

export default function SingleLineGridList() {
    const { menuCollapse } = React.useContext(AppContext);

    const [raised, setRaised] = React.useState(false);
    const [targetIdx, setTargetIdx] = React.useState();

    const toggleRaised = (idx) => {

        setRaised(!raised);
        setTargetIdx(idx);
    }



    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',

            backgroundColor: '#F5F8FB',
            width: !menuCollapse ? '80vw' : '86vw',
        },
        gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
            width: !menuCollapse ? '80vw' : '86vw',
            backgroundColor: '#F5F8FB',
        },
        title: {
            color: theme.palette.primary.light,
        },

    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5} >
                {tileData.map((tile) => (
                    <GridListTile style={{ backgroundColor: '#F5F8FB' }}>
                        <Card style={{ height: 190, }}
                            key={tile.idx} onMouseOver={() => toggleRaised(tile.idx)}
                            onMouseOut={() => toggleRaised(tile.idx)}
                            raised={targetIdx === tile.idx && raised}>
                            <div style={{ backgroundColor: '#F4F6FA', width: 40, height: 35, borderRadius: 5, position: 'absolute', top: 30, left: 35, padding: 2 }}>

                                <img style={{ position: 'absolute', left: 10, bottom: 8 }} src={tile.img} alt='apple' width='25px' height='25px'></img>
                            </div>
                            <div style={{ padding: 30, }}>
                                <div style={{ position: 'absolute', left: 90, top: 12, }}>
                                    <p> {tile.ticker} </p>
                                    <p style={{ position: 'absolute', top: 27, fontSize: 12, width: 100, opacity: 0.53 }}> {tile.company} </p>
                                    <FiMoreHorizontal style={{ position: 'absolute', left: 150, bottom: 10, fontSize: 30, opacity: 0.45 }} />
                                </div>
                                <img src={tile.pathB} alt='path' style={{ position: 'absolute', left: 30, bottom: 75 }} />
                                <img src={tile.pathA} alt='path' style={{ position: 'absolute', left: 30, bottom: 75 }} />

                                <p style={{ position: 'absolute', left: 30, bottom: 5, fontSize: 20 }}> {tile.alerts} </p>
                                <div style={{ position: 'absolute', left: 200, bottom: 20, fontSize: 15 }}>
                                    <p style={{ position: 'absolute', left: -15, bottom: -12, fontSize: 17, color: '#40C8B7' }}>{tile.direction}</p>
                                    <p style={{ position: 'absolute', left: 25, bottom: -10, fontSize: 15, opacity: 0.33 }} > {tile.bullBear}</p>
                                </div>

                            </div>
                        </Card>

                    </GridListTile>
                ))}
            </GridList>
        </div>
    );





}
