import ReactStars from "react-rating-stars-component";
import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm, Controller } from "react-hook-form";
import CONSTANTS from "../../main";
import "../CreateService/CreateService.css";


function CreateService() {
    const { register, handleSubmit, control, formState: { errors }, setValue, getValues } = useForm();
    const thirdExample = {
        size: 40,
        count: 5,
        color: "white",
        activeColor: "white",
        value: 7.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
    };
    const onSubmit = (data) => {
        let bodyFormData = new FormData();
        let token = localStorage.getItem('access');
        bodyFormData.append('title', data.title)
        bodyFormData.append('subtitle', data.subtitle)
        bodyFormData.append('short_title', data.short_title)
        bodyFormData.append('price', data.price)
        bodyFormData.append('service_required_for', data.service_required_for)
        bodyFormData.append('intro_photo', data.image)
        bodyFormData.append('intro_video', data.video)
        bodyFormData.append('description_main', data.description_main)
        bodyFormData.append('description_1', data.description_1)
        bodyFormData.append('description_2', data.description_2)
        bodyFormData.append('description_3', data.description_3)
        bodyFormData.append('description_4', data.description_4)
        bodyFormData.append('description_5', data.description_5)
        bodyFormData.append('description_6', data.description_6)
        bodyFormData.append('description_7', data.description_7)
        bodyFormData.append('description_8', data.description_8)
        bodyFormData.append('service_include_1', data.service_include_1)
        bodyFormData.append('service_include_2', data.service_include_2)
        bodyFormData.append('service_include_3', data.service_include_3)
        bodyFormData.append('service_include_4', data.service_include_4)
        bodyFormData.append('service_include_5', data.service_include_5)
        bodyFormData.append('service_include_6', data.service_include_6)
        bodyFormData.append('service_include_7', data.service_include_7)
        bodyFormData.append('service_include_8', data.service_include_8)
        bodyFormData.append('document_required_1', data.document_required_1)
        bodyFormData.append('document_required_2', data.document_required_2)
        bodyFormData.append('document_required_3', data.document_required_3)
        bodyFormData.append('document_required_4', data.document_required_4)
        bodyFormData.append('document_required_5', data.document_required_5)
        bodyFormData.append('document_required_6', data.document_required_6)
        bodyFormData.append('document_required_7', data.document_required_7)
        bodyFormData.append('document_required_8', data.document_required_8)
        bodyFormData.append('steps_1', data.steps_1)
        bodyFormData.append('steps_2', data.steps_2)
        bodyFormData.append('steps_3', data.steps_3)
        bodyFormData.append('steps_4', data.steps_4)
        bodyFormData.append('steps_5', data.steps_5)
        bodyFormData.append('steps_6', data.steps_6)
        bodyFormData.append('steps_7', data.steps_7)
        bodyFormData.append('steps_8', data.steps_8)
        bodyFormData.append('total_duration', data.total_duration)
        bodyFormData.append('saved_as', data.saved_as)
        bodyFormData.append('star_rating', data.rating)
        axios({
            method: "post",
            url: CONSTANTS.APIURL.SERVICE_CREATE,
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            },
        })
            .then(function (response) {
                //handle success
                console.log(response);
                toast.success("Create service successfully.", {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'mt-4',
                });
            })
            .catch(function (response) {
                //handle error
                console.log(response);
                toast.error('Login required', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'mt-4'
                });
            });
    }
    return (
        <>
            <div className="container creatform my-3">
                <h4 className="mt32 text-center text-white">Create Service</h4>

                <form className="mt32" action="#" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row mt-2">
                        <label className="control-label col-sm-2 text-white fs-7 fw-bold">Title</label>
                        <div className="col-sm-7 position-relative">
                            <input type="text" className="form-control"
                                {...register("title", { required: true })}
                            />
                            {errors.title && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type title</p>}
                        </div>
                    </div>

                    <div className="form-group row mt-5">
                        <label className="control-label col-sm-2 text-white fs-7 fw-bold">Subtitle</label>
                        <div className="col-sm-7 position-relative">
                            <input type="text" className="form-control"
                                {...register("subtitle", { required: true })}
                            />
                            {errors.subtitle && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type subtitle</p>}
                        </div>
                    </div>

                    <div className="form-group row mt-5">
                        <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Short title</label>
                        <div className="col-sm-7 position-relative">
                            <input type="text" className="form-control"
                                {...register("short_title", { required: true })}
                            />
                            {errors.short_title && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type short title</p>}
                        </div>
                    </div>

                    <div className="form-group row mt-5">
                        <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">price</label>
                        <div className="col-sm-7 position-relative">
                            <input type="number" className="form-control"
                                min="1"
                                {...register("price", { required: true, min: 1 })}
                            />
                            {errors.price && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type price</p>}
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Business type</label>
                        <div className="col-sm-9 mlr">
                            <input type="radio" value="For Salaried" checked {...register("service_required_for", { required: false })} /><label className="text-white">Salaried</label>
                            <span className='col-sm-9 mlr'>
                                <input type="radio"  {...register("service_required_for", { required: false })} value="Self own business" /><label className="text-white">Self Employed</label>
                            </span>
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Intro photo</label>
                        <div className="col-sm-7 position-relative">
                            <Controller
                                className="form-control"
                                name="image"
                                control={control}
                                rules={{
                                    required: "* Please select an image file.",
                                    validate: {
                                        isImage: (value) => {
                                            if (value[0].size > 1048576) return 'File size must be less than 1MB';
                                            if (value[0]) {
                                                const acceptedFormats = ["image/jpeg", "image/png", "image/gif"];
                                                if (acceptedFormats.includes(value[0].type)) {
                                                    return true;
                                                }
                                                return "Invalid file format. Supported formats: JPEG, PNG, GIF";
                                            }
                                            return true;
                                        },
                                    },
                                }}
                                render={({ field }) => (
                                    <>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                field.onChange(e.target.files);
                                            }}
                                        />
                                        {errors.image && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>{errors.image.message}</p>}
                                    </>
                                )}
                            />
                        </div>
                    </div>

                    <div className="form-group row mt-5">
                        <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Intro video</label>
                        <div className="col-sm-7 position-relative">
                            <Controller
                                className="form-control"
                                name="video"
                                control={control}
                                rules={{
                                    required: "* Please select an video file.",
                                    validate: {
                                        isImage: (value) => {
                                            if (value[0].size > 10485760) return 'File size must be less than 10MB';
                                            if (value[0]) {
                                                const acceptedFormats = ["video/mp4"];
                                                if (acceptedFormats.includes(value[0].type)) {
                                                    return true;
                                                }
                                                return "Invalid file format. Supported formats: mp4";
                                            }
                                            return true;
                                        },
                                    },
                                }}
                                render={({ field }) => (
                                    <>
                                        <input
                                            type="file"
                                            accept="video/*"
                                            onChange={(e) => {
                                                field.onChange(e.target.files);
                                            }}
                                        />
                                        {errors.video && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>{errors.video.message}</p>}
                                    </>
                                )}
                            />
                        </div>
                    </div>

                    <hr className="text-white mt-5"></hr>
                    <h4 className="mt32 text-center text-white">Description</h4>
                    <div className="form-group row mt-3">
                        <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Description main</label>
                        <div className="col-sm-7 position-relative">
                            <textarea className="form-control" resize="none" rows="5"
                                {...register("description_main", { required: true })}
                            />
                            {errors.description_main && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type description main</p>}
                        </div>
                    </div>
                    <div className="form-group row mt-3 ">
                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Description 1</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("description_1", { required: true })}
                                />
                                {errors.description_1 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type description 1</p>}
                            </div>
                            <div className="col-auto textml ">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Description 2</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("description_2", { required: true })}
                                />
                                {errors.description_2 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type description 2</p>}
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Description 3</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("description_3", { required: true })}
                                />
                                {errors.description_3 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type description 3</p>}
                            </div>
                            <div className="col-auto textml ">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Description 4</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("description_4", { required: true })}
                                />
                                {errors.description_4 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type description 4</p>}
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Description 5</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("description_5", { required: true })}
                                />
                                {errors.description_5 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type description 5</p>}
                            </div>
                            <div className="col-auto textml ">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Description 6</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("description_6", { required: true })}
                                />
                                {errors.description_6 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type description 6</p>}
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Description 7</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("description_7", { required: true })}
                                />
                                {errors.description_7 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type description 7</p>}
                            </div>
                            <div className="col-auto textml ">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Description 8</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("description_8", { required: true })}
                                />
                                {errors.description_8 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type description 8</p>}
                            </div>
                        </div>
                    </div>

                    <hr className="text-white mt-5"></hr>
                    <h4 className="mt32 text-center text-white">Services Include</h4>
                    <div className="form-group row mt-3 ">
                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Service 1</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("service_include_1", { required: true })}
                                />
                                {errors.service_include_1 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type service 1</p>}
                            </div>
                            <div className="col-auto textml ">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Service 2</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("service_include_2", { required: true })}
                                />
                                {errors.service_include_2 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type service 2</p>}
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Service 3</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("service_include_3", { required: true })}
                                />
                                {errors.service_include_3 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type service 3</p>}
                            </div>
                            <div className="col-auto textml ">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Service 4</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("service_include_4", { required: true })}
                                />
                                {errors.service_include_4 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type service 4</p>}
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Service 5</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("service_include_5", { required: true })}
                                />
                                {errors.service_include_5 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type service 5</p>}
                            </div>
                            <div className="col-auto textml ">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Service 6</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("service_include_6", { required: true })}
                                />
                                {errors.service_include_6 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type service 6</p>}
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Service 7</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("service_include_7", { required: true })}
                                />
                                {errors.service_include_7 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type service 7</p>}
                            </div>
                            <div className="col-auto textml ">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Service 8</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("service_include_8", { required: true })}
                                />
                                {errors.service_include_8 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type service 8</p>}
                            </div>
                        </div>
                    </div>




                    <hr className="text-white mt-5"></hr>
                    <h4 className="mt32 text-center text-white">Documents Required</h4>
                    <div className="form-group row mt-3 ">
                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Document 1</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("document_required_1", { required: true })}
                                />
                                {errors.document_required_1 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document 1</p>}
                            </div>
                            <div className="col-auto textml ">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Document 2</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("document_required_2", { required: true })}
                                />
                                {errors.document_required_2 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document 2</p>}
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Document 3</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("document_required_3", { required: true })}
                                />
                                {errors.document_required_3 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document 3</p>}
                            </div>
                            <div className="col-auto textml ">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Document 4</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("document_required_4", { required: true })}
                                />
                                {errors.document_required_4 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document 4</p>}
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Document 5</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("document_required_5", { required: true })}
                                />
                                {errors.document_required_5 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document 5</p>}
                            </div>
                            <div className="col-auto textml ">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Document 6</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("document_required_6", { required: true })}
                                />
                                {errors.document_required_6 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document 6</p>}
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Document 7</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("document_required_7", { required: true })}
                                />
                                {errors.document_required_7 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document 7</p>}
                            </div>
                            <div className="col-auto textml ">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Document 8</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("document_required_8", { required: true })}
                                />
                                {errors.document_required_8 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type document 8</p>}
                            </div>
                        </div>
                    </div>





                    <hr className="text-white mt-5"></hr>
                    <h4 className="mt32 text-center text-white">Steps Include</h4>
                    <div className="form-group row mt-3 ">
                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Step 1</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("steps_1", { required: true })}
                                />
                                {errors.steps_1 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type Step 1</p>}
                            </div>
                            <div className="col-auto textml ">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Step 2</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("steps_2", { required: true })}
                                />
                                {errors.steps_2 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type Step 2</p>}
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Step 3</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("steps_3", { required: true })}
                                />
                                {errors.steps_3 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type Step 3</p>}
                            </div>
                            <div className="col-auto textml ">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Step 4</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("steps_4", { required: true })}
                                />
                                {errors.steps_4 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type Step 4</p>}
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Step 5</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("steps_5", { required: true })}
                                />
                                {errors.steps_5 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type Step 5</p>}
                            </div>
                            <div className="col-auto textml ">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Step 6</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("steps_6", { required: true })}
                                />
                                {errors.steps_6 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type Step 6</p>}
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Step 7</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("steps_7", { required: true })}
                                />
                                {errors.steps_7 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type Step 7</p>}
                            </div>
                            <div className="col-auto textml ">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Step 8</label>
                            </div>
                            <div className="col-auto position-relative">
                                <textarea type="text" rows="2" className="form-control deswidth"
                                    {...register("steps_8", { required: true })}
                                />
                                {errors.steps_8 && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type Step 8</p>}
                            </div>
                        </div>





                        <div className="row g-3">
                            <div className="col-auto">
                                <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Duration</label>
                            </div>
                            <div className="col-auto position-relative">
                                <input type="number" rows="2" className="form-control deswidth"
                                    min="1"
                                    {...register("total_duration", { required: true })}
                                />
                                {errors.total_duration && <p className='text-start text-white text-wrap position-absolute bottom-1 start-0'>* Please type Duration</p>}
                            </div>
                        </div>
                    </div>


                    <hr className="text-white mt-5"></hr>
                    <div className="form-group row mt-3">
                        <label className="control-label col-sm-2 text-white fw-bold  text-nowrap">Save As</label>
                        <div className="col-sm-9 mlr">
                            <input type="radio" value="Publish" checked {...register("saved_as", { required: false })} /><label className="text-white">Publish</label>
                            <span className='col-sm-9 mlr'>
                                <input type="radio"  {...register("saved_as", { required: false })} value="Draft" /><label className="text-white">Draft</label>
                            </span>
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label className="control-label col-sm-2 text-white fw-bold  text-nowrap mt-4">Rate this item:</label>
                        <div className="col-sm-9">
                            <Controller
                                name="rating"
                                control={control}
                                defaultValue={0}
                                rules={{ required: 'Please select a rating' }}
                                render={({ field }) => (
                                    <ReactStars
                                        {...thirdExample}
                                        {...field}
                                        value={getValues('rating')}
                                        onChange={(newRating) => setValue('rating', newRating)}
                                    />
                                )}
                            />
                        </div>
                    </div>

                    <div className="form-button mt-4 text-center">
                        <button id="submit" type="submit" className="btn btn-light btn-lg">Create</button>
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </>
    )
}

export default CreateService