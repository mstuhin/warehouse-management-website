import React, { useEffect, useRef, useState } from 'react';
import './Inventory.css';
import products1 from '../../images/img1.jpg';
import products2 from '../../images/hero2.jpg';
import Item from '../Items/Item/Item';





const Inventory = () => {

    const [inventory, setInventory] = useState([]);
    const [update, setUpdate] = useState([]);


    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setInventory(data));
    }, []);

    const handleBt = (Item) => {
        const newUpdate = [...update, Item];
        setUpdate(newUpdate);
    }

    return (
        <div className="inv-container">
            <div className="env-container">
                {
                    inventory.map(inventory => <Item key={inventory.id}
                        inventory={inventory}
                        handleBt={handleBt}
                    ></Item>)
                }
                <p>Selected Items: {update.length}</p>
            </div>
            <div>


            </div>
        </div>



















    );
};

export default Inventory;