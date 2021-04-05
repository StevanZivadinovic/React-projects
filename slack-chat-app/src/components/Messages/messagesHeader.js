const MessagesHeader = () => {
    return ( <div className="messageHeader">
        <div className="header">
            <h1>Channel<span>slika</span></h1>
            <h2>2 Users</h2>
        </div>
        <div className="searchMessage">
            <input type="search" name='search' placeholder='search'/>
        </div>
    </div> );
}
 
export default MessagesHeader;