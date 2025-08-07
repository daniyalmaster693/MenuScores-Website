import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-slate-50">
      <MaxWidthWrapper className="py-14 pb-10 flex flex-col items-center justify-center md:items-start md:justify-between md:flex-row">
        <div className="max-w-[16rem] flex flex-col space-y-1 items-center justify-center md:items-start md:justify-normal">
          <div className="flex items-center gap-1 -ml-1">
            <img
              src="/logos/icon_256x256.png"
              alt="MenuScores logo"
              className="w-10 h-10"
            />
            <Link href="/" className="text-med font-medium text-black">
              MenuScores
            </Link>
          </div>
          <p className="text-xs font-normal text-gray-800 whitespace-nowrap">
            © {new Date().getFullYear()} Daniyal Master. All rights reserved.
          </p>
        </div>

        <div className="flex flex-row gap-10 mt-20 md:mt-0">
          <div className="flex items-center md:items-start px-8 py-4">
            <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 text-gray-600 text-sm text-center md:text-left">
              <li>
                <Link
                  href="#features"
                  className="text-sm font-normal text-gray-800"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm font-normal text-gray-800">
                  FAQ
                </Link>
              </li>
              <li className="text-sm font-normal text-gray-800">
                <Link href="https://github.com/daniyalmaster693/MenuScores/releases/download/2.0.0/MenuScores.zip">
                  Download
                </Link>
              </li>
              <li className="text-sm font-normal text-gray-800">
                <Link href="https://github.com/daniyalmaster693/MenuScores">
                  Github
                </Link>
              </li>
              <li className="text-sm font-normal text-gray-800">
                <Link href="mailto:daniyalmaster693@gmail.com">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}

export default Footer;
