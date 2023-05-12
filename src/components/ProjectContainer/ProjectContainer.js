import uniqid from 'uniqid'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
{project.livePreview && (
      <a
        href={project.livePreview}
        target={"_blank"}
        aria-label='live preview'
        className='link link--icon'
        title='See Live '
      >
       <i class="fa fa-eye fa-2x"></i>
      </a>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        target="_blank"
        aria-label='source code'
        className='link link--icon'
        title='Source Code'
      >
        <i class="fa fa-github fa-2x"></i>
      </a>
    )}

    
  </div>
)

export default ProjectContainer
