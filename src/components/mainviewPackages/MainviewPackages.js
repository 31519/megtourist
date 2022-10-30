import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./MainviewPackages.module.css";
import { Grid } from "@mui/material";

function MainviewPackages({ datas }) {
  return (
    <>
      <Grid container className={styles.container}>
        <div className={styles.headerDiv}>
          <p className={styles.header}> Popular Packages</p>
        </div>
        {datas &&
          datas.map((data) => (
            <Grid
              item
              xl={3}
              lg={3}
              md={4}
              sm={12}
              key={data.id}
              className={styles.content}
            >
              <Link href="/" className={styles.link} key={data.id}>
                <div className={styles.Div}>
                  <div className={styles.imgDiv}>
                    <Image
                      src={data.image}
                      layout="fill"
                      alt=""
                      width="1000"
                      height="700"
                      className={styles.image}
                    />
                    <div className={styles.duration}>
                      <p className={styles.durationText}>{data.duration}</p>
                    </div>
                  </div>
                  <div className={styles.titleDiv}>
                    <p className={styles.title}>{data.title}</p>
                  </div>
                  <div className={styles.detailDiv}>
                    <div className={styles.text1}>
                      <button className={styles.text1Button}>Call Now</button>
                    </div>
                    <div className={styles.price}>
                      <p className={styles.price1}>Price</p>
                      <p className={styles.price2}>₹{data.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default MainviewPackages;
