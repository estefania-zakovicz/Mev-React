import React from 'react'
import './Contact.css'
import contact_video from '../../assets/video.mp4'

const Contact = () => {
  return (
    <div className='contact header'>
       <div className="contact-left">
        <video src={contact_video} className='contact-video'></video>
       </div>
       <div className="contact-right">
        <h3>Haz una prueba gratuita</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officia eos ad laborum dicta ratione, dolores soluta est, ipsam harum maiores obcaecati natus laudantium. Vitae, unde. Quas dolorem nesciunt hic.</p>
       </div>
    </div>
  )
}

export default Contact
