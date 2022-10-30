import Head from "next/head";
import Image from "next/image";
import style from "../../styles/AboutUs.module.css";
import { Grid } from "@mui/material";
// Component Import
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Sidebar />

      <div spacing={2} className={style.gridContent} container>
        <Grid container className={style.titleContainer}>
          <Grid container className={style.gridDiv}>
            <Grid item sm={12} lg={6} xl={6} className={style.visionDiv}>
              <p className={style.vision}>Our Vision</p>
              <p className={style.heading1}>
                Helping You Explore The World...{" "}
              </p>
              <h1 className={style.heading2}>
                You don’t need to worry about anything, just tell us your
                requirements and we will get customized and the best packages
                for you!
              </h1>
            </Grid>

            <Grid item sm={12} lg={6} xl={6} className={style.visionDiv}>
              <div className={style.imgDiv}>
                <Image
                  src="/images/test2.jpg"
                  layout="fill"
                  alt=""
                  width="1000"
                  height="700"
                  className={style.image}
                />
              </div>
            </Grid>
          </Grid>
          <Grid container className={style.gridDiv}>
            <Grid item sm={12} lg={6} xl={6} className={style.storyDiv}>
              <p className={style.story}>Our Story</p>
              <p className={style.content}>
                We are a team of dedicated professionals and we firmly believe
                in providing sustainable tourism. We aim to provide new services
                with maximum perfection and consistency. We always prioritize
                customers’ satisfaction and do our best to achieve it. No
                matter, what type of vacation you need, we have a variety of
                packages to fulfill your requirements. Our holiday packages not
                only provide local sight-seeing but also adventure tourism.
              </p>
              <p className={style.content}>
                Our Story We are a team of dedicated professionals and we firmly
                believe in providing sustainable tourism. We aim to provide new
                services with maximum perfection and consistency. We always
                prioritize customers’ satisfaction and do our best to achieve
                it. No matter, what type of vacation you need, we have a variety
                of packages to fulfill your requirements. Our holiday packages
                not only provide local sight-seeing but also adventure tourism.
                We respect discipline and ensure the fixed departure. We make
                your vacations interesting and unforgettable by adding the taste
                of spicy adventures. We offer services such as Adventure Travel
                Packages, Motorbiking Tours, and Fixed Departure Tours at
                reasonable prices.
              </p>
            </Grid>
            <Grid item sm={12} lg={6} xl={6} className={style.storyDiv}>
              <div className={style.imgDiv}>
                <Image
                  src="/images/test3.jpg"
                  layout="fill"
                  alt=""
                  width="1000"
                  height="700"
                  className={style.image}
                />
              </div>
            </Grid>
          </Grid>
          <Grid container className={style.gridDiv}>
            <Grid item sm={12} lg={6} xl={6} className={style.founderDiv}>
              <p className={style.founder}>The Founder</p>
              <p className={style.founderName}>
                MeghalayaSpot is created by <span className={style.bold}>Cos Rumut </span>, <span className={style.bold}> Iaraplang Shylla </span> and <span className={style.bold}> Heibormi Lyngdoh</span>
              </p>
            </Grid>
            <Grid item sm={12} lg={6} xl={6} className={style.founderDiv2}>
              <div className={style.imgFounder}>
                <Image
                  src="/profile/profile1.jpg"
                  layout="fill"
                  alt=""
                  width="1000"
                  height="700"
                  className={style.founderimg}
                />
              </div>
              <div className={style.imgFounder}>
                <Image
                  src="/profile/profile2.png"
                  layout="fill"
                  alt=""
                  width="1000"
                  height="700"
                  className={style.founderimg}
                />
              </div>
              <div className={style.imgFounder}>
                <Image
                  src="/profile/profile3.png"
                  layout="fill"
                  alt=""
                  width="1000"
                  height="700"
                  className={style.founderimg}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
