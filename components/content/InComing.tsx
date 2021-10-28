import Image from 'next/image'
import p32Image from "./../assets/images/32.png";
import p51Image from "./../assets/images/51.png";
import p56Image from "./../assets/images/56.png";
import p52Image from "./../assets/images/52-n.png";
import p53Image from "./../assets/images/53.png";
import p54Image from "./../assets/images/54.png";
import p57Image from "./../assets/images/57.png";
import pABImage from "./../assets/images/AB.png";

const InComing = () => {
    return (
      <div className="font-custom-arias-jon pb-14 bg-center bg-cover " style={{backgroundImage: `url(/img/background.png)`}}>
        <div className='border-b-4 border-yellow-500 pb-2 pt-14 w-3/5 flex justify-end'>
          <span className='text-5xl font-bold text-white'> INCOMING POWER-PASSES </span>
        </div>
        <div className='flex justify-around items-center pt-10 pb-20'>
          <Image src={p32Image} width={200} height={200} alt='1'/>
          <Image src={p51Image} width={200} height={200} alt='1'/>
          <Image src={p52Image} width={200} height={200} alt='1'/>
          <Image src={p53Image} width={200} height={200} alt='1'/>
        </div>
        <div className='flex justify-evenly pb-10 items-center'>
          <div>
            <Image src={p54Image}   width={280} height={180} alt='2' />
          </div>
          <div className="flex flex-col items-center -mt-10">
            <div>
              <Image src={pABImage}   width={500} height={120} alt='2'/>
            </div>
            <div>
              <Image src={p56Image}   width={300} height={60} alt='2'/>
            </div>
          </div>
          <div>
            <Image src={p57Image}  width={300} height={120} alt='2'/>
          </div>
        </div>
      </div>
    )
  }
  
export default InComing;