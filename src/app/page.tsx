"use client";
import Offer from "./components/offer";
import Calculator from "./components/calculator";
import Link from "next/link";
import Finder from "./components/finder";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <div className="w-full h-screen flex flex-col items-center justify-center text-center">
        <p className="text-black text-3xl lg:text-5xl">Welcome to</p>
        <h1 className="text-[#FB8500] text-5xl lg:text-7xl font-extrabold">
          Comfort Calorie
        </h1>
        <p className="text-black text-xl lg:text-2xl mt-8 italic">
          Achieve your fitness goals.
        </p>

        <Link href="/#offer">
          <button className="mt-8 bg-[#FB8500] hover:bg-[#E07701] text-white font-extrabold text-2xl py-3 px-5 border-2 border-black rounded-md">
            Get Started
          </button>
        </Link>
      </div>

      <Offer />
      <Calculator />
      <Finder />
    </section>
  );
}
