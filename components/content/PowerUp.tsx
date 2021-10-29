import Image from 'next/image'
import p32Iamge from "./../assets/images/32.png";
import p34Image from "./../assets/images/multi.png";
import f12Image from "./../assets/images/n_12.png";
import p35Image from "./../assets/images/eq.png";
import p37Image from "./../assets/images/40.png";
import p38Image from "./../assets/images/38.png";

const PowerUp = () => {
    return (
      <div className="font-custom-arias-jon bg-center bg-cover " style={{backgroundImage: `url(/img/background.png)`}}>
          <div className="px-6 py-10 ">
            <div className="border-b-4 border-yellow-500 pb-4 flex justify-end w-2/3 -ml-6">
              <span className="text-2xl lg:text-5xl font-bold text-white">POWER UP YOUR FAVORITE NFTs</span>
            </div>
            <div className='flex justify-center items-center'>
              <div className='flex items-center'>
                <div className="flex justify-between items-center gap-1 pt-8">
                  <div>
                    <Image src={p32Iamge} width={275} height={275} alt='2' />
                  </div>
                  <div className="pl-2 lg:pl-10">
                    <Image src={p34Image} width={150} height={150} alt='2'/>
                  </div>
                  <div className="pl-2 lg:pl-10">
                    <Image src={f12Image} width={360} height={200} alt='2'/>
                  </div>
                  <div className="pl-2 lg:pl-10">
                    <Image src={p35Image} width={160} height={90} alt='2'/>
                  </div>
                </div>
                <div className="pl-2 lg:pl-10">
                  <div className='w-full'>
                    <Image src={p37Image} width={200} height={200} alt='2'/>
                  </div>
                  <div className='w-full'>
                    <Image src={p38Image} width={200} height={200} alt='2'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
  
export default PowerUp;