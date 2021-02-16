import { useParams } from "react-router-dom";

const ProjectsDetails = () => {
  let id = useParams();
  console.log(id);
    
  return (
    <div>
      <div>
        <div className="contentDetails">
          <h2>Project Details -{id.id} </h2>
          <p>Lorem ispum jsajksjakjska</p>
        </div>
        <div className="actionCard">
          <div>Posted by Marco</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
