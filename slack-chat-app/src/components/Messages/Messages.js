import MessagesHeader from './messagesHeader';
import  MessageForm from './messageForm';
const Messages = () => {
    return ( <div className='messagesMain'>
        <MessagesHeader></MessagesHeader>
        <div className="messages">
            </div>        
        <MessageForm></MessageForm>
    </div> );
}
 
export default Messages;