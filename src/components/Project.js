import React, { useState, useEffect, useRef } from 'react';

const Project = ({description, name, url, github, imgSrc, imgAlt}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [buttonArrow, setButtonArrow] = useState('>');
  const contentRef = useRef(null);

  useEffect(() => {
    const classList = contentRef.current.classList;
    if (isExpanded) {
      setButtonArrow('˅');
      classList.replace('content-collapsed', 'content-expanded');
    }
    else {
      setButtonArrow('>');
      classList.replace('content-expanded', 'content-collapsed');
    }
  }, [isExpanded])

  return (
    <div className='project'>
      <button 
        type='button' 
        className='expand-button'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{buttonArrow}</span>
        <h3 className='project-name'>{name}</h3>
      </button>
      <div className='project-content content-collapsed' ref={contentRef}>
        {/* <img className='project-img' src={imgSrc} alt={imgAlt} /> */}
        <p className='project-description'>{description}</p>
        <a className='project-anchor link-button' href={url}>Visit Site</a>
        {/* {github && (<a className='project-anchor link-button' href={github}>Github Repo</a>)} */}
      </div>
    </div>
  )
}

export default Project;