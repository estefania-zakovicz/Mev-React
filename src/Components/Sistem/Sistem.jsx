import React from 'react'
import './Sistem.css'
import sistem_video from '../../assets/video.mp4'

const Sistem = () => {
  return (
    <div className='sistem header'>
       <div className="sistem-left">
        <video src={sistem_video} className='sistem-video'></video>
       </div>
       <div className="sistem-right">
        <h3>Haz una prueba gratuita</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officia eos ad laborum dicta ratione, dolores soluta est, ipsam harum maiores obcaecati natus laudantium. Vitae, unde. Quas dolorem nesciunt hic.</p>
       </div>
    </div>
  )
}

export default Sistem
