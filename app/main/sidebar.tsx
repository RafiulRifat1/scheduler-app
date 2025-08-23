"use client";
import { Calendar, Bell, Users, DollarSign, Headphones } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

const menuItems = [
  { name: "Calendar", icon: Calendar, href: "#" },
  { name: "Reminders", icon: Bell, href: "#" },
  { name: "Contacts", icon: Users, href: "#" },
  { name: "Pricing", icon: DollarSign, href: "#" },
  { name: "Support", icon: Headphones, href: "#" },
];

export default function Sidebar() {
  const { user, logout } = useAuth();

  const logoutHandler = () => {
    logout();
  };

  return (
    (user ?
            <aside className="h-screen w-60 flex flex-col justify-between shadow">
      <div>
        {/* <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image src="/Duelert-logo.webp" alt="Duelert Logo" width={40} height={40} />
            <div style={{color: '#303030', fontSize: '5vmin', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', paddingLeft: '4px'}}>Duelert</div> */}
            {/* <span className="ml-2 text-[60px] font-medium text-[#303030]">Duelert</span> */}
          {/* </Link>
        </div> */}
              <div className="flex items-center justify-center py-4 shadow">
                <Image src="/Duelert-logo.webp" alt="Logo" width={30} height={30} />
                <div style={{color: '#303030', fontSize: '4vmin', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Duelert</div>
              </div>
        <ul className="space-y-2 py-8">
            <div className="text-lg font-bold text-gray-700 pl-8">Main Menu</div>
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className="flex items-center gap-3 px-6 py-3 text-black hover:bg-red-50 hover:text-red-500 transition"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="p-4 border-black" onClick={logout}>
            <button className="w-full text-left">Logout</button>
        </div>
      </div>
      <div className="p-4 ">
        <Image
          src="/illustration.svg"
          alt="Description"
          width={180}
          height={80}
        />
        <button
          onClick={logoutHandler}
          className="bg-yellow-400 rounded-lg p-3 text-center text-sm font-medium cursor-pointer hover:bg-yellow-500 transition w-full"
        >
          Manage your<br />
          schedule right now
        </button>
      </div>
    </aside>
         :
        <div>

        </div>)

  );
}
