import ProjectSummary from "../projects/projectSummary"

const ProjectList = ({projekti}) => {
    console.log(projekti);
    return ( <div className="projectList">
        {projekti && projekti.map((projekt)=>{
            return <ProjectSummary projekt={projekt} key={projekt.id}></ProjectSummary>
        })}
     
     
    </div> );
}
 
export default ProjectList;