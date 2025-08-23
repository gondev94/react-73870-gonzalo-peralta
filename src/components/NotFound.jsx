import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center', marginTop:15}}>
            <img src="https://i.postimg.cc/8Ppvh87N/error-404-with-the-cute-coffee-bean-mascot-free-vector.jpg" alt="Error" width={550} />
        <Link className='btn btn-dark' to='/'>Volver a Home</Link>
        </div>
    )
}

export default NotFound