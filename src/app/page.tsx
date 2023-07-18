"use client";
import Offer from "./components/offer";
import Calculator from "./components/calculator";
import Link from "next/link";
import Finder from "./components/finder";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col max-w-screen">
      <div
        className="w-full h-screen flex flex-col items-center justify-center text-center"
        style={{ position: "relative" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            opacity: 0.8,
          }}
        >
          <source src="/video/waves.mp4" type="video/mp4" />
        </video>
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
