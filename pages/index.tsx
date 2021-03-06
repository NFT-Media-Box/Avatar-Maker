import Head from 'next/head'
import Footer from '../components/footer';
import Menu from "../components/header/Menu";
import CreateAvatar from "../components/content/CreateAvatar";
import WhatIsAvatar from "../components/content/WhatIsAvatar";
import PowerUp from "../components/content/PowerUp";
import HowItWorks from "../components/content/HowItWorks";
import InComing from "../components/content/InComing";
import Team from "../components/content/Team";
import Support from "../components/content/Support";
import PowerPass from "../components/content/PowerPass";
import { Element } from 'react-scroll'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Avatar Maker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-start">
        <Menu/>
        <div className='w-full'>
          <div className='w-full'>
            <CreateAvatar/>
          </div>
          <div className='w-full'>
            <Element name="element-what-is-the-nft" className='w-full'>
              <WhatIsAvatar />
            </Element>
          </div>
          <div className='w-full'>
            <Element name="element-get-power" className='w-full'>
              <PowerUp />
            </Element>
          </div> 
          <div className='w-full'>
            <InComing/>
          </div>
          <div className='w-full'>
            <PowerPass />
          </div>
          <div className='w-full'>
            <Element name="element-team" className='w-full'>
              <Team />
            </Element>
          </div>
          <div className='w-full'>
            <Support/>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
