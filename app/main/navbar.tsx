'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full mt-3 mx-auto px-4">
      <div className="w-full flex items-center justify-between mx-auto ">


        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image src="/Duelert-logo.webp" alt="Duelert Logo" width={40} height={40} />
            <div style={{color: '#303030', fontSize: '5vmin', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', paddingLeft: '4px'}}>Duelert</div>
            {/* <span className="ml-2 text-[60px] font-medium text-[#303030]">Duelert</span> */}
          </Link>
        </div>


        <div className="hidden md:flex flex-grow items-center justify-center space-x-8">
          <Link href="/" className={pathname === "/" ? "text-red-500 border-b-2 font-medium " : "text-gray-600 hover:text-red-500 font-medium"}>Home</Link>
          <Link href="/about" className={pathname === "/about" ? "text-red-500 border-b-2 font-medium" : "text-gray-600 hover:text-red-500 font-medium"}>About</Link>
          <Link href="/pricing" className={pathname === "/pricing" ? "text-red-500 border-b-2 font-medium" : "text-gray-600 hover:text-red-500 font-medium"}>Pricing</Link>
          <Link href="/blog" className={pathname === "/blog" ? "text-red-500 border-b-2 font-medium" : "text-gray-600 hover:text-red-500 font-medium"}>Blog</Link>
          <Link href="/contact" className={pathname === "/contact" ? "text-red-500 border-b-2 font-medium" : "text-gray-600 hover:text-red-500 font-medium"}>Contact us</Link>
        </div>

        <div className="flex-shrink-0 ">
          <Link href="/signup" className="py-4 px-7 bg-red-500 hover:bg-red-600 text-white text-lg font-bold rounded-md transition-colors">
            Sign up now
          </Link>
        </div>
        
      </div>
    </nav>
  );
}