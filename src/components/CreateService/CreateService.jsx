import React from 'react'
import "../CreateService/CreateService.css"
import CONSTANTS from "../../main";
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function CreateService() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {    
        try {
            const token = localStorage.getItem('access');
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                };  
        const result = axios.post(CONSTANTS.APIURL.SERVICE_CREATE,{
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
            star_rating:data.star_rating       
           },{headers})  
           console.log(result)
         console.log(data)
         console.log(data.intro_photo)
          } catch(error){
             console.log("error12",error)
          }
    }       
    return (
        <div className='csoverflow'>
            <div class="form-body">
                <div class="row">
                    <div class="form-holder d-flex justify-content-center">
                        <div class="form-content">
                            <div class="form-items">
                                <h3>Create Service</h3>                               
                                <form onSubmit={handleSubmit(onSubmit)}>                                  
                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Short title"  
                                         {...register("short_title", { required: true})}
                                        />
                                         {errors.short_title && <p className='text-white text-start'>* Please type your short title.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Subtitle"  
                                        {...register("subtitle", { required: true})}
                                        />
                                        {errors.subtitle && <p className='text-white text-start'>* Please type your subtitle.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <label class="upload w-100 btn btn-dark btn-lg mt-3 bg-white text-dark">
                                            <input type="file" id="typeEmailX-2" className="form-control form-control-lg" 
                                            required
                                               {...register("intro_photo")}         
                                        />  
                                    Upload intro photo
                                        </label>
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="number" placeholder="Price" required
                                        {...register("price", { required: true})}
                                        />
                                         {errors.price && <p className='text-white text-start'>* Please type your price.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <label class="upload w-100 btn btn-dark btn-lg mt-3 bg-white text-dark">
                                            <input type="file" id="typeEmailX-2" className="form-control form-control-lg" 
                                             {...register("intro_video", { required: true})}
                                            />
                                           Upload intro video
                                        </label>
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Title" required 
                                            {...register("title", { required: true})}
                                        />
                                         {errors.title && <p className='text-white text-start'>* Please type your title.</p>}
                                    </div>   

                                    <div class="col-md-12">
                                        <select class="form-select mt-3" {...register("service_required_for", { required: true })}>
                                            <option disabled >Service required for</option>
                                            <option value="For Salaried">Salaried </option>
                                            <option value="Self own business">Self own business</option>                                            
                                        </select>                                       
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Description main" required
                                         {...register("description_main", { required: true})}
                                        />
                                        {errors.description_main && <p className='text-white text-start'>* Please type your description main.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Description 1" required 
                                           {...register("description_1", { required: true})}/>
                                           {errors.description_1 && <p className='text-white text-start'>* Please type your description 1.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Description 2" required 
                                           {...register("description_2", { required: true})}/>
                                            {errors.description_2 && <p className='text-white text-start'>* Please type your description 2.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Description 3" required 
                                           {...register("description_3", { required: true})}/>
                                            {errors.description_3 && <p className='text-white text-start'>* Please type your description 3.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Description 4" required 
                                           {...register("description_4", { required: true})}/>
                                            {errors.description_4 && <p className='text-white text-start'>* Please type your description 4.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Description 5" required 
                                           {...register("description_5", { required: true})}/>
                                            {errors.description_5 && <p className='text-white text-start'>* Please type your description 5.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Description 6" required 
                                           {...register("description_6", { required: true})}/>
                                            {errors.description_6 && <p className='text-white text-start'>* Please type your description 6.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Description 7" required 
                                           {...register("description_7", { required: true})}/>
                                            {errors.description_7 && <p className='text-white text-start'>* Please type your description 7.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Description 8" required 
                                           {...register("description_8", { required: true})}/>
                                            {errors.description_8 && <p className='text-white text-start'>* Please type your description 8.</p>}
                                    </div>                                   
 

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Service include 1" required 
                                           {...register("service_include_1", { required: true})}
                                        />
                                        {errors.service_include_1 && <p className='text-white text-start'>* Please type your service include 1.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Service include 2" required 
                                         {...register("service_include_2", { required: true})}
                                        />
                                         {errors.service_include_2 && <p className='text-white text-start'>* Please type your service include 2.</p>}

                                        
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Service include 3" required 
                                         {...register("service_include_3", { required: true})}
                                        />
                                         {errors.service_include_3 && <p className='text-white text-start'>* Please type your service include 3.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Service include 4" required 
                                         {...register("service_include_4", { required: true})}
                                        />
                                         {errors.service_include_4 && <p className='text-white text-start'>* Please type your service include 4.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Service include 5" required 
                                         {...register("service_include_5", { required: true})}
                                        />
                                         {errors.service_include_5 && <p className='text-white text-start'>* Please type your service include 5.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Service include 6" required 
                                         {...register("service_include_6", { required: true})}
                                        />
                                         {errors.service_include_6 && <p className='text-white text-start'>* Please type your service include 6.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Service include 7" required 
                                         {...register("service_include_7", { required: true})}
                                        />
                                         {errors.service_include_7 && <p className='text-white text-start'>* Please type your service include 7.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Service include 8" required                                         
                                         {...register("service_include_8", { required: true})}
                                        />
                                         {errors.service_include_8 && <p className='text-white text-start'>* Please type your service include 8.</p>}
                                    </div>

                                    
                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Document required 1" required 
                                         {...register("document_required_1", { required: true})}/>
                                          {errors.document_required_1 && <p className='text-white text-start'>* Please type document required 1.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Document required 2" required 
                                         {...register("document_required_2", { required: true})}/>
                                          {errors.document_required_2 && <p className='text-white text-start'>* Please type document required 2.</p>}
                                    </div>
                                    
                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Document required 3" required 
                                         {...register("document_required_3", { required: true})}/>
                                          {errors.document_required_3 && <p className='text-white text-start'>* Please type document required 3.</p>}
                                    </div>
                                    
                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Document required 4" required 
                                         {...register("document_required_4", { required: true})}/>
                                          {errors.document_required_4 && <p className='text-white text-start'>* Please type document required 4.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Document required 5" required 
                                         {...register("document_required_5", { required: true})}/>
                                          {errors.document_required_5 && <p className='text-white text-start'>* Please type document required 5.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Document required 6" required 
                                         {...register("document_required_6", { required: true})}/>
                                          {errors.document_required_6 && <p className='text-white text-start'>* Please type document required 6.</p>}
                                    </div>
                                    
                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Document required 7" required 
                                         {...register("document_required_7", { required: true})}/>
                                          {errors.document_required_7 && <p className='text-white text-start'>* Please type document required 7.</p>}
                                    </div>
                                    
                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Document required 8" required 
                                         {...register("document_required_8", { required: true})}/>
                                          {errors.document_required_8 && <p className='text-white text-start'>* Please type document required 8.</p>}
                                    </div>

                                    
                                    <div class="col-md-12">
                                        <input class="form-control" type="number" placeholder="Total duration" required 
                                             {...register("total_duration", { required: true})}
                                             />
                                              {errors.total_duration && <p className='text-white text-start'>* Please type total duration.</p>}                                       
                                    </div>                                    
                    
                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Steps 1" required 
                                          {...register("steps_1", { required: true})}
                                        />
                                        {errors.steps_1 && <p className='text-white text-start'>* Please type step 1.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Steps 2" required 
                                          {...register("steps_2", { required: true})}
                                        />
                                           {errors.steps_2 && <p className='text-white text-start'>* Please type step 2.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Steps 3" required 
                                          {...register("steps_3", { required: true})}
                                          />
                                          {errors.steps_3 && <p className='text-white text-start'>* Please type step 3.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Steps 4" required 
                                          {...register("steps_4", { required: true})}
                                        />
                                           {errors.steps_4 && <p className='text-white text-start'>* Please type step 4.</p>}
                                    </div>

                                    
                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Steps 5" required 
                                          {...register("steps_5", { required: true})}
                                        />
                                           {errors.steps_5 && <p className='text-white text-start'>* Please type step 5.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Steps 6" required 
                                          {...register("steps_6", { required: true})}
                                        />
                                           {errors.steps_6 && <p className='text-white text-start'>* Please type step 6.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Steps 7" required 
                                          {...register("steps_7", { required: true})}
                                        />
                                           {errors.steps_7 && <p className='text-white text-start'>* Please type step 7.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Steps 8" required 
                                          {...register("steps_8", { required: true})}
                                        />
                                           {errors.steps_8 && <p className='text-white text-start'>* Please type step 8.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Steps 9" required 
                                          {...register("steps_9", { required: true})}
                                        />
                                           {errors.steps_9 && <p className='text-white text-start'>* Please type step 9.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" placeholder="Saved as" required
                                          {...register("saved_as", { required: true})}
                                        />
                                        {errors.saved_as && <p className='text-white text-start'>* Please type saved_as.</p>}
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="number"  placeholder="Star rating" required
                                         {...register("star_rating", { required: true})}
                                        />
                                         {errors.star_rating && <p className='text-white text-start'>* Please type star_rating.</p>}
                                    </div> 

                            
                                    <div class="form-button mt-3 text-center">
                                        <button id="submit" type="submit" class="btn btn-light">Create</button>
                                    </div>

                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
