"use client";

import Link from "next/link";
import Image from "next/image";
import { Bell, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    (user ? 
    <nav className="flex justify-between border-b-2  pr-2 py-[16]">
      <div className="duelert-text pl-4">{ (pathname === "/" ? "Calendar" : pathname || "Calendar")}</div>


       <div className="flex items-center gap-6 pr-4">
        <div className="hidden md:flex relative pr-4 ">
        <input
          type="text"
          placeholder="Search Date"
          className="w-full right-0 pl-4 pr-3 py-2 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-400"
        />
        <Search className="absolute right-7 top-2.5 h-5 w-5 text-gray-400" />
      </div>
          <div className="relative cursor-pointer">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              12
            </span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex-col justify-start">
              <p className="text-sm font-semibold text-gray-700">
                {user.displayName || user.email}
              </p>
              <p className="text-xs text-right text-gray-400">{user.email || <span>No email</span>}</p>
            </div>
            <Image
              src="/Ellipse.svg"
              alt="profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
    </nav> 


    :

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
    )

  );
}
