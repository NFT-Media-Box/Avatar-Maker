import Image from 'next/image'
import p61Image from "./../assets/images/61.png";

const Team = () => {
    return (
      <div className="flex flex-col font-custom-arias-jon py-10 bg-center bg-cover " style={{backgroundImage: `url(/img/background.png)`}}>
          <div className='border-b-4 border-yellow-500 pb-2 pt-8 w-1/3 flex justify-start pl-10 lg:pl-20'>
            <span className='text-2xl lg:text-5xl font-bold text-white'> TEAM </span>
          </div>
          <div className='flex justify-center items-center gap-14'>
            <Image src={p61Image} width={1920} height={1080} alt='1'/>
          </div>
      </div>
    )
  }
  
export default Team;