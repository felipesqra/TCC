import logo from './logo.svg';
import './App.css';
import React from 'react';
import ChatBot from 'react-simple-chatbot';


function App() {
  const steps = [
    {
      id: '1',
      message: 'Olá, qual é o seu nome?',
      trigger: '2',
    },
    {
  id: '2',
  user: true,
  trigger: '3',
    },
    {
  id: '3',
  message: 'Olá {previousValue}, como posso ajudar?',
  end: true,
    }
  ];

  const style = {
    width: '100%',
    height: '100vh',
    position: 'absolute',
    left: 0,
    top: 0,
    border: 'none'
  };

  return <ChatBot steps={steps} style={style}/>;
}

export default App;
