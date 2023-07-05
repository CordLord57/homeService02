import React from 'react'
import ProjectsItem from '../components/ProjectsItem'
import "../styles/Projects.css"
import { ProjectList } from '../helpers/ProjectList'
function Projects() {
  return (
    <div className='projects'>
      <h1>Services Provided🚀</h1>
      <div className='projectList'>
      {ProjectList.map((project, idx ) => {
          return (
            <ProjectsItem  id= {idx} name={project.name} image={project.image} />
          );
        })} 
      </div>
    </div>
  )
}

export default Projects
