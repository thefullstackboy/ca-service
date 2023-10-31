// import ReactStars from "react-rating-stars-component";
// import "../CreateService/CreateService.css"
// import CONSTANTS from "../../main";

// import { useForm } from "react-hook-form";

// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// let bodyFormData = new FormData();
// // bodyFormData.append('image', imageFile);







// const thirdExample = {
//     size: 40,
//     count: 5,
//     isHalf: false,
//     value: 5,
//     color: "white",
//     activeColor: "yellow",
//     onChange: newValue => {
//         console.log(`Example 3: new value is ${newValue}`);
//     }
// };



// export default function CreateService() {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const onSubmit = (data) => {
//         console.log("fromData%%%%%%%%%%%%", data)
//         let token = localStorage.getItem('access');
//         console.log("token###########", token)

//         bodyFormData.append('short_title', data.short_title)
//         bodyFormData.append('subtitle', data.subtitle)
//         bodyFormData.append('intro_photo', data.intro_photo)
//         bodyFormData.append('price', data.price)
//         bodyFormData.append('intro_video', data.intro_video)
//         bodyFormData.append('title', data.title)
//         bodyFormData.append('service_required_for', data.service_required_for)
//         bodyFormData.append('description_1', data.description_1)
//         bodyFormData.append('description_2', data.description_2)
//         bodyFormData.append('description_3', data.description_3)
//         bodyFormData.append('description_4', data.description_4)
//         bodyFormData.append('description_5', data.description_5)
//         bodyFormData.append('description_6', data.description_6)
//         bodyFormData.append('description_7', data.description_7)
//         bodyFormData.append('description_8', data.description_8)
//         bodyFormData.append('service_include_1', data.description_1)
//         bodyFormData.append('service_include_2', data.description_2)
//         bodyFormData.append('service_include_3', data.description_3)
//         bodyFormData.append('service_include_4', data.description_4)
//         bodyFormData.append('service_include_5', data.description_5)
//         bodyFormData.append('service_include_6', data.description_6)
//         bodyFormData.append('service_include_7', data.description_7)
//         bodyFormData.append('service_include_8', data.description_8)
//         bodyFormData.append('document_required_1', data.description_1)
//         bodyFormData.append('document_required_2', data.description_2)
//         bodyFormData.append('document_required_3', data.description_3)
//         bodyFormData.append('document_required_4', data.description_4)
//         bodyFormData.append('document_required_5', data.description_5)
//         bodyFormData.append('document_required_6', data.description_6)
//         bodyFormData.append('document_required_7', data.description_7)
//         bodyFormData.append('document_required_8', data.description_8)
//         bodyFormData.append('total_duration', data.total_duration)
//         bodyFormData.append('steps_1', data.steps_1)
//         bodyFormData.append('steps_2', data.steps_2)
//         bodyFormData.append('steps_3', data.steps_3)
//         bodyFormData.append('steps_4', data.steps_4)
//         bodyFormData.append('steps_5', data.steps_5)
//         bodyFormData.append('steps_6', data.steps_6)
//         bodyFormData.append('steps_7', data.steps_7)
//         bodyFormData.append('steps_8', data.steps_8)
//         bodyFormData.append('steps_9', data.steps_9)
//         bodyFormData.append('saved_as', data.saved_as)
//         bodyFormData.append('star_rating', data.newValue)
//         axios({
//             method: "post",
//             url: CONSTANTS.APIURL.SERVICE_CREATE,
//             data: bodyFormData,
//             headers: {
//                 "Content-Type": "multipart/form-data",
//                 "Authorization": `Bearer ${token}`
//             },
//         })
//             .then(function (response) {
//                 //handle success
//                 console.log(response);
//                 toast.success("Create service successfully.");
//             })
//             .catch(function (response) {
//                 //handle error
//                 console.log(response);
//                 toast.error('Login required', {
//                     position: toast.POSITION.TOP_CENTER,
//                     className: 'mt-4'
//                 });
//             });





//     }
//     return (
//         <div className='csoverflow'>
//             <div className="form-body">
//                 <div className="row">
//                     <div className="form-holder d-flex justify-content-center">
//                         <div className="form-content">
//                             <div className="form-items">
//                                 <h3 className='text-center my-2'>Create Service</h3>
//                                 <form onSubmit={handleSubmit(onSubmit)}>


//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Title"
//                                             {...register("title", { required: true })}
//                                         />
//                                         {errors.title && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your title.</p>}
//                                     </div>

//                                     <div className="col-md-12  position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Subtitle"
//                                             {...register("subtitle", { required: true })}
//                                         />
//                                         {errors.subtitle && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your subtitle.</p>}
//                                     </div>


//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Short title"
//                                             {...register("short_title", { required: true })}
//                                         />
//                                         {errors.short_title && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your short title.</p>}
//                                     </div>



//                                     {/* <div className="col-md-12">
//                                         <label className="upload w-100 btn btn-dark btn-lg mt-3 bg-white text-dark">
//                                             <input type="file" id="typeEmailX-2" className="form-control form-control-lg" 
//                                             required
//                                                {...register("intro_photo",{ required: false})}         
//                                         />  
//                                     Upload intro photo
//                                         </label>
//                                     </div> */}





//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="number" placeholder="Price"
//                                             {...register("price", { required: true })}
//                                         />
//                                         {errors.price && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your price.</p>}
//                                     </div>

//                                     {/* <div className="col-md-12">
//                                         <label className="upload w-100 btn btn-dark btn-lg mt-3 bg-white text-dark">
//                                             <input type="file" id="typeEmailX-2" className="form-control form-control-lg" 
//                                              {...register("intro_video", { required: false})}
//                                             />
//                                            Upload intro video
//                                         </label>
//                                     </div> */}


//                                     <div className="col-md-12 position-relative mt-4">
//                                         <select className="form-select mt-3" {...register("service_required_for", { required: true })}>
//                                             <option disabled >Service required for</option>
//                                             <option value="For Salaried">Salaried </option>
//                                             <option value="Self own business">Self own business</option>
//                                         </select>
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <textarea className="form-control" type="text" placeholder="Description main" rows="80"
//                                             {...register("description_main", { required: true })}
//                                         />
//                                         {errors.description_main && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description main.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-5">
//                                         <input className="form-control" type="text" placeholder="Description 1"
//                                             {...register("description_1", { required: true })} />
//                                         {errors.description_1 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description 1.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Description 2"
//                                             {...register("description_2", { required: true })} />
//                                         {errors.description_2 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description 2.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Description 3"
//                                             {...register("description_3", { required: true })} />
//                                         {errors.description_3 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description 3.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Description 4"
//                                             {...register("description_4", { required: true })} />
//                                         {errors.description_4 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description 4.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Description 4"
//                                             {...register("description_5", { required: true })} />
//                                         {errors.description_5 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description 4.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Description 6"
//                                             {...register("description_6", { required: true })} />
//                                         {errors.description_6 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description 6.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Description 7"
//                                             {...register("description_7", { required: true })} />
//                                         {errors.description_7 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description 7.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Description 8"
//                                             {...register("description_8", { required: true })} />
//                                         {errors.description_8 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description 8.</p>}
//                                     </div>


//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Service include 1"
//                                             {...register("service_include_1", { required: true })}
//                                         />
//                                         {errors.service_include_1 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your service include 1.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Service include 2"
//                                             {...register("service_include_2", { required: true })}
//                                         />
//                                         {errors.service_include_2 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your service include 2.</p>}


//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Service include 3"
//                                             {...register("service_include_3", { required: true })}
//                                         />
//                                         {errors.service_include_3 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your service include 3.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Service include 4"
//                                             {...register("service_include_4", { required: true })}
//                                         />
//                                         {errors.service_include_4 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your service include 4.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Service include 4"
//                                             {...register("service_include_5", { required: true })}
//                                         />
//                                         {errors.service_include_5 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your service include 4.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Service include 6"
//                                             {...register("service_include_6", { required: true })}
//                                         />
//                                         {errors.service_include_6 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your service include 6.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Service include 7"
//                                             {...register("service_include_7", { required: true })}
//                                         />
//                                         {errors.service_include_7 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your service include 7.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Service include 8"
//                                             {...register("service_include_8", { required: true })}
//                                         />
//                                         {errors.service_include_8 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your service include 8.</p>}
//                                     </div>


//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Document required 1"
//                                             {...register("document_required_1", { required: true })} />
//                                         {errors.document_required_1 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document required 1.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Document required 2"
//                                             {...register("document_required_2", { required: true })} />
//                                         {errors.document_required_2 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document required 2.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Document required 3"
//                                             {...register("document_required_3", { required: true })} />
//                                         {errors.document_required_3 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document required 3.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Document required 4"
//                                             {...register("document_required_4", { required: true })} />
//                                         {errors.document_required_4 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document required 4.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Document required 4"
//                                             {...register("document_required_5", { required: true })} />
//                                         {errors.document_required_5 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document required 4.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Document required 6"
//                                             {...register("document_required_6", { required: true })} />
//                                         {errors.document_required_6 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document required 6.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Document required 7"
//                                             {...register("document_required_7", { required: true })} />
//                                         {errors.document_required_7 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document required 7.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Document required 8"
//                                             {...register("document_required_8", { required: true })} />
//                                         {errors.document_required_8 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document required 8.</p>}
//                                     </div>


//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="number" placeholder="Total duration"
//                                             {...register("total_duration", { required: true })}
//                                         />
//                                         {errors.total_duration && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type total duration.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Steps 1"
//                                             {...register("steps_1", { required: true })}
//                                         />
//                                         {errors.steps_1 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 1.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Steps 2"
//                                             {...register("steps_2", { required: true })}
//                                         />
//                                         {errors.steps_2 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 2.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Steps 3"
//                                             {...register("steps_3", { required: true })}
//                                         />
//                                         {errors.steps_3 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 3.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Steps 4"
//                                             {...register("steps_4", { required: true })}
//                                         />
//                                         {errors.steps_4 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 4.</p>}
//                                     </div>


//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Steps 4"
//                                             {...register("steps_5", { required: true })}
//                                         />
//                                         {errors.steps_5 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 4.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Steps 6"
//                                             {...register("steps_6", { required: true })}
//                                         />
//                                         {errors.steps_6 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 6.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Steps 7"
//                                             {...register("steps_7", { required: true })}
//                                         />
//                                         {errors.steps_7 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 7.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Steps 8"
//                                             {...register("steps_8", { required: true })}
//                                         />
//                                         {errors.steps_8 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 8.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Steps 9"
//                                             {...register("steps_9", { required: true })}
//                                         />
//                                         {errors.steps_9 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 9.</p>}
//                                     </div>

//                                     <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="text" placeholder="Saved as"
//                                             {...register("saved_as", { required: true })}
//                                         />
//                                         {errors.saved_as && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type saved as.</p>}
//                                     </div>

//                                     {/* <div className="col-md-12 position-relative mt-4">
//                                         <input className="form-control" type="number"  placeholder="Star rating" 
//                                          {...register("star_rating", { required: true})}
//                                         />
//                                          {errors.star_rating && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type star_rating.</p>}
//                                     </div> */}

//                                     <div className="col-md-12  mt-4">
//                                         <ReactStars {...thirdExample} />
//                                     </div>



//                                     <div className="form-button mt-4 text-center">
//                                         <button id="submit" type="submit" className="btn btn-light">Create</button>
//                                     </div>
//                                     <ToastContainer />
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

import React from 'react'
import "../CreateService/CreateService.css"

function CreateService() {
  return (
    <>
        <div className="container my-3">
    <h4 className="mt32 text-center">Create Service</h4>

    <form className="mt32" action="#">
        <div className="form-group row mt-3">
            <label for="fname" className="control-label col-sm-2">Title</label>
            <div className="col-sm-7">
              <input type="text" className="form-control" id="fname"     />
            </div>
        </div>
        <div className="form-group row mt-3">
            <label for="lname" className="control-label col-sm-2">Subtitle</label>
            <div className="col-sm-7">
              <input type="text" className="form-control" id="lname"     />
            </div>
        </div>
        <div className="form-group row mt-3">
            <label for="email" className="control-label col-sm-2">Short title</label>
            <div className="col-sm-7">
             <input type="email" className="form-control" id="email"     />
            </div>
        </div>
        <div className="form-group row mt-3">
            <label for="email" className="control-label col-sm-2">Price</label>
            <div className="col-sm-7">
             <input type="email" className="form-control" id="email"     />
            </div>
        </div>

        <div className="form-group row mt-3">
            <label for="email" className="control-label col-sm-2">Business type</label>
            <div className="col-sm-7">
             <input type="radio"  id="email"     /><label >Salaried</label>
             <span className='col-sm-7 mlr'>
             <input type="radio"  id="email"     /><label >Self Employed</label>
             </span>
            </div>
        </div>
        <div className="form-group row mt-3">
            <label for="email" className="control-label col-sm-2">Intro photo</label>
            <div className="col-sm-7">
             <input type="file" className="form-control" id="email"     />
            </div>
        </div>

        <div className="form-group row mt-3">
            <label for="email" className="control-label col-sm-2">Intro video</label>
            <div className="col-sm-7">
             <input type="file" className="form-control" id="email"     />
            </div>
        </div>

        {/* <div className="form-group row">
            <div className="offset-sm-2 col-sm-10 pull-right">
                <button type="submit" className="btn btn-primary">Sign up</button>
            </div>
        </div> */}
       <hr></hr>

       <h4 className="mt32 text-center">Description</h4>
       <div className="form-group row mt-3">
            <label for="email" className="control-label col-sm-2">Description main</label>
            <div className="col-sm-7">
             <textarea  className="form-control" id="email"  resize="none"   rows="5"/>
            </div>
        </div>

       
        
    </form>
</div>
    </>
  )
}

export default CreateService