import React from 'react'
import { Spinner } from 'react-bootstrap'

 const LoaderComponent = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100vh'}}>
        <Spinner animation="grow" role="status" style={{width:'3rem', height:'3rem', margin:'2rem'}}></Spinner>

    </div>
  )
}

export default LoaderComponent