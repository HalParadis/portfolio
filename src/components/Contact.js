import React from 'react';
import resume from '../resume/Harold-Paradis-Resume-5.pdf';

const Contact = () => {
  return (
    <div className='contact-info'>
      <div className='contacts-container'>
        <h3>Main:</h3>
        <div className='contacts-subcontainer'>
          <a className='contact-anchor link-button' href="mailto: halparadis@gmail.com">halparadis@gmail.com</a>
          <a className='contact-anchor link-button' href='tel: 510-501-5043'>(510) 501-5043</a>
        </div>
      </div>
      
      <div className='contacts-container'>
        <h3>Other:</h3>
        <div className='contacts-subcontainer'>
          <a className='contact-anchor link-button' href="http://www.linkedin.com/in/hal-paradis">LinkedIn</a>
          <a className='contact-anchor link-button' href="https://github.com/HalParadis">GitHub</a>
          {/* <a className='contact-anchor link-button' href={resume} target='_blank'>Resume</a> */}
        </div>
      </div>
    </div>
  )
}

export default Contact;