import './projectList.css'
import Project from '../Project/Project'
import {projects} from '../../data'

const ProjectList = () => {
  return (
    <>
      <div className='pl'>
        <div className='pl-texts'>
          <h1 className='pl-title'>Projects</h1>
          <p className='pl-desc'>
            Check out some of my projects here!
          </p>
        </div>
        <div className='pl-list'>
          {projects.map((item)=>
            <Project key={item.id} img={item.img} link={item.link}/>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectList
