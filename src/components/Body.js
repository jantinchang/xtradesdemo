import React from 'react';
import DividerWithText from './Divider';
import { BsChevronDown } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import HorizontalGridList from '../components/HorizontalGridList'
import VerticleList from '../components/VerticleList';
import dropdown from '../assets/Dropdown.svg';
import selectable from '../assets/selectable.svg';
import sortbyall from '../assets/sortbyall.svg';



function Body(props) {

    return (<>
        <DividerWithText />
        <div style={{
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            alignItems: 'flex-start',
            margin: 20,
        }}>


            <h1> Trending tickers <BsChevronDown size='0.8em' style={{ paddingLeft: 10 }} /></h1>
            <div style={{ position: 'absolute', left: 1650, top: 175, }}>

                <img src={dropdown} alt='dropdown' />
            </div>

            <div style={{ backgroundColor: '#F5F8FB', padding: 10, borderRadius: 20, marginTop: 20, }}>
                <HorizontalGridList />
            </div>



            <div style={{ padding: 10, borderRadius: 20, marginTop: 20, }}>
                <h1> Recent alerts </h1>

                <div style={{ marginTop: 40, }}>

                    <img src={selectable} alt='dropdown' />



                    <img style={{ position: 'absolute', left: 1640, top: 610, }} src={sortbyall} alt='dropdown' />
                    <div style={{
                        backgroundColor: '#F5F8FB', height: 50, borderRadius: 10,
                        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 40,
                        paddingRight: 30
                    }}>
                        <p style={{ opacity: 0.59 }}>Trader <FiChevronDown /></p>
                        <p style={{ opacity: 0.59 }}>Trade <FiChevronDown /></p>
                        <p style={{ opacity: 0.59 }}>Strategy type </p>
                        <p style={{ opacity: 0.59 }}>Open / close <FiChevronDown /></p>
                        <p style={{ opacity: 0.59 }}>Profit / loss <FiChevronDown /></p>
                        <p style={{ opacity: 0.59 }}>Actions <FiChevronDown /></p>

                    </div>
                    <VerticleList />
                </div>

            </div>
        </div>
    </>
    );
}



export default Body;