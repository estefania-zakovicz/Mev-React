import React from 'react'
import './Benefits.css'
import bene_1 from '../../assets/bene_1.jpg'
import bene_2 from '../../assets/bene_2.jpg'
import bene_3 from '../../assets/bene_3.jpg'

const Benefits = () => {
  return (
    <div className='benefits'>
      <div className="benefit">
        <img src={bene_1} alt="" />
      </div>
      <div className="benefit">
        <img src={bene_2} alt="" />
      </div>
      <div className="benefit">
        <img src={bene_3} alt="" />
      </div>
    </div>
  )
}

export default Benefits
