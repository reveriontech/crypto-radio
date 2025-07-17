import liveStreams from '@/assets/images/NewsBanner.png'
import bitcoin from '@/assets/images/bitcoin.png'
import jonathan from '@/assets/images/jonathan.png'
import music from '@/assets/images/musical.png'

export const HomeArticleFunction = () => {

    // Live stream
    const liveStream = {
        id: 1,
        image: liveStreams,
    }

    // Latest News
    const latestNews = [{
        id: 1,
        month: 'July',
        day: '17',
        title: 'Bitcoin',
        description: 'Bitcoin is a digital currency that is created and stored on a blockchain, a decentralized ledger that records transactions. It is a peer-to-peer system that allows for secure and transparent transactions without the need for intermediaries.',
        image: bitcoin,
    },
    {
        id: 2,
        month: 'July',
        day: '17',
        title: 'Jonathan',
        description: 'Jonathan is a software engineer who is passionate about building web applications.',
        image: jonathan,
    },
    {
        id: 3,
        month: 'July',
        day: '17',
        title: 'Music',
        description: 'Music is a form of art that expresses emotions and ideas through sound.',
        image: music,
    },
    {
        id: 4,
        month: 'July',
        day: '17',
        title: 'Bitcoin',
        description: 'Bitcoin is a digital currency that is created and stored on a blockchain, a decentralized ledger that records transactions. It is a peer-to-peer system that allows for secure and transparent transactions without the need for intermediaries.',
        image: bitcoin,
    },
    {
        id: 5,
        month: 'July',
        day: '17',
        title: 'Jonathan',
        description: 'Jonathan is a software engineer who is passionate about building web applications.',
        image: jonathan,
    },
    {
        id: 6,
        month: 'July',
        day: '17',
        title: 'Music',
        description: 'Music is a form of art that expresses emotions and ideas through sound.',
        image: music,
    },
]

    return { 
        liveStream, 
        latestNews 
    }
}