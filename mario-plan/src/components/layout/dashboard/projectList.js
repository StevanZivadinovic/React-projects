import ProjectSummary from "../projects/projectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projekti }) => {
  console.log(projekti);
  return (
    <div className="projectList">
      {projekti &&
        projekti.map((projekt) => {
          return (
            <Link to={`/projects/` + projekt.id}>
              <ProjectSummary
                projekt={projekt}
                key={projekt.id}
              ></ProjectSummary>
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
