import Link from "next/link";
import logo from "../../../public/Logo.svg";
import Image from "next/image";

function Header() {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full backdrop-blur-lg bg-black shadow-md">
      <div className="mx-auto w-full max-w-screen-lg px-2.5 md:px-4">
        <div className="md:px-10 px-2.5">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex z-40 font-semibold items-center gap-2"
            >
              <Image src={logo} alt="File Converter" height={28} width={28} />
              <div className="font-ibmPlexMono text-xl space-x-1">
                {/* <span className="text-black font-bold text-2xl">File Converter</span> */}
                <h1 className="text-2xl font-bold tracking-wide text-white">
                 Verter
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
