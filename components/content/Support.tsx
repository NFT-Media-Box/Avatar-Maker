import { url } from 'inspector';
import Image from 'next/image'
import p72Image from "./../assets/images/discord.png";
import p73Image from "./../assets/images/twitter.png";

const Support = () => {
    return (
        <div className="flex font-custom-arias-jon pt-10 lg:pt-32 pb-10 bg-center bg-cover " style={{backgroundImage: `url(/img/background.png)`}}>
            <div className='flex justify-end pb-20 w-full'>
                <div className="w-full md:w-1/2">
                    <div className='w-full border-b-4 border-yellow-600 pb-6 pt-4'>
                        <span className='text-2xl lg:text-5xl font-bold text-white'> SUPPORT </span>
                    </div>
                    <div>
                        <div  className="mt-10 ml-2">
                            <a href='https://discord.gg/NFTAvatarmaker' target='_blank' rel="noreferrer">
                                <div className="flex justify-center md:justify-start">
                                    <Image src={p72Image} width={90} height={75} alt='discord' />
                                    <div className="flex flex-col ml-5">
                                        <div className="text-white text-xl lg:text-3xl font-bold flex justify-start">
                                            Discord
                                        </div>
                                        <div className="text-white text-base lg:text-xl  hidden lg:flex justify-start mt-3">
                                            https://discord.gg/NFTAvatarMaker
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div  className="mt-10 ml-2">
                            <a href='https://twitter.com/Metaciple' target='_blank' rel="noreferrer">
                                <div className="flex justify-center md:justify-start">
                                    <Image src={p73Image} width={90} height={75} alt='twitter'></Image>
                                    <div className="flex flex-col ml-7">
                                        <div className="text-white text-xl lg:text-3xl font-bold flex justify-start">
                                            Twitter
                                        </div>
                                        <div className="text-white text-base lg:text-xl hidden lg:flex justify-start mt-3">
                                            @Metaciple
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
  }
  
export default Support;