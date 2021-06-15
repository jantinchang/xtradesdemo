import React from 'react';
import Header from './Header';
import Body from './Body';



function Main(props) {
    return (<div style={{ flexGrow: 1, flexDirection: 'column', overflowY: 'auto', justifyContent: 'space-between' }}>
        <Header />
        <Body />

    </div>

    );
}

export default Main;