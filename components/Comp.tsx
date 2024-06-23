import Image from "next/image"
import Link from "next/link"

const Comp = () => {
  return (
    <div>
        <div className="flex flex-row justify-center items-center h-screen bg-cover bg-no-repeat mt-0 bg-center " style={{ backgroundImage: 'url(/bgcon.png)' }}>
        <div className="md:w-1/4 mb-10 "> 
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

      <div className="md:w-1/2  text-center md:text-left py-5 ml-20">
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

        <button className="bg-custom-orange text-chocolate font-mono font-bold py-2 px-5 ml-auto mr-auto mt-2 rounded focus:outline-none focus:shadow-outline">
          See Details
        </button>
      </div>
        </div>
    </div>
  )
}

export default Comp
