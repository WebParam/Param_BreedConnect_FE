import DashboardLayout from "../../Partials/DashboardLayout";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {uploadProduct} from "../../../api/endpoints"
export default function AddProduct() {


const [category, setCategory] = useState(0);
const [animal , setAnimal] = useState(0);

const [name, setName] = useState("");
const [breed, setBreed] = useState(0);
const [dateOfBirth , setDateOfBirth] = useState("");
const [sex , setSex] = useState(0);
const [colorMarkings , setColorMarkings] = useState("");

const [healthRecords , setHealthRecords] = useState("");
const [geneticTests, setGeneticTests]= useState([]);


const [files , setFiles] = useState([]);
const [preview , setPreview] = useState([]);
const [videos , setVideos] = useState([]);
const [previewVideo , setPreviewVideo] = useState([]);

const [availability , setAvailability] = useState([]);
const [price , setPrice] = useState([])
const [location , setLocation] = useState([])


const _location = useLocation();
const getHashContent = _location.hash.split("#");
const [step, setStep] = useState(1);
const [switchDashboard, setSwitchDashboard] = useState(false);
const [active, setActive] = useState("dashboard");
useEffect(() => {
  setActive(
    getHashContent && getHashContent.length > 1
      ? getHashContent[1]
      : "dashboard"
  );
}, [getHashContent]);


function AddImage(event){
  const document = event.target.files[0];
  const documentBlob = new Blob([document], { type: document.type });
  const fileUrl = window.URL.createObjectURL(documentBlob);
  const newFiles =[...files, documentBlob]
  const previews = [...preview, fileUrl];
  setPreview(previews);
  setFiles(newFiles);
}

function AddVideo(event){
  debugger;
  const video = event.target.files[0];
  const videoBlob = new Blob([video], { type: video.type });
  const videoUrl = window.URL.createObjectURL(videoBlob);
  const newVideos =[...videos, videoBlob]
  const videoPreviews = [...preview, videoUrl];
  setPreviewVideo(videoPreviews);
  setVideos(newVideos);
}

function RemoveImage(index){
 const newFiles = files.filter((x,i)=>{
 return i!=index;
 })
  setFiles(newFiles);
}


function moveToStep(stepNumber){
  setStep(stepNumber);

}

function upload(){
debugger;
 const payload = new FormData();
 payload.append("category", category)
 payload.append("animal", animal)
 payload.append("name", name)
 payload.append("breed", breed)
 payload.append("dateOfBirth", dateOfBirth)
 payload.append("sex", sex)
 payload.append("colorMarkings", colorMarkings)
 payload.append("healthRecords", healthRecords)
 payload.append("geneticTests", geneticTests)
 payload.append("_images", files)
 payload.append("_videos", videos)
 payload.append("availability", availability)
 payload.append("price", price)
 payload.append("location", location)

 uploadProduct(payload);


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
        
          {step ==1 && <>
          <form className="sherah-wc__form-main" action="#">
                      <div className="row">
                        <div className="col-lg-12 col-12">
                          {/* Product Info */}
                          <div className="product-form-box sherah-border mg-top-30">
                            <h4 className="form-title m-0">Basic Information</h4>
                            <div className="row">
                              <div className="col-6">
                              
                                <div className="form-group">
                                  <label className="sherah-wc__form-label">
                                    Category*
                                  </label>
                                  <select
                                    onChange={(e)=>{setCategory(e.target.value)}}
                                    className="form-group__input"
                                    aria-label="Default select example"
                                  >
                                    <option selected={category ==0 }>Select category</option>
                                    <option selected={category ==1 } value={1}>Animal</option>
                                    <option selected={category ==2 }>Sperm</option>
                                  </select>
                                </div>
                              </div>
                          <div className="col-6">
                              
                              <div className="form-group">
                                <label className="sherah-wc__form-label">
                                  Animal*
                                </label>
                                <select
                                  onChange={(e)=>{setAnimal(e.target.value)}}
                                  className="form-group__input"
                                  aria-label="Default select example"
                                >
                                  <option selected={animal ==0 }>Select animal</option>
                                  <option selected={animal ==1 } value={1}>Dog</option>
                                  {/* <option value={2}>Sperm</option> */}
                                </select>
                              </div>
                            </div>
                              <div className="col-6">
                              <div className="form-group">
                                  <label className="sherah-wc__form-label">
                                    Name*
                                  </label>
                                  <input  type="text" 
                                  value={name}
                                  onChange={ (e)=>{  setName(e?.target?.value); }
                                }
                                  
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                  <label className="sherah-wc__form-label">
                                    Breed*
                                  </label>
                                  <select
                                    onChange={(e)=>{setBreed(e.target.value)}}
                                    className="form-group__input"
                                    aria-label="Default select example"
                                  >
                                    <option selected={breed ==0 }>Select breed..</option>
                                    <option selected={breed ==1 } value={1}>Dog</option>
                                
                                  </select>
                                </div>
                              </div>
                            
                              <div className="col-6">
                              <div className="form-group">
                                  <label className="sherah-wc__form-label">
                                    Date of birth*
                                  </label>
                                  <input type="date" 
                                
                                  onChange={(e)=>{setDateOfBirth(e.target.value)}}/>
                                </div>
                              </div>
                              

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
                                    <option selected={sex ==0 }>Select sex..</option>
                                    <option selected={sex ==1 } value={1}>Sex</option>
                                    <option  selected={sex ==2 } value={2}>Female</option>
                                
                                  </select>
                                </div>
                              </div>
                            
                              <div className="col-12">
                                <div className="form-group">
                                  <label className="sherah-wc__form-label">Color / Markings</label>
                                  <div className="form-group__input">
                                    <textarea
                                      onChange={(e)=>{setColorMarkings(e.target.value)}}
                                      className="sherah-wc__form-input"
                                      placeholder="Enter color / markings"
                                      type="text"
                                      name="p_title"
                                      value={colorMarkings}
                                    
                                      // value={colorMarkings}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* End Product Info */}
                        </div>
                      </div>
                      <div className=" mg-top-40 sherah-dflex sherah-dflex-gap-30 justify-content-end">
                    
                        <button
                        onClick={(e)=>{moveToStep(2); e.preventDefault()}}
                          className="sherah-btn sherah-btn__primary"
                        >
                        Next
                        </button>
                      
                      </div>
            </form>
          </>
          }

          {step ==2 && 
          <>
            <form className="sherah-wc__form-main" action="#">
                        <div className="row">
                          <div className="col-lg-12 col-12">
                            {/* Product Info */}
                            <div className="product-form-box sherah-border mg-top-30">
                              <h4 className="form-title m-0">Health and medical information</h4>
                              <div className="row">
                  
                                <div className="col-12">
                                  <div className="form-group">
                                    <label className="sherah-wc__form-label">Health records</label>
                                    <div className="form-group__input">
                                      <textarea
                                        onChange={(e)=>{setHealthRecords(e.target.value)}}
                                        className="sherah-wc__form-input"
                                        placeholder="Enter color / markings"
                                        type="text"
                                        name="p_title"                              
                                        defaultValue={""}
                                        value={healthRecords}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-group">
                                    <label className="sherah-wc__form-label">Have genetic tests been conducted on the product? If yes, please share the results</label>
                                    <div className="form-group__input">
                                      <textarea
                                        onChange={(e)=>{setGeneticTests(e.target.value)}}
                                        className="sherah-wc__form-input"
                                        placeholder="Enter color / markings"
                                        type="text"
                                        name="p_title"
                                        defaultValue={""}
                                        value={geneticTests}
                                      />
                                    </div>
                                  </div>
                                </div>
                                
                              </div>
                            </div>
                            
                            {/* End Product Info */}
                          </div>
                        </div>
                        <div className=" mg-top-40 sherah-dflex sherah-dflex-gap-30 justify-content-end">
                        
                        <button 
                        onClick={(e)=>{ moveToStep(1); e.preventDefault();}} 
                        className="sherah-btn sherah-btn__third">Back
                        </button>

                          <button
                          onClick={(e)=>{ moveToStep(3); e.preventDefault();}}
                        
                            className="sherah-btn sherah-btn__primary"
                          >
                          Next
                          </button>
                        
                        </div>
              </form>
          </>
          }
          {step ==3 && 
          <>
            <form className="sherah-wc__form-main" action="#">
                        <div className="row">
                          <div className="col-lg-12 col-12">
                            {/* Product Info */}
                            <div className="product-form-box sherah-border mg-top-30">
                              <h4 className="form-title m-0">Media content</h4>
                              <div className="row">
                            
                              <div className="product-form-box sherah-border mg-top-30">
                                  <div className="form-group">
                                  <label className="sherah-wc__form-label"> High Quality Images</label>
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
                                      <div  style={{

                                          border: "0px",
                                          marginTop:" 10px",
                                          height:" fit-content"
                                      }} className="image-upload-group__single image-upload-group__single--upload">
                                        <input
                                          onChange={(e)=>{
                                            debugger;
                                            AddImage(e)}}
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


                                <div className="product-form-box sherah-border mg-top-30">
                                  <div className="form-group">
                                  <label className="sherah-wc__form-label">Videos</label>
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
                                      <div style={{

                                          border: "0px",
                                          marginTop:" 10px",
                                          height:" fit-content"
                                          }} 
                                          className="image-upload-group__single image-upload-group__single--upload">
                                        <input
                                          onChange={(e)=>{  debugger; AddVideo(e)}}
                                          type="file"
                                          className="btn-check"
                                          name="vid"
                                          id="input-vid"
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
                                          <span>video upload</span>
                                        </label>
                                      </div>
                                      {
                                        previewVideo.map(x=>{return (
                                          <div className="image-upload-group__single">
                                          
                                          <video controls width="250">

                                            <source src={x}  type="video/mp4" />                                           
                                          </video>
                                        </div> 
                                        )})
                                      }
                                    
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* End Product Info */}
                          </div>
                        </div>
                        <div className=" mg-top-40 sherah-dflex sherah-dflex-gap-30 justify-content-end">
                        <button onClick={(e)=>{ moveToStep(2); e.preventDefault();}} className="sherah-btn sherah-btn__third">Back</button>
                          <button
                          onClick={(e)=>{ moveToStep(4); e.preventDefault();}}
                        
                            className="sherah-btn sherah-btn__primary"
                          >
                          Next
                          </button>
                        
                        </div>
              </form>
          </>
          }
          {step ==4 && <>
            <form className="sherah-wc__form-main" action="#">
                        <div className="row">
                          <div className="col-lg-12 col-12">
                            {/* Product Info */}
                            <div className="product-form-box sherah-border mg-top-30">
                              <h4 className="form-title m-0">Availability and Pricing</h4>
                              <div className="row">
                                <div className="col-6">
                                
                                  <div className="form-group">
                                    <label className="sherah-wc__form-label">
                                      Availability status
                                    </label>
                                    <div className="switch-dashboard flex space-x-3 items-center">
                                    <input type="number"  value={availability} onChange={(e)=>{setAvailability(e.target.value)}} />
                                      </div>

                                  </div>
                                </div>
                            <div className="col-6">
                                
                                <div className="form-group">
                                  <label className="sherah-wc__form-label">
                                    Pricing*
                                  </label>
                                  <input   onChange={(e)=>{setPrice(e.target.value)}} value={price} type="number"/>
                                </div>
                              </div>
                                <div className="col-12">
                                <div className="form-group">
                                    <label className="sherah-wc__form-label">
                                      Location*
                                    </label>
                                    <input   onChange={(e)=>{setLocation(e.target.value)}} 
                                    value={location} type="text"/>
                                  </div>
                                </div>

                              </div>
                            </div>
                            
                            {/* End Product Info */}
                          </div>
                        </div>
                        <div className=" mg-top-40 sherah-dflex sherah-dflex-gap-30 justify-content-end">
                        <button 
                        onClick={(e)=>{ moveToStep(3); e.preventDefault();}}
                        className="sherah-btn sherah-btn__third">Back</button>
                          <button
                          onClick={(e)=>{upload()}}
                            type="submit"
                            className="sherah-btn sherah-btn__primary"
                          >
                          Complete
                          </button>
                        
                        </div>
              </form>
          </>
          }



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
