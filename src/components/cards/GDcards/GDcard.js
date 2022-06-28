import React from 'react';
import '../ProjectCard.css';
import projectInfo from './Data'

function GDcard(props) {
  return (
    <>
        {projectInfo.map ((e) => {
            return (
                <>
                <div className='latestProject-card'>
                <div className='latestProjects-img-container'>
                    <img src={e.projectImg} alt={e.imgAlt}/>
                </div>    
                <div className='latestProjects-text-container'>
                        <div className='latestProjects-card-title'>
                                <p>{e.projectTitle}</p>
                        </div>
                        <div className='latestProjects-card-description'>
                                <p>{e.projectDescription}</p>
                        </div>
                        <div className='latestProjects-card-link'>
                                <a href={e.projectLinkToPage}>{e.projectLink}</a>
                        </div>
                </div>
            </div>
        </>
            )
        } )}
    </>
  )
}

export default GDcard