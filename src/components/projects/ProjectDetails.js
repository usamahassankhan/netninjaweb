import React from "react";

function ProjectDetails(props) {
    console.log(props)
    const id=props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
          Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between
         d  two or more users of mobile devices, desktops/laptops, or other type of compatible computer.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by uhk</div>
          <div> 2nd sep,3am</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
 