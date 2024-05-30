import styles from '../styles/ContactForm.module.css';
import buttonStyles from '../styles/Button.module.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';


function ContactForm() {

  const {register, handleSubmit, reset, formState: { errors },} = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({display:true, message, type});

    setTimeout(() => {
      setAlertInfo({display:false, message: '', type: ''});
    }, 5000);
  };

  //Send Email from Contact Form
  const onSubmit = async (data) => {
    try {
      setDisabled(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        '#contactForm',
        { publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY },
      );

      toggleAlert('Form Submission Successful!', 'success');
    } catch (e) {
      console.error(e);
      toggleAlert('Uh oh! Something Went wrong.', 'danger');
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div>


      <div className={styles.form}>
        <form id='contactForm' onSubmit={handleSubmit(onSubmit)} noValidate>

          <label className={styles.label}>Your Name</label>
          <input id='userName' name='userName' type='text' {...register('name', { required: { value: true, message: 'Please enter your name' }, maxLength: { value: 30, message: 'Please use 30 characters or less' } })} />
          {errors.name && (<span className={styles.errorMessage}>{errors.name.message}</span>)}

          <label className={styles.label}>Email</label>
          <input id='userEmail' name='userEmail' type='text' {...register('email', { required: true, pattern: /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}$/ })} />
          {errors.email && (<span className={styles.errorMessage}>Please enter a valid email address</span>)}

          <label className={styles.label}>Subject</label>
          <input id='subject' name='subject' type='text' {...register('subject', { required: { value: true, message: 'Please enter a subject' }, maxLength: { value: 75, message: 'Subject cannot exceed 75 characters' } })} />
          {errors.subject && (<span className={styles.errorMessage}>{errors.subject.message}</span>)}

          <label className={styles.label}>Message</label>
          <textarea id='message' name='message' rows='6' placeholder='Type Your Message Here' {...register('message', { required: true })} />
          {errors.message && (<span className={styles.errorMessage}>Please enter a message</span>)}

          <button type='submit' className={buttonStyles.btn} disabled={disabled}>Submit</button>
        </form>
      </div>
      {alertInfo.display && (
        <div className={`alert alert-${alertInfo.type}`} role='alert'>
          {alertInfo.message}
        </div>
      )}
    </div>
  )
}

export default ContactForm;
