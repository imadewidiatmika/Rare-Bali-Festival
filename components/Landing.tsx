import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-row justify-center items-center h-screen bg-[url('/bgContestLanding.svg')] bg-cover bg-center py-5 -mt-30">
      <div className="md:w-1/2 ml-20 text-center md:text-left mt-30">
      <Link href="/">
          <Image
            src="/ContestMusicArrangement.png"
            alt="Logo"
            width={200}
            height={200}
            
            className="py-5"
          />
        </Link>
        <p className="text-base md:text-lg lg:text-xl mb-2 font-bold text-chocolate font-mono">
          Rare Bali Festival (RBF) merupakan festival yang mengakomodir berbagai kegiatan anak dalam rangka menggali, mendokumentasikan, menginovasi, dan menyebarluaskan nilai-nilai budaya warisan tradisi Bali yang adi luhung untuk generasi.
        </p>

        <button className="bg-custom-orange text-chocolate font-mono font-bold py-2 px-5 ml-auto mr-auto mt-2 rounded focus:outline-none focus:shadow-outline">
          See Details
        </button>
      </div>


      <div className="md:w-1/4 mb-10 mt-30"> 
        <Link href="/">
          <Image
            src="/sun.png"
            alt="Logo"
            width={230} 
            height={230}
            layout="responsive"
            objectFit="cover"
            className="hidden md:block"
          />
        </Link>
      </div>



    </div>
  );
};

export default Landing;
