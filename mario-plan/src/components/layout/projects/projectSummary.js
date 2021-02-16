const ProjectSummary = ({projekt}) => {
  return (
    <div className='summary'>
      <div className="content">
                <h2 className="title">{projekt.title}</h2>
                <p>Posted by Marco</p>
                <p>datum</p>
            </div>
    </div>
  );
};

export default ProjectSummary;
