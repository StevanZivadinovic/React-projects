const MessagesHeader = () => {
    return ( <div className="messageHeader">
        <div className="header">
            <h1>Channel<span><img src="https://img.icons8.com/metro/26/000000/star.png"/></span></h1>
            <h2>2 Users</h2>
        </div>
        <div className="searchMessage">
            <div className='inputBox'>

            <input type="search" name='search' placeholder='Search Messages'/><span><label htmlFor="search"><img style={{backgroundColor:'lightcyan'}} src="https://img.icons8.com/android/24/000000/search.png"/></label></span>
            </div>
        </div>

        
    </div> );
}
 
export default MessagesHeader;