import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectsDetails = (props) => {
  let id = useParams();
  let id1 = id.id;
  console.log(props.projects);

  console.log(id.id); 
  return (
    <div>
      <div>
        <div>
          <div className="contentDetails">
            {props.projects && (
              <h2>Project Details -{`${props.projects[id1].title}`} </h2>
            )}
            <p> {props.projects && ( `${props.projects[id1].content}` )}</p>
          </div>
          <div className="actionCard">
            <div>{props.projects && ( `${props.projects[id1].authorFirstName}` )}</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  
  let projects = state.firestore.data.kolekcija;
  return {
    projects: projects,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "kolekcija" }])
)(ProjectsDetails);
