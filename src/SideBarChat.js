import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SideBarChat.css"
function SideBarChat() {
    return (
        <div className='sideBarChat'>
            <Avatar/>
            <div className='sideBarChat__info'>
                <h2>Roon name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SideBarChat
