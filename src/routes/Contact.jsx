import React from 'react'
import AltHero from '../components/AltHero'
import ContactForm from '../components/ContactForm'

const heading = 'CONTACT.'
const text = 'Start a conversation.'

function Contact() {
  return (
    <div>
      <AltHero heading={heading} text={text} />
      <ContactForm />
    </div>
    

  )
}

export default Contact;