import React from "react";
import StoreTable from '../components/StoreTable'
import ZipSearch from '../components/ZipSearch'

function StoresPage({ stores }) {
    return (
        <>
            <h2>Store Locator</h2>
            <p>Use the below for the find a store near you!</p>
            <StoreTable stores={stores} />
            <ZipSearch />
        </>
    );
}

export default StoresPage;