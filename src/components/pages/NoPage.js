import React from 'react'
import HeroSection from '../HeroSection'
import Parallax1 from '../Parallax1';
import Parallax2 from '../Parallax2';
import SectionTwo from '../SectionTwo';
import SkillsSection from '../SkillsSection';
import LatestProjects from '../LatestProjects';
import LatestGDProjects from '../LatestGDProjects';
import LatestWDevProjects from '../LatestWDevProjects';
import LatestMktProjects from '../LatestMktProjects';
import LatestCreativeProjects from '../LatestCreativeProjects';
import LatestMmProjects from '../LatestMmProjects';
import { 
        homeObjOne,
        twoObjOne,
        latestprojectsWS,
        latestprojectsGD,
        skillsWD,
        skillsGD,
        skillsWDev,
        latestprojectsWDev,
        skillsMkt,
        latestprojectsMkt,
        skillsCreative,
        latestprojectsCreative,
        skillsMm,
        latestprojectsMm,
      }  from './HomePage/Data'

function NoPage() {
  return (
    <>
    <HeroSection  {...homeObjOne}/>
    <SectionTwo {...twoObjOne}/>
    <SkillsSection {...skillsWD}/>
    <LatestProjects {...latestprojectsWS}/>
    <SkillsSection {...skillsGD}/>
    <LatestGDProjects {...latestprojectsGD}/>
    <Parallax1/>
    <SkillsSection {...skillsWDev}/>
    <LatestWDevProjects {...latestprojectsWDev}/>
    <SkillsSection {...skillsMkt}/>
    <LatestMktProjects {...latestprojectsMkt}/>
    <Parallax2/>
    <SkillsSection {...skillsCreative}/>
    <LatestCreativeProjects {...latestprojectsCreative}/>
    <SkillsSection {...skillsMm}/>
    <LatestMmProjects {...latestprojectsMm}/>
    </>
  )
}

export default NoPage