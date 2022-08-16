import React from "react";
import GroceryTable from "../components/GroceryTable";

function OrderPage({ items }) {
    return (
        <>
            <h2>Place an Order</h2>
            <p>Select the quantity for each item!</p>
            <GroceryTable items={items} />
        </>
    );
}

export default OrderPage;