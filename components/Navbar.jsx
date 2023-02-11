import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Hero from "./Hero";

const Navbar = () => {
  // const [color, setColor] = useState("bg-transparent");
  // const [opacity, setOpacity] = useState("bg-opacity-0");
  const [blur, setBlur] = useState(" ");
  // const [shadow, setShadow] = useState(" ");

  // const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        // setColor("bg-neutral");
        // setTextColor("black");
        // setOpacity("bg-opacity-80");

        setBlur("backdrop-blur");
        // setShadow("shadown-sm");
      } else {
        // setColor("bg-transparent");
        // setTextColor("white");

        // setOpacity("bg-opacity-0");
        setBlur(" ");
        // setShadow(" ");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    // <div className="drawer">
    //   <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content flex flex-col">
    //     {/* <!-- Navbar --> */}
    //     <div className={`w-full navbar fixed z-30 duration-100 `}>
    //       {/* ${blur} */}
    //       {/* bg-base-300 */}

    //       <div className="flex-1 px-2 mx-2 text-xl">
    //         <Link href="/">ajhel</Link>
    //       </div>
    //       <div className="flex-none sm:hidden">
    //         <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             className="inline-block w-6 h-6 stroke-current"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h16M4 18h16"
    //             ></path>
    //           </svg>
    //         </label>
    //       </div>

    //       <div className="flex-none hidden sm:block">
    //         <ul className="menu menu-horizontal lowercase">
    //           {/* <!-- Navbar menu content here --> */}
    //           <li>
    //             {/*
    //             <a>Navbar Item 1</a> */}
    //             <Link href="#about" scroll={false}>
    //               About me
    //             </Link>
    //           </li>
    //           <li>
    //             {/* <a>Navbar Item 2</a> */}
    //             <Link href="#projects" scroll={false}>
    //               Projects
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#contact" scroll={false}>
    //               Contact
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     {/* <!-- Page content here --> */}
    //     {/* Content */}
    //     {/* <Hero /> */}
    //     <Hero heading="hi, im ajhel" message=":)" block="About me" />
    //   </div>
    //   <div className="drawer-side">
    //     <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
    //     <ul className="menu p-4 w-80 bg-base-100 lowercase">
    //       {/* <!-- Sidebar content here --> */}
    //       <li>
    //         <Link href="#about" scroll={false}>
    //           About me
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="#projects" scroll={false}>
    //           Projects
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="#contact" scroll={false}>
    //           Contact
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    ////////////////////////////////
    // <div className="drawer">
    //   <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content flex flex-col">
    //     {/* <!-- Navbar --> */}
    //     <div className="w-full navbar bg-base-300">
    //       <div className="flex-1 px-2 mx-2">dsd Title</div>
    //       <div className="flex-none sm:hidden">
    //         <label htmlFor="my-drawer-π3" className="btn btn-square btn-ghost">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             className="inline-block w-6 h-6 stroke-current"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h16M4 18h16"
    //             ></path>
    //           </svg>
    //         </label>
    //       </div>
    //       <div className="flex-none hidden sm:block">
    //         <ul className="menu menu-horizontal">
    //           {/* <!-- Navbar menu content here --> */}
    //           <li>
    //             <a>Navbar Item 1</a>
    //           </li>
    //           <li>
    //             <a>Navbar Item 2</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     {/* <!-- Page content here --> */}
    //     {/* <Hero /> */}
    //   </div>
    //   <div className="drawer-side">
    //     <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
    //     <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
    //       {/* <!-- Sidebar content here --> */}
    //       <li>
    //         <a>Sidebar Item 1</a>
    //       </li>
    //       <li>
    //         <a>Sidebar Item 2</a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>

    ///////////////////////////////////////////////////////////////////////
    <div className={`navbar fixed z-30 duration-500 `}>
      {/* ${blur} */}
      <div className="navbar-start">
        <Link href="/">
          <a className="ml-8 btn btn-ghost normal-case text-xl">ajhel</a>
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden sm:flex">
          <ul className="menu menu-horizontal p-0 lowercase">
            <li>
              <Link href="#about" scroll={false}>
                About me
              </Link>
            </li>
            <li>
              <Link href="#projects" scroll={false}>
                Projects
              </Link>
            </li>
            {/* <li>
              <Link href="#contact" scroll={false}>
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="mr-8 dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost sm:hidden">
            <AiOutlineMenu size={20}></AiOutlineMenu>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 lowercase"
          >
            <li>
              <Link href="#about" scroll={false}>
                About me
              </Link>
            </li>
            <li>
              <Link href="#projects" scroll={false}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" scroll={false}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
