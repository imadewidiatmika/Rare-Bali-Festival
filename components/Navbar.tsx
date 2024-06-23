import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constant'



const Navbar = () => {
  return (
    <nav className='navbar flexBetween max-container padding-container relative z-30 py-5'>
        <Link href="/">
         <Image src="/logoHead.png" alt='Logo' width={74} height={30}/>
         </Link>

         <ul className='hidden h-full gap-12 lg:flex text-chocolate'>
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className='font-bold font-mono flexCenter cursor-pointer '> {link.label} </Link>
            ))}
         </ul>

         <div className="lg:flexCenter hidden pl-0.5 space-x-5">
          <Image src="/ig.png" alt='Logo' width={25} height={25}/>
          <Image src="/fb.png" alt='Logo' width={25} height={25}/>
         </div>

         <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar