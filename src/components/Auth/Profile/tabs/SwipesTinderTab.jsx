import { useRef, useState, useEffect } from "react";
import './stylesheets/tabs.css'
import Advanced from "../../../Tinder/advanced";
import { GetCustomerProducts } from "../../../../api/endpoints";

export default function SwipesTinderTab() {

    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await GetCustomerProducts();
            const data = await response.data;
            setProducts(data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
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
      <div className="relative w-full overflow-x-auto sm:rounded-lg orders">
        <h2>Swipes</h2>
        <Advanced products={products}/>
      </div>
    </>
  );
}
