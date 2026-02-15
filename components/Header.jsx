import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* {logo} */}
          <Link href={"/"} className="flex items-center">
            <Image
              src="/spott.png"
              alt="Spott logo"
              height={500}
              width={500}
              className="w-full h-11"
              priority
            />
          </Link>
          {/* {Desktop search bar} */}
          {/* {Right side actions} */}
        </div>
        {/* {Mobile search bar} */}
      </nav>
    </>
  );
};

export default Header;
