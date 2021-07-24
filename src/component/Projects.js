import React  from "react";
import PROJECTS from "../data/projects";


const Project = (props) => {
	const {title ,description,image,link} = props.project
		return(
			<div style ={{display:"inline-block", width :300 ,margin : 10}}>
			 <h3>{title}</h3>
			 <img src ={image} alt ="profile" style= {{width: 200 ,height :120}} />
			 <p>{description}</p>
			 <a href={link}>{link}</a>
			</div>
		)
}
const Projects = () => {
	return(
			<div>
			    <div><h1>Projects Highlight</h1></div>
				<div>
				{
					PROJECTS.map((PROJECT)=>{
                      return (
						  <Project key={PROJECT.id} project={PROJECT} />
					  )
					})
				}
				</div>

			</div>
		)
	
}

export default Projects;

