"use client";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

function HeroSection() {
  return (
    <section className="bg-slate-50">
      <MaxWidthWrapper className="pt-24 pb-20 px-4">
        <div className="flex flex-col gap-10 items-center">
          <div className="col-span-1 px-2 lg:px-0">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center">
              <h1 className="relative w-fit tracking-tighter text-balance font-bold !leading-tight text-gray-900 text-5xl -mt-5 md:text-6xl mb-4">
                Live Scores - Right From Your Notch
              </h1>

              <video
                src="/screen recordings/MenuScores Notch Demo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="mt-10 mb-3 rounded-[2.5rem] max-w-full w-[530px] lg:w-[800px] mx-auto"
              />

              <div className="flex flex-col items-center text-center">
                <Link
                  href="https://github.com/daniyalmaster693/MenuScores/releases/download/2.0.0/MenuScores.zip"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "flex items-center justify-center mt-8 group rounded-[8px] px-6 py-1"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                    >
                      <path
                        fill="#F8FAFD"
                        d="M12.665 15.358c-.905.844-1.893.711-2.843.311-1.006-.409-1.93-.427-2.991 0-1.33.551-2.03.391-2.825-.31C-.498 10.886.166 4.078 5.28 3.83c1.246.062 2.114.657 2.843.71 1.09-.213 2.133-.826 3.296-.746 1.393.107 2.446.64 3.138 1.6-2.88 1.662-2.197 5.315.443 6.337-.526 1.333-1.21 2.657-2.345 3.635zM8.03 3.778C7.892 1.794 9.563.16 11.483 0c.268 2.293-2.16 4-3.452 3.777"
                      ></path>
                    </svg>
                    Download for Mac
                  </span>
                </Link>
                <div className="flex">
                  <p className="text-sm text-gray-600 pt-3 mx-auto">
                    macOS 13+ |{" "}
                    <a
                      href="#"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `brew tap daniyalmaster693/casks
brew install --cask supercorners`
                        );
                        alert(
                          "Copied SuperCorners Installation Command to Clipboard!"
                        );
                      }}
                    >
                      Install via Homebrew
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default HeroSection;
