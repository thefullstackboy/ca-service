import React from 'react'
import "../CreateService/CreateService.css"

function CreateService() {
  return (
    <section className="" >
      <div className="container form-top">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card2">
              <div className="card-body p-5 text-center form-bg">
                <h3 className="mb-5 text-uppercase text-white">create service</h3>
                <div className="form-outline mb-4">
                  <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Short Title' />
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Sub Title' />
                </div>
                <div className="form-outline mb-4">
                  <label class="upload w-100 btn btn-light btn-lg">
                    <input type="file" id="typeEmailX-2" className="form-control form-control-lg" />
                    Upload Intro Photo
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <label class="upload w-100 btn btn-light btn-lg">
                    <input type="file" id="typeEmailX-2" className="form-control form-control-lg" />
                    Upload Intro Video
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Title' />
                </div>

                <div className="form-outline mb-4">
                  <select >
                    <option>Salaried</option>
                    <option>Self own business</option>
                  </select>
                </div>

                <div className="form-outline mb-4">
                  <textarea id="w3review" className="form-control form-control-lg" rows="4" cols="50" placeholder='Description'></textarea>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Service include' />
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Document required'/>
                </div>               

                <h4 className='text-left text-white mt-3'>Total Duration: 03:00:00</h4>

                <div className="form-outline mb-4">
                  <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Step'/>
                </div> 

                <div className="form-outline mb-4">
                  <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Save as Draft'/>
                </div> 

                  <div className="form-outline mb-4">
                  <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Start Rating'/>
                </div>            

                <button type="button" className="btn btn-light btn-lg">Create Service</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateService