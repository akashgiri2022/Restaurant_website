import React from 'react'
import { useState } from 'react';
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard"


const  Restaurant=() =>{
    const[menuData,setmenuData]=useState(Menu);

    const filterItem=(category)=>{
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category === category;
        });
        setmenuData(updatedList);

    };


  return (
    <>

    <nav className='navbar'>
        <div className='btn-group'>
            <button className='btn-group__item'onClick={()=>filterItem("Breakfast")}>
                Breakfast
            </button>
            <button className='btn-group__item'>
                Lunch
            </button>
            <button className='btn-group__item'>
                Evening
            </button>
            <button className='btn-group__item'>
                Dinner
            </button>

        </div>

    </nav>

    <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant
