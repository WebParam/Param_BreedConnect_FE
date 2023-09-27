import { useRef, useState, useEffect } from "react";
import './stylesheets/tabs.css'
import Advanced from "../../../Tinder/advanced";
import { GetCustomerProducts } from "../../../../api/endpoints";

export default function SwipesTinderTab() {

    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const fetchProducts = async () => {
      try {
        const response = await GetCustomerProducts();
        const data = await response.data.filter(x => x.status === 0);
        setProducts(data);
        console.log("products by customer after", data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    useEffect(() => {
        // const fetchProducts = async () => {
        //   try {
        //     const response = await GetCustomerProducts();
        //     const data = await response.data.filter(x => x.status === 0);
        //     setProducts(data);
        //     console.log("products by customer after", data);
        //     setLoading(false);
        //   } catch (error) {
        //     console.error('Error fetching data:', error);
        //   }
        // };
        fetchProducts();
      }, []);


      if (isLoading) {
        return (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}>Loading the data {console.log("loading state")}</div>
      );
      }
      

  return (
    <>
      <div className="relative w-full sm:rounded-lg orders">
        <h2>Swipes</h2>
        <Advanced products={products} onClick={fetchProducts}/> 
      </div>
    </>
  );
}
