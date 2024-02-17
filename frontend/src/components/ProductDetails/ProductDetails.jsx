import Breadcrumb from "./Breadcrumb/Breadcrumb";
import Gallery from "./Gallery/Gallery";
import Info from "./Info/Info";
import "./ProductDetails.css";
import Tabs from "./Tabs/Tabs";

const ProductDetails = () => {
  return (
    <section className="product-details">
      <Breadcrumb />    
      <div className="single-content">
        <main className="site-main">
          <Gallery />
          <Info />           
        </main>
      </div>
      <Tabs />
    </section>
  );
};

export default ProductDetails;
