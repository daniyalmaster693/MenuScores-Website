import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <img
                src="/logos/icon_256x256.png"
                alt="SuperCorners logo"
                className="w-10 h-10"
              />
              <Link href="/" className="text-med font-semibold text-black">
                <span>SuperCorners</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-5 lg:gap-10">
              <Link
                href="#features"
                className="text-sm font-normal text-gray-800"
              >
                Features
              </Link>
              <Link href="#faq" className="text-sm font-normal text-gray-800">
                FAQ
              </Link>
              <Link
                href="https://github.com/daniyalmaster693/SuperCorners/releases/download/1.3.0/SuperCorners.zip"
                className="text-sm font-normal text-gray-800"
              >
                Download
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <Link
              href="#download"
              className="text-sm font-normal text-gray-800"
            >
              Download
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
