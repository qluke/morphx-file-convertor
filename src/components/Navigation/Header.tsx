import Link from "next/link";
import logo from "../../../public/Logo.svg";
import Image from "next/image";

function Header() {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full backdrop-blur-lg bg-gradient-to-r from-blue-500 via-green-500 to-teal-700 shadow-md">
      <div className="mx-auto w-full max-w-screen-lg px-2.5 md:px-4">
        <div className="md:px-10 px-2.5">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex z-40 font-semibold items-center gap-2"
            >
              <Image src={logo} alt="File Converter" height={28} width={28} />
              <div className="font-ibmPlexMono text-xl space-x-1">
                <span className="text-white text-2xl">Converter</span>
                <span className="bg-gradient-to-r from-teal-700 via-green-500 to-blue-500 bg-clip-text text-transparent text-2xl">
                  .
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
