import Image from "next/image"
import Link from "next/link"

import Logo from "@/public/logo.webp"

const Navbar = () => {
  return (
    <nav className="flex py-5 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="logo" className="size-8"/>
            <h2 className="text-xl">Agendario</h2>
        </Link>
        
    </nav>
  )
}

export default Navbar