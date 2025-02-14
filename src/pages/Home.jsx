import React from 'react'
import Toolbar from '../components/Navigation/Toolbar';
import Banner from '../components/Pagecomponent/Home/Banner';
import GetStarted from '../components/Pagecomponent/Home/GetStarted';
import Items from '../components/Pagecomponent/Home/Items';
import  Video from '../components/Pagecomponent/Home/Video';
import Linksection from '../components/Footer/Linksection';
import Slidepart from '../components/Pagecomponent/Home/Slidepart';
import Lastestpost from '../components/Pagecomponent/Home/Lastestpost';

function Home() {
  return (
    <div className='flex flex-col gap-24'>
      <Toolbar />
      <Banner />
      <GetStarted />
<Items />
<Video />
     <Slidepart />
<Lastestpost />
     
    </div>
  )
}

export default Home