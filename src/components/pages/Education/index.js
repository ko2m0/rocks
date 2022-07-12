import React from 'react';
import EducationSection from '../../EducationSection';
import EducationDescription from '../../EducationDescription';
import {
        educationOne,
        educationTwo,
        educationThree,
        educationThreeDesc,
} from './Data'

function Education() {
  return (
    <>
    <EducationSection {...educationOne}/>
    <EducationSection {...educationTwo}/>
    <EducationSection {...educationThree}/>
    <EducationDescription {...educationThreeDesc} />
    </>
  )
}

export default Education;