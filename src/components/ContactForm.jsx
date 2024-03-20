import styles from '../styles/ContactForm.module.css';
import buttonStyles from '../styles/Button.module.css';
import React from 'react'
import { Form } from 'react-router-dom';

function ContactForm() {
  return (
    <div className={styles.form}>
        <form>
            <label className={styles.label}>Your Name</label>
            <input type='text' />
            <label className={styles.label}>Email</label>
            <input type='text' />
            <label className={styles.label}>Subject</label>
            <input type='text' />
            <label className={styles.label}>Message</label>
            <textarea rows='6' placeholder='Type Your Message Here' />
            <button type='submit' className={buttonStyles.btn}>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm;