import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaDribbble,
  FaMedium
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              KOZMO
            </Link>
          </div>
          <small className='website-rights'>Made with &hearts; by Kozmo © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={{ pathname: "https://bit.ly/3HFsg5a"}}
              target='_blank'
              aria-label='GitHub'
            >
              <FaGithub />
            </Link>
            <Link
              className='social-icon-link'
              to={{ pathname: "https://bit.ly/3ny7BId"}}
              target='_blank'
              aria-label='Dribbble'
            >
              <FaDribbble />
            </Link>
            <Link
              className='social-icon-link'
              to={{ pathname: "https://linkedin.com/in/kozmoromero"}}
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
            <Link
              className='social-icon-link'
              to={{ pathname: "https://twitter.com/kozmo_"}}
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to={{ pathname: "https://bit.ly/3lejBNB"}}
              target='_blank'
              aria-label='Medium'
            >
              <FaMedium />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;