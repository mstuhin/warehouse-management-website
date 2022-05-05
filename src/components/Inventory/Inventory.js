import React from 'react';
import './Inventory.css';
import products1 from '../../images/img1.jpg';
import products2 from '../../images/hero2.jpg';





const Inventory = () => {
    return (
        <div className='productsContainerInv  row gy-5'>

            <div className='productInv col'>
                <img src={products1} alt="" />
                <h1>Name: DriveSpark</h1>
                <h4>quantity: 5</h4>
                <h3>Price: 120$</h3>
                <h2>Supplier: Jak cod</h2>
                <button>Updated</button>
                <h4>Dimensions and Capacity
                    Fuel Capacity
                    12.8 L
                    Ground Clearance
                    165 mm
                    Length
                    2062 mm
                    Wheelbase
                    1338 mm
                    Kerb Weight
                    154.5 kg
                    Height
                    1106 mm
                    Saddle Height
                    795 mm
                    Width
                    778 m</h4>
            </div>

            <div className='productInv'>
                <img src={products2} alt="" />

                <h4>Dimensions and Capacity
                    Fuel Capacity
                    12.8 L
                    Ground Clearance
                    165 mm
                    Length
                    2062 mm
                    Wheelbase
                    1338 mm
                    Kerb Weight
                    154.5 kg
                    Height
                    1106 mm
                    Saddle Height
                    795 mm
                    Width
                    778 m</h4>
            </div>

            <div className='productInv'>
                <img src={products1} alt="" />

                <h4>Dimensions and Capacity
                    Fuel Capacity
                    12.8 L
                    Ground Clearance
                    165 mm
                    Length
                    2062 mm
                    Wheelbase
                    1338 mm
                    Kerb Weight
                    154.5 kg
                    Height
                    1106 mm
                    Saddle Height
                    795 mm
                    Width
                    778 m</h4>
            </div>

            <div className='productInv'>
                <img src={products1} alt="" />

                <h4>Dimensions and Capacity
                    Fuel Capacity
                    12.8 L
                    Ground Clearance
                    165 mm
                    Length
                    2062 mm
                    Wheelbase
                    1338 mm
                    Kerb Weight
                    154.5 kg
                    Height
                    1106 mm
                    Saddle Height
                    795 mm
                    Width
                    778 m</h4>
            </div>

            <div className='productInv'>
                <img src={products1} alt="" />

                <h4>Dimensions and Capacity
                    Fuel Capacity
                    12.8 L
                    Ground Clearance
                    165 mm
                    Length
                    2062 mm
                    Wheelbase
                    1338 mm
                    Kerb Weight
                    154.5 kg
                    Height
                    1106 mm
                    Saddle Height
                    795 mm
                    Width
                    778 m</h4>
            </div>


            <div className='productInv'>
                <img src={products1} alt="" />

                <h4>Dimensions and Capacity
                    Fuel Capacity
                    12.8 L
                    Ground Clearance
                    165 mm
                    Length
                    2062 mm
                    Wheelbase
                    1338 mm
                    Kerb Weight
                    154.5 kg
                    Height
                    1106 mm
                    Saddle Height
                    795 mm
                    Width
                    778 m</h4>
            </div>
        </div>



















    );
};

export default Inventory;