import Image from 'next/image';
import p37 from './../../assets/images/37.jpeg';
const HowItWorks = () => {
    return (
        <div className="lg:flex font-custom-arias-jon py-24 bg-center bg-cover " style={{backgroundImage: `url(/img/background.png)`}}>
            <div className='w-full lg:w-1/2 flex items-center text-center justify-center'>
                <div className='border-yellow-600 border-2 flex'>
                    <Image src={p37} width={400} height={440} alt='left' />
                </div>
            </div>
            <div className='px-2 lg:pl-20 text-white w-full lg:w-1/2'>
                <div className='font-bold text-3xl lg:text-5xl pb-6 pt-20 border-b-4 border-yellow-500'>
                    THE POWER-PASS:<br />
                    HOW IT WORKS
                </div>
                <div className='font-bold text-2xl pt-8 lg:pr-32 tracking-wider text-white'>
                    Users can create Avatars from 1200 traits available from the avatar maker at launch.<br/><br/>
                    However, Power-Passes provide more than just 1200 traits. A pass will be available to specific NFT holders to get VIP traits.<br /><br/>
                    For example: If you hold a KIA NFT you will be able to purchase and
                    own a limited edition KIA Power-Pass that will provide exclusive
                    traits in the Avatar Maker.
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;