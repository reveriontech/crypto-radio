import React from 'react'
import Upnav from '@/components/homepage/Upnav'
import Nav from '@/components/homepage/Nav'
import Ads from '@/components/homepage/Ads'

const Home = () => {
  return (
    <>
        <Upnav />
        <Nav />
        <Ads />
        <main className='main'>
            
        </main>
    </>
  )
}

export default Home