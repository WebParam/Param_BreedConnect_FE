import { useRef, useState, useEffect } from "react";
import { AllProducts, getBreederProducts } from '../../../api/endpoints';

import { ToastContainer, toast } from 'react-toastify';

export default function ProductsTab() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  
  useEffect(() => {
   
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const _id = toast.loading("Please wait...", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  
      
      const response = await getBreederProducts();
      const data = await response.data;
      setProducts(data);
      setFilteredProducts(data);
      console.log("products", data);
      toast.dismiss(_id);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function editProduct(id){
    window.location.href=`/edit-product/${id}`
  }


  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }





  return (
    <>
    <ToastContainer />
      <div className="row">
        <div className="col-xxl-3 col-lg-4 col-12">
          {/* Product Brand Sidebar */}
          <div className="sherah-product-sidebar sherah-default-bg mg-top-30" style={{height:"100%"}}>
            <h4 style={{textAlign:"center"}} className="mt-2 sherah-product-sidebar__title sherah-border-btm">
              Filters
            </h4>
            <ul style={{marginTop:"10%"}} className="sherah-product-sidebar__list">
              <li>
                <a href="#">
                  <span>
                    <i className="fa-solid fa-chevron-right" />
                    Dogs & Puppies
                  </span>
                </a>
              </li>
              <br/>
              <li>
                <a href="#">
                  <span>
                    <i className="fa-solid fa-chevron-right" />
                   Dog Sperm
                  </span>
                </a>
              </li>
         
            </ul>
          </div>
          {/* End Product Brand Sidebar */}
        </div>
        <div className="col-xxl-9 col-lg-8 col-12" >
          <div className="sherah-breadcrumb__right mg-top-30">
            <div className="sherah-breadcrumb__right--first">
              <div className="sherah-header__form sherah-header__form--product">
                <form className="sherah-header__form-inner" action="#">
                  <button className="search-btn" type="submit" style={{margin: "0px"}}>
                    <svg
                      width={24}
                      height={25}
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.6888 18.2542C10.5721 22.0645 4.46185 20.044 1.80873 16.2993C-0.984169 12.3585 -0.508523 7.01726 2.99926 3.64497C6.41228 0.362739 11.833 0.112279 15.5865 3.01273C19.3683 5.93475 20.8252 11.8651 17.3212 16.5826C17.431 16.6998 17.5417 16.8246 17.6599 16.9437C19.6263 18.9117 21.5973 20.8751 23.56 22.8468C24.3105 23.601 24.0666 24.7033 23.104 24.9575C22.573 25.0972 22.1724 24.8646 21.8075 24.4988C19.9218 22.6048 18.0276 20.7194 16.1429 18.8245C15.9674 18.65 15.8314 18.4361 15.6888 18.2542ZM2.39508 10.6363C2.38758 14.6352 5.61109 17.8742 9.62079 17.8977C13.6502 17.9212 16.9018 14.6914 16.9093 10.6597C16.9169 6.64673 13.7046 3.41609 9.69115 3.39921C5.66457 3.38232 2.40259 6.61672 2.39508 10.6363Z" />
                    </svg>
                  </button>
                  <input name="s" defaultValue="" type="text" placeholder="Search" />
                </form>
              </div>
              <p>Showing 1–{products?.length} of {products.length} results</p>
            </div>
            <div className="sherah-breadcrumb__right--second">
              <div
                className="sherah-product__nav list-group "
                id="list-tab"
                role="tablist"
              >
                <a
                  className="list-group-item active"
                  data-bs-toggle="list"
                  href="#tab_1"
                  role="tab"
                >
                  <span>Top Rated</span>
                </a>
                <a
                  className="list-group-item"
                  data-bs-toggle="list"
                  href="#tab_2"
                  role="tab"
                >
                  <span>Popular</span>
                </a>
                <a
                  className="list-group-item"
                  data-bs-toggle="list"
                  href="#tab_1"
                  role="tab"
                >
                  <span>Newest</span>
                </a>
              </div>
            </div>
          </div>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="tab_1"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              {filteredProducts.length > 0 ? 
              <>
              <div className="row"  data-aos="fade-up">

              {filteredProducts.map((product, index) => (
                <>
                <div className="col-xxl-4 col-lg-6 col-md-6 col-12" key={index}>
                  {/* Single Product */}
                  <div className="sherah-product-card sherah-product-card__v2  sherah-default-bg sherah-border mg-top-30">
                    {/* Card Image */}
                    <div className="sherah-product-card__img">
                      {/* <img src={`${process.env.PUBLIC_URL}/assets/images/d1.jpg`} /> */}
                      <img style={{height:"300px"}} src={product.images[0]?.url} />
                    </div>
                    {/* Card Content */}
                    <div className="sherah-product-card__content sherah-dflex-column sherah-flex-gap-5">
                      <h4 className="sherah-product-card__title">
                        <a href="product-detail.html" className="sherah-pcolor">
                          {product?.name}
                        </a>
                      </h4>
                      <div className="sherah-product__bottom">
                        <div className="sherah-product__bottom--single">
                          <h5 className="sherah-product-card__price">
                            R{product?.price}
                          </h5>
                        </div>
                        <div className="sherah-btn default">
                          <button onClick={() => editProduct(product.id)} className="request">Edit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                </div>
          
         </>
              ))}


            </div>
            <div className="row mg-top-40 "  data-aos="fade-up">
              <div className="sherah-pagination">
                <ul className="sherah-pagination__list">
                  <li className="sherah-pagination__button">
                    <a href="#">
                      <i className="fas fa-angle-left" />
                    </a>
                  </li>
                  <li>
                    <a href="#">01</a>
                  </li>
                  <li className="active">
                    <a href="#">02</a>
                  </li>
                  <li className="sherah-pagination__button">
                    <a href="#">
                      <i className="fas fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            </>
              : <h1>No products found</h1>}
             
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
