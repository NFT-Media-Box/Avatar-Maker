import Image from 'next/image';
import p32 from "./../../assets/images/32.png";
import p4 from "./../../assets/images/p-4.png";
import p5 from "./../../assets/images/p-5.png";
import p6 from "./../../assets/images/p-6.png";
import p37 from "./../../assets/images/37.jpeg";
import p38 from "./../../assets/images/38.png";
import p39 from "./../../assets/images/39.jpeg";
const Steps = () => {
    return (
        <div className="flex flex-col font-custom-arias-jon pt-20 pb-20 bg-center bg-cover " style={{backgroundImage: `url(/img/background.png)`}}>
            <div className='border-b-4 border-yellow-500 w-1/2 pt-14 pb-6 flex justify-end'>
                <span className='font-bold text-5xl tracking-wider text-white'>POWER-PASS STEPS</span>
            </div>
            <div className='grid grid-cols-3 gap-4 pt-8'>
                <div className='pl-10'>
                    <div className='grid grid-cols-5'>
                        <div className='col-span-4'>
                            <Image src={p32} alt='p32' width={350} height={350} />
                        </div>
                        <div className='flex items-center mx-2'>
                            <Image src={p4} alt='p4' width={105} height={105} />
                        </div>
                    </div>
                    <div className='font-bold text-white'>
                        <div className='grid grid-cols-5'>
                            <div className='col-span-4'>
                                <div className='flex justify-center text-center'>
                                    OWN AN NFT FROM ONE OF OUR
                                    PARTNERS TO GAIN ACCESS TO
                                    A COMPATIBLE POWER-PASS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex'>
                        <Image src={p5} alt='p5' width={560} height={330} />
                    </div>
                    <div className='font-bold text-white pt-10 px-16 text-center'>
                        A POWER-PASS WILL GIVE USERS THE ABILITY TO
                        MAKE AND DESIGN 3 ONE-OF-A-KIND AVATARS; 1
                        FOR FREE AND 2 FOR THE COST OF 0.03
                        POWER-PASS TRAITS WILL HAVE CHARACTERISTICS
                        INSPIRED BY THE COMPATIBLE NFT.
                    </div>
                </div>
                <div>
                    <div className='flex items-center -mt-40 justify-between'>
                        <div className='px-8'>
                            <Image src={p6} alt='p6' width={532} height={300} />
                        </div>
                        <div className=''>
                            <div className='w-8/12'>
                                <Image src={p37} alt='p37' width={1500} height={1500} />
                            </div>
                            <div  className='w-8/12'>
                                <Image src={p38} alt='p38' width={1500} height={1500} />
                            </div>
                            <div  className='w-8/12'>
                                <Image src={p39} alt='p39' width={1500} height={1500} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps;