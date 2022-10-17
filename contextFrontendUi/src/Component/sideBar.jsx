import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
    AppstoreOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import {
    HomeOutlined,
    ChromeOutlined,
    DatabaseOutlined,
    LineChartOutlined,
    DeploymentUnitOutlined,
    ApartmentOutlined,
    FileDoneOutlined
} from '@ant-design/icons'

import { BsStackOverflow } from 'react-icons/bs';
import { FaProjectDiagram } from 'react-icons/fa';
import { GiDatabase } from 'react-icons/gi';




import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import { Button, Menu } from 'antd';
import logo from '../assets/image/logo.png'
import Uploader from './drag';
import Navbar from './nav';
import Cards from './card';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Dashboard', '1', <AppstoreOutlined />),
    getItem('Home', '2', <HomeOutlined />),
    getItem('Analytics', '4', <ChromeOutlined />),
    getItem('Data', '5', <GiDatabase />),
    getItem('Flow Designer', '6', <BsStackOverflow />),
    getItem('Graph', '7', <LineChartOutlined />),
    getItem('Project Alerts', '8', <FaProjectDiagram />),
    getItem('Project Activities', '9', <AcUnitOutlinedIcon />),
    getItem('Project Workflow', '10', <ApartmentOutlined />),
    getItem('Web Archivees', '11', <FileDoneOutlined />),
];
const Nav = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <Navbar />
            <Uploader />
            {collapsed ?
                <div className='siderMain_div position'>
                    <div
                        style={{ width: 79 }} className='side_bar'>
                        <Button
                            type="primary"
                            onClick={toggleCollapsed}
                            style={{
                                marginBottom: 16,
                            }}
                            className='buttn'
                        >
                            {collapsed ? <><MenuUnfoldOutlined />
                            </> : <MenuFoldOutlined />}
                        </Button>
                        {collapsed ?
                            null :
                            <img className='img' src={logo} />
                        }
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={collapsed}
                            items={items}
                        />

                    </div>
                    <div className='card_div margin' >
                        <Cards />
                    </div>
                </div>
                :
                <div className='siderMain_div position'>
                    <div
                        className='side_bar bar_side'>
                        <Button
                            type="primary"
                            onClick={toggleCollapsed}
                            style={{
                                marginBottom: 16,
                            }}
                            className='buttn'
                        >
                            {collapsed ? <><MenuUnfoldOutlined />
                            </> : <MenuFoldOutlined />}
                        </Button>
                        {collapsed ?
                            null :
                            <img className='img' src={logo} />
                        }
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={collapsed}
                            items={items}
                        />

                    </div>
                    <div className='card_div div_cards '>
                        <Cards />
                    </div>
                </div>
            }
        </>
    );
};

export default Nav;