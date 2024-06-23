import Image from 'next/image';
import Link from 'next/link';

const Contest = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-cover bg-no-repeat bg-center py-5 mt-15" style={{ backgroundImage: 'url(/BgContest.svg)' }}>
      <div className="md:w-1/4 mb-10"> 
        <Link href="/">
          <Image
            src="/sun.png"
            alt="Logo"
            width={230} 
            height={230}
            layout="responsive"
            objectFit="cover"
          />
        </Link>
      </div>

      <div className="md:w-1/2 ml-20 text-center md:text-left">
      <Link href="/">
          <Image
            src="/illustration.png"
            alt="Logo"
            width={200}
            height={200}
            className=" py-5"

          />
        </Link>
        <p className="text-base md:text-lg lg:text-xl mb-2 font-bold text-chocolate font-mono">
          Rare Bali Festival (RBF) merupakan festival yang mengakomodir berbagai kegiatan anak dalam rangka menggali, mendokumentasikan, menginovasi, dan menyebarluaskan nilai-nilai budaya warisan tradisi Bali yang adi luhung untuk generasi.
        </p>

        <button className="bg-custom-yellow text-chocolate font-mono font-bold py-2 px-5 ml-auto mr-auto mt-2 rounded focus:outline-none focus:shadow-outline">
          See Details
        </button>
      </div>
    </div>
  );
};

export default Contest;
