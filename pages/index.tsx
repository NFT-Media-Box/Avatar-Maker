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
        <link rel="icon" href="/fav.png" />
      </Head>
      <main className="flex justify-star">
        <Menu/>
        <div>
          <div>
            <CreateAvatar/>
          </div>
          <div>
            <Element name="element-what-is-the-nft">
              <WhatIsAvatar />
            </Element>
          </div>
          <div>
            <Element name="element-get-power">
              <PowerUp />
            </Element>
          </div>
          {/* <div>
            <HowItWorks/>
          </div> */}
          <div>
            <InComing/>
          </div>
          <div>
            <PowerPass />
          </div>
          <div>
            <Element name="element-team">
              <Team />
            </Element>
          </div>
          <div>
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
