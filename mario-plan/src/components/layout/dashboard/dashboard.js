//npm install redux-thunk
//redux thunk nam sluzi da bi mogli da menjamo inicialni state, da dodajemo, brisemo 
//i dr.
import Notifications from './notifications';
import ProjectList from './projectList';
import {connect} from 'react-redux'//povezujemo redux sa reactom na ovom mestu
const Dashboard = (props) => {
    console.log(props.projects)
  
    return ( <div className="dashboard">
        <div className="row">
        <div className="projectList">
            <ProjectList projekti={props.projects} ></ProjectList>
        </div>
        <div className="notifications">
            <Notifications></Notifications>
        </div>

        </div>
    </div> );
}

const mapStateToProps=(state)=>{//u mapStateToProsp se skladiste podaci koje uzimas iz state-a
    //i saljes Dashboard-u kao props podatke
    return({
        projects:state.project.projects//projects je objekt iz projectsReducer, inicijalni state
        //project je iz rootReducera, state je inicijalni state iz index.js
    })
}
 
export default connect(mapStateToProps)(Dashboard);

















