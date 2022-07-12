import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import {
    FaCalendar,
    FaExternalLinkAlt
  } from 'react-icons/fa';

function ExperienceSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  description2,
  experienceLink,
  ExperiencePath,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
    <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg' }>
        <div className='container'>
            <div className='row home__hero-row' style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}>
                <div className='col'>
                    <div className='home__hero-text-wrapper'>
                        <div className='top-line'>{topLine}</div>
                        <h1 className={lightText ? 'heading dark' : 'heading' }>
                            {headline}
                        </h1>
                        <h2 className={ lightTextDesc ? 'home__hero-subtitle dark' : 'home__hero-subtitle' }>
                             @ {description} 
                        </h2>
                        <Link className='social-icon-link-heading xperience-data'>
                            <div style={{ display: 'flex', padding: '15px 0'}}>
                            <FaCalendar />
                        <h4>{description2}</h4>
                            </div>
                        </Link>
                        <Link className='social-icon-link-heading xperience-data'
                                to={{ pathname: "https://'{ExperiencePath}'" }}
                        >
                            <div style={{ display: 'flex',  padding: '15px 0'}}>                                
                                    <FaExternalLinkAlt/>
                                    <h4>{experienceLink}</h4>                                
                            </div>
                            
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className='home__hero-img-wrapper'>
                        <img src={img} alt={alt} className='home__hero-img' />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ExperienceSection