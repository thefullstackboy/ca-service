import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CONSTANTS from "../../main";
import GradeIcon from '@mui/icons-material/Grade';
import "../Home/Home2.css"

function Home2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('access');
    console.log(token)
const headers = {
'Authorization': `Bearer ${token}`,
'Content-Type': 'application/json',
};
  axios.get(`${CONSTANTS.APIURL.SERVICE_LIST}`,{headers})
      .then(response => {
         Object.values(data)
        
        
        setData(response.data);          
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [data]);


  let showInterst =()=>{
    alert("Show Interset")
  } 
  return (
<div className='maincontainer'>
<div className="container"> 
    <div className="cardabc card p-3 pt-4">
    <img src="https://codingyaar.com/wp-content/uploads/chair-image.jpg" className="cardabc-img-top" alt="..."/>
    <div className="cardabc-body">
      <div className="text-section">
        {
           Object.values(data).map((index)=>{
            return (
              <>
              <p>{console.log("All data",index)}</p>
              </>
            )
          })
        }
        <h4 className="card-title fw-bold text-white">Card title</h4>
        <h6 className="card-title fw-bold text-white">Card title</h6>
        <p className="card-text text-white">Some quick example text to build on the cardabc's content.</p>
      </div>
      <div className="cta-section">
        <div className='text-white btn' onClick={showInterst}><button type="button" class="btn btn-light">Show Interst</button></div>
        <div className='text-white'>₹129.00</div>
        <span  className="btn"><GradeIcon className='fs-6 text-white'/>
        <GradeIcon className='fs-6 text-white'/> <GradeIcon className='fs-6 text-white'/> <GradeIcon className='fs-6 text-white'/> <GradeIcon className='fs-6 text-white'/></span>
      </div>
    </div>
  </div>
  <div className="cardabc card p-3 pt-4">
    <img src="https://codingyaar.com/wp-content/uploads/chair-image.jpg" className="cardabc-img-top" alt="..."/>
    <div className="cardabc-body">
      <div className="text-section">
        <h4 className="card-title fw-bold text-white">Card title</h4>
        <h6 className="card-title fw-bold text-white">Card title</h6>
        <p className="card-text text-white">Some quick example text to build on the cardabc's content.</p>
      </div>
      <div className="cta-section">
        <div className='text-white'>₹129.00</div>     
        <span  className="btn"><GradeIcon className='fs-6 text-white'/>
        <GradeIcon className='fs-6 text-white'/> <GradeIcon className='fs-6 text-white'/> <GradeIcon className='fs-6 text-white'/> <GradeIcon className='fs-6 text-white'/></span>
      </div>
    </div>
  </div>

  <div className="cardabc card p-3 pt-4">
    <img src="https://codingyaar.com/wp-content/uploads/chair-image.jpg" className="cardabc-img-top" alt="..."/>
    <div className="cardabc-body">
      <div className="text-section">
        <h4 className="card-title fw-bold text-white">Card title</h4>
        <h6 className="card-title fw-bold text-white">Card title</h6>
        <p className="card-text text-white">Some quick example text to build on the cardabc's content.</p>
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

export default Home2