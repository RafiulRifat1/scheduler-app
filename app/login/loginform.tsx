'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { auth } from '@/lib/firebase'; 
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';




export const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPass, setShowPass] = useState(false);

      const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();



    const newErrors = {  email: '', password: ''};
    let isValid = true;


    if (!email) {
      newErrors.email = 'Email cannot be empty.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email.';
      isValid = false;
    }
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        console.log("User Credentials:", userCredentials);
      } catch (error) {
        console.log("Error signing in:", error, error.message);
      }

  }}

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.addScope('email');
      provider.addScope('public_profile');
      const data = await signInWithPopup(auth, provider);
      const user = data.user;
      console.log("Google User:", user);
      const res = await fetch("/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }),
      });

      const datas = await res.json();
      console.log("User created:", datas);
      
    } catch (error) {
      console.log("Error signing in with Google:", error);
    }
  }

  const signInWithFacebook = async () => { 
    try {
      await signInWithPopup(auth, new FacebookAuthProvider());
    } catch (error) {
      console.log("Error signing in with Facebook:", error);
    }
  }

  return (
       <div className="md:w-1/2 max-w-[700px] text-lg ">
      <h1 className="text-2xl md:text-5xl font-medium text-gray-800 mb-11 font-poppins">Sign In</h1>

 <form onSubmit={handleSubmit} className="space-y-4">

  <div className="space-y-4">
    <label htmlFor="email" className="block text-gray-700 font-light mb-4">
      Email
      </label>
    <input
    type="email"
    id="email"
    value={email}
    className="shadow appearance-none border rounded w-full h-16 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter your email address"
    onChange = { e => setEmail(e.target.value)}
    />
    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
  <div>
  </div>
    <label htmlFor="password" className="block text-gray-700 font-light mb-4">
    Password
    </label>
    <div className="relative">
    <input
    type={showPass ? "text" :"password"}
    id="password"
    value={password}
    className="shadow appearance-none border rounded w-full h-16 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Password"
    onChange = { e => setPassword(e.target.value)}
    />
    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
  <div onClick={ () => setShowPass(!showPass)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer">
  {showPass ? <FaEye /> : <FaEyeSlash />}
  </div>
 </div>
    <div className='p-2 text-[#222F3E] text-end underline'>Forgot Password?</div>
 </div>


  <button
  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full h-16" type="submit"> Sign In </button>
 </form>


 <div className="relative my-4">
 <div className="absolute inset-0 flex items-center">
 <div className="w-full border-t border-gray-300"></div>
 </div>
 <div className="relative flex justify-center text-gray-500">
 <span className="bg-white px-2">OR</span>
 </div>
 </div>


 <div className="flex space-x-4">
 <button onClick={signInWithGoogle} className="hover:bg-gray-100 w-full h-16 flex items-center justify-center bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
 <Image src="/google-logo.webp" alt="Google Logo" width={24} height={24} className="mr-2" />
 Google
 </button>
 <button onClick={signInWithFacebook} className="hover:bg-gray-100 w-full h-16 flex items-center justify-center bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
 <Image src="/facebook-logo.webp" alt="Facebook Logo" width={24} height={24} className="mr-2" />
 Facebook
 </button>
 </div>


 <p className="text-center text-gray-500 mt-4">
 Don't have an account?{' '}
 <Link href="/signup" className="font-bold text-red-500 hover:underline">
 Create Now
 </Link>
 </p>
 </div>
  )
}
