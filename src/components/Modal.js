import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Card } from '@material-ui/core';
import mademoney from '../assets/mademoney.svg';
import collection from '../assets/collection.svg';
import message from '../assets/message.svg';
import { FaThumbsUp } from "react-icons/fa";
import { Button } from '@material-ui/core';
import ChatBox from '../components/ChatBox';
import modalpath from '../assets/modalpath.svg';
import DividerWithText from './Divider';




const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,

        boxShadow: theme.shadows[5],

        width: '1440px',
        overflowY: 'hidden',
        borderRadius: '16px',
    },
}));

export default function TransitionsModal({ open, handleClose, person }) {
    const classes = useStyles();


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>


                            {/* inside a row div we have 2 div blocks */}
                            <div style={{ width: 400, backgroundColor: '#F5F8FB', padding: 30 }}>
                                <div style={{ display: 'flex', flexDirection: 'row', width: 600, height: 100, }}>
                                    <img style={{ width: 55, height: 55, borderRadius: 10 }} src={person.img} alt='profile pic' />
                                    <div style={{ marginTop: 10, marginLeft: 15 }}>

                                        <p style={{ marginTop: -5, marginBottom: -2 }}>{person.firstName} </p>
                                        <p style={{ opacity: 0.53, marginTop: 5, marginBottom: -2 }}> {person.lastName} </p>
                                    </div>
                                    <Button variant="outlined" color='primary' style={{ width: 80, height: 40, marginLeft: 170, marginTop: 10 }} > follow </Button>
                                </div>
                                <DividerWithText />
                                <div>
                                    <p> Trader's stats </p>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>

                                        <div style={{ marginRight: 50 }}>
                                            <p> 74</p>
                                            <p style={{ opacity: 0.53 }}>Rank </p>
                                        </div>
                                        <div style={{ marginRight: 50 }}>
                                            <p> 74</p>
                                            <p style={{ opacity: 0.53 }}>Win rate </p>
                                        </div >
                                        <div style={{ marginRight: 50 }}>
                                            <p> 74</p>
                                            <p style={{ opacity: 0.53 }}>Avg. Gain </p>
                                        </div>
                                        <div style={{ marginRight: 50 }}>
                                            <p> 74</p>
                                            <p style={{ opacity: 0.53 }}>Avg. trade time </p>
                                        </div>
                                    </div>
                                </div>

                                <DividerWithText />
                                <div>
                                    <p> Trader's style </p>
                                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>


                                        <p style={{ opacity: 0.53, marginRight: 50 }}>Swing </p>
                                        <p style={{ opacity: 0.53, marginRight: 50 }}>Lotto </p>
                                        <p style={{ opacity: 0.53, marginRight: 50 }}>Risky </p>
                                        <p style={{ opacity: 0.53, marginRight: 50 }}>Day </p>
                                        <p style={{ opacity: 0.53, marginRight: 50 }}>Penny Stocks </p>
                                        <p style={{ opacity: 0.53, marginRight: 50 }}>Technicals </p>
                                        <p style={{ opacity: 0.53, marginRight: 50 }}>Buy & Hold </p>
                                        <p style={{ opacity: 0.53, marginRight: 50 }}>Momentum </p>

                                    </div>
                                </div>
                                <DividerWithText />

                                <div>
                                    <p> Trader's other alerts </p>
                                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>
                                        <Card style={{ width: 350, marginTop: 20, padding: 20, borderRadius: 16, }}>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>

                                                <div style={{ backgroundColor: '#F4F6FA', width: 35, height: 35, borderRadius: 5, padding: 2, marginTop: 4 }}>

                                                    {person && <img style={{ marginLeft: 5, marginTop: 3 }} src={person.info.icon} alt='apple' width='25px' height='25px'></img>}
                                                </div>
                                                <div style={{ marginTop: 3, marginLeft: 15 }}>

                                                    <p style={{ marginTop: -5, marginBottom: -2, fontSize: 14 }}> Bought AAPL shares </p>
                                                    <p style={{ opacity: 0.53, marginTop: 5, marginBottom: -2 }}>@$210.22</p>
                                                </div>
                                                <p style={{ opacity: 0.53, marginTop: 5, marginBottom: -2, marginLeft: 60 }}>Today, 6:53pm</p>

                                            </div>
                                        </Card>
                                        <Card style={{ width: 350, marginTop: 20, padding: 20, borderRadius: 16, }}>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>

                                                <div style={{ backgroundColor: '#F4F6FA', width: 35, height: 35, borderRadius: 5, padding: 2, marginTop: 4 }}>

                                                    {person && <img style={{ marginLeft: 5, marginTop: 3 }} src={person.info.icon} alt='apple' width='25px' height='25px'></img>}
                                                </div>
                                                <div style={{ marginTop: 3, marginLeft: 15 }}>

                                                    <p style={{ marginTop: -5, marginBottom: -2, fontSize: 14 }}> Bought AAPL shares </p>
                                                    <p style={{ opacity: 0.53, marginTop: 5, marginBottom: -2 }}>@$210.22</p>
                                                </div>
                                                <p style={{ opacity: 0.53, marginTop: 5, marginBottom: -2, marginLeft: 60, width: 100 }}>Today, 1pm</p>
                                            </div>
                                        </Card>
                                        <Card style={{ width: 350, marginTop: 20, padding: 20, borderRadius: 16, }}>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>

                                                <div style={{ backgroundColor: '#F4F6FA', width: 35, height: 35, borderRadius: 5, padding: 2, marginTop: 4 }}>

                                                    {person && <img style={{ marginLeft: 5, marginTop: 3 }} src={person.info.icon} alt='apple' width='25px' height='25px'></img>}
                                                </div>
                                                <div style={{ marginTop: 3, marginLeft: 15 }}>

                                                    <p style={{ marginTop: -5, marginBottom: -2, fontSize: 14 }}> Bought AAPL shares </p>
                                                    <p style={{ opacity: 0.53, marginTop: 5, marginBottom: -2 }}>@$210.22</p>
                                                </div>

                                                <p style={{ opacity: 0.53, marginTop: 5, marginBottom: -2, marginLeft: 60 }}>Today, 9:53am</p>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            </div>

                            {/* inside a row div we have 2 div blocks */}
                            <div style={{ margin: 10 }}>

                                <div style={{ display: 'flex', flexDirection: 'row', height: 120, justifyContent: 'space-between', alignItems: 'center', paddingRight: 30, }}>
                                    <div style={{ width: 250, padding: 20, borderRadius: 16, }}>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>

                                            <div style={{ backgroundColor: '#F4F6FA', width: 35, height: 35, borderRadius: 5, padding: 2, marginTop: 4 }}>

                                                {person && <img style={{ marginLeft: 5, marginTop: 3 }} src={person.info.icon} alt='apple' width='25px' height='25px'></img>}
                                            </div>
                                            <div style={{ marginTop: 3, marginLeft: 15 }}>

                                                <p style={{ marginTop: -5, marginBottom: -2, fontSize: 14 }}> Bought AAPL shares </p>
                                                <p style={{ opacity: 0.53, marginTop: 5, marginBottom: -2 }}>@$210.22</p>
                                            </div>


                                        </div>
                                    </div>

                                    <p style={{ width: 100 }}> 6:53 PM </p>

                                    <img src={mademoney} alt='apple' width='80px' height='80px'></img>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: 250, justifyContent: 'space-around' }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: 75, justifyContent: 'space-around' }}>
                                            <FaThumbsUp style={{ opacity: 0.23 }} size={22} />
                                            <p style={{ opacity: 0.23 }}>25</p>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: 75, justifyContent: 'space-around' }}>
                                            <img src={collection} alt='apple' width='20px' height='20px'></img>
                                            <p style={{ opacity: 0.23 }}>7</p>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: 75, justifyContent: 'space-around' }}>
                                            <img src={message} alt='apple' width='20px' height='20px'></img>
                                            <p style={{ opacity: 0.23 }}>37</p>
                                        </div>
                                    </div>
                                    <Button variant="contained" color='default' style={{ width: 120 }} > $ give a tip </Button>
                                </div>
                                <DividerWithText />

                                <div style={{ padding: 20 }}>
                                    <h3> SPY entry at old support</h3>
                                    <div style={{ display: 'flex', flexDirection: 'row', width: 250, justifyContent: 'space-between' }}>

                                        <p style={{ opacity: 0.23 }}>Momentum</p>
                                        <p style={{ opacity: 0.23 }}>Lotto</p>
                                        <p style={{ opacity: 0.23 }}>Technicals</p>
                                    </div>
                                    <p> More of the same.  Thursdays. Look at how we've been doing on Thursdays lately (chart below).  We get a pullback then a rise. The one hour chart always gets to a bottom point and we rise from there.  Let's see how the day goes from here.  This SPY 417.6ish line is old support and resistance, showing us how unstable we are at this point. </p>

                                    <p style={{ marginTop: 35 }}>On a possible rise we need to keep an eye on is EOG.  86.6 is the breakout point.  However 85.5 is where it's currently struggling.   It was upgraded this morning and increased PT. </p>

                                    <p style={{ marginTop: 35 }}> Please don't look at meme plays where they could have doubled your accounts if you'd only played them larger.  They can also destroy your account in a flash.  Play wisely.  Know your limits.  Trading is NOT a tool to make you rich overnight.  It's a process. A mind set.</p>
                                </div>
                                <div >

                                    <img src={modalpath} alt='apple' width='100%' height='150px' style={{}}></img>
                                </div>
                                <ChatBox />
                            </div>

                        </div>


                    </div>

                </Fade>
            </Modal >
        </div >
    );
}
