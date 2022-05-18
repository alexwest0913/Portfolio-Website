import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Location from '../../img/location.png'
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com';


const Contact = () => {
  const formRef = useRef()
  const [submit, setSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit('')

    emailjs
      .sendForm(
        'service_0v9yy2q',
        'template_641o4mu',
        formRef.current,
        'user_p3LCG83YKP8OIUSMIh1qt')
      .then((result) => {
          console.log(result.text);
          setSubmit(true)
      }, (error) => {
          console.log(error.text);
      });

  }

  return (
    <>
      <div className='c'>
        <div className='c-bg'></div>
        <div className='c-wrapper'>
          <div className='c-left'>
            <h1 className='c-title'>Contact Me</h1>
            <div className='c-info'>
              <div className='c-info-item'>
                <img className='c-icon' src={Phone} alt='phone image' />
                (910) 290-1794
              </div>
              <div className='c-info-item'>
                <img className='c-icon' src={Email} alt='email image' />
                alexwest9624@gmail.com
              </div>
              <div className='c-info-item'>
                <img className='c-icon' src={Location} alt='location image' />
                119 E 97th St, New york City, New York
              </div>
            </div>
          </div>
          <div className='c-right'>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type='text' placeholder='Name' name='user_name' />
              <input type='text' placeholder='Subject' name='user_subject' />
              <input type='text' placeholder='Email' name='user_email' />
              <textarea rows='5' placeholder='Message' name='message'/>
              <br/>
              <button onClick={handleSubmit} type='submit'>Submit</button>
              <br/>
              <div className='sm'>
              {submit && 'Thank you! Your message was sent.'}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
