import React, { useState, useEffect } from "react";
import style from "./Sidebar.module.css";

import Link from "next/link";
import SearchBox from "../searchbox/SearchBox";
import Image from "next/image";

const sidebarLink = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Packages",
    link: "/packages",
  },
  {
    title: "Destination",
    link: "/destination",
  },

  {
    title: "Admit card",
    link: "/jobs/?category=Admit card&keyword=",
  },
  {
    title: "About Us",
    link: "/aboutus",
  },
  {
    title: "Privacy Policy",
    link: "/privacy",
  },
  {
    title: "Terms and Conditions",
    link: "/termsandconditions",
  },
];

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const [dateState, setDateState] = useState(new Date());

  const openSidebarHandler = () => {
    // const open = document.querySelector(".sidebarContainer");
    // open.style.left = "0px";
    setSidebar(!sidebar);
  };

  const linkClickHandler = () => {
    // const open = document.querySelector(".sidebarContainer");
    // open.style.left = "0px";
    setSidebar(!sidebar);
  };

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <header>
      <div className={style.container}>
        <div className={style.dateDiv}>
          <Link href="/" className={style.linkLogo}>
            <div className={style.imageDiv}>
              <Image
                src="/megspot.png"
                alt="pyrtajam"
                width="1000"
                // layout="fill"
                height="400"
                className={style.image1}
              />
            </div>
          </Link>
          {/* <p className={style.dateText}>
              {""}
              {dateState.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p> */}
          {/* <p className={style.dateText}>
              {""}
              {dateState.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: "true",
              })}
            </p> */}
        </div>
        <div className={style.listDiv}>
          <ul className={style.ulDiv}>
            <li className={style.list}>
              <Link href="/">
                <h1 className={style.link}>Home</h1>
              </Link>
            </li>
            <li className={style.list}>
              <Link href="/destination">
                <h1 className={style.link}>Destinations</h1>
              </Link>
            </li>
            <li className={style.list}>
              <Link href="/packages">
                <h1 className={style.link}>Packages</h1>
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.iconDiv}>
          <div className={style.searchDiv}>
            {sidebar === false ? (
              <div>
                <SearchBox />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={style.hamburgerDiv} onClick={openSidebarHandler}>
            <div className={style.hamDiv}>
              <div
                className={sidebar === false ? style.ham1 : style.hamclose1}
              ></div>
              <div
                className={sidebar === false ? style.ham2 : style.hamclose2}
              ></div>
              <div
                className={sidebar === false ? style.ham3 : style.hamclose3}
              ></div>
            </div>
          </div>
          {/*  <MenuIcon /> */}
          {/* Side bar */}

          <div
            className={
              sidebar === true ? style.sidebarContainer : style.sidebarClose
            }
            onClick={linkClickHandler}
          >
            {/* <div className={style.sidebarContainer}> */}
            {/* Only the list in the sidebar view */}
            <div className={style.sidebarDiv}>
              {/* <MediaIcon /> */}
              <ul className={style.sidebarUl}>
              <div className={style.imageDiv}>
                <Image
                  src="/megspot.png"
                  alt="pyrtajam"
                  width="300"
                  // layout="fill"
                  height="120"
                  className={style.image}
                />
              </div>
                {sidebarLink.map((sidebar) => (
                  <Link key={sidebar.title} href={sidebar.link}>
                    <li className={style.sidebarlist}>
                      <p className={style.sidebarlink}>{sidebar.title}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            {/* End of sidebar list */}
            {/* <div className={style.closeDiv} onClick={openSidebarHandler}>
              <CloseIcon />
            </div> */}
          </div>
        </div>
      </div>
      <div className={style.hight}></div>
    </header>
  );
};

export default Sidebar;
