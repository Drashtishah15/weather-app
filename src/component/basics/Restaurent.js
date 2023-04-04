import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi.js';
import MenuCard from './menuCard.js';
import Navbar from './Navbar.js';

const uniqueList = [
    ...new Set(Menu.map((curElem) => {
    return curElem.category;
})
),
"All",
];
console.log(uniqueList);

const Restaurent = () => {

    const [menuData, setmenuData] = useState(Menu);
    const [menuList , setmenuList] = useState(uniqueList)
    const filterItem = (category) => {

        if(category === "All"){
            setmenuData(Menu);
            return;
        }

        const updaetedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setmenuData(updaetedList)
    };

    return (
        <>
            <Navbar filterItem = {filterItem} menuList = {menuList}/>
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurent;
