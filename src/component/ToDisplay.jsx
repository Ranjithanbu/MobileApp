
import React, { useContext } from 'react';
import { myContext } from '../App';
const ToDisplay = ({ item, index }) => {

    // unique id for carousel

    let ide = "sec" + index;
    let ides = '#' + ide;

    // recieving context data from app component   

    const [data, setData] = useContext(myContext);


    // handle add quantity

    const handleAdd = (id, quantity) => {
        setData(pval => {
            return pval.map((val, index) => {
                if (val.id === id) {
                    return { ...val, quantity: (val.quantity + 1 || quantity + 1) }
                }
                return val
            })
        })
    }

    // handle remove quantity 

    const handleSud = (id, quantity) => {
        setData(pval => {
            return pval.map((val, index) => {
                if (val.id === id && quantity > 1 || val.quantity > 1) {
                    return { ...val, quantity: (val.quantity - 1 || quantity - 1) }
                }
                return val
            })
        })
    }

    //Removing products from the total products

    const handleRemove = (id) => {

        setData(data.filter((item) => item.id !== id))
    }

    return (
        <div>
            <div key={index} className="card m-4" style={{ width: "18rem", height: "28rem" }}>

                <div id={ide} className="carousel slide">
                    <div class="carousel-inner">

                        {item.images.map((items, index) => {
                            return (

                                <img src={items} className="img-fluid carousel-item active  img-thumbnail  " alt="images" style={{ height: "14rem" }} />


                            )
                        })}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={ides} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={ides} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span classname="visually-hidden">Next</span>
                    </button>
                </div>


                <div className="m-1">
                    <p className="h5 mt-1">{item.title}</p>
                    <p className="h5 mt-1">Item : {item.id}</p>
                    <p className="h5 mt-1">Price : ₹‎ {item.price}</p>
                    <button onClick={() => { handleSud(item.id, item.quantity || 1) }} className="h5 mt-2 "  >-</button ><span className="h5 mt-2 "> {item.quantity || 1} </span><button onClick={() => { handleAdd(item.id, item.quantity || 1) }} className="h5 mt-2">+</button>

                </div>
                <button onClick={() => { handleRemove(item.id) }} className="h5 mt-2 mx-auto rounded bg-danger  text-white border-white w-50">Remove</button>
            </div>
        </div>
    );
};

export default ToDisplay;