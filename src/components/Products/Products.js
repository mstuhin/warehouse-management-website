import './Products.css';
import products1 from '../../images/bike3.jpg';

const Products = () => {
    return (


        <div className='productsContainer cols row-4'>

            <div className='product'>
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

            <div className='product'>
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

            <div className='product'>
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

export default Products;