import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import Message from './Message';
import './Chat.css'
import Navbar from '../Navbar/Navbar';
import Name from './Name';
import Footer from '../Footer/Footer';


function ChatWindow(props ) {
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);
    const location = useLocation();
    const name = new URLSearchParams(location.search).get('name');
    function getResponse(input) {
       
        // const name = new URLSearchParams(location.search).get('name');

        if (text.toLowerCase().includes('hello')) {
            return <div  style={{color:'black'}}>hai {name}</div>;
        } else if (text.toLowerCase().includes('how are you')) {
            return 'I am doing well, thank you. How about you?';
        } else if (text.toLowerCase().includes('goodbye')) {
            return 'Goodbye! Have a great day!';
        }
        else {
            return <p  style={{color:'black'}}>"I'm sorry" {name}  "I don't understand."</p>;
        }
    }

    function sendMessage() {
      
        const message = { user: 'me', text };
        const response = getResponse(text);
        const botMessage = { user: 'bot', text: response };
        const newMessages = [...messages, message, botMessage];

        setMessages(newMessages);

        setText('');
    }

    return (

        <div style={{backgroundColor:'#15A69D'}}> 
           
            <div>
                <Navbar />
            </div>

            <div className='font'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center",
                    height: '87.5vh',
                    backgroundColor: ' #15A69D',
                    paddingTop: '10px',
                    fontSize: '14px',
                }}>
                
                {/* <Name /> */}

                <div style={{
                    flexGrow: 1,
                    overflow: 'auto',
                    width: '80%',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                }}>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                flexDirection: message.user === 'me' ? 'row-reverse' : 'row',
                                marginBottom: '0.5rem',
                            }}
                        >
                            <div
                                style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: message.user === 'me' ? '0 8px 8px 8px' : '8px 8px 8px 0',
                                    backgroundColor: message.user === 'me' ? 'grey' : '#efefff',
                                    color: message.user === 'me' ? '#fff' : '#000',
                                    maxWidth: '75%',
                                    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                {message.text}
                            </div>




                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', width: '50%' , position:'sticky' }}>

                    <input 
style={{
    color:'black',
    width :'100%',
    paddingBottom:'10px',
    marginBottom:'10px'
}}
                    className='input'
                        placeholder='Gooooo On ..'
                        
                        type="text"
                        value={text}
                        id='head'
                        onChange={(event) => setText(event.target.value)}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                sendMessage();
                            }
                        }}
                    ></input>


                    <button style={{
                        color:'white',
                        paddingBottom:'10px',
                        marginBottom:'10px',
                        backgroundColor:'black',
                        borderRadius:'20px'
                    }} className='btn' onClick={sendMessage}>Go</button>
                </div>

            </div>
            <div><Footer /></div>

        </div>
    );
}

export default ChatWindow;