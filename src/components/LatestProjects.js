import React, { useState, useEffect } from 'react'
import ImgCard from '../components/cards/ImgCard';
import './HeroSection.css';
import './LatestProjects.css';


function LatestProjects({
    lightBg,
    imgStart,
    Skill,
    projectImg,
    projectTitle,
    projectDescription,
    projectLink,
    imgAlt,
}) {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
      <div className='parallax-blot-l' style={{transform: `translateY(-${offsetY * 0.5}px)`}}></div>
      <div className='parallax-blot-l2' style={{transform: `translateY(${offsetY * 0.3}px)`}}></div>
      <div className='parallax-blot-r2' style={{transform: `translateY(-${offsetY * 0.4}px)`}}></div>
      
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

export default LatestProjects