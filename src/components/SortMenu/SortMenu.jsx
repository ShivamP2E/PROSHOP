import React from 'react'
import './SortMenu.css'
import dropdown_icon from '../Assets/dropdown_icon.png'

const SortMenu = () => {
  return (
    <>
    <div className='collection-heading'>
        <h1>MAN COLLECTIONS</h1>
        <p>120 Items</p>
    </div>
    <div className='sort-menu'>
        <div className='view-menu'>
            <p>View: <span>Grid</span></p>
            <img src={dropdown_icon} alt="" />
        </div>
        <div className='view-menu'>
            <p>Sort by: <span>Featured</span></p>
            <img src={dropdown_icon} alt="" />
        </div>
        <div className='view-button'>
            <button>Open Filter</button>
        </div>
    </div>
    
    </>
  )
}

export default SortMenu