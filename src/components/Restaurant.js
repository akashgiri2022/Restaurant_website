import React from 'react'
import { useState } from 'react';
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard"
import Navbar from "./Navbar"

const uniqueList=[new Set(Menu.map((curElem)=>{
 return curElem.category
}))]

console.log(uniqueList);


const  Restaurant=() =>{
    const[menuData,setmenuData]=useState(Menu);
    const [menulist,setmenuList]=useState(uniqueList);


    
    const filterItem=(category)=>{
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category === category;
        });
        setmenuData(updatedList);

    };


  return (
    <>
    <Navbar filterItem={filterItem} menulist={menulist}/>
    <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant
