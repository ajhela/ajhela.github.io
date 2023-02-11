import React from "react";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";

const Hero = ({ heading, message, block }) => {
  return (
    <div
      className="hero min-h-screen bg-fixed"
      // mb-12
      style={{ backgroundImage: `url("https://picsum.photos/2000/2000")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        {/* or accent-content replacing text-neutral-content */}
        <div className="max-w-md justify-center">
          <h1 className="mb-10 text-7xl font-bold">{heading}</h1>
          <p className="mb-10 text-3xl">{message}</p>
          <div className="btm-nav btm-nav-xs bg-transparent bottom-4 absolute">
            <Link href="#about" scroll={false}>
              {/* <button className="btn btn-neutral lowercase">{block}</button> */}
              {/* <GoChevronDown size={20}></GoChevronDown> */}
              <GoChevronDown></GoChevronDown>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
