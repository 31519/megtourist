import React from "react";
import Head from "next/head";
import Image from "next/image";
import {Grid} from "@mui/material"
import styles from "../../../styles/packages.module.css";
// Component Import
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import DestinationComponent from "../../components/destinationComponent/DestinationComponent"
import Destination from "../../../data/destination";

function index() {
  return (
    <div>
      <Sidebar />
        <DestinationComponent datas={Destination}/>
      <Footer />
    </div>
  );
}

export default index;
