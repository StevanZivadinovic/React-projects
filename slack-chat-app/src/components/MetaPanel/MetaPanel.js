import {connect} from 'react-redux';

const MetaPanel = (props) => {
    console.log(props)
    return ( <div className='metaPanel'>
        <h1>About channel</h1>
        <p>Name of channel: {props.metaPodaci.channel.currentChannel.nameOfChannel}</p>
        <p>details: {props.metaPodaci.channel.currentChannel.details}</p>
    </div> );
}
 

let setPropsToState = state=>({
    metaPodaci:state
})

export default connect(setPropsToState, null)(MetaPanel);