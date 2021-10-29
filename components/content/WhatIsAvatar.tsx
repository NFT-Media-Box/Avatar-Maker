import Image from 'next/image'
import bg2Image from "./../assets/images/2-bg.png"
import p21Image from "./../assets/images/21.png"


const WhatIsAvatar = () => {
    return (
      <div className="font-custom-arias-jon w-full flex flex-col lg:flex-row py-20 bg-center bg-cover "  style={{backgroundImage: `url(/img/background.png)`}}>
        <div className="flex w-full lg:w-1/2 justify-center items-center">
          <div className="w-1/2 flex justify-center items-center">
            <Image src={p21Image} alt='hq'></Image>
          </div>
        </div>  
          <div className="w-full lg:w-1/2 px-10 mt-5 lg:mt-0">
            <div className="hidden lg:block border-b-4 border-yellow-500 pb-4">
              <span className="text-2xl lg:text-5xl text-white font-bold tracking-widest">WHAT IS THE NFT<br />AVATAR MAKER?</span>
            </div>
            <div className="flex lg:hidden border-b-4 border-yellow-500 pb-4 justify-center pt-4">
              <span className="text-2xl lg:text-5xl text-white font-bold tracking-widest">WHAT IS THE NFT AVATAR MAKER?</span>
            </div>
            <div className="lg:mt-7 md:mt-2 w-full pr-10 text-white font-bold  text-base lg:text-xl leading-none pt-8 lg:pt-2">
              The NFT Avatar Maker is the "be all and end all" Avatar Tool.<br/><br/>
              With billions of combinations and over 1200 characteristics at launch, our NFT avatar maker
              will allow users to build their avatars from an ever-growing list of character traits.<br/><br/>
              Samurai Masks, Superhero cowls, Golden skin and much more are just a few examples of the
              characteristic you'll find at launch.<br/><br/>
              More traits and characteristics will unlock with collaborations and depending upon the NFTs
              users hold in their wallets.<br/><br/>
              Our goal is to enhance the utility of the best and most popular communities under one roof
              and allow NFT holders to get more functionality out of the awesome NFTs they already hold.<br/><br/>
              The exact combination of traits and colors users choose to build their Avatar with CAN
              NEVER BE USED AGAIN, making every Avatar a one-of-a-kind.
            </div>
          </div>
      </div>
    )
  }
  
export default WhatIsAvatar;