import React from "react";
import Error from "../components/error/Error";
// import MetaScreen from "../components/metatags/MetaScreen";

// COMPONENTS IMPORT
import Sidebar from "../components/sidebar/Sidebar";



function ErrorPage() {
  return (
    <>
      {/* <MetaScreen
        pageTitle="Pyrtajam -- Page Not Found"
        description="Page Not Found"
        previewImage="/Pyrtajam.png"
        siteName="www.pyrtajam.com"
        currentURL="404"
        twitterHandle="Pyrtajam"
      /> */}
      <Sidebar />
      <div>
        <Error />
      </div>

    </>
  );
}

export default ErrorPage;
