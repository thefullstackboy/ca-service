import React from 'react'
import "../Home/Home.css"
import GradeIcon from '@mui/icons-material/Grade';

function Home() {
  return (
<div className='maincontainer'>
<div className="container"> 
  <div className="card  mt-4">
    <img src="https://codingyaar.com/wp-content/uploads/chair-image.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <div className="text-section">
        <h4 className="card-title fw-bold text-white">Card title</h4>
        <h6 className="card-title fw-bold text-white">Card title</h6>
        <p className="card-text text-white">Some quick example text to build on the card's content.</p>
      </div>
      <div className="cta-section">
        <div className='text-white'>₹129.00</div>
        <span  className="btn"><GradeIcon className='fs-6 text-white'/>
        <GradeIcon className='fs-6 text-white'/> <GradeIcon className='fs-6 text-white'/> <GradeIcon className='fs-6 text-white'/> <GradeIcon className='fs-6 text-white'/></span>
      </div>
    </div>
  </div>


  <div className="card  mt-4">
    <img src="https://codingyaar.com/wp-content/uploads/chair-image.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <div className="text-section">
        <h4 className="card-title fw-bold text-white">Card title</h4>
        <h6 className="card-title fw-bold text-white">Card title</h6>
        <p className="card-text text-white">Some quick example text to build on the card's content.</p>
      </div>
      <div className="cta-section">
        <div className='text-white'>₹129.00</div>
        <span  className="btn"><GradeIcon className='fs-6 text-white'/>
        <GradeIcon className='fs-6 text-white'/> <GradeIcon className='fs-6 text-white'/> <GradeIcon className='fs-6 text-white'/> <GradeIcon className='fs-6 text-white'/></span>
      </div>
    </div>
  </div>


    <div className="card  mt-4">
    <img src="https://codingyaar.com/wp-content/uploads/chair-image.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <div className="text-section">
        <h4 className="card-title fw-bold text-white">Card title</h4>
        <h6 className="card-title fw-bold text-white">Card title</h6>
        <p className="card-text text-white">Some quick example text to build on the card's content.</p>
      </div>
      <div className="cta-section">
        <div className='text-white'>₹129.00</div>
        <span  className="btn"><GradeIcon className='fs-6 text-white'/>
        <GradeIcon className='fs-6 text-white'/> <GradeIcon className='fs-6 text-white'/> <GradeIcon className='fs-6 text-white'/> <GradeIcon className='fs-6 text-white'/></span>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Home