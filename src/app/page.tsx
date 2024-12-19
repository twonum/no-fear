// @ts-nocheck
"use client";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen mt-16 bg-transparent">
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <header className="flex flex-col items-center space-y-6 pt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Welcome to AI Vision
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl text-center">
            Experience the ultimate power of AI-driven real-time object
            detection and analytics.
          </p>
        </header>

        <main className="flex flex-col items-center mt-12">
          <div className="flex flex-col items-center gap-8">
            <a
              href="/SurveillanceConsole"
              className="text-center w-72 px-8 py-4 text-xl font-semibold text-white bg-transparent border border-white rounded-full hover:bg-white hover:text-black transition-all hover:shadow-xl hover:shadow-white"
            >
              Surveillance Console
            </a>
            <a
              href="/about"
              className="text-center w-72 px-8 py-4 text-xl font-semibold text-white bg-transparent border border-white rounded-full hover:bg-white hover:text-black transition-all hover:shadow-xl hover:shadow-white"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-center w-72 px-8 py-4 text-xl font-semibold text-white bg-transparent border border-white rounded-full hover:bg-white hover:text-black transition-all hover:shadow-xl hover:shadow-white"
            >
              Contact Us
            </a>
          </div>

          <section className="mt-16 px-8 max-w-4xl text-center text-gray-300 leading-relaxed space-y-6">
            <h2 className="text-2xl font-bold text-gray-100">
              Why Choose AI Vision?
            </h2>
            <p>
              AI Vision is a cutting-edge platform that revolutionizes real-time
              surveillance with advanced AI-powered object detection. Our tools
              are designed to bring efficiency, accuracy, and seamless
              integration into your workflow.
            </p>
            <p>
              Whether you&apos;re enhancing security, streamlining operations,
              or diving into AI analytics, AI Vision is your ultimate solution.
              Take the next step and explore our innovative features.
            </p>
          </section>
        </main>

        <footer className="flex flex-col items-center mt-16 pb-8 space-y-6 text-gray-400">
          <div className="flex gap-6">
            <a
              href="https://skycarly.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/spotify.svg"
                alt="SkyCarly"
                width={32}
                height={32}
                className="hover:opacity-80 transition-all duration-300 transform hover:scale-110"
              />
            </a>
            <a
              href="https://github.com/twonum/Project-Submission"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.svg"
                alt="GitHub"
                width={32}
                height={32}
                className="hover:opacity-80 transition-all duration-300 transform hover:scale-110"
              />
            </a>
            <a
              href="https://linkedin.com/in/taha-saleem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={32}
                height={32}
                className="hover:opacity-80 transition-all duration-300 transform hover:scale-110"
              />
            </a>
          </div>

          <p className="text-sm">&copy; 2024 AI Vision. All rights reserved.</p>
          <a href="/terms" className="text-sm hover:underline">
            Terms and Conditions
          </a>

          {/* Enhanced Design Credit with Sleek Monochromatic High-Contrast Look */}
          <div className="text-center mt-6 text-lg font-semibold">
            <p className="design-credit text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 text-2xl">
              Designed by{" "}
              <span className="designer-name">Muhammad Taha Saleem</span>
            </p>
          </div>

          {/* Enhanced Animations and Effects */}
          <style jsx>{`
            .design-credit {
              font-size: 1.8rem;
              font-weight: bold;
              text-transform: uppercase;
              letter-spacing: 2px;
              transition: transform 0.3s ease, text-shadow 0.3s ease,
                color 0.5s ease;
              position: relative;
              text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
            }

            .design-credit:hover {
              color: #f0f0f0;
              text-shadow: 0 0 25px rgba(255, 255, 255, 0.7),
                0 0 35px rgba(255, 255, 255, 0.9);
              transform: scale(1.15);
            }

            .designer-name {
              position: relative;
              display: inline-block;
              font-size: 2rem;
              animation: pulse 1.5s infinite ease-in-out;
            }

            .designer-name::after {
              content: "";
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              height: 2px;
              background: linear-gradient(to right, #f0f0f0, #d0d0d0);
              transform: scaleX(0);
              transform-origin: bottom right;
              transition: transform 0.3s ease-out;
            }

            .designer-name:hover::after {
              transform: scaleX(1);
              transform-origin: bottom left;
            }

            .designer-name:hover {
              color: #f0f0f0;
              text-shadow: 0 0 15px rgba(255, 255, 255, 0.9);
            }

            /* Pulse Animation */
            @keyframes pulse {
              0% {
                transform: scale(1);
                opacity: 1;
              }
              50% {
                transform: scale(1.1);
                opacity: 0.75;
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
            }
          `}</style>
        </footer>
      </SignedIn>
    </div>
  );
}
