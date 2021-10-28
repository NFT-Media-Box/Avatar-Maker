import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Image from 'next/image';
import n12Image from "../assets/images/n_12.png";

import { animateScroll as scroll, scroller } from 'react-scroll'
import FAQ from "./../content/FAQ";

export default function Menu() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [isShowFaq, setShowFAQ] = React.useState(false);
  const onScrollToTop = () => {
    scroll.scrollToTop();
  }
  const onScrollToWhatIsTheNFT = () => {
    scroller.scrollTo('element-what-is-the-nft', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -111
    });
  }
  const onScrollToGetPower = () => {
    scroller.scrollTo('element-get-power', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -111
    });
  }
  const onScrollToTheTeam = () => {
    scroller.scrollTo('element-team', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -111
    });
  }
  const showFaq = () => {
    setShowFAQ(!isShowFaq);
  }

  const hideFaq = () => {
    setShowFAQ(false);
  }

  return (
    <>
      <nav className="flex flex-start items-center justify-between pt-1 bg-menu-bg fixed w-full z-10 text-white font-custom-arias-jon">
        <div className="flex items-center justify-between w-full">
          <div className="w-full flex justify-between lg:justify-start ml-2">
            <div className="flex justify-between w-full">
              <div className='mt-4 w-48 h-21.5 flex justify-start items-center'>
                <Image src={n12Image} onClick={onScrollToTop} className="cursor-pointer" alt='e'/>
              </div>
              <div
                className={
                  "lg:flex flex-col items-center w-full lg:justify-start" +
                  (navbarOpen ? " flex" : " hidden")
                }
                id="example-navbar-danger"
              >
                <div className="w-full">
                  <ul className="flex flex-col lg:flex-row list-none font-bold justify-start lg:gap-16 pl-4">
                    <li className="nav-item">
                      <a
                        className="py-2 flex text-xl hover:opacity-75 cursor-pointer tracking-widest"
                        onClick={onScrollToWhatIsTheNFT}
                      >
                        WHAT IS THE NFT AVATAR MAKER?
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="py-2 flex text-xl hover:opacity-75 cursor-pointer tracking-widest"
                        onClick={onScrollToGetPower}
                      >
                        GET A POWER PASS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="py-2 flex text-xl hover:opacity-75 cursor-pointer tracking-widest"
                        onClick={onScrollToTheTeam}
                      >
                        THE TEAM
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        className="py-2 flex text-lg hover:opacity-75 cursor-pointer tracking-widest"
                        href='http://eepurl.com/hLzGQz' target='_blank' rel="noreferrer"
                      >
                        SUBSCRIPTION
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        className="py-2 flex text-xl hover:opacity-75 cursor-pointer tracking-widest"
                        onClick={showFaq}
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>  
                </div>
                <div className="w-full pr-4 ">
                  <div className="bg-yellow-600 rounded-md w-full">
                    <div className=" flex justify-start lg:justify-end w-7/8">
                      <a
                        className="py-2 px-5 flex text-black italic text-xl font-bold hover:text-white cursor-pointer justify-center "
                      >
                        CONNECT YOUR WALLET
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="cursor-pointer text-xl px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none mt-2"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <FontAwesomeIcon className="w-6" icon={faBars}/>
                </button>
              </div>
            </div>
          </div>
          
        </div>
        <FAQ show={isShowFaq} funcHide={hideFaq}/>
      </nav>
    </>
  );
}