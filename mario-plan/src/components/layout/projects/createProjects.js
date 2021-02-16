import {useState} from 'react';
import {connect} from 'react-redux'; //povezivanje redux-a i react-a
import {createProject} from './../../../store/reducers/actions/projectActions'

const CreateProjects = (props) => {
    console.log(props);
 const [title, setTitle] = useState('');
 const [content, setContent] = useState('');

 let object = {
    title:title,
    content:content,
    
 }
    let submit = (e)=>{
        e.preventDefault();
        console.log(object);
        props.createProject(object)
    }
    
    return ( <div>
        <h1 className='title'>Create project</h1>
        <form className="signIn" onSubmit={submit}>
            <div className="inputField">
               
                <input placeholder='title' type="text" id='title' onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div className="inputField">
               
                <textarea placeholder='content' onChange={(e)=>{setContent(e.target.value)}} />
            </div>
            

            <input type="submit" value='Create'/>
        </form>
    </div> );
}
 
let mapDispatchToProps = (dispatch)=>{
    return{
        createProject: (project)=>{dispatch(createProject(project))}
    }
}

export default connect(null, mapDispatchToProps)(CreateProjects);
//umesto null bi iso mapStateToProps ali posto nemamo onda stavljamo null