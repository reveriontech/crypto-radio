import React from 'react'
import './scss/_upnav.scss'
import logo from '@/assets/images/cryptologo.png'
import stream from '@/assets/images/cryptopodcast.png'
import UpnavFunction from './UpnavFunction'
import { motion } from "framer-motion";

// ANCHOR: Icons
import { CirclePlay, Search, User, Menu, Ellipsis, SkipBack, SkipForward, Play, Pause, Heart, ListMusic } from 'lucide-react';

const Upnav = () => {

    const {
        isOpenDropdown,
        isPlay,
        setIsPlay,
        isHoveringTrigger,
        setIsHoveringTrigger,
        isHoveringDropdown,
        setIsHoveringDropdown
    } = UpnavFunction()

    return (
        <section className='upnav'>
            <div className='upnav__logo'>
                <img src={logo} alt="The Crypto Radio logo" />

                {/* ANCHOR: Right Side */}
                <div className='upnav__right'>

                    <div className='upnav__right__stream'
                        onMouseEnter={() => setIsHoveringTrigger(true)}
                        onMouseLeave={() => setIsHoveringTrigger(false)}
                    >
                        <CirclePlay />
                        <p>Streaming Live</p>
                    </div>

                    <div className='upnav__right__search'>
                        <Search />
                        <User />
                    </div>

                </div>
            </div>

            {/* ANCHOR: Menu */}
            <div className='upnav__menu'>
                <Menu />
            </div>

            {/* ANCHOR: Dropdown Stream */}
            {isOpenDropdown && (
                <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                    className='upnav__dropdown'
                    onMouseEnter={() => setIsHoveringDropdown(true)}
                    onMouseLeave={() => setIsHoveringDropdown(false)}
                >
                    <div className='upnav__dropdown__header'>
                        <p>Playing Now: <span>The Crypto Radio</span></p>
                    </div>

                    {/* ANCHOR: Body */}
                    <div className='upnav__dropdown__body'>
                        <div className='upnav__dropdown__body__image'>
                            <img src={stream} alt="The Crypto Radio logo" />
                        </div>

                        <div className='upnav__dropdown__body__content'>
                            <p className='upnav__dropdown__body__content__title'>Crypto, <br />
                                Blockchain, and <br />
                                AI Content</p>

                            <p>A podcast diving into the dynamic world of
                                crypto, blockchain, and AI-unpacking how these
                                technologies are reshaping our digital future.</p>
                        </div>

                        <div className='upnav__dropdown__body__ellipsis'>
                            <Ellipsis />
                        </div>
                    </div>

                    <div className='upnav__dropdown__controls'>
                        <div className='upnav__dropdown__controls__skip-back'>
                            <SkipBack />
                        </div>
                        <div className='upnav__dropdown__controls__play'>
                            {isPlay ? <Pause onClick={() => setIsPlay(!isPlay)} /> : <Play onClick={() => setIsPlay(!isPlay)} />}
                        </div>
                        <div className='upnav__dropdown__controls__skip-forward'>
                            <SkipForward />
                        </div>
                        <div className='upnav__dropdown__controls__heart'>
                            <Heart />
                        </div>
                        <div className='upnav__dropdown__controls__list-music'>
                            <ListMusic />
                        </div>
                    </div>
                    <div className="space" />
                </motion.div>
            )}
        </section>
    )
}

export default Upnav