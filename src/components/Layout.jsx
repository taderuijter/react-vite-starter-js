import React from "react";
import PropTypes from "prop-types";

// import components
import Navbar from "@/components/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
