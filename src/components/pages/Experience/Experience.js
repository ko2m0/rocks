import React from 'react'
import ExperienceDescription from '../../ExperienceDescription';
import ExperienceSection from '../../ExperienceSection';
import { 
        experienceOne,
        experienceOneDesc,
        experienceTwo,
        experienceTwoDesc,
        experienceThree,
        experienceThreeDesc,
        experienceFour,
        experienceFourDesc,
       }  from './Data'

function Experience() {
  return (
    <>
    <ExperienceSection  {...experienceOne}/>
    <ExperienceDescription {...experienceOneDesc} />
    <ExperienceSection  {...experienceTwo}/>
    <ExperienceDescription {...experienceTwoDesc} />
    <ExperienceSection  {...experienceThree}/>
    <ExperienceDescription {...experienceThreeDesc} />
    <ExperienceSection  {...experienceFour}/>
    <ExperienceDescription {...experienceFourDesc} />
    </>
  )
}

export default Experience;