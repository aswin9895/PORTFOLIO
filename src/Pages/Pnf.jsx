import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{paddingTop:"120px",minHeight:"90vh"}} className="d-flex justify-content-evenly align-items-center flex-column text-light container">
      <h1 className="fw-bolder fs-1 mb-2">ERROR 404</h1>
      <img className='img-fluid' width={'500px'} height={'200px'} src='https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif' alt="" />
      <h1 className="fw-bold fs-3 mb-2">Looks like You'r Lost.</h1>
      <p className="mb-2">The Page You Are Looking For Is Not Available.</p>
      <Link to={'/'} className='bg-success p-2 text-light rounded'>Home</Link>
    </div>
  )
}

export default Pnf