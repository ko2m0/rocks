import React from 'react'
import ImgCard from './cards/MmCards/ImgCard';
import './HeroSection.css';
import './LatestProjects.css';


function LatestMultimediaProjects({
    lightBg,
    imgStart,
    Skill,
    projectImg,
    projectTitle,
    projectDescription,
    projectLink,
    imgAlt,
}) {
  return (
    <>
    <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
        <div className='container'>
                <div style={{paddingBottom: "30px"}}>
                    <h2 className='latestProjects__heading'>{Skill} latest projects</h2>
                </div>
                <div>
                  <ImgCard/>
                </div>
        </div>
    </div>
    </>
  )
}

export default LatestMultimediaProjects