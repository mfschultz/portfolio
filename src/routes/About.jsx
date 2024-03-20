import React from 'react'
import AltHero from '../components/AltHero'
import AboutContent from '../components/AboutContent'

const heading = 'ABOUT.'
const text = 'I am a Full-Stack Software Developer.'

function About() {
  return (
    <div>
      <AltHero heading={heading} text={text} />
      <AboutContent />    
    </div>
  )
}

export default About;