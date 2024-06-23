// about.tsx
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-cover bg-no-repeat bg-center py-5 -mt-20" style={{ backgroundImage: 'url(/BgAbout.png)' }}>
<div className="md:w-1/4 mb-10">
      <Link href="/">
        <Image
          src="/meja.png"
          alt="Logo"
          width={230}
          height={230}
          layout="responsive" 
          objectFit="cover"
        />
      </Link>
    </div>

    <div className="md:w-1/2 ml-20 text-center md:text-left">
  <p className="text-base md:text-lg lg:text-xl mb-2 font-bold text-chocolate font-mono">
    Rare Bali Festival (RBF) merupakan festival yang mengakomodir berbagai kegiatan anak dalam rangka menggali, mendokumentasikan, menginovasi, dan menyebarluaskan nilai-nilai budaya warisan tradisi Bali yang adi luhung untuk generasi.
  </p>

  <p className="text-base md:text-lg lg:text-xl mb-2 font-bold text-chocolate font-mono">
    Berbagai aktivitas budaya anak yang ditampilkan dalam festival ini meliputi permainan tradisional, seni, dan literasi.
  </p>
</div>

    </div>
  );
};

export default About;
