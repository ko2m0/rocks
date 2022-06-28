import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './SectionTwo.css'

function SectionTwo({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    descriptionP2,
    buttonLabel,
    img,
    alt,
    imgStart,
  }) {
    return (
      <>
        <div className={lightBg ? 'home__two-section' : 'home__two-section darkBg'}>
          <div className='container'>
            <div className='row home__hero-row'
              style={{
                display: 'flex',
                flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
              }}
            >
              <div className='col'>
                <div className='home__hero-text-wrapper'>
                  <div className='top-line'>{topLine}</div>
                  <h3 className={lightText ? 'heading' : 'heading dark'}>
                    {headline}
                  </h3>
                  <p
                    className={
                      lightTextDesc
                        ? 'home__hero-subtitle'
                        : 'home__hero-subtitle dark'
                    }
                  >
                    {description}
                  </p>
                  <p className={
                      lightTextDesc
                        ? 'home__hero-subtitle'
                        : 'home__hero-subtitle dark'
                    }
                  >{descriptionP2}</p>
                  <Link to=''>
                  <Button buttonSize='btn--wide' buttonColor='green'>
                    {buttonLabel}
                  </Button>
                </Link>
                </div>
              </div>
              <div className='col'>
                <div className='twoSkillsList'>
                  <ul>
                      <li>
                          <h4>Web Design</h4>
                      </li>
                      <li>
                          <h4 className='ml-3 glitch-shadow'>Graphic Design</h4>
                      </li>
                      <li>
                          <h4>Web Development</h4>
                      </li>
                      <li>
                          <h4 className='ml-3'>Marketing</h4>
                      </li>
                      <li>
                          <h4 >Creative</h4>
                      </li>
                      <li>
                          <h4 className='ml-3'>Multimedia</h4>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default SectionTwo;