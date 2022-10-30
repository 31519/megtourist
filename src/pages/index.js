import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// Component Import
import datas from  "../../data/packages"
import Destination from "../../data/destination"
import Sidebar from "../components/sidebar/Sidebar"
import Footer from "../components/footer/Footer"
import MainviewDestination from '../components/mainviewDestination/MainviewDestination'
import MainviewPackages from '../components/mainviewPackages/MainviewPackages'

export default function Home() {
  return (
    <div>
    <Sidebar/>
    <MainviewPackages datas={datas.slice(0, 6)}/>
    <MainviewDestination datas={Destination.slice(0,6)}/>
    <Footer/>

    </div>
  )
}
