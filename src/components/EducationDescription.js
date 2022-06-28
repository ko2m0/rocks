import React from 'react'
import './HeroSection.css';

function EducationDescription({
    lightBg,
    Skill,
    educationDescription,
}) {
  return (
    <>
    <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
        <div className='container'>
        <div style={{paddingBottom: "30px"}}>
                <h2 className='latestProjects__heading'>{Skill} description</h2>
        </div>
            <div className='row home__hero-row'
            style={{
              display: 'flex',
            }}>
                <div>
                    {educationDescription}
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default EducationDescription