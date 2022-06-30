import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaDribbble,
  FaMediumM
} from 'react-icons/fa';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  logoImg,
  alt,
  imgStart,
  homeSocialIcons,
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='k-logo_container'>
                  <img src={logoImg} alt='logo' className='k-logo-img' />
                </div>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading glitch' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <div className={homeSocialIcons ? 'home__social-icon' : 'home__social-icon2'}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                >
                      <Link className='social-icon-link-heading'
                            to={{ pathname: "https://bit.ly/3HFsg5a"}}
                            target='_blank'
                            aria-label='GitHub'
                        >
                        <FaGithub />
                      </Link>
                      <Link className='social-icon-link-heading'
                            to={{ pathname: "https://bit.ly/3ny7BId"}}
                            target='_blank'
                            aria-label='Dribbble'
                      >
                      <FaDribbble />
                      </Link>
                      <Link
              className='social-icon-link-heading'
              to={{ pathname: "https://linkedin.com/in/kozmoromero"}}
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
            <Link
              className='social-icon-link-heading'
              to={{ pathname: "https://twitter.com/kozmo_"}}
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link className='social-icon-link-heading'
                            to={{ pathname: "https://bit.ly/3lejBNB"}}
                            target='_blank'
                            aria-label='Medium'
                      >
                      <FaMediumM />
                      </Link>
                </div>
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
  );
}

export default HeroSection;