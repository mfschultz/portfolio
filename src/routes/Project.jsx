import React from 'react';
import AltHero from '../components/AltHero';
import ProjectCards from '../components/ProjectCards';
import PricingCards from '../components/PricingCards';

const heading = 'PROJECTS';
const text = 'Some of my most recent work'

function Project() {
  return (
    <>
      <AltHero heading={heading} text={text} />
      <ProjectCards />
      <PricingCards />    
    </>

  )
}

export default Project;