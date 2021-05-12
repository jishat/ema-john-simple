import React, { useContext } from 'react';
import './Categories.css';
import {CategoriesContext} from '../../App';

const Categories = () => {
    const [category, setCategory] = useContext(CategoriesContext);
    return (
        <div className="categories">
            <h2>Category: 
                <span onClick={()=>setCategory('All')}>All</span> 
                <span onClick={()=>setCategory('Laptop')}>Laptop</span> 
                <span onClick={()=>setCategory('Android')}>Android</span> 
                <span onClick={()=>setCategory('Camera')}>Camera</span> 
            </h2>
        </div>
    );
};

export default Categories;