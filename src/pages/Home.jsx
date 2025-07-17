import React from 'react'
import Upnav from '@/components/homepage/Upnav'
import Nav from '@/components/homepage/Nav'
import Ads from '@/components/homepage/Ads'
import HomeArticle from '@/components/homepage/HomeArticle'

const Home = () => {
  return (
    <>
        <Upnav />
        <Nav />
        <Ads />
        <main className='main'>
            <HomeArticle />
        </main>
    </>
  )
}

export default Home