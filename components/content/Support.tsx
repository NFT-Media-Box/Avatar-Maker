import { url } from 'inspector';
import Image from 'next/image'
import p72Image from "./../assets/images/discord.png";
import p73Image from "./../assets/images/twitter.png";

const Support = () => {
    return (
        <div className="flex flex-col font-custom-arias-jon pt-32 pb-10 bg-center bg-cover " style={{backgroundImage: `url(/img/background.png)`}}>
            <div className='flex justify-end pb-20'>
                <div className="w-1/2 h-full">
                    <div className='w-full border-b-4 border-yellow-600 pb-6 pt-4 flex justify-start'>
                        <span className='text-5xl font-bold text-white'> SUPPORT </span>
                    </div>
                    <div className="flex justify-start">
                        <div className="flex flex-col">
                            <div  className="mt-10">
                                <button>
                                    <div className="flex">
                                        <Image src={p72Image} width={90} height={50} alt='discord'></Image>
                                        <div className="flex flex-col ml-5">
                                            <div className="text-white text-3xl font-bold flex justify-start">
                                                Discord
                                            </div>
                                            <div className="text-white text-lg  flex justify-start mt-3">
                                                https://discord.gg/NFTAvatarMaker
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div  className="mt-10 ml-2">
                                <button>
                                    <div className="flex">
                                        <Image src={p73Image} width={90} height={50} alt='twitter'></Image>
                                        <div className="flex flex-col ml-7">
                                            <div className="text-white text-3xl font-bold flex justify-start">
                                                Twitter
                                            </div>
                                            <div className="text-white text-lg  flex justify-start mt-3">
                                                @Metaciple
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
  }
  
export default Support;