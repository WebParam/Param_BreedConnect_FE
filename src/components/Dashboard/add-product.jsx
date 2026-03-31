import DashboardLayout from "../Partials/DashboardLayout";
import { useState } from "react";
import QuestionnaireComponent from "../Questionnaires/questionaire-component"
export default function AddProduct() {


const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [productType, setProductType] = useState("");
const [subCategory , setSubCategory] = useState(0);
const [location , setLocation] = useState(0);
const [animal , setAnimal] = useState(0);
const [type , setType] = useState(0);
const [tags , setTags] = useState(0);
const [variations, setVariations]= useState([]);


const [v_stock, setStock] = useState(0);
const [v_size, setSize] = useState(0);
const [v_color, setColor] = useState(0);
const [v_sex, setSex] = useState(0);
const [v_weight, setWeight] = useState(0);
const [v_name, setName] = useState("");
const [v_price, setPrice] = useState(0);
const [files , setFiles] = useState([]);

const [preview , setPreview] = useState([]);
const _data = [
  {
    variationName: "v_name",
    variationWeight: "v_weight",
    variationPrice:0,
    variationColor:0,
    variationSex:0,
    variationStock:0
  }
];

function clearVariations(){
  setStock("");
  setSize("");
  setColor("");
  setSex("");
  setPrice("");
  setFiles([]);
  setName("");
  setWeight("");

}

// const [productType, setProductType] = useState("");

function AddVariation(e){
debugger;
  e.preventDefault();
  var vname= `${title} - ${v_size}-${v_color}`;
  setName(vname);
  var variation={
    variationName: v_name,
    variationWeight: v_weight,
    variationPrice:v_price,
    variationColor:v_color,
    variationSex:v_sex,
    variationStock:v_stock,
    variationImages:files
  }

  setVariations([...variations, variation]);
  clearVariations();
}



function AddImage(event){
  debugger;
  const document = event.target.files[0];
  const documentBlob = new Blob([document], { type: document.type });
  const fileUrl = window.URL.createObjectURL(documentBlob);
  const newFiles =[...files, documentBlob]
  const previews = [...preview, fileUrl];
  setPreview(previews);
  setFiles(newFiles);
}

function RemoveImage(index){
 const newFiles = files.filter((x,i)=>{
 return i!=index;
 })
  setFiles(newFiles);
}
function RemoveVariation(index){
  const newVariations = files.filter((x,i)=>{
  return i!=index;
  })
   setVariations(newVariations);
 }

 function updateVariation(index){

 }

function AddProduct(){
debugger
  var request = new FormData();
  request.append("title", title);
  request.append("description", description);
  request.append("productType", productType);
  request.append("subCategory", subCategory);
  request.append("location", location);
  request.append("animal", animal);
  request.append("type", type);
  request.append("tag", tags);
  request.append("variations", variations);
}

  return (
   <>
<DashboardLayout>
<>

<div className="container">
  <div className="row">
    <div className="col-12">
      <div className="sherah-body">
        {/* Dashboard Inner */}
        <div className="sherah-dsinner">
          <div className="row">
            <div className="col-12">
              <div className="sherah-breadcrumb mg-top-30">
                <h2 className="sherah-breadcrumb__title">Upload Product</h2>
                <ul className="sherah-breadcrumb__list">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li className="active">
                    <a href="profile-info.html">Upload Product</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sherah-page-inner sherah-border sherah-basic-page sherah-default-bg mg-top-25 p-0">
            <form className="sherah-wc__form-main" action="#">
              <div className="row">
                <div className="col-lg-6 col-12">
                  {/* Product Info */}
                  <div className="product-form-box sherah-border mg-top-30">
                    <h4 className="form-title m-0">Basic Information</h4>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">
                            Product Title
                          </label>
                          <div className="form-group__input">
                            <input
                              className="sherah-wc__form-input"
                              placeholder="Enter title"
                              type="text"
                              name="p_title"
                              onChange={(e)=>{setTitle(e.target.value)}}
                              value={title}
                            />
                          </div>
                        </div>
                      </div>
                    
                      
                      {/* <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">
                            Delivery / Collection*
                          </label>
                          <select
                            className="form-group__input"
                            aria-label="Default select example"
                          >
                            <option selected="">Select delivery</option>
                            <option value={1}>Delivery</option>
                            <option value={2}>Collection</option>
                            <option value={3}>Both</option>
                          </select>
                        </div>
                      </div> */}
                      <div className="col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">
                            About Description
                          </label>
                          <div className="form-group__input">
                            <textarea
                              className="sherah-wc__form-input"
                              placeholder="Enter description"
                              type="text"
                              name="p_title"
                              defaultValue={""}
                              onChange={(e)=>{setDescription(e.target.value)}}
                              value={description}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">
                           Location
                          </label>
                          <div className="form-group__input">
                            <input
                              className="sherah-wc__form-input"
                              placeholder="Enter location"
                              type="text"
                              name="p_title"
                              onChange={(e)=>{setLocation(e.target.value)}}
                              value={location}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">
                            Animal*
                          </label>
                          <select
                            onChange={(e)=>{setAnimal(e.target.value)}}
                            className="form-group__input"
                            aria-label="Default select example"
                          >
                            <option selected="">Select animal..</option>
                            <option value={1}>Dog</option>
                         
                          </select>
                        </div>
                      </div>
                     

                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">
                            Type*
                          </label>
                          <select
                            
                          onChange={(e)=>{setType(e.target.value)}}
                            className="form-group__input"
                            aria-label="Default select example"
                          >
                            <option selected="">Select type</option>
                            <option value={1}>Animal</option>
                            <option value={2}>Semen</option>
                          </select>
                        </div>
                      </div>  
                     
                 
                   
                      {/* <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">
                            Tax Rate
                          </label>
                          <div className="form-group__input">
                            <input
                              className="sherah-wc__form-input"
                              placeholder="Type here"
                              type="text"
                              name="p_title"
                            />
                          </div>
                        </div>
                      </div> */}
                      <div className="col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">Tag</label>
                          <div className="form-group__input">
                            <textarea
                              onChange={(e)=>{setTags(e.target.value)}}
                              className="sherah-wc__form-input"
                              placeholder="Enter tags"
                              type="text"
                              name="p_title"
                              defaultValue={""}
                              value={tags}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product Info */}
                </div>
                <div className="col-lg-6 col-12">
                  {/* Organization */}
                  {/* <div className="product-form-box sherah-border mg-top-30">
                    <h4 className="form-title m-0">Organization</h4>
                    <div className="form-group">
                      <label className="sherah-wc__form-label">
                        Add Category
                      </label>
                      <div className="form-group__input">
                        <input
                          className="sherah-wc__form-input"
                          placeholder="Type here"
                          type="text"
                          name="p_title"
                        />
                        <button
                          className="sherah-btn__add sherah-btn sherah-btn__secondary"
                          type="button"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="sherah-wc__form-label">Add Brand</label>
                      <div className="form-group__input">
                        <input
                          className="sherah-wc__form-input"
                          placeholder="Type here"
                          type="text"
                          name="p_title"
                        />
                        <button
                          className="sherah-btn__add sherah-btn sherah-btn__secondary"
                          type="button"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="sherah-wc__form-label">Add Color</label>
                      <div className="form-group__input">
                        <input
                          className="sherah-wc__form-input"
                          placeholder="Type here"
                          type="text"
                          name="p_title"
                        />
                        <button
                          className="sherah-btn__add sherah-btn sherah-btn__secondary"
                          type="button"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="sherah-wc__form-label">Add Size</label>
                      <div className="form-group__input">
                        <input
                          className="sherah-wc__form-input"
                          placeholder="Type here"
                          type="text"
                          name="p_title"
                        />
                        <button
                          className="sherah-btn__add sherah-btn sherah-btn__secondary"
                          type="button"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div> */}
                  {/* End Organization */}
                  {/* Specification */}
                  <div className="product-form-box sherah-border mg-top-30">
                    <h4 className="form-title m-0">Variation & Stock</h4>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">Stock</label>
                          <div className="form-group__input">
                            <input
                              onChange={(e)=>{setStock(e.target.value)}}
                              className="sherah-wc__form-input"
                              placeholder="Enter stock"
                              type="number"
                              name="p_title"
                            />
                          </div>
                        </div>
                      </div>
                      {
                        type==0 && 
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">
                            Sex*
                          </label>
                          <select
                            onChange={(e)=>{setSex(e.target.value)}}
                            className="form-group__input"
                            aria-label="Default select example"
                          >
                            <option selected="">Select sex</option>
                            <option value={1}>Male</option>
                            <option value={2}>Female</option>
                          </select>
                        </div>
                      </div>
                      }
                     
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">
                            Weight
                          </label>
                          <div className="form-group__input">
                            <input
                              onChange={(e)=>{setWeight(e.target.value)}}
                              className="sherah-wc__form-input"
                              placeholder="Enter wieght"
                              type="number"
                              name="p_title"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">
                            Enter Price
                          </label>
                          <div className="form-group__input">
                            <input
                              className="sherah-wc__form-input"
                              placeholder="Enter price"
                              type="number"
                              name="p_title"
                              onChange={(e)=>{setPrice(e.target.value)}}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">Size</label>
                          <div className="checkbox-group">
                            <div className="checkbox-group__single">
                              <input
                                onChange={(e)=>{setSize(0)}}
                                type="checkbox"
                                className="btn-check"
                                name="options"
                                id="option1"
                                autoComplete="off"
                              />
                              <label
                                className="checkbox-group__single--label"
                                htmlFor="option1"
                              >
                                MM
                              </label>
                            </div>
                            <div className="checkbox-group__single">
                              <input
                              onChange={(e)=>{setSize(1)}}
                                type="checkbox"
                                className="btn-check"
                                name="options"
                                id="option2"
                                defaultChecked=""
                                autoComplete="off"
                              />
                              <label
                                className="checkbox-group__single--label"
                                htmlFor="option2"
                              >
                                XL
                              </label>
                            </div>
                            <div className="checkbox-group__single">
                              <input
                                type="checkbox"
                                className="btn-check"
                                name="options"
                                id="option3"
                                autoComplete="off"
                              />
                              <label
                                className="checkbox-group__single--label"
                                htmlFor="option3"
                              >
                                M
                              </label>
                            </div>
                            <div className="checkbox-group__single">
                              <input
                                type="checkbox"
                                className="btn-check"
                                name="options"
                                id="option4"
                                autoComplete="off"
                              />
                              <label
                                className="checkbox-group__single--label"
                                htmlFor="option4"
                              >
                                MM
                              </label>
                            </div>
                            <div className="checkbox-group__single">
                              <input
                                type="checkbox"
                                className="btn-check"
                                name="options"
                                id="option5"
                                autoComplete="off"
                              />
                              <label
                                className="checkbox-group__single--label"
                                htmlFor="option5"
                              >
                                X
                              </label>
                            </div>
                            <div className="checkbox-group__single">
                              <input
                                type="checkbox"
                                className="btn-check"
                                name="options"
                                id="option6"
                                autoComplete="off"
                              />
                              <label
                                className="checkbox-group__single--label"
                                htmlFor="option6"
                              >
                                SM
                              </label>
                            </div>
                            <div className="checkbox-group__single">
                              <input
                                type="checkbox"
                                className="btn-check"
                                name="options"
                                id="option7"
                                autoComplete="off"
                              />
                              <label
                                className="checkbox-group__single--label"
                                htmlFor="option7"
                              >
                                2X
                              </label>
                            </div>
                            <div className="checkbox-group__single">
                              <input
                                type="checkbox"
                                className="btn-check"
                                name="options"
                                id="option8"
                                autoComplete="off"
                              />
                              <label
                                className="checkbox-group__single--label"
                                htmlFor="option8"
                              >
                                3X
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">
                            Colors
                          </label>
                          <div className="checkbox-group">
                            <div className="checkbox-group__single">
                              <input
                                   onChange={(e)=>{setColor(0)}}
                                type="checkbox"
                                className="btn-check"
                                name="options"
                                id="option9"
                                autoComplete="off"
                              />
                              <label
                                className="checkbox-group__single--label"
                                htmlFor="option9"
                              >
                                White
                              </label>
                            </div>
                            <div className="checkbox-group__single">
                              <input
                                type="checkbox"
                                className="btn-check"
                                name="options"
                                id="option10"
                                defaultChecked=""
                                autoComplete="off"
                              />
                              <label
                                className="checkbox-group__single--label"
                                htmlFor="option10"
                              >
                                Black
                              </label>
                            </div>
                            <div className="checkbox-group__single">
                              <input
                                type="checkbox"
                                className="btn-check"
                                name="options"
                                id="option11"
                                autoComplete="off"
                              />
                              <label
                                className="checkbox-group__single--label"
                                htmlFor="option11"
                              >
                                Harlequin
                              </label>
                            </div>
                            <div className="checkbox-group__single">
                              <input
                                type="checkbox"
                                className="btn-check"
                                name="options"
                                id="option12"
                                autoComplete="off"
                              />
                              <label
                                className="checkbox-group__single--label"
                                htmlFor="option12"
                              >
                                Red
                              </label>
                            </div>
                            <div className="checkbox-group__single">
                              <input
                                type="checkbox"
                                className="btn-check"
                                name="options"
                                id="option13"
                                autoComplete="off"
                              />
                              <label
                                className="checkbox-group__single--label"
                                htmlFor="option13"
                              >
                                Yellow
                              </label>
                            </div>
                            <div className="checkbox-group__single">
                              <input
                                type="checkbox"
                                className="btn-check"
                                name="options"
                                id="option14"
                                autoComplete="off"
                              />
                              <label
                                className="checkbox-group__single--label"
                                htmlFor="option14"
                              >
                                Blue
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-form-box sherah-border mg-top-30">
                        <div className="form-group">
                          <div className="image-upload-group">
                            {/* <div className="image-upload-group__single">
                              <img src="img/product-img5.png" />
                            </div>
                            <div className="image-upload-group__single">
                              <img src="img/product-img6.png" />
                            </div>
                            <div className="image-upload-group__single">
                              <img src="img/product-img8.png" />
                            </div>
                            <div className="image-upload-group__single">
                              <img src="img/product-img9.png" />
                            </div> */}
                            <div className="image-upload-group__single image-upload-group__single--upload">
                              <input
                                onChange={(e)=>{AddImage(e)}}
                                type="file"
                                className="btn-check"
                                name="options"
                                id="input-img1"
                                autoComplete="off"
                              />
                              <label
                                className="image-upload-label"
                                htmlFor="input-img1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="91.787"
                                  height="84.116"
                                  viewBox="0 0 91.787 84.116"
                                >
                                  <g
                                    id="Group_1021"
                                    data-name="Group 1021"
                                    transform="translate(891.292 39.276)"
                                  >
                                    <path
                                      id="Path_536"
                                      data-name="Path 536"
                                      d="M-891.292,158.124q1.434-5.442,2.867-10.884c1.3-4.961,2.586-9.926,3.9-14.884a2.8,2.8,0,0,1,2.664-2.251,2.654,2.654,0,0,1,2.763,1.848,3.929,3.929,0,0,1,.037,2q-3.073,12-6.226,23.984c-.64,2.452.088,3.739,2.533,4.394q29.033,7.775,58.067,15.543a2.893,2.893,0,0,0,3.97-2.327c.626-2.487,1.227-4.98,1.849-7.468a2.9,2.9,0,0,1,3.436-2.368,2.894,2.894,0,0,1,2.124,3.726c-.627,2.609-1.256,5.219-1.944,7.813A8.547,8.547,0,0,1-826,183.469q-29.3-7.827-58.584-15.682a8.566,8.566,0,0,1-6.552-6.853,1.264,1.264,0,0,0-.16-.3Z"
                                      transform="translate(0 -138.958)"
                                    />
                                    <path
                                      id="Path_537"
                                      data-name="Path 537"
                                      d="M-767.966,21.9c-9.648,0-19.3-.062-28.943.029a9.215,9.215,0,0,1-8.88-5.491,7.393,7.393,0,0,1-.451-3.232c-.027-14.606-.053-29.212,0-43.818a8.532,8.532,0,0,1,8.907-8.66q29.346-.008,58.693,0a8.581,8.581,0,0,1,8.877,8.872q.017,21.685,0,43.37a8.551,8.551,0,0,1-8.9,8.923C-748.432,21.915-758.2,21.9-767.966,21.9ZM-773.938.457l4.606-5.528q4.674-5.611,9.345-11.224a6.85,6.85,0,0,1,7.183-2.522c1.734.377,2.87,1.622,3.969,2.909q6.341,7.428,12.7,14.838a6.488,6.488,0,0,1,.426.631l.211-.158v-.789q0-14.429,0-28.857c0-2.179-1.125-3.294-3.316-3.295q-29.216,0-58.432,0c-2.141,0-3.277,1.115-3.278,3.25q-.008,18.865,0,37.73a5.429,5.429,0,0,0,.07.624l.239.127a5.744,5.744,0,0,1,.529-.721Q-794.05,1.826-788.4-3.808c3.131-3.127,7.065-3.129,10.21,0C-776.8-2.422-775.412-1.022-773.938.457Zm-25.649,14.9a3.316,3.316,0,0,0,2.611.808q28.949,0,57.9,0c.239,0,.478,0,.717-.005a2.828,2.828,0,0,0,2.864-2.923c.02-1.195-.052-2.393.023-3.584a2.712,2.712,0,0,0-.78-2.072q-8.569-9.946-17.1-19.927c-1.071-1.25-1.417-1.243-2.489.044q-7.71,9.264-15.424,18.523c-1.468,1.762-3.193,1.826-4.833.189q-3.076-3.071-6.147-6.147c-.963-.962-1.146-.963-2.1-.01q-6.688,6.684-13.377,13.367C-798.31,14.2-798.937,14.753-799.587,15.358Z"
                                      transform="translate(-69.752)"
                                    />
                                    <path
                                      id="Path_538"
                                      data-name="Path 538"
                                      d="M-734.635,39.893a7.657,7.657,0,0,1-7.659-7.6,7.688,7.688,0,0,1,7.7-7.667,7.682,7.682,0,0,1,7.612,7.663A7.653,7.653,0,0,1-734.635,39.893Zm-.029-5.742a1.9,1.9,0,0,0,1.938-1.906,1.934,1.934,0,0,0-1.886-1.884,1.927,1.927,0,0,0-1.936,1.92A1.9,1.9,0,0,0-734.664,34.151Z"
                                      transform="translate(-122.238 -52.421)"
                                    />
                                  </g>
                                </svg>
                                <span>image upload</span>
                              </label>
                            </div>
                            {
                              preview.map(x=>{return (
                                <div className="image-upload-group__single">
                                
                                <img style={{maxWidth:"120px"}} src={x} />
                              </div> 
                              )})
                            }
                          
                          </div>
                        </div>
                      </div>
                      <div className=" mg-top-40 sherah-dflex sherah-dflex-gap-30 justify-content-end">
                        <button
                        onClick={(e)=>{AddVariation(e)}}
                       
                          className=" sherah-btn sherah-btn__secondary"
                        >
                          Add Variation
                        </button>
                        {/* <button className="sherah-btn sherah-btn__third">Cancel</button> */}
                   </div>
                    </div>
                  </div>
                  
                  {/* End Specification */}
                </div>
              </div>
              
               
              {variations.length>0 &&
                  <div className="product-form-box sherah-border mg-top-30">
                        <h4 className="form-title m-0">Variations</h4>
                  
                        <div className="row">
                        {variations.length>0 && variations.map(x=>{ return(
                            <div className="col-lg-4 col-md-4 col-12 mg-top-30">
                              <div className="sherah-accounts-card">
                                {/* Sherah Card Header*/}
                                <div className="sherah-accounts-card__header sherah-border-btm mg-btm-30 pd-btm-30">
                                  <h3 className="sherah-accounts-card__title">{x.variationName}</h3>
                                  <a href="#" className="sherah-accounts-card__button">
                                    <svg className="sherah-color3__fill" xmlns="http://www.w3.org/2000/svg" width={21} height="21.031" viewBox="0 0 21 21.031">
                                      <g id="Icon" transform="translate(-234.958 -37.876)">
                                        <path id="Path_481" data-name="Path 481" d="M243.71,98.115h-6.136a2.56,2.56,0,0,1-2.61-2.6c-.01-2.086,0-4.173,0-6.26q0-2.944,0-5.889a2.648,2.648,0,0,1,2.791-2.79q3.356,0,6.713,0c.613,0,1,.316,1.038.825a.855.855,0,0,1-.8.923c-.341.03-.686.016-1.029.017q-2.924,0-5.848,0c-.811,0-1.112.306-1.112,1.127q0,5.909,0,11.819c0,.793.307,1.1,1.091,1.1q5.951,0,11.9,0c.767,0,1.068-.306,1.069-1.077q0-3.356,0-6.712a.882.882,0,0,1,.913-.984.859.859,0,0,1,.835.932c.009,1.18,0,2.361,0,3.542s.014,2.334-.007,3.5a2.578,2.578,0,0,1-1.941,2.467,2.111,2.111,0,0,1-.528.055Q246.881,98.119,243.71,98.115Z" transform="translate(0 -39.209)" />
                                        <path id="Path_482" data-name="Path 482" d="M333.733,72.644l3.09,3.089c-.058.062-.138.153-.223.239q-3.246,3.248-6.5,6.489a1.284,1.284,0,0,1-.59.328c-.909.2-1.825.381-2.741.554-.572.108-.766-.106-.651-.68.181-.9.353-1.8.546-2.7a1.052,1.052,0,0,1,.242-.5q3.367-3.389,6.752-6.76A.387.387,0,0,1,333.733,72.644Z" transform="translate(-83.723 -31.904)" />
                                        <path id="Path_483" data-name="Path 483" d="M434.126,42.825l-3.133-3.133a18.248,18.248,0,0,1,1.564-1.44,2.176,2.176,0,0,1,2.975,3.071A20.276,20.276,0,0,1,434.126,42.825Z" transform="translate(-179.988)" />
                                      </g>
                                    </svg>
                                  </a>
                                </div>
                                {/* Sherah Card Body */}
                                <div className="sherah-accounts-card__body">
                                  <ul className="sherah-accounts-card__list">
                                    <li>Price : <span>{x.variationPrice}</span></li>
                                    <li>Sex: <span>{x.variationSex}</span></li>
                                    <li>Weight: <span>{x.variationWeight}</span></li>
                                    {/* <li>Size: <span>{x.variationSize}</span></li> */}
                                    <li>Color: <span>{x.variationColor}</span></li>
                                  </ul>
                                </div>
                                {/* End Sherah Card Body */}
                              </div>
                          </div>
                          )
                        
                          })}
                        </div>
                  </div>
              }
               
              
          
              {/* <div className="product-form-box sherah-border mg-top-30">
                <div className="form-group">
                  <div className="image-upload-group">
                    <div className="image-upload-group__single">
                      <img src="img/product-img5.png" />
                    </div>
                    <div className="image-upload-group__single">
                      <img src="img/product-img6.png" />
                    </div>
                    <div className="image-upload-group__single">
                      <img src="img/product-img8.png" />
                    </div>
                    <div className="image-upload-group__single">
                      <img src="img/product-img9.png" />
                    </div>
                    <div className="image-upload-group__single image-upload-group__single--upload">
                      <input
                        type="file"
                        className="btn-check"
                        name="options"
                        id="input-img1"
                        autoComplete="off"
                      />
                      <label
                        className="image-upload-label"
                        htmlFor="input-img1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="91.787"
                          height="84.116"
                          viewBox="0 0 91.787 84.116"
                        >
                          <g
                            id="Group_1021"
                            data-name="Group 1021"
                            transform="translate(891.292 39.276)"
                          >
                            <path
                              id="Path_536"
                              data-name="Path 536"
                              d="M-891.292,158.124q1.434-5.442,2.867-10.884c1.3-4.961,2.586-9.926,3.9-14.884a2.8,2.8,0,0,1,2.664-2.251,2.654,2.654,0,0,1,2.763,1.848,3.929,3.929,0,0,1,.037,2q-3.073,12-6.226,23.984c-.64,2.452.088,3.739,2.533,4.394q29.033,7.775,58.067,15.543a2.893,2.893,0,0,0,3.97-2.327c.626-2.487,1.227-4.98,1.849-7.468a2.9,2.9,0,0,1,3.436-2.368,2.894,2.894,0,0,1,2.124,3.726c-.627,2.609-1.256,5.219-1.944,7.813A8.547,8.547,0,0,1-826,183.469q-29.3-7.827-58.584-15.682a8.566,8.566,0,0,1-6.552-6.853,1.264,1.264,0,0,0-.16-.3Z"
                              transform="translate(0 -138.958)"
                            />
                            <path
                              id="Path_537"
                              data-name="Path 537"
                              d="M-767.966,21.9c-9.648,0-19.3-.062-28.943.029a9.215,9.215,0,0,1-8.88-5.491,7.393,7.393,0,0,1-.451-3.232c-.027-14.606-.053-29.212,0-43.818a8.532,8.532,0,0,1,8.907-8.66q29.346-.008,58.693,0a8.581,8.581,0,0,1,8.877,8.872q.017,21.685,0,43.37a8.551,8.551,0,0,1-8.9,8.923C-748.432,21.915-758.2,21.9-767.966,21.9ZM-773.938.457l4.606-5.528q4.674-5.611,9.345-11.224a6.85,6.85,0,0,1,7.183-2.522c1.734.377,2.87,1.622,3.969,2.909q6.341,7.428,12.7,14.838a6.488,6.488,0,0,1,.426.631l.211-.158v-.789q0-14.429,0-28.857c0-2.179-1.125-3.294-3.316-3.295q-29.216,0-58.432,0c-2.141,0-3.277,1.115-3.278,3.25q-.008,18.865,0,37.73a5.429,5.429,0,0,0,.07.624l.239.127a5.744,5.744,0,0,1,.529-.721Q-794.05,1.826-788.4-3.808c3.131-3.127,7.065-3.129,10.21,0C-776.8-2.422-775.412-1.022-773.938.457Zm-25.649,14.9a3.316,3.316,0,0,0,2.611.808q28.949,0,57.9,0c.239,0,.478,0,.717-.005a2.828,2.828,0,0,0,2.864-2.923c.02-1.195-.052-2.393.023-3.584a2.712,2.712,0,0,0-.78-2.072q-8.569-9.946-17.1-19.927c-1.071-1.25-1.417-1.243-2.489.044q-7.71,9.264-15.424,18.523c-1.468,1.762-3.193,1.826-4.833.189q-3.076-3.071-6.147-6.147c-.963-.962-1.146-.963-2.1-.01q-6.688,6.684-13.377,13.367C-798.31,14.2-798.937,14.753-799.587,15.358Z"
                              transform="translate(-69.752)"
                            />
                            <path
                              id="Path_538"
                              data-name="Path 538"
                              d="M-734.635,39.893a7.657,7.657,0,0,1-7.659-7.6,7.688,7.688,0,0,1,7.7-7.667,7.682,7.682,0,0,1,7.612,7.663A7.653,7.653,0,0,1-734.635,39.893Zm-.029-5.742a1.9,1.9,0,0,0,1.938-1.906,1.934,1.934,0,0,0-1.886-1.884,1.927,1.927,0,0,0-1.936,1.92A1.9,1.9,0,0,0-734.664,34.151Z"
                              transform="translate(-122.238 -52.421)"
                            />
                          </g>
                        </svg>
                        <span>image upload</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className=" mg-top-40 sherah-dflex sherah-dflex-gap-30 justify-content-end">
                <button
                onClick={()=>{AddProduct()}}
                  type="submit"
                  className="sherah-btn sherah-btn__primary"
                >
                  Publish Product
                </button>
                <button className="sherah-btn sherah-btn__third">Cancel</button>
              </div>
            </form>
          </div>
        </div>
        {/* End Dashboard Inner */}
      </div>
    </div>
  </div>
</div>

</>
</DashboardLayout>
   </>
  );
}
