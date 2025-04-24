'use client';
import Image from "next/image";
import { useState } from "react";

export default function ChamliLanding() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A6E843] to-white flex flex-col items-center justify-center px-4 py-16 text-center font-[Poppins]">
      <div className="mb-10">
        <Image
          src="/images/chamli-hero.png"
          alt="Chamli the language chameleon"
          width={400}
          height={400}
          className="rounded-2xl shadow-xl"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-4">
        Meet <span className="text-[#3E714F]">Chamli</span>
      </h1>

      <p className="text-lg md:text-xl text-[#3E714F] max-w-xl mb-8">
        Your new multilingual travel buddy. Offline, helpful, and smarter than ever. Coming soon to your phone and pocket.
      </p>

      <div className="flex flex-col items-center mb-6">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 w-64 mb-2"
        />
        <button className="bg-[#3E714F] text-white px-6 py-2 rounded-lg hover:bg-[#305c3f]">
          Notify Me
        </button>
      </div>

      <div className="flex gap-4 text-xl text-[#1D1D1D]">
        <a href="#" aria-label="Twitter">🐦</a>
        <a href="#" aria-label="Instagram">📸</a>
        <a href="#" aria-label="TikTok">🎵</a>
      </div>

      <div className="mt-10 text-sm text-gray-700">
        ✨ Something beautiful is on its way. Stay tuned!
      </div>
    </div>
  );
}