import { LoginForm } from "./loginform"
import Image from "next/image"


const page = () => {
  return (
    <div className='flex justify-center gap-20 w-full h-screen pt-4'>

      <div className='relative w-1/2 h-full hidden md:block max-w-[700px] max-h-[777px] '>
            <Image 
            src='/login.webp' 
            alt='login img'   
            fill={true} 
            className='object-cover rounded-2xl'/>
            <div className="absolute rounded-2xl inset-0 bg-[linear-gradient(311deg,rgba(244,17,50,0)_0%,rgba(244,17,50,0.5)_100%)]"/>          
       </div>
       <LoginForm/>
    </div>
  )
}

export default page

