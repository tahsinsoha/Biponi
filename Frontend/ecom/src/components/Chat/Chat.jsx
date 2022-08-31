import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

function Chat() {

  console.log("chat entered");

if( localStorage.getItem('user')=='629ebb2ee9a4d3fbd9dff488' )
  return (
    <ChatEngine
      height="100vh"
      projectID="97e77d8c-2299-4384-bcad-50d2c53a51be"
      userName="admin"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
return (
<ChatEngine
      height="100vh"
      projectID="97e77d8c-2299-4384-bcad-50d2c53a51be"
      userName="soha"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
);
}

export default Chat;
