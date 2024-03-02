import React, { useContext } from 'react';
import { myContext } from '../App';
import ToDisplay from './ToDisplay'
const Card = () => {
    const [data, setData] = useContext(myContext);


    return (
        <div className="d-flex flex-wrap justify-content-center">

            {/* mapping and passing the data to card component      */}

            {data.map((item, index) => {
                return (



                    <ToDisplay item={item} index={index} />


                )
            })}
        </div>
    );
};

export default Card;