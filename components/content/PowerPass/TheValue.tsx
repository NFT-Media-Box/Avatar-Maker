import Image from 'next/image';
import p12 from "./../../assets/images/n_12.png";
const TheValue = () => {
  return (
    <div className="flex flex-col font-custom-arias-jon pt-32 pb-32 bg-center bg-cover " style={{backgroundImage: `url(/img/background.png)`}}>
      <div className='font-bold text-2xl lg:text-5xl tracking-wider border-b-4 border-yellow-500 w-3/5 pb-4 flex justify-end -mt-8' >
        <span className='text-white'>THE VALUE OF A POWER-PASS</span>
      </div>
      <div className='flex justify-between'>
        <div className='pt-20 hidden md:block pl-4'>
          <Image src={p12} alt='p12' width={1200} height={700} />
        </div>
        <div className='px-2 md:px-20 text-white'>
          <div className='pt-6 text-xl'>
            <span className='text-3xl font-bold '>Unused</span><br/>
              <div className='text-base lg:text-xl'>
                An unused Power-Pass increases in value as we add more
                partners onto the Avatar Maker Platform. More Partners means
                more power-passes and traits. The more traits from different
                projects added to one avatar will make it more unique. E.G. If you had a Bored Ape Power-Pass and Cryptopunk Power-Pass
                you could build an avatar with Bored Ape and CryptoPunk traits.
              </div>
          </div>
          <div className='pt-6 text-xl'>
            <span className='text-3xl font-bold'>Burned</span><br/>
            <div className='text-base lg:text-xl'>
              Once a Power-Pass is fully used the NFT burns.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheValue;