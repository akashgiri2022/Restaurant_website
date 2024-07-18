import React,{useState} from 'react'



function Navbar({filterItem,menuList}) {
    
  return (
    <>
    <nav className='navbar'>
        <div className='btn-group'>
            <button className='btn-group__item'onClick={()=>filterItem("Breakfast")}>
                Breakfast
            </button>
            <button className='btn-group__item'onClick={()=>filterItem("Lunch")}>
                Lunch
            </button>
            <button className='btn-group__item'onClick={()=>filterItem("Evening")}>
                Evening
            </button>
            <button className='btn-group__item'onClick={()=>filterItem("Dinner")}>
                Dinner
            </button>
           
            
            
        </div>

    </nav>
      
    </>
  )
}

export default Navbar
