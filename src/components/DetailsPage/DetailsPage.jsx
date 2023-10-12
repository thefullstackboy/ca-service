import React from 'react'
import "../DetailsPage/DetailsPage.css"
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import GradeIcon from '@mui/icons-material/Grade';

function DetailsPage() {
  return (
    <div className='container'>
        <div className="row shadow-lg pageDetailsbg mt-5 mb-5">       
        <div className='col-md-4 col-lg-4 col-xl-4 col-xxl-4 col-sm-12   mt-3 justify-content-center p-3 my-2'>
        <img src="https://codingyaar.com/wp-content/uploads/chair-image.jpg" className="card-img-top" alt="..."/>
            </div>
            <div className='col-md-8 col-lg-8 col-xl-8 col-xxl-8 col-sm-12  mt-3 justify-content-center p-3 my-2'>
              <h2 className='text-left text-white fw-bold'>The Complete 2023 Web Development Bootcamp</h2>
              <h6 className='text-left text-white mt-3 fw-bolder'>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps</h6>
              <p className='text-white mt-3 fs-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>
              <div className='d-flex justify-content-start'>
              <iframe width="460" height="215" src="https://www.youtube.com/embed/EJHPltmAULA?si=i6lHVnQc5igHBeys" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
              <h4 className='text-left text-white mt-3'>Service Include</h4>
              <div className='row'>
              <div className='col-md-4'>
                 <p className='text-white fs-5'><DoneOutlineIcon/> text text text text</p>
                 <p className='text-white fs-5'><DoneOutlineIcon/> text text text text</p>
                 <p className='text-white fs-5'><DoneOutlineIcon/> text text text text</p>
                 <p className='text-white fs-5'><DoneOutlineIcon/> text text text text</p>
              </div>
              <div className='col-md-4'>
                 <p className='text-white fs-5'><DoneOutlineIcon/> text text text text</p>
                 <p className='text-white fs-5'><DoneOutlineIcon/> text text text text</p>
                 <p className='text-white fs-5'><DoneOutlineIcon/> text text text text</p>
                 <p className='text-white fs-5'><DoneOutlineIcon/> text text text text</p>
              </div>
              </div>

              <h4 className='text-left text-white mt-3'>Document Required</h4>
              <div className='row'>
              <div className='col-md-4'>
                 <p className='text-white fs-5'><DocumentScannerIcon/> text text text text</p>
                 <p className='text-white fs-5'><DocumentScannerIcon/> text text text text</p>
                 <p className='text-white fs-5'><DocumentScannerIcon/> text text text text</p>
                 <p className='text-white fs-5'><DocumentScannerIcon/> text text text text</p>
              </div>
              <div className='col-md-4'>
                 <p className='text-white fs-5'><DocumentScannerIcon/> text text text text</p>
                 <p className='text-white fs-5'><DocumentScannerIcon/> text text text text</p>
                 <p className='text-white fs-5'><DocumentScannerIcon/> text text text text</p>
                 <p className='text-white fs-5'><DocumentScannerIcon/> text text text text</p>
              </div>
              </div>

              <h4 className='text-left text-white mt-3'>Total Duration: 03:00:00</h4>
              <span  className="btn"><GradeIcon className='fs-2 text-white'/>
        <GradeIcon className='fs-2 text-white'/> <GradeIcon className='fs-2 text-white'/> <GradeIcon className='fs-2 text-white'/> <GradeIcon className='fs-2 text-white'/></span>

            </div>

        </div>
    </div>
  )
}

export default DetailsPage