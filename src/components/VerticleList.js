import React from 'react';
import FlatList from 'flatlist-react';
import Apple from '../assets/apple.svg';
import { Card } from '@material-ui/core';
import A from '../assets/A.svg';
import B from '../assets/B.svg';
import C from '../assets/C.svg';
import mademoney from '../assets/mademoney.svg';
import collection from '../assets/collection.svg';
import message from '../assets/message.svg';
import { FaThumbsUp } from "react-icons/fa";
import AppContext from '../context/AppContext';
import Modal from '../components/Modal';



const people = [
    { firstName: 'Elson', lastName: '@Correia', info: { icon: Apple }, img: 'https://randomuser.me/api/portraits/women/33.jpg' },
    { firstName: 'John', lastName: '@Doe', info: { icon: Apple }, img: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { firstName: 'Jane', lastName: '@Doe', info: { icon: Apple }, img: 'https://randomuser.me/api/portraits/men/86.jpg' },
    { firstName: 'Maria', lastName: '@Carvalho', info: { icon: Apple }, img: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { firstName: 'Kelly', lastName: '@Correia', info: { icon: Apple }, img: 'https://randomuser.me/api/portraits/men/73.jpg' },
    { firstName: 'Don', lastName: '@Quichote', info: { icon: Apple }, img: 'https://randomuser.me/api/portraits/women/27.jpg' },
    { firstName: 'Marcus', lastName: '@Correia', info: { icon: Apple }, img: 'https://randomuser.me/api/portraits/men/20.jpg' },
    { firstName: 'Bruno', lastName: '@Gonzales', info: { icon: Apple }, img: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { firstName: 'Alonzo', lastName: '@Correia', info: { icon: Apple }, img: 'https://randomuser.me/api/portraits/women/79.jpg' }
];

function VerticleList() {
    const [open, setOpen] = React.useState(false);
    const [raised, setRaised] = React.useState(false);
    const [targetPerson, setTargetPerson] = React.useState(false);
    const [targetIdx, setTargetIdx] = React.useState();


    const handleModal = (person) => {
        setTargetPerson(person)
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };

    const { menuCollapse } = React.useContext(AppContext);

    const toggleRaised = (idx) => {

        setRaised(!raised);
        setTargetIdx(idx);
    }

    const renderPerson = (person, idx) => {
        return (<>

            <Card
                key={idx}
                onMouseOver={() => toggleRaised(idx)}
                onMouseOut={() => toggleRaised(idx)}
                onClick={() => handleModal(person)}
                raised={targetIdx === idx && raised}
                style={{ width: !menuCollapse ? '78vw' : '84vw', marginTop: 20, paddingLeft: 20, paddingRight: 20, borderRadius: 16, }}>

                <li style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>

                        <img style={{ width: 55, height: 55, borderRadius: 30 }} src={person.img} alt='profile pic' />
                        <div style={{ marginTop: 10, marginLeft: 15 }}>

                            <p style={{ marginTop: -5, marginBottom: -2 }}>{person.firstName} </p>
                            <p style={{ opacity: 0.53, marginTop: 5, marginBottom: -2 }}>{person.lastName}</p>
                        </div>


                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>

                        <div style={{ backgroundColor: '#F4F6FA', width: 35, height: 35, borderRadius: 5, padding: 2, marginTop: 4 }}>

                            <img style={{ marginLeft: 5, marginTop: 3 }} src={person.info.icon} alt='apple' width='25px' height='25px'></img>
                        </div>
                        <div style={{ marginTop: 3, marginLeft: 15 }}>

                            <p style={{ marginTop: -5, marginBottom: -2, fontSize: 14 }}> Bought AAPL shares </p>
                            <p style={{ opacity: 0.53, marginTop: 5, marginBottom: -2 }}>@$210.22</p>
                        </div>


                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                        <img src={A} alt='apple' width='95px' height='95px'></img>
                        <img src={B} alt='apple' width='60px' height='60px'></img>
                        <img src={C} alt='apple' width='40px' height='40px'></img>

                    </div>

                    <p style={{ opacity: 0.35 }}> Opened 02/22/21</p>

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





                </li>
            </Card>
            <Modal open={open} handleClose={handleClose} person={targetPerson} />
        </>
        );
    }

    return (
        <ul style={{ marginLeft: -40 }}>
            <FlatList
                list={people}
                renderItem={renderPerson}
                renderWhenEmpty={() => <div>List is empty!</div>}
                sortBy={["firstName", { key: "lastName", descending: true }]}

            />
        </ul>
    );
}



export default VerticleList;