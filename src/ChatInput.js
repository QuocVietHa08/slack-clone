import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './ChatInput.css';
import db from './firebase';
import firebase from 'firebase';
import { useStateValue } from './StateProvider';
function ChatInput(props) {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(props.channelId);
    if (props.channelId) {
      db.collection('rooms').doc(props.channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
  };
  return (
    <div className='chatInput'>
      <form>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${props.channelName?.toLowerCase()}`}
        />
        <Button type='submit' onClick={sendMessage}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
