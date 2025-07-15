import { useState } from 'react'

// ANCHOR: Upnav Dropdown Hover Logic
export const UpnavFunction = () => {
    const [isHoveringTrigger, setIsHoveringTrigger] = useState(false)
    const [isHoveringDropdown, setIsHoveringDropdown] = useState(false)
    const [isPlay, setIsPlay] = useState(false)

    // Dropdown is open if mouse is over trigger or dropdown
    const isOpenDropdown = isHoveringTrigger || isHoveringDropdown

    return {
        isOpenDropdown,
        isPlay,
        setIsPlay,
        isHoveringTrigger,
        setIsHoveringTrigger,
        isHoveringDropdown,
        setIsHoveringDropdown
    }
}

export default UpnavFunction