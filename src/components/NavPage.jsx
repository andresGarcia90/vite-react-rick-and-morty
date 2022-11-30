import React, { useState } from 'react'

function NavPage(props) {

    const handleClick = (event) => {
      props.setPage(props.page + 1)
    }
    
  return (
    <header className='d-flex justify-content-between align-items-center'>
        <p>Page {props.page}</p>
        <button className='btn btn-primary btn-sm' onClick={handleClick}> Page {props.page + 1}</button>

    </header>
  )
}

export default NavPage