const Message = (props) => {
    console.log(props)
    return ( <div className="message">
        
        <span><img src={props} alt=""/></span>
    </div> );
}
 
export default Message;