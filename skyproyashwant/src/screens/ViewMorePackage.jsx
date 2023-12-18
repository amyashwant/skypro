import React from 'react'
import Header from '../common/header/Header'
import ViewMoreSection from '../components/packagePageComponents/ViewMoreSection'
import FooterContact from '../common/footerContact/FooterContact'
import Footer from '../common/footer/Footer'
import contactImg from "../assets/images/breadcumb/contact-backup.webp";
import BeadCumbCommon from '../common/beadcumbCommon/BeadCumbCommon'
import BreadCumb from '../components/packagesComponents/breadCumb/BreadCumb'

const ViewMorePackage = () => {
  return (
    <div>
        <Header/>
        <BreadCumb/>
        <ViewMoreSection/>
        <FooterContact/>
        <Footer/>
    </div>
  )
}

export default ViewMorePackage