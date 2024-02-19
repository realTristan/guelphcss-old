"use client";

import dynamic from "next/dynamic";
import lottieAnimationData from "@/assets/lottie/hero-lottie.json";
import Navbar from "@/components/Navbar";
import config from "@/lib/config/default.config";
import Link from "next/link";

const LottiePlayer = dynamic(() => import("lottie-react").then((mod) => mod), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative flex min-h-screen w-screen flex-row items-start justify-between px-7 pt-36 sm:px-14 xl:px-20">
        <div className="relative flex w-full flex-col gap-2 rounded-lg bg-white/90 p-10 backdrop-blur-md lg:w-[35rem] xl:w-[40rem] xl:bg-transparent xl:backdrop-blur-none">
          {/**
           * Background blur
           */}
          <div className="absolute left-0 top-0 z-0 h-full w-full rounded-xl bg-white/50 blur-xl xl:bg-transparent"></div>

          {/**
           * Main content
           */}
          <h1 className="z-10 line-clamp-6 text-5xl font-bold leading-[3.3rem] text-slate-950 md:text-6xl xl:text-7xl">
            Stay <mark className="bg-blue-600 text-white">up to date</mark>{" "}
          </h1>
          <h1 className="z-10 line-clamp-6 text-5xl font-bold leading-[3.3rem] text-slate-950 md:text-6xl xl:text-7xl">
            with cyber security at UofG!
          </h1>
          <p className="z-10 mt-3 w-3/4 text-sm font-normal tracking-wide text-slate-500">
            The Guelph Cyber Security Society is a student-run club dedicated to
            providing students with the resources and opportunities to learn
            about cyber security. We host workshops, support projects, and
            provide a community for students interested in cyber security.
          </p>

          {/**
           * CTA buttons
           */}
          <div className="z-10 mt-7 flex flex-row gap-4">
            <Link
              href="/learn-more"
              className="rounded-lg bg-blue-600 px-7 py-4 text-center text-sm font-normal tracking-wide text-white duration-300 ease-in-out hover:px-14"
            >
              Learn More
            </Link>
            <a
              href={config.discordUrl}
              className="rounded-lg bg-slate-900 px-7 py-4 text-center text-sm font-normal tracking-wide text-white duration-300 ease-in-out hover:px-14"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/**
         * Lottie animation
         */}
        <LottiePlayer
          animationData={lottieAnimationData}
          className="fixed top-20 -z-10 h-[50rem] w-[50rem] scale-110 md:-right-16"
          loop={true}
        />
      </main>
    </>
  );
}
