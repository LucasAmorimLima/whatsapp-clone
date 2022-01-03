import './App.css';
import Chat from './Chat';
import SideBar from './SideBar';

function App() {
  return (
    <div className="app">
      <div className='app__body'>
        <SideBar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
