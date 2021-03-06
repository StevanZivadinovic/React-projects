
import Spinner from "./../../spinner";

const MessagesHeader = (props) => {
  

    return ( <div className="messageHeader">
        <div className="header">
            <h1>{props.channel1.currentChannel ? props.channel1.currentChannel.nameOfChannel : 'Channel'}<span><img src="https://img.icons8.com/metro/26/000000/star.png"/></span></h1>
            <h2>{props.numOfUsers1} users</h2>
        </div>
        <div className="searchMessage">
            <div className='inputBox'>

            <input onChange={(e)=>props.catchTerm(e)} type="search" name='search' placeholder='Search Messages'/><span><label htmlFor="search">{props.loadingSearch ? <div class="ui tiny active inline loader"></div> : <img style={{backgroundColor:'lightcyan'}} src="https://img.icons8.com/android/24/000000/search.png"/>}</label></span>
            </div>
        </div>

        
    </div> );
}

 
export default MessagesHeader;

