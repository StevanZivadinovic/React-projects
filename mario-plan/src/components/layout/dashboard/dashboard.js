import Notifications from './notifications';
import ProjectList from './projectList';
const Dashboard = () => {
    return ( <div className="dashboard">
        <div className="row">
        <div className="projectList">
            <ProjectList></ProjectList>
        </div>
        <div className="notifications">
            <Notifications></Notifications>
        </div>

        </div>
    </div> );
}
 
export default Dashboard;

















