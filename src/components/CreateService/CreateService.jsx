import React from 'react'
import "../CreateService/CreateService.css"
import CONSTANTS from "../../main";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function CreateService() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {    
        try {
            console.log("fromData%%%%%%%%%%%%",data)
          
            let token = localStorage.getItem('access');  
            console.log("token###########",token)   
          const headers ={
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                } 
                console.log(headers)          
                
            axios.post(CONSTANTS.APIURL.SERVICE_CREATE,                
        {
            short_title:data.short_title,
            subtitle:data.subtitle,
            intro_photo:data.intro_photo,
            price:data.price,
            intro_video:data.intro_video,
            title:data.title,
            service_required_for:data.service_required_for,
            description_1:data.description_1,
            description_2:data.description_2,
            description_3:data.description_3,
            description_4:data.description_4,
            description_5:data.description_5,
            description_6:data.description_6,
            description_7:data.description_7,
            description_8:data.description_8,
            service_include_1:data.description_1,
            service_include_2:data.description_2,
            service_include_3:data.description_3,
            service_include_4:data.description_4,
            service_include_5:data.description_5,
            service_include_6:data.description_6,
            service_include_7:data.description_7,
            service_include_8:data.description_8,
            document_required_1:data.description_1,
            document_required_2:data.description_2,
            document_required_3:data.description_3,
            document_required_4:data.description_4,
            document_required_5:data.description_5,
            document_required_6:data.description_6,
            document_required_7:data.description_7,
            document_required_8:data.description_8,
            total_duration:data.total_duration,
            steps_1:data.steps_1,
            steps_2:data.steps_2,
            steps_3:data.steps_3,
            steps_4:data.steps_4,
            steps_5:data.steps_5,
            steps_6:data.steps_6,
            steps_7:data.steps_7,
            steps_8:data.steps_8,
            steps_9:data.steps_9,
            saved_as:data.saved_as,
            star_rating:data.star_rating,            
           },{"headers":headers}).then((response)=>{
               console.log(response)
            })}
             catch(error){           
             toast.error("Login requreid",{
                position: toast.POSITION.TOP_CENTER,
                className: 'mt-5'
              })
          }
    }       
    return (
        <div className='csoverflow'>
            <div className="form-body">
                <div className="row">
                    <div className="form-holder d-flex justify-content-center">
                        <div className="form-content">
                            <div className="form-items">
                                <h3 className='text-center'>Create Service</h3>                               
                                <form onSubmit={handleSubmit(onSubmit)}>                                  
                                    <div className="col-md-12 position-relative">
                                        <input className="form-control" type="text" placeholder="Short title"  
                                         {...register("short_title", { required: true})}
                                        />
                                         {errors.short_title && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your short title.</p>}
                                    </div>

                                    <div className="col-md-12  position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Subtitle"  
                                        {...register("subtitle", { required: true})}
                                        />
                                        {errors.subtitle && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your subtitle.</p>}
                                    </div>

                                    {/* <div className="col-md-12">
                                        <label className="upload w-100 btn btn-dark btn-lg mt-3 bg-white text-dark">
                                            <input type="file" id="typeEmailX-2" className="form-control form-control-lg" 
                                            required
                                               {...register("intro_photo",{ required: false})}         
                                        />  
                                    Upload intro photo
                                        </label>
                                    </div> */}

                                    

                                   

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="number" placeholder="Price" 
                                        {...register("price", { required: true})}
                                        />
                                         {errors.price && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your price.</p>}
                                    </div>

                                    {/* <div className="col-md-12">
                                        <label className="upload w-100 btn btn-dark btn-lg mt-3 bg-white text-dark">
                                            <input type="file" id="typeEmailX-2" className="form-control form-control-lg" 
                                             {...register("intro_video", { required: false})}
                                            />
                                           Upload intro video
                                        </label>
                                    </div> */}

                                   <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Title"  
                                            {...register("title", { required: true})}
                                        />
                                         {errors.title && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your title.</p>}
                                    </div>   

                                    <div className="col-md-12 position-relative mt-4">
                                        <select className="form-select mt-3" {...register("service_required_for", { required: true })}>
                                            <option disabled >Service required for</option>
                                            <option value="For Salaried">Salaried </option>
                                            <option value="Self own business">Self own business</option>                                            
                                        </select>                                       
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Description main" 
                                         {...register("description_main", { required: true})}
                                        />
                                        {errors.description_main && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description main.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Description 1"  
                                           {...register("description_1", { required: true})}/>
                                           {errors.description_1 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description 1.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Description 2"  
                                           {...register("description_2", { required: true})}/>
                                            {errors.description_2 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description 2.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Description 3"  
                                           {...register("description_3", { required: true})}/>
                                            {errors.description_3 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description 3.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Description 4"  
                                           {...register("description_4", { required: true})}/>
                                            {errors.description_4 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description 4.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Description 5"  
                                           {...register("description_5", { required: true})}/>
                                            {errors.description_5 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description 5.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Description 6"  
                                           {...register("description_6", { required: true})}/>
                                            {errors.description_6 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description 6.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Description 7"  
                                           {...register("description_7", { required: true})}/>
                                            {errors.description_7 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description 7.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Description 8"  
                                           {...register("description_8", { required: true})}/>
                                            {errors.description_8 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your description 8.</p>}
                                    </div>                                   
 

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Service include 1"  
                                           {...register("service_include_1", { required: true})}
                                        />
                                        {errors.service_include_1 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your service include 1.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Service include 2"  
                                         {...register("service_include_2", { required: true})}
                                        />
                                         {errors.service_include_2 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your service include 2.</p>}

                                        
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Service include 3"  
                                         {...register("service_include_3", { required: true})}
                                        />
                                         {errors.service_include_3 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your service include 3.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Service include 4"  
                                         {...register("service_include_4", { required: true})}
                                        />
                                         {errors.service_include_4 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your service include 4.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Service include 5"  
                                         {...register("service_include_5", { required: true})}
                                        />
                                         {errors.service_include_5 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your service include 5.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Service include 6"  
                                         {...register("service_include_6", { required: true})}
                                        />
                                         {errors.service_include_6 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your service include 6.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Service include 7"  
                                         {...register("service_include_7", { required: true})}
                                        />
                                         {errors.service_include_7 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your service include 7.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Service include 8"                                          
                                         {...register("service_include_8", { required: true})}
                                        />
                                         {errors.service_include_8 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type your service include 8.</p>}
                                    </div>

                                    
                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Document required 1"  
                                         {...register("document_required_1", { required: true})}/>
                                          {errors.document_required_1 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document required 1.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Document required 2"  
                                         {...register("document_required_2", { required: true})}/>
                                          {errors.document_required_2 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document required 2.</p>}
                                    </div>
                                    
                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Document required 3"  
                                         {...register("document_required_3", { required: true})}/>
                                          {errors.document_required_3 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document required 3.</p>}
                                    </div>
                                    
                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Document required 4"  
                                         {...register("document_required_4", { required: true})}/>
                                          {errors.document_required_4 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document required 4.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Document required 5"  
                                         {...register("document_required_5", { required: true})}/>
                                          {errors.document_required_5 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document required 5.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Document required 6"  
                                         {...register("document_required_6", { required: true})}/>
                                          {errors.document_required_6 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document required 6.</p>}
                                    </div>
                                    
                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Document required 7"  
                                         {...register("document_required_7", { required: true})}/>
                                          {errors.document_required_7 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document required 7.</p>}
                                    </div>
                                    
                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Document required 8"  
                                         {...register("document_required_8", { required: true})}/>
                                          {errors.document_required_8 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document required 8.</p>}
                                    </div>

                                    
                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="number" placeholder="Total duration"  
                                             {...register("total_duration", { required: true})}
                                             />
                                              {errors.total_duration && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type total duration.</p>}                                       
                                    </div>                                    
                    
                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Steps 1"  
                                          {...register("steps_1", { required: true})}
                                        />
                                        {errors.steps_1 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 1.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Steps 2"  
                                          {...register("steps_2", { required: true})}
                                        />
                                           {errors.steps_2 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 2.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Steps 3"  
                                          {...register("steps_3", { required: true})}
                                          />
                                          {errors.steps_3 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 3.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Steps 4"  
                                          {...register("steps_4", { required: true})}
                                        />
                                           {errors.steps_4 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 4.</p>}
                                    </div>

                                    
                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Steps 5"  
                                          {...register("steps_5", { required: true})}
                                        />
                                           {errors.steps_5 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 5.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Steps 6"  
                                          {...register("steps_6", { required: true})}
                                        />
                                           {errors.steps_6 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 6.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Steps 7"  
                                          {...register("steps_7", { required: true})}
                                        />
                                           {errors.steps_7 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 7.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Steps 8"  
                                          {...register("steps_8", { required: true})}
                                        />
                                           {errors.steps_8 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 8.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Steps 9"  
                                          {...register("steps_9", { required: true})}
                                        />
                                           {errors.steps_9 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type step 9.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="text" placeholder="Saved as" 
                                          {...register("saved_as", { required: true})}
                                        />
                                        {errors.saved_as && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type saved_as.</p>}
                                    </div>

                                    <div className="col-md-12 position-relative mt-4">
                                        <input className="form-control" type="number"  placeholder="Star rating" 
                                         {...register("star_rating", { required: true})}
                                        />
                                         {errors.star_rating && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type star_rating.</p>}
                                    </div>

                         
                                    <div className="form-button mt-5 text-center">
                                        <button id="submit" type="submit" className="btn btn-light">Create</button>
                                    </div>
                                    <ToastContainer />                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
