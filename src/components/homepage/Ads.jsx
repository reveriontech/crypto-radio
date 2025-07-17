import React from 'react'
import { AdsFunction } from './AdsFunction'
import './scss/_ads.scss'

const Ads = () => {
    const { adsData } = AdsFunction()

  return (
    <section className='ads'>
        {adsData.map((ads) => (
            <div key={ads.id} className='ads__item'>
                <img src={ads.image} alt={ads.title} />
            </div>
        ))}
    </section>
  )
}

export default Ads