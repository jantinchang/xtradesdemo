import React, { useState, useContext } from "react";
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import "../css/Header.css";
import Logo from '../assets/xtrade.svg'
import LogoAlt from '../assets/xtrade1.svg'
import AppContext from '../context/AppContext';




function SideBar(props) {

    const { menuCollapse, setMenuCollapse } = useContext(AppContext);

    const [alert, setAlert] = useState(false);
    const [leader, setLeader] = useState(false);
    const [xhub, setXhub] = useState(false);



    const menuIconClick = () => {

        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    const alertClick = () => {
        leader && setLeader(false);
        xhub && setXhub(false);
        setAlert(true);
    };

    const leaderClick = () => {
        alert && setAlert(false);
        xhub && setXhub(false);
        setLeader(true);
    };

    const xhubClick = () => {
        alert && setAlert(false);
        leader && setLeader(false);
        setXhub(true);
    };



    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <img style={{ margin: 50, height: 30 }} src={!menuCollapse ? Logo : LogoAlt} alt="logo" border="0" />


                        </div>

                    </SidebarHeader>
                    <SidebarContent>
                        <Menu >
                            <MenuItem onClick={alertClick} active={alert} icon={
                                <img src="https://i.ibb.co/3k5TLJc/Untitled-1.png" alt="Untitled-1" border="0" />
                            }>
                                Alerts
                            </MenuItem>
                            <MenuItem onClick={leaderClick} active={leader} icon={
                                <img src="https://i.ibb.co/mJpMgBM/trophy.png" alt="trophy" border="0" />}>Leaderboard</MenuItem>
                            <MenuItem onClick={xhubClick} active={xhub} icon={<img src="https://i.ibb.co/J3gr2Zz/hat-3-1.png" alt="hat-3-1" border="0" />}>Xhub</MenuItem>

                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem onClick={menuIconClick} icon={<img src={!menuCollapse ? "https://i.ibb.co/Gn17xFz/Vector.png" : "https://i.ibb.co/cYt3sPt/right.png"} alt="Vector" border="0" />}>Collapse</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
}

export default SideBar;