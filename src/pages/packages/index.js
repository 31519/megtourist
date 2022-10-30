import React from "react";
import Head from "next/head";
import Image from "next/image";
import {Grid} from "@mui/material"
import styles from "../../../styles/packages.module.css";
// Component Import
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import PackagesComponent from "../../components/packagesComponent/PackagesComponent"
import datas from "../../../data/packages";

function index() {
  return (
    <div>
      <Sidebar />
        <PackagesComponent datas={datas}/>
      <Footer />
    </div>
  );
}

export default index;
