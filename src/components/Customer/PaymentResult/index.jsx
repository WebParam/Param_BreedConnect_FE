import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from 'react-router-dom';
import "react-input-range/lib/css/index.css";
import productDatas from "../../../data/products.json";
import BreadcrumbCom from "../../BreadcrumbCom";
import ProductCardStyleOne from "../../Helpers/Cards/ProductCardStyleOne";
import DataIteration from "../../Helpers/DataIteration";
import Layout from "../../Partials/Layout";
import ProductsFilter from "./ProductsFilter";
import { verifyPayment } from "../../../api/endpoints";
import { ToastContainer, toast } from 'react-toastify';

import './payment.css';
export default function PaymentResult() {
  const navigate = useNavigate();

  const [filters, setFilter] = useState({
    mobileLaptop: false,
    gaming: false,
    imageVideo: false,
    vehicles: false,
    furnitures: false,
    sport: false,
    foodDrinks: false,
    fashion: false,
    toilet: false,
    makeupCorner: false,
    babyItem: false,
    apple: false,
    samsung: false,
    walton: false,
    oneplus: false,
    vivo: false,
    oppo: false,
    xiomi: false,
    others: false,
    sizeS: false,
    sizeM: false,
    sizeL: false,
    sizeXL: false,
    sizeXXL: false,
    sizeFit: false,
  });

  const [status, setStatus] = useState('Redirecting to home in few seconds...');

  const [searchParams] = useSearchParams();


  const checkboxHandler = (e) => {
    const { name } = e.target;
    setFilter((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  const [volume, setVolume] = useState({ min: 200, max: 500 });

  const [storage, setStorage] = useState(null);
  const filterStorage = (value) => {
    setStorage(value);
  };
  const [filterToggle, setToggle] = useState(false);

 // const { products } = productDatas;


  
  useEffect(() => {
    Init()
  }, [])
  


  async function Init(event){
    var ref = searchParams.get("trxref");
    var reference = searchParams.get("reference");
    var res = await verifyPayment(ref,reference);

    setTimeout(() => {
      navigate('/profile');
    }, 8000)
  
  }


  return (
    <>
              <div className="flex-1">
                <div className="payment-success-card">
                      <div className="icon">&#10004;</div>
                      <h2>Payment Successful</h2>
                      <p>Your payment has been successfully processed.</p>
                      <button className="button">{status}</button>
                    </div>
              </div>
    </>
  );
}
