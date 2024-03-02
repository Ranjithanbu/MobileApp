import React, { useState } from 'react';
import Card from './component/Card.jsx'
import { createContext } from 'react'
export const myContext = createContext('')

const App = () => {

    //using data from local storage 

    const properties =

        [
            {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "images": [

                    "https://th.bing.com/th/id/OIP.az9rm7X_R0bUh28wHI0AvQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
                    "https://th.bing.com/th/id/OIP.b869Gtu8rFXAIxEAAQxBXgHaHa?pid=ImgDet&w=474&h=474&rs=1",
                    "https://th.bing.com/th/id/OIP.HXBpOC1ppGePMPjCXu8YhwHaHa?pid=ImgDet&w=474&h=474&rs=1",
                    "https://i.pinimg.com/736x/84/ee/48/84ee48dbb18b783a991c2a22103b5649.jpg"
                ]
            },
            {
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "discountPercentage": 17.94,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
                "images": [
                    "https://http2.mlstatic.com/iphone-x-64gb-90-dias-de-garantia-tienda-fisica-ccct-D_NQ_NP_797323-MLV30093292727_042019-F.jpg",
                    "https://th.bing.com/th/id/R.68413931e169430299e7e85ad03d04eb?rik=TfTT06Wnd5goAw&riu=http%3a%2f%2fiwady.com%2f13810-thickbox_default%2fapple-iphone-x-256gb-4g-lte-with-facetime-.jpg&ehk=woPW4FNK4DL6foj5DcfttiKm6%2bgPKyxbG8KRLZjx75U%3d&risl=&pid=ImgRaw&r=0",
                    "https://www.dhresource.com/0x0s/f2-albu-g10-M00-95-04-rBVaVlzw1yyAIxQxAADHdOnTR-U748.jpg/100-original-unlocked-apple-iphone-x-iphonex.jpg"
                ]
            },
            {
                "id": 3,
                "title": "Samsung Universe 9",
                "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
                "price": 1249,
                "discountPercentage": 15.46,
                "rating": 4.09,
                "stock": 36,
                "brand": "Samsung",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
                "images": [
                    "https://th.bing.com/th/id/OIP.JMIsy67vsRgqxgGMxgPveQHaHa?w=800&h=800&rs=1&pid=ImgDetMain",
                    "https://th.bing.com/th/id/OIP.zqJ1ybLIyg-Hcub7aVlHNAAAAA?rs=1&pid=ImgDetMain"
                ]
            },
            {
                "id": 4,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 280,
                "discountPercentage": 17.91,
                "rating": 4.3,
                "stock": 123,
                "brand": "OPPO",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
                "images": [
                    "https://th.bing.com/th/id/R.1d82fff9062d3378d37dcf2908bc19a9?rik=u1%2bznd%2fF9L3BgQ&riu=http%3a%2f%2fgadgetsmagazine.com.ph%2fwp-content%2fuploads%2f2019%2f01%2fOppo-F9.png&ehk=9d19Qv4CibuAW0dRSDfeBth9c4XmOAM2T0me8K%2fe%2fjk%3d&risl=&pid=ImgRaw&r=0",
                    "https://mobilefactbd.com/wp-content/uploads/2019/12/Oppo-F9-Pro-500x500.jpg",
                    "https://th.bing.com/th/id/OIP.p_Eues09Sw3Mwn9Rq_4AdwHaHa?w=1100&h=1100&rs=1&pid=ImgDetMain"

                ]
            },
            {
                "id": 5,
                "title": "Huawei P30",
                "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                "price": 499,
                "discountPercentage": 10.58,
                "rating": 4.09,
                "stock": 32,
                "brand": "Huawei",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
                "images": [
                    "https://www.androidcentral.com/sites/androidcentral.com/files/article_images/2019/05/moko-slim-clear-p30-pro-press-01.jpg",
                    "https://th.bing.com/th/id/OIP.Rm-oYYqezvyGDExlKUB9QAHaHa?w=600&h=600&rs=1&pid=ImgDetMain"
                ]
            }
        ]


    const [data, setData] = useState(properties)
    // calculating total price

    const Tprice = data.reduce((acc, data) => acc + data.price * (data.quantity || 1), 0)

    //calculating total quantity

    const Tquantity = data.reduce((acc, data) => acc + (data.quantity || 1), 0)

    return (

        <div className=" "> <div className='navbar bg-dark text-white'><span className=" col-md-4 border border-2 rounded-pill  ms-4 w-25 text-center" ><h2 >Abc Mobiles</h2></span>
            <h5 className="offset-5 col-md-2 text-center me-3  p-1 ">Cart Items
                <span className="ms-2 border rounded-pill"> <span class="bi bi-cart4 p-1 text-primary"> <i className="text-white m-1">{Tquantity}</i></span></span></h5>
            ‎</div>
            <div className="text-center container ">


                <h2 className="mt-4 border-bottom border-2 text-primary">Total Price : ₹‎ {Tprice}</h2>
                <myContext.Provider value={[data, setData]}>
                    <Card />

                </myContext.Provider>
            </div>
        </div>
    );
};

export default App;