import React from 'react'
import './SideBar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';

import { Avatar, IconButton } from '@material-ui/core';
import SideBarChat from './SideBarChat';

function SideBar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
            <Avatar src='https://avatars.githubusercontent.com/u/94583091?s=96&v=4'/>
                
                <div className='sidebar__headerRight'>
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>

                <IconButton>
                <ChatIcon/>
                </IconButton>

                <IconButton>
                <MoreVertIcon/>
                </IconButton>
                </div>
                
            </div>
            <div className='sideBar__search'>
                <div className='sideBar__searchContainer'>
                <SearchOutlined/>
                <input placeholder='Search or start new chat' type="text"/>
                </div>
            </div>
            <div className='sideBar__chats'>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
            </div>
        </div>
    )
}

export default SideBar
