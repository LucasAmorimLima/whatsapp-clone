import { Avatar, IconButton } from '@material-ui/core'
import {AttachFile,MoreVert,SearchOutlined,InsertEmoticon,Mic} from '@material-ui/icons'
import React,{useState} from 'react'
import axios from './axios.js'

import "./Chat.css"
function Chat({messages}) {
    const [input,setInput] =  useState("")

    const sendMessage = async(event)=>{
        event.preventDefault()

        await axios.post('/messages/new',{
            "message" : input,
            "name" : "here is the name",
            "timestamp" : "just now",
            "received" : false
        })
        setInput('');
    }
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar/>
                <div className='chat__headerInfo'>
                    <h3>Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className='chat__headerRigth'>
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>

                    <IconButton>
                        <AttachFile/>
                    </IconButton>

                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className='chat_body'>
                
                {messages.map((message)=>(
                    <p className={`chat__message ${message.received && "chat__reciever"}`}>
                    <span className='chat__name'>{message.name}</span>
                        {message.message} 
                    
                        <span className='chat__timestamp'>
                        {message.timestamp}
                        </span>
    
                    </p>
                ))}
                          
            </div>
            <div className='chat__footer'>
                <InsertEmoticon/>
                <form>
                    <input value={input} onChange={(event) => setInput(event.target.value)} placeholder='Type a message' type="text"/>
                    <button onClick={sendMessage} type='submit'>
                        Send a message
                    </button>
                </form>
                <Mic/>
            </div>
        </div>
    )
}

export default Chat
