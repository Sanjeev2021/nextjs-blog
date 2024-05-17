'use client';
import Link from "next/link";
import { useState } from "react"; 

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[url('/background-main.jpg')] bg-cover bg-no-repeat bg-center h-screen w-screen">
      <nav className="fixed z-10 flex justify-center items-center h-[80px] w-full">
        <div className="w-[90%] flex justify-between h-full items-center">
          <div className="text-[24px] font-bold text-brand">Sanjeev</div>
          <div className="text-brand hidden items-center md:flex">
            <ul className="flex">
              <li className="mx-4 transition opacity-75 hover:opacity-100 duration-300 ease-in-out hover:font-bold"><Link href="/home">Home</Link></li>
              <li className="mx-4 transition opacity-75 hover:opacity-100 duration-300 ease-in-out hover:font-bold"><Link href="/about">About</Link></li>
              <li className="mx-4 font-medium hover:font-bold transition duration-300 ease-in-out"><Link href="/signup">Sign Up</Link></li>
            </ul>
            <Link href="/login"><div className="h-[50px] transition duration-300 ease-in-out hover:shadow-[0_0_30px_0_#9DF28A] shadow-[0_0_5px_0_#9DF28A] font-bold w-[120px] rounded-[30px] border-4 border-[#9DF28A] flex justify-center items-center">Login</div></Link>
          </div>
          <div className={`text-brand flex md:hidden flex-col h-[60%] w-[50px] items-center ${menuOpen ? "justify-center" : "justify-evenly"}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`bg-[#9DF28A] h-[5px] w-[30px] rounded-[10px] ${menuOpen ? 'hidden' : "block"}`}></div>
            <div className={`bg-[#9DF28A] h-[5px] w-[30px] rounded-[10px] ${menuOpen ? 'hidden' : "block"}`}></div>
            <div className={`bg-[#9DF28A] h-[5px] w-[30px] rounded-[10px] ${menuOpen ? 'hidden' : "block"}`}></div>
            <div className={`bg-[#9DF28A] h-[5px] w-[35px] -m-[5px] p-0 rounded-[10px] rotate-45 ${menuOpen ? "block" : "hidden"}`}></div>
            <div className={`bg-[#9DF28A] h-[5px] w-[35px] m-0 p-0 rounded-[10px] -rotate-45 ${menuOpen ? "block" : "hidden"}`}></div>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center h-full w-full">
        <div className="md:h-[50%] md:w-[60%] m-0 h-full w-full bg-[#D9D9D9] bg-opacity-20 md:hover:scale-110 md:bg-opacity-15 hover:bg-opacity-20 transition duration-800 ease-in-out md:hover:rounded-[10px] md:rounded-[20px] rounded-none backdrop-blur-md flex flex-col items-center justify-center p-[20px] px-[50px]">
          <div className={`text-brand md:h-[100px] h-[150px] text-[24px] text-center font-bold items-center justify-center ${menuOpen ? "hidden" : "flex"}`}>
            Journey Through My Life: Personal Insights & Reflections
          </div>
          <div className={`text-brand opacity-75 text-[16px] text-center m-0 md:h-[100px] h-[150px] justify-center items-center ${menuOpen ? "hidden" : "flex"}`}>Step into the intimate realm of my life as I invite you to accompany me on a journey filled with personal insights, profound reflections, and heartfelt stories.</div>
          <div className={`md:h-[100px] m-0 h-[100px] flex justify-center items-center ${menuOpen ? "hidden" : "flex"}`}>
            <Link href='/login'><div className="h-[60px] w-[150px] bg-black hover:shadow-[0_0_30px_0_#9DF28A] shadow-[0_0_5px_0_#9DF28A] transition duration-300 ease-in-out font-bold rounded-[30px] text-white border-4 border-[#9DF28A] flex justify-center items-center">Login</div></Link>
          </div>

          <ul className={`h-full w-full justify-center items-center flex-col text-brand ${menuOpen ? "flex" : "hidden"}`}>
            <li className="mx-4 my-4 transition hover:opacity-100 duration-300 ease-in-out hover:font-bold"><Link href="/home">Home</Link></li>
            <li className="mx-4 my-4 transition hover:opacity-100 duration-300 ease-in-out hover:font-bold"><Link href="/about">About</Link></li>
            <li className="mx-4 my-4 font-medium transition duration-300 ease-in-out"><Link href="/signup">Sign Up</Link></li>
            <li className="mx-4 my-4 font-extrabold transition duration-300 ease-in-out"><Link href="/signup">Login</Link></li>
          </ul>

        </div>
      </div>
    </div>
  );
}
