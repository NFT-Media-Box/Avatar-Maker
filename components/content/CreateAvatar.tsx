import Image from 'next/image';
import bg1Image from "./../assets/images/1-1bg.png";
import f12Image from "./../assets/images/12.png";
import f14Image from "./../assets/images/1-1.png";
import f15Image from "./../assets/images/1-2.jpeg";
import f16Image from "./../assets/images/1-3.jpeg";
import f17Image from "./../assets/images/1-4.jpeg";

// style={{backgroundImage: `url(${bg1Image})` }}
const CreateAvatar = () => {
  return (
    <div className="w-full flex font-custom-arias-jon">
        <div className="relative">
          <Image src={bg1Image} width={1763} height={849}/>
        </div>
        <div className="absolute w-full flex-col">
          <div className="flex justify-center 2xl:mt-44 xl:mt-32 lg:mt-32 md:mt-40 sm:mt-64">
            <div className="flex w-3/5 -ml-20 flex-col justify-center items-center">
              <div className="text-white text-4xl flex justify-center items-center tracking-widest">
                <div>
                  <div className='flex justify-center'>SUBSCRIBE NOW TO BE NOTIFIED OF</div>
                  <div className='flex justify-center'>OUR EARLY BIRD RELEASE DATE</div>
                </div>
              </div>
              <div>
                <a
                  className="mt-3 py-2 justify-center px-6 flex text-black font-bold hover:text-white cursor-pointer bg-yellow-600 rounded-md tracking-widest text-2xl" href='http://eepurl.com/hLzGQz' target="_blank" rel="noreferrer"
                >
                  CLICK HERE
                </a>
                </div>
              {/* <Image src={f12Image} width={400} height={215}/> */}
            </div>
            <div className="flex flex-col rounded-sm border-4 border-yellow-600">
              <div className="flex">
                <Image src={f14Image} width={200} height={200}/>
                <Image src={f15Image} width={200} height={200}/>
              </div>
              <div className="flex">
                <Image src={f16Image} width={200} height={200}/>
                <Image src={f17Image} width={200} height={200}/>
              </div>
            </div>
            {/* <div className="w-1/3 sm:top-44 md:top-40 lg:top-32 xl:top-32 grid grid-flow-row grid-cols-2 gap-0 rounded-sm border-4 border-yellow-600">
              <div>
                <Image src={f14Image} width={200} height={200}/>
              </div>
              <div>
                <Image src={f15Image} width={200} height={200}/>
              </div>
              <div className="-mt-1">
                <Image src={f16Image} width={200} height={200}/>
              </div>
              <div className="-mt-1">
                <Image src={f17Image} width={200} height={200}/>
              </div>
            </div> */}
          </div>
          <div className="flex sm:mt-16 md:mt-2 lg:mt-3 xl:mt-4 2xl:mt-12">
            <div className="bg-yellow-600 rounded-md flex justify-end w-full">
              <div
                className="py-2 w-64 lg:mr-20 xl:mr-28 2xl:mr-36  flex text-black text-2xl font-bold hover:text-white justify-center tracking-widest"
              >
                CREATE YOUR OWN AVATAR
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="w-full pr-2">
          <div className="bg-yellow-600 rounded-md flex justify-end">
            <a
              className="py-2 w-80 flex text-black italic text-lg font-bold hover:text-white cursor-pointer justify-center "
            >
              CONNECT YOUR WALLET
            </a>
          </div>
          
        </div> */}
    </div>
  )
}

export default CreateAvatar;