import React from 'react';
import GroceryRow from './GroceryRow';


function GroceryTable({ items, quantity }) {
    return (
        <table id="grocerylist">
            <caption>Grocery items available for sale</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => <GroceryRow item={item} key={i} />)}
            </tbody>


        </table>
    );
}

export default GroceryTable;