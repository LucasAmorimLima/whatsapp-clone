import React,{useEffect, useState} from 'react'
import './App.css';
import Chat from './Chat';
import SideBar from './SideBar';
import Pusher from 'pusher-js'
import axios from './axios.js'
function App() {
  const [messages, setmessages] = useState([])

  useEffect(() => {
    axios.get('/messages/show')
    .then((response) =>{
      setmessages(response.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('b27d01fb5230f3b665cf', {
      cluster: 'sa1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      //alert(JSON.stringify(newMessage));
      setmessages([...messages,newMessage])
    });

    return ()=>{
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  console.log(messages)
  return (
    <div className="app">
      <div className='app__body'>
        <SideBar/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
