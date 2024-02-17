
import Footer from "../../../components/Layout/Footer/Footer";
import Header from "../../../components/Layout/Header/Header";
import Proptypes from "prop-types";
import { useState } from "react";
import Search from "../../Modals/Search/Search";

const MainLayout = ({ children }) => {
    const [isSearchShow, setIsSearchShow] = useState(false);
  
    return (
      <div className="main-layout">
        <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
        <Header setIsSearchShow={setIsSearchShow} />
        {children}
        <Footer />
      </div>
    );
  };

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};