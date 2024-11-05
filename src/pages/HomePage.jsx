import Header from "../components/Organisms/Header";
import Footer from "../components/Organisms/Footer";
import ProductCard from "../components/Molecules/ProductCard";
// import productsData from "./products.json"; // We are np longer using this file, This time we are plan to use API from Laravel ;
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ProductModal from "../components/Molecules/ProductModal";
import axios from "axios";

const HomePage = () => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [productsData, setProductsData] = useState([]); // Store fetched data

  // This is function for get all products data from 
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/product/all");
        setProductsData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  useEffect(() => {
    // If we need pass data, We should share the same token. So first we need to get this token from backend
    const getToken = async () => {
      axios
        .get("http://localhost:8000/token")
        .then((response) => {
          const csrfToken = response.data;
          console.log(csrfToken);
          axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
          axios.defaults.withCredentials = true; 
        })
        .catch((error) => {
          console.error("Error fetching CSRF token:", error);
        });
    };
    getToken(); // Call function inside the useEffect
    fetchData(); // Call the function inside useEffect
  }, []);

  //This function for open add product modal
  const handleAddProduct = () => {
    setCurrentProduct(null);
    setShowProductModal(true);
  };

  // This function for open edit product modal
  const handleEditProduct = async (product) => {
    try {
      setCurrentProduct(product);
      setShowProductModal(true);
      } catch (error) {
        console.error(error);
      }
  };

  // This function for add product to the database
  const addData = async (product) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/product/store",
        product,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Product added successfully:", response.data);
      fetchData();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // This function for update product
  const updateData = async (product) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/product/${product.id}`,
        product
      );
      console.log("Product updated successfully:", response.data);
      fetchData();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // This function for delete product from database
  const handleDeleteProduct = async (product) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/product/${product.id}`
      );
      console.log("Product deleted successfully:", response.data);
      fetchData();
    } catch (error) {
      console.error("Error deleted product:", error);
    }
  }

  // This function call when click on add / update button in modal
  const handleProductSubmit = (product) => {
    currentProduct ? updateData(product) : addData(product);
    setShowProductModal(false);
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
              <Button
                onClick={() => handleEditProduct(product)}
                className="mt-2"
              >
                Edit
              </Button>
              <Button 
                onClick={() => handleDeleteProduct(product)}
                className="mt-2 btn-danger"
              >
                Delete
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
