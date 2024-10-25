import Header from "../components/Organisms/Header";
import Footer from "../components/Organisms/Footer";
import ProductCard from "../components/Molecules/ProductCard";
import productsData from "./products.json";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ProductModal from "../components/Molecules/ProductModal";

const HomePage = () => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleAddProduct = () => {
    setCurrentProduct(null);
    setShowProductModal(true);
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setShowProductModal(true);
  };

  const handleProductSubmit = (productData) => {
    // Handle the submitted product data (e.g., send it to the backend)
    setShowProductModal(false);
    // Update the product list or perform other actions
  };

  return (
    <>
      <Header />
      <div className="mt-5">
        <Button onClick={handleAddProduct}>Add Product</Button>
        <ProductModal
          show={showProductModal}
          onHide={() => setShowProductModal(false)}
          onSubmit={handleProductSubmit}
          initialProduct={currentProduct}
        />
        <h1 className="text-center mt-4">All Products</h1>
        <div className="row mb-3">
          {productsData.map((product) => (
            <div className="col-md-3 mb-3" key={product.id}>
              <ProductCard product={product} />
              <Button onClick={() => handleEditProduct(product)} className="mt-2">
                Edit Product
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
