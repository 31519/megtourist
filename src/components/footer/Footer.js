import React from "react";
import style from "./Footer.module.css";
import MediaIcon from "../mediaicon/MediaIcon";
import Link from "next/link";
import Image from "next/image";

const brand = [
  {
    logo: "/brand/crfeeds.png",
    title: "CRfeeds",
  },
  {
    logo: "/brand/pyrtajam.png",
    title: "Pyrtajam",
  },
];

function Footer() {
  return (
    <footer className={style.container}>
      {/* 1st div */}
      <div className={style.firstDiv}>
        <div className={style.imageDiv}>
          <Link className={style.link} href="/">
            <Image
              src="/megspot.png"
              alt="pyrtajam"
              layout="fill"
              className={style.image}
              width="100"
              height="40"
            />
          </Link>
        </div>
        <div>
          <MediaIcon />
        </div>
      </div>
      {/* 2nd div */}
      <div className={style.secondDiv}>
        {/* 1st */}
        <div className={style.secondContent1}>
          <div className={style.secondHeader}>
            <h2 className={style.secondHeaderText}>Links</h2>
          </div>
          <div className={style.secondListDiv}>
            <ul className={style.secondUl}>
              <Link
                className={style.link}
                href={`/destination`}
              >
                <li className={style.secondList}>Destination</li>
              </Link>
              <Link
                className={style.link}
                href={`/packages`}
              >
                <li className={style.secondList}>Packages</li>
              </Link>
              {/* <Link
                className={style.link}
                href={`/news/?category=Morty&keyword=`}
              >
                <li className={style.secondList}>Event</li>
              </Link>
              <Link
                className={style.link}
                href={`/news/?category=Morty&keyword=`}
              >
                <li className={style.secondList}>Education</li>
              </Link>
              <Link
                className={style.link}
                href={`/news/?category=Morty&keyword=`}
              >
                <li className={style.secondList}>Politics</li>
              </Link> */}
            </ul>
          </div>
        </div>
        {/* 2nd */}
        <div className={style.secondContent2}>
          <div className={style.secondHeader}>
            <h2 className={style.secondHeaderText}>Travel Theme</h2>
          </div>
          <div className={style.secondListDiv}>
            <ul className={style.secondUl}>
              <Link
                className={style.link}
                href={`/destination`}
              >
                <li className={style.secondList}>Trekking</li>
              </Link>
              <Link
                className={style.link}
                href={`/destination`}
              >
                <li className={style.secondList}>Caving</li>
              </Link>
              <Link
                className={style.link}
                href={`/destination`}
              >
                <li className={style.secondList}>Boating</li>
              </Link>
              <Link
                className={style.link}
                href={`/destination`}
              >
                <li className={style.secondList}>Sky diving</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* 3rd */}
        <div className={style.secondContent3}>
          <div className={style.secondHeader}>
            <h2 className={style.secondHeaderText}>About</h2>
          </div>
          <div className={style.secondListDiv}>
            <ul className={style.secondUl}>
              <Link className={style.link} href="/aboutus">
                <li className={style.secondList}>About Us</li>
              </Link>
              <Link className={style.link} href="/privacy">
                <li className={style.secondList}>Privacy Policy</li>
              </Link>
              <Link className={style.link} href="/termsandconditions">
                <li className={style.secondList}>Terms ans Conditions</li>
              </Link>
            </ul>
          </div>
          {/* end */}
        </div>
        <div className={style.brand}>
          <div className={style.secondHeader}>
            <h2 className={style.secondHeaderText}>Brand</h2>
          </div>
          <div className={style.logoContainer}>
            {brand.map((p) => (
              <div key={p.title} className={style.logoDiv}>
                <div className={style.logoImageDiv}>
                  <Image
                    src={p.logo}
                    alt={p.title}
                    layout="fill"
                    width="50"
                    height="50"
                  />
                </div>
                <span>
                  <p className={style.logoName}>{p.title}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 3rd div */}
      <div className={style.thirdDiv}>
        <div className={style.thirdContent1}>
          <p className={style.thirdContent1Text}>@copyright Pyrtajam</p>
        </div>
        <div className={style.thirdContent2}>
          <div className={style.thirdDiv2Div}>
            <p className={style.thirdDiv2Text}>DCMA</p>
          </div>
          <div className={style.thirdDiv2Div}>
            <p className={style.thirdDiv2Text}>REGOGNISE</p>
          </div>
          <div className={style.thirdDiv2Div}>
            <p className={style.thirdDiv2Text}>REJECTED</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
