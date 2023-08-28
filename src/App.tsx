import React from 'react';
import logo from './chat-icon.png';
import './App.css';
import ChatsContainer from './components/ChatsContainer/ChatsContainer';
import MessagesContainer from './components/MessagesContainer/MessagesContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MessagesContainer></MessagesContainer>
        <ChatsContainer></ChatsContainer>
      </header>
    </div>
  );
}

export default App;
