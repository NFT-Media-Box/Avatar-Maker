import Image from 'next/image';
import bg1Image from "./../assets/images/1-1bg.png";
import f12Image from "./../assets/images/hq.png";

const CreateAvatar = () => {
  return (
    <div className="flex flex-col font-custom-arias-jon pt-56 lg:pt-36 pb-12 bg-center bg-cover " style={{backgroundImage: `url(/img/background.png)`}}>
      <div className="flex justify-center flex-col lg:flex-row">
        <div className="flex w-full lg:w-1/2 flex-col justify-center items-center">
          <div className="text-white text-3xl flex justify-center items-center tracking-widest">
            <div className='flex w-4/5 justify-center text-center'>SUBSCRIBE NOW TO BE NOTIFIED OF OUR EARLY BIRD RELEASE DATE</div>
          </div>
          <div className='pt-8'>
            <a
              className="mt-3 py-2 justify-center px-6 flex text-black font-bold hover:text-white cursor-pointer bg-yellow-600 rounded-md tracking-widest text-2xl" href='http://eepurl.com/hLzGQz' target="_blank" rel="noreferrer"
            >
              CLICK HERE
            </a>
            </div>
        </div>
        <div className="flex justify-center w-full lg:w-1/2 mt-5 lg:mt-0 lg:px-16">
          <div className="flex w-4/5 rounded-sm border-4 border-yellow-600">
            <Image src={f12Image} alt='hq' />
          </div>
        </div>
        
      </div>
      <div className="flex mt-5 lg:mt-12 px-10">
        <div className="bg-yellow-600 rounded-md flex w-full flex-col lg:flex-row">
          <div className="w-1/2"></div>
          <div className="w-full lg:w-1/2 lg:ml-10 flex justify-center">
            <div
              className="py-2 px-5 cursor-pointer text-black text-xl font-bold hover:text-white justify-center tracking-widest"
            >
              CREATE YOUR OWN AVATAR
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CreateAvatar;